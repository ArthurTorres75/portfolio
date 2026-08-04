# Design: Portfolio Visual Effects Suite

## Decisions Resolved With User

Two items in the proposal's `Open Questions for Design` carried product, not purely technical, consequences and were presented as options with trade-offs. Both are now resolved. `sdd-tasks` may proceed on Phase 4 with the placement below. Phase 5 (real device motion) has since been removed from scope entirely — see `proposal.md`'s Descoped section — so D-2 is recorded as decided-but-not-implemented, for a future change to start from rather than re-litigate.

### D-1: Placement of item 4 (cursor-driven rotating 3D object) — RESOLVED: Option C, Services (`#servicios`)

**Decision**: the cursor-driven 3D object mounts inside the Services section, alongside `components/features/Services.tsx`, inside the existing `<Section id="servicios" className="bg-gradient-to-b from-blue-950/20 to-black">` wrapper in `pages/index.tsx`. **Rationale (recapped from the comparison below):** Services has the strongest narrative fit — "what I build" paired with an object the visitor can manipulate is the most honest demonstration of the capability the portfolio is claiming. It beats Contact (A) on meaning despite A's lower risk/diff footprint, and it beats the new-dedicated-section option (D) by not requiring new copy or nav entries, which would have violated the proposal's own "no copy changes" non-goal. The comparison that led to this choice is preserved below for the record.

Page section order today (`pages/index.tsx`): Hero (owns `CyberNebula`) -> `#sobre-mi` (owns `WaterSurface3D`) -> `#experiencia` -> `#certificaciones` -> `#proyectos` -> `#servicios` -> `#testimonios` -> `#contacto` -> Footer. Hero and About are already occupied by WebGL, so neither is a candidate.

| Option | Visual / content fit | Likely dwell time | Performance risk profile | Layout disruption to `components/**` |
|---|---|---|---|---|
| **A. Contact (`#contacto`)** — decorative stage inserted above the `ContactLinks` grid | Good. Section already uses `section-blue-surface--intense`; a reactive object reads as depth at the exact moment of conversion. Weak semantic link to "contact" though. | **Bimodal.** High for visitors who actually reach it (they are converting and linger); zero for the majority who bounce earlier. | **Lowest.** Last section on the page, never in the LCP path, never in the initial viewport. Mount can be `useInView`-gated so it costs nothing until scrolled to. | **Lowest.** `ContactLinks.tsx` root is `<div className="max-w-4xl mx-auto">`; a sibling stage `div` goes above the existing `motion.div` header with no changes to `ContactLink`. Needs one new CSS stage class mirroring `.about-water-stage`. |
| **B. Certifications (`#certificaciones`)** | Weakest. Certification cards are icon+text and visually flat, so the contrast is strong — but "spinning object next to credentials" has no narrative justification. | Medium-high. Mid-page; visitors scan credentials slowly. | Medium. Mounts mid-scroll, competing for main thread with the cert grid's staggered reveal animations. | Medium. `Certifications.tsx` renders a grid; either restructure its children or add an absolutely positioned layer *behind* the grid — the latter makes the object decorative rather than interactive, which undercuts the point of a cursor-reactive element. |
| **C. Services (`#servicios`)** | **Strongest narrative fit.** "What I build" paired with an object the visitor can manipulate is the most honest demonstration of the capability being claimed. Gradient background (`from-blue-950/20 to-black`) is a good contrast bed. | Medium. Sits directly after Projects; visitors who engage with Projects usually continue into Services. | Medium. Same mid-scroll profile as B. | Medium. `Services.tsx` is a card grid with its own `cardVariants`; same structural trade-off as B. |
| **D. New dedicated section between `#proyectos` and `#servicios`** | Best in isolation — the object *is* the content, so it justifies its own bytes instead of being ornamental. | **Highest.** Nothing else competes for attention in that band. | Medium, but adds page height and DOM to every visit, including mobile where the object never renders. | **Highest.** New `<Section>` in `pages/index.tsx`, new title/subtitle keys in `lib/translations.ts` (both `es` and `en`), likely a new nav entry in `components/layout/Header.tsx`. Note this collides with the proposal's "no copy changes" non-goal. |

Ranking that informed the decision: **C ≈ A > D > B**. C wins on meaning, A wins on risk and diff size, D is the most impressive but is the only option that breaks the "no copy changes" non-goal, B is the weakest on every axis except novelty. The user chose **C**.

### D-2: iOS device-motion permission UX (item 5) — RESOLVED (decided-but-descoped): Pattern 1, inline opt-in control

**Decision**: Pattern 1 — an inline opt-in control anchored to the affected surface (a small "Enable motion" button rendered inside the motion stage, coarse-pointer devices only) — was the chosen pattern, on the reasoning below. **However, item 5 (real device motion / the `device-orientation-input` capability) was subsequently removed from scope entirely** — see `proposal.md`'s Descoped section and Risk R-1 below for why. This decision therefore has **no implementation** in this change. It is recorded here so a future change proposing real device motion against a genuine mobile WebGL surface can adopt this pattern directly instead of re-comparing the three options.

Confirmed against MDN: `DeviceOrientationEvent.requestPermission()` is a static method returning a `Promise<"granted" | "denied">` and **requires transient activation** — it must be called from inside a UI event handler. Feature-detect with `typeof DeviceOrientationEvent.requestPermission !== "function"` (non-iOS browsers do not expose it and need no prompt).

| Pattern | Friction added | Discoverability | What "denied" looks like |
|---|---|---|---|
| **1. Inline opt-in control anchored to the affected surface** — a small button rendered inside the motion stage, coarse-pointer devices only ("Enable motion") | Lowest. Entirely optional, in context, next to the thing it affects. | Medium — requires scrolling to that surface. | Control disappears, the existing non-interactive path continues. Zero visible breakage, no persisted state needed. Costs one translation key pair. |
| **2. One-time page-level banner/toast on first mobile visit**, dismissal persisted in `localStorage` | **Highest.** Interrupts before any value has been demonstrated; a permission ask with no context is exactly the prompt users reflexively deny. | Highest. | Needs persisted dismissal state to avoid re-nagging — introduces a storage concern the codebase does not currently have. Must be a fixed/overlay element or it risks a CLS hit on the mobile budget. |
| **3. Piggyback an existing interaction** — attach `requestPermission()` to the first tap on an existing mobile control (hero "View projects" CTA, or the mobile nav toggle in `Header.tsx`) | Zero new UI. | Incidental — the visitor never intended to grant sensor access. | Silent fallback. But an iOS motion prompt firing after tapping "View projects" reads as unrelated and mildly creepy; it also hijacks a conversion-critical tap. |

Ranking that informed the decision: **1 > 3 > 2**. Pattern 1 is the only one where the prompt is causally connected to what the visitor is looking at.

**Finding that ultimately drove the descope** — see Risk R-1 below: item 5 was not "replace simulated motion with real motion." The simulated fallback was unreachable code today, which is why the user chose to cut the item entirely rather than implement Pattern 1's UX around it.

## Technical Approach

Three layers, strictly one-directional:

```
lib/motion/*        pure functions — numbers in, numbers out, zero DOM, zero React
      ^
hooks/*             wiring only — listeners, MotionValues, cleanup, capability gates
      ^
components/*        presentational — consume a hook, render existing markup unchanged
```

Every per-frame value travels as a Framer Motion `MotionValue` or a `useRef`, never as React state. That is the single mechanism protecting the INP < 200ms budget: pointer and sensor updates must never trigger a React render.

Framer Motion is the only runtime. Confirmed available in v12 and used from the `"framer-motion"` specifier (this repo's existing convention — upstream docs publish the same API under `motion/react`; do not copy those import paths): `useMotionValue`, `useSpring`, `useTransform`, `useScroll({ target, offset })`, `useVelocity`, `useReducedMotion`.

## Architecture Decisions

| # | Decision | Options | Selected | Rationale |
|---|---|---|---|---|
| ADR-01 | Reduced-motion source of truth | A) Framer Motion's `useReducedMotion` B) Own `useSyncExternalStore` hook | **B** | `useIsDesktop.ts` already establishes the `useSyncExternalStore`-over-`matchMedia` pattern; a second, differently-shaped mechanism fragments the contract. B is also consumable by the WebGL gates, and is testable through the same query-aware mock. |
| ADR-02 | Gate composition | A) Each surface composes `useIsDesktop() && !prefersReducedMotion` B) One `useMotionCapability()` | **B** | Four surfaces repeating the same boolean is stable, obvious duplication. `useIsDesktop` stays untouched (open/closed). |
| ADR-03 | Item 4 subject | A) Procedural geometry B) `useLoader(GLTFLoader)` C) `@react-three/drei` + `useGLTF` | **A** | Proposal default is "no new dependency." C additionally fetches Draco decoder binaries from a Google CDN at runtime — a third-party request that costs Best-Practices/CSP for zero portfolio benefit. B still requires an asset to author, host, and maintain. Procedural geometry costs zero bytes and matches the existing nebula aesthetic. |
| ADR-04 | Parallax target | A) Content + decorative B) Decorative layers only | **B** | Content parallax is the only variant that can move in-flow elements and therefore the only one that can produce CLS or a readability regression. Decorative layers are already `position: absolute` inside `overflow-hidden` parents (`Hero`'s two blurred blobs), so a transform on them is provably layout-inert. |
| ADR-05 | Lighthouse CI target | A) Local production build in the job B) Deployed Vercel preview URL | **A** | `next.config.ts` is empty and the Pages workflow only publishes a redirect stub — there is no authoritative preview contract to bind to. A preview URL also races the Vercel deployment and is unavailable on fork PRs. `startServerCommand` is deterministic and self-contained. |
| ADR-06 | Lighthouse report storage | A) `temporary-public-storage` B) `filesystem` + `actions/upload-artifact` | **B** | No external service, no `LHCI_GITHUB_APP_TOKEN` secret, no public upload of every PR's report. The gate stays self-contained and revertible. |
| ADR-07 | Effect consumption in components | A) Edit each `<a>`/card in place B) Shared wrapper primitives | **B** | `Hero`, `ContactLinks`, and `Footer` all need the same magnetic behavior. A shared `MagneticLink` that spreads `{...props}` keeps `className`, `href`, `download`, and `rel` byte-identical while centralizing the behavior. Atomic-design boundary: behavior lives in `components/common`, composition stays in features. |
| ADR-08 | `matchMedia` mock shape | A) Parse CSS media query syntax B) Exact-string registry defaulting to `false` | **B** | A is a mini-parser nobody asked for. B is ~15 lines and, critically, **unknown queries keep returning `matches: false`**, so every existing test is bit-for-bit unaffected. |

### ADR-09: Media query strings become shared constants

Today `"(hover: none), (pointer: coarse)"` is duplicated across `useIsDesktop.ts`, `CyberNebula.tsx`, and `pages/index.tsx`'s consumer chain — and `WaterSurface3D.tsx` uses a *different, narrower* string, `"(hover: none)"`. That inconsistency is a latent bug. Move both to `lib/motion/mediaQueries.ts` as a const object (per the TypeScript skill's const-types rule), imported by hooks, components, and tests alike. Rejected alternative: leave the strings inline — guarantees the test registry and the production hooks drift apart.

### ADR-10: Server snapshot for reduced motion is `true` (degraded)

`useIsDesktop`'s `getServerSnapshot` returns `false`, i.e. the server renders the *degraded* path and the client upgrades after hydration. `usePrefersReducedMotion` follows the same posture: server snapshot returns `true` (assume the visitor wants no motion). Every consumer of this hook is either a pointer-driven effect or a `ssr: false` dynamic import, so nothing visible flips on hydration for the reduced-motion minority, and the accessibility-safe default wins the tie. Rejected alternative: `false` on the server — optimizes for the majority at the cost of a motion flash for exactly the users who asked not to see one.

### ADR-11: Tailwind 4 individual transform properties do not collide with Framer Motion

Verified against current Tailwind docs: in v4, `translate-*`, `scale-*`, and `rotate-*` compile to the **individual** CSS properties `translate`, `scale`, and `rotate`, not to `transform` (this is why v4's upgrade guide replaces `transform-none` with `scale-none` and `transition-[transform]` with `transition-[scale]`). Framer Motion writes to `transform`. The CSS engine applies `translate`, then `rotate`, then `scale`, then `transform` — they **compose**. This is what makes the "purely additive" constraint actually achievable: `Hero`'s `hover:-translate-y-1` and `ProjectCard`'s `group-hover:scale-105` survive untouched while a magnetic `x/y` or a tilt `rotateX/rotateY` layers on top. Without this property, item 1 and item 2 would have required rewriting the existing hover states.

## Data Flow

```
pointermove (passive, on element)
   -> normalizePointerInBounds(event, rect)        lib/motion/geometry.ts   [pure]
   -> calculateMagneticOffset(pointer, config)     lib/motion/magnetism.ts  [pure]
   -> motionValue.set(x) / .set(y)                 hooks/useMagneticPointer [wiring]
   -> useSpring                                    framer-motion
   -> style={{ x, y }} on motion.a                 compositor — no React render, no layout

scroll
   -> useScroll({ target, offset })                framer-motion
   -> mapProgressToRange(progress, range)          lib/motion/parallax.ts   [pure]
   -> useTransform -> style={{ y }}                decorative absolute layer only

[DESCOPED — device motion is not part of this change's delivery; see proposal.md's Descoped section]
deviceorientation (granted)
   -> normalizeDeviceOrientation(beta, gamma, screenAngle)  lib/motion/orientation.ts [pure]
   -> orientationRef.current = { x, y }            hooks/useDeviceOrientation [wiring]
   -> read inside useFrame                         CyberNebula / WaterSurface3D

capability gate (evaluated before any of the above)
   matchMedia(REDUCED_MOTION) --\
   matchMedia(COARSE_POINTER)  --> useMotionCapability() -> static render or effect render
```

**Descoped, kept for record**: the device-orientation hook was designed to deliberately write into a **ref**, not state — `deviceorientation` fires at up to 60Hz and a `setState` per event would be an instant INP failure. This also would have matched `CyberNebula`'s existing `pointerTargetRef: React.RefObject<{x:number;y:number}>` prop contract exactly, so real orientation data would have slotted into `ParticleField` with **zero changes to the render path**. Not implemented in this change — see Risk R-1.

## File Changes

| File | Action | Phase | Description |
|---|---|---|---|
| `lib/motion/mediaQueries.ts` | Create | 0 | `MEDIA_QUERIES` const object: `reducedMotion`, `coarsePointer`. Single source of truth for query strings. |
| `hooks/usePrefersReducedMotion.ts` | Create | 0 | `useSyncExternalStore` over `matchMedia(MEDIA_QUERIES.reducedMotion)`; server snapshot `true`. |
| `hooks/useMotionCapability.ts` | Create | 0 | Composes `useIsDesktop` + `usePrefersReducedMotion` -> `{ isDesktop, prefersReducedMotion, isPointerMotionEnabled }`. |
| `hooks/useIsDesktop.ts` | Modify | 0 | Import the query constant instead of the inline literal. No behavior change. |
| `tests/matchMedia.ts` | Create | 0 | Query-aware mock installer + `setMediaQueryState` / `resetMediaQueryState` helpers. |
| `tests/setup.ts` | Modify | 0 | Delegate to `tests/matchMedia.ts`; call `resetMediaQueryState()` inside the existing `afterEach`. |
| `.lighthouserc.json` | Create | 0 | `collect.startServerCommand: "pnpm start"`, `numberOfRuns: 3`, urls `/` and `/projects`; assertions below. |
| `.github/workflows/lighthouse.yml` | Create | 0 | Separate workflow (not a job in `ci.yml`) so it runs in parallel and is independently revertible. |
| `package.json` | Modify | 0 | `@lhci/cli` devDependency. No runtime dependency added anywhere in this change. |
| `components/common/CyberNebula.tsx` | Modify | 0 | Consume `useMotionCapability`, return `null` under reduced motion (currently missing). |
| `components/common/WaterSurface3D.tsx` | Modify | 0 | Same treatment; also fixes the `"(hover: none)"` vs `"(hover: none), (pointer: coarse)"` inconsistency. |
| `styles/globals.css` | Modify | 0 | Extend the `@media (prefers-reduced-motion: reduce)` block from `.about-water-3d` alone into a shared decorative-motion rule; JS gate becomes primary, CSS becomes belt-and-braces. |
| `lib/motion/geometry.ts` | Create | 1 | `clamp`, `normalizePointerInBounds`, `distanceFromCenter`. Shared by magnetism and tilt. |
| `lib/motion/magnetism.ts` | Create | 1 | `calculateMagneticOffset`. |
| `hooks/useMagneticPointer.ts` | Create | 1 | Returns `{ ref, x, y }` (spring-wrapped MotionValues). Passive listeners; full cleanup. |
| `components/common/MagneticLink.tsx` | Create | 1 | `motion.a` with prop passthrough. Renders a plain `<a>` when motion is disabled. |
| `components/common/Hero.tsx` | Modify | 1, 3 | Three CTA anchors become `MagneticLink`; the two decorative blobs get parallax. No `className` changes. |
| `components/features/ContactLinks.tsx` | Modify | 1 | `ContactLink`'s root `<a>` becomes `MagneticLink`. Inner markup untouched. |
| `components/layout/Footer.tsx` | Modify | 1 | Footer link set becomes `MagneticLink`. |
| `lib/motion/tilt.ts` | Create | 2 | `calculateTiltAngles`. |
| `hooks/usePointerTilt.ts` | Create | 2 | Returns `{ ref, rotateX, rotateY }`. |
| `components/common/ProjectCard.tsx` | Modify | 2 | Existing root `motion.div` gains `style={{ rotateX, rotateY, transformPerspective }}`. `group`, `card-hover`, `glass-effect`, and `group-hover:scale-105` all stay. |
| `lib/motion/parallax.ts` | Create | 3 | `mapProgressToRange`. |
| `hooks/useParallaxLayer.ts` | Create | 3 | Wraps `useScroll({ target, offset })` + `useTransform`. |
| `hooks/useScrollAnimation.ts` | Modify | 3 | Re-export the parallax hook alongside the existing `useInView` reveals. Existing exports untouched. |
| `components/common/CursorObject3D.tsx` | Create | 4 | Procedural geometry, `useFrame`, resource disposal on unmount, under 300 lines. Loaded via `next/dynamic` + `ssr: false`, mounted only when `isPointerMotionEnabled`. **Placement resolved (D-1): mounted in `components/features/Services.tsx`, inside the `#servicios` `<Section>` in `pages/index.tsx`.** |
| ~~`lib/motion/orientation.ts`~~ | **Not created — descoped** | — | Would have held `normalizeDeviceOrientation`. Item 5 removed from scope; see Risk R-1 and `proposal.md`'s Descoped section. |
| ~~`hooks/useDeviceOrientation.ts`~~ | **Not created — descoped** | — | Would have held the permission status machine + ref-based sensor output (UX per D-2). Item 5 removed from scope. |

## Interfaces / Contracts

```ts
// lib/motion/geometry.ts
export interface PointerPosition { x: number; y: number; }
export interface ElementBounds { left: number; top: number; width: number; height: number; }

// -1..1 on both axes, origin at element center. Guards width/height === 0 (jsdom, pre-layout).
export function normalizePointerInBounds(pointer: PointerPosition, bounds: ElementBounds): PointerPosition;

// lib/motion/magnetism.ts
export interface MagneticConfig { radius: number; maxOffset: number; }
export interface Offset2D { x: number; y: number; }
// Returns {0,0} outside radius; magnitude clamped to maxOffset; falls off with distance.
export function calculateMagneticOffset(
  pointer: PointerPosition, bounds: ElementBounds, config: MagneticConfig
): Offset2D;

// lib/motion/tilt.ts
export interface TiltConfig { maxDegrees: number; }
export interface TiltAngles { rotateX: number; rotateY: number; }
export function calculateTiltAngles(
  pointer: PointerPosition, bounds: ElementBounds, config: TiltConfig
): TiltAngles;

// lib/motion/parallax.ts
export interface ParallaxRange { from: number; to: number; }
// progress is clamped to 0..1 before mapping.
export function mapProgressToRange(progress: number, range: ParallaxRange): number;

// --- DESCOPED, not implemented in this change (item 5 removed from scope — see Risk R-1) ---
// lib/motion/orientation.ts
export interface DeviceOrientationReading { beta: number | null; gamma: number | null; }
// Null-safe; clamps beta to +/-90 and gamma to +/-90, then normalizes to -1..1.
export function normalizeDeviceOrientation(
  reading: DeviceOrientationReading, screenAngleDegrees: number
): PointerPosition;

// hooks/useDeviceOrientation.ts — const-object union per the TypeScript skill
export const ORIENTATION_STATUS = {
  UNSUPPORTED: "unsupported",
  PROMPT: "prompt",
  GRANTED: "granted",
  DENIED: "denied",
} as const;
export type OrientationStatus = (typeof ORIENTATION_STATUS)[keyof typeof ORIENTATION_STATUS];
// --- end descoped block ---
```

Every pure function takes plain numbers and an `ElementBounds` structural type — never a DOM node, never a `DOMRect`. That is what makes them fully unit-testable despite jsdom having no layout engine.

## `tests/setup.ts` Compatibility Contract

The current mock returns `matches: false` for **every** query. The replacement keeps that as the default for unregistered queries, so no existing test changes behavior:

```ts
// tests/matchMedia.ts (shape)
const queryState = new Map<string, boolean>();
export function setMediaQueryState(overrides: Record<string, boolean>): void;
export function resetMediaQueryState(): void;   // called in the existing afterEach
// matches: queryState.get(query) ?? false      <- back-compat guarantee
```

Two notes for the implementer:
- `vi.clearAllMocks()` (already in `afterEach`) clears call records but **not** implementations, so the installed mock survives across tests. The `Map` must be cleared explicitly — hence `resetMediaQueryState()`.
- `addEventListener` must record listeners so `setMediaQueryState` can dispatch a `change` event. This is required to test `useSyncExternalStore`'s `subscribe` path. Existing tests never dispatch, so recording listeners is inert for them.

## Testing Strategy

jsdom returns zeros from `getBoundingClientRect()` and has no scroll or WebGL. The boundary is therefore explicit and file-by-file:

| File | Test file | What is asserted | What is NOT asserted |
|---|---|---|---|
| `lib/motion/geometry.ts` | `tests/lib/motion/geometry.test.ts` | Full numeric matrix: center, corners, outside bounds, zero-size bounds, negative coords | — (100% coverable) |
| `lib/motion/magnetism.ts` | `tests/lib/motion/magnetism.test.ts` | `{0,0}` outside radius; monotonic falloff; magnitude never exceeds `maxOffset`; symmetry across axes | — |
| `lib/motion/tilt.ts` | `tests/lib/motion/tilt.test.ts` | Sign convention (pointer above -> positive `rotateX`); clamp at `maxDegrees`; zero at center | — |
| `lib/motion/parallax.ts` | `tests/lib/motion/parallax.test.ts` | Progress clamped to 0..1; endpoints exact; inverted ranges | — |
| ~~`lib/motion/orientation.ts`~~ | — | **Descoped — not implemented.** Item 5 removed from scope; see Risk R-1. | — |
| `hooks/usePrefersReducedMotion.ts` | `hooks/usePrefersReducedMotion.test.tsx` | Reads the correct query constant; reacts to a dispatched `change`; unsubscribes on unmount | Actual OS preference |
| `hooks/useMotionCapability.ts` | `hooks/useMotionCapability.test.tsx` | Truth table across the two queries via `setMediaQueryState` | — |
| `hooks/useMagneticPointer.ts` | `hooks/useMagneticPointer.test.tsx` | Listener registration with `{ passive: true }`; removal on unmount; no-op wiring when motion is disabled | Resulting pixel offsets (no layout) |
| `hooks/usePointerTilt.ts` | `hooks/usePointerTilt.test.tsx` | Same wiring/cleanup contract | Angles |
| `hooks/useParallaxLayer.ts` | `hooks/useParallaxLayer.test.tsx` | Correct `offset` passed to `useScroll`; identity transform when reduced motion | Scroll-driven values |
| ~~`hooks/useDeviceOrientation.ts`~~ | — | **Descoped — not implemented.** Item 5 removed from scope; see Risk R-1. | — |
| `components/common/MagneticLink.tsx` | `components/common/MagneticLink.test.tsx` | Renders `<a>`; `className`, `href`, `download`, `rel`, `target` pass through byte-identical; children preserved | Transform values |
| `components/common/Hero.tsx` | (extend existing coverage) | Three CTAs still render with their exact original `className` strings | Magnetic motion |
| `components/common/ProjectCard.tsx` | `components/common/ProjectCard.test.tsx` (existing) | `group card-hover glass-effect …` classes unchanged; existing assertions still pass | Tilt |
| `components/common/CursorObject3D.tsx` | — | Not unit tested (WebGL unavailable in jsdom). Correctness delegated to Lighthouse CI + manual review. | — |

Strict TDD is active: every `lib/motion/*` function and every hook is written test-first. Existing coverage thresholds (70/70/70/60) must hold; the pure-function layer will comfortably raise the line/branch numbers, offsetting the untestable WebGL component.

## Lighthouse CI Gate

- **Trigger**: `pull_request` (all branches) and `push` to `development` and `main` for baseline. Same `concurrency` cancel-in-progress group style as `ci.yml`.
- **Collect**: `startServerCommand: "pnpm start"` after `pnpm build`, `url: ["http://localhost:3000/", "http://localhost:3000/projects"]`, `numberOfRuns: 3` (median) to absorb GitHub-runner variance. Default mobile emulation — the budget is a mobile budget.
- **Assert (blocking, `error`)**: `categories:performance` / `categories:accessibility` / `categories:seo` / `categories:best-practices` at `minScore: 0.9`; `largest-contentful-paint` `maxNumericValue: 2500`; `cumulative-layout-shift` `maxNumericValue: 0.1`.
- **INP caveat**: Lighthouse is a lab tool and **cannot measure INP** — INP requires real user interaction. `total-blocking-time` is the lab proxy and is asserted at `maxNumericValue: 200` in its place. The INP < 200ms target itself remains a field metric, verified manually via DevTools during review. Do not let anyone claim CI proves INP.
- **Upload**: `target: "filesystem"` + `actions/upload-artifact`. No token, no external service.
- **Merge blocking**: `lhci autorun` exits non-zero on assertion failure. The `lighthouse` job must be added to branch protection's required checks on `main` — that is a repository-settings action, not a code change, and must be done by the repo owner.

## Migration / Rollout

No data migration. Rollout follows the proposal's phase order; each phase is one revertible unit because the new `lib/motion/*` and `hooks/*` files are purely additive and every component change is wrapper-level. Reverting Phase N restores the previous static behavior without touching styling, layout, or content. The Phase 0 Lighthouse gate is independent of all effects and stays in place after any effect rollback.

Phase 4 is gated on Phases 0-3 holding the Lighthouse budget; its placement (D-1) is resolved to the Services section. Phase 5 no longer exists — item 5 was removed from scope entirely (see Risk R-1 and `proposal.md`'s Descoped section); D-2's decision is preserved there for a possible future change. Phases in this change now run 0-4.

## Risks Discovered During Design

**R-1 (High, resolved by descoping Phase 5): the "simulated touch fallback" item 5 proposed to replace is unreachable code.**
- `Hero.tsx` renders `{isDesktop && <CyberNebula …/>}` and `pages/index.tsx` renders `{isDesktop && <WaterSurface3D …/>}` — neither canvas mounts on a coarse-pointer device.
- `CyberNebula` additionally returns `null` when `isTouchLikeDevice`, and passes `autoMotion={false}` to all three `ParticleField` instances, so the `Math.sin`/`Math.cos` branch inside `useFrame` never executes.
- `WaterPlane`'s `autoActive` branch requires its own `isTouchLikeDevice` state to be `true`, which cannot happen because `WaterSurface3D` returns `null` before mounting it.

Consequence: item 5 was not a swap. It was **"enable a mobile WebGL path that does not currently exist,"** which directly tensioned the proposal's own acceptance criterion that "mobile/coarse-pointer devices MUST receive a simplified or static path" and put the mobile Performance >= 90 budget at real risk. This finding was escalated back to the user as a scope question, per option (b); **the user chose to remove item 5 from scope entirely** rather than (a) scope it to a deliberately reduced mobile scene with its own Lighthouse mobile check. See `proposal.md`'s Descoped section. Phase 5 no longer exists in this change; D-2's permission-UX decision is preserved for a future change.

**R-2 (Medium): `WaterSurface3D` computes `isMobile` during render from `window.matchMedia` without `useSyncExternalStore`.** It is behind `ssr: false` so it does not crash, but it is not reactive and is inconsistent with `useIsDesktop`. Phase 0 should normalize it while adding the reduced-motion gate.

**R-3 (Medium): Lighthouse score variance on shared GitHub runners.** `numberOfRuns: 3` with median aggregation is the mitigation. If the Performance assertion proves flaky across three runs in practice, raise `numberOfRuns` before relaxing the threshold — the >= 90 target is non-negotiable per project standards.

**R-4 (Low): `MagneticLink` must not become a `motion.a` when motion is disabled.** Rendering a `motion.a` with no active values still ships Framer Motion's per-element machinery. Branch on `isPointerMotionEnabled` and return a plain `<a>` in the degraded path.

**R-5 (Low): `Section` has no per-section decorative layer today.** Parallax targets in sections other than Hero would require adding one. Keep Phase 3 scoped to Hero's two existing blurred blobs unless a decorative layer is explicitly justified.

## Scope Guard

This design excludes: post-processing, physics, scene-graph refactors, custom cursors, scroll hijacking, the 3D character with gaze tracking, any new runtime dependency, and any change to routing, i18n, data sourcing, or the image contract from the archived image-migration change.
