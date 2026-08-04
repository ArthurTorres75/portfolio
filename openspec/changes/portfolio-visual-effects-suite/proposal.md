# Proposal: Portfolio Visual Effects Suite

## Problem Statement
The portfolio already ships two WebGL surfaces (`CyberNebula`, `WaterSurface3D`) and a Framer Motion reveal system, but interaction depth stops there. Every CTA, project card, and section background is static until it enters the viewport, then fades in once and never responds again. Recruiters and prospective clients evaluating a front-end specialist read that as a competent-but-conventional site, which undercuts the core differentiation claim the portfolio exists to make.

Six pointer/motion-driven effects were identified as desirable; the codebase currently implements none of them. The gap is not "add more animation" — it is that the site never reacts to the visitor's own input outside of two isolated background canvases.

A second, smaller problem is exposed by the same audit: reduced-motion handling is ad hoc. `styles/globals.css` gates exactly one element (`.about-water-3d`) behind `@media (prefers-reduced-motion: reduce)`; the hero nebula ignores the preference entirely and is gated only by pointer type (`components/common/CyberNebula.tsx`). Adding five more motion surfaces on top of that inconsistency would multiply an existing accessibility defect.

## Goals
- Add pointer- and scroll-reactive depth to the highest-attention surfaces (hero CTAs, project cards, section backgrounds) so the site demonstrates the craft it claims.
- Establish one reusable, testable interaction-primitive layer instead of five bespoke effect implementations.
- Make `prefers-reduced-motion` a system-wide contract rather than a single CSS rule, and repair the existing hero gap while doing it.
- Hold the non-negotiable performance budget (Lighthouse Performance/A11y/SEO/Best Practices >= 90 mobile, LCP < 2.5s, INP < 200ms, CLS < 0.1, WCAG 2.1 AA) with automated per-PR enforcement rather than manual spot checks.
- Keep every effect purely additive: no existing className, color token, hover state, or layout may change.

## Non-Goals
- No visual redesign, no new color system, no copy changes, no content restructuring.
- No new animation runtime. GSAP and anime.js are explicitly rejected — `framer-motion` 12 already covers spring, scroll-linked, and pointer-driven needs, and a second runtime is dead weight against the performance budget.
- No conversion of the hero or About WebGL scenes into a shared 3D framework.
- No changes to routing, i18n, data sourcing, or the image contract established by the archived image-migration change.

## Scope

### In Scope
Four effects, in confirmed priority order — low-risk/high-impact first, no new 3D assets until items 1-3 have landed and been measured.

1. **Magnetic CTA buttons.** Hero CTAs (`components/common/Hero.tsx`) plus contact and footer links gain a bounded pull toward the cursor within a radius, springing back on pointer-leave. Strictly additive: only an x/y transform is introduced; existing `className`, gradients, `hover:-translate-y-1`, and shadow states remain untouched. Confirmed with the user: scope is not limited to the hero — it extends to `components/features/ContactLinks.tsx` and the footer's link set.
2. **3D tilt/depth project cards.** `components/common/ProjectCard.tsx` gains pointer-relative `rotateX`/`rotateY` with perspective. The existing `group-hover:scale-105` and `card-hover` styling stays.
3. **Parallax scroll.** Scroll-position-linked transforms on decorative/background layers. Today the codebase has viewport-trigger reveals only (`useInView` in `hooks/useScrollAnimation.ts`) and no scroll-progress binding at all.
4. **Cursor-driven rotating 3D object.** A WebGL element whose orientation follows the pointer, desktop-only, dynamically imported. **Placement: Services section (`#servicios`)** — mounted alongside `components/features/Services.tsx`, inside the existing `<Section id="servicios" className="bg-gradient-to-b from-blue-950/20 to-black">` wrapper in `pages/index.tsx`. Resolved with the user from four placement options `design.md` presented (Contact, Certifications, Services, a new dedicated section): Services wins on narrative fit — "what I build" paired with an object the visitor can manipulate is the most honest demonstration of the capability being claimed — while avoiding the "no copy changes" non-goal violation a new dedicated section would introduce.

Supporting work that belongs to this change:
- A shared reduced-motion primitive, and retrofitting the existing hero nebula behind it.
- Lighthouse CI as a blocking PR gate — verified absent today (`.github/workflows/` contains only `ci.yml` and `pages-redirect.yml`, and `ci.yml` runs lint/typecheck/coverage/audit/build with no performance step).
- Making the shared `matchMedia` mock in `tests/setup.ts` query-aware, since it currently returns `matches: false` for every query and cannot distinguish reduced-motion from coarse-pointer.

### Out of Scope
- **3D character with gaze tracking — excluded entirely.** Rig, model sourcing, per-frame inverse kinematics, and asset maintenance are disproportionate to the return on a personal portfolio. This is a decided non-goal, not a deferral.
- Post-processing effects (`@react-three/postprocessing`, bloom/vignette).
- Physics (`@react-three/rapier`), scripted camera paths, or scene-graph refactors.
- Custom cursor replacement, page-transition choreography, or scroll hijacking.

### Descoped
- **Item 5 — real device motion on mobile (formerly Phase 5 / the `device-orientation-input` capability) — removed entirely, not deferred.** Design-phase investigation (`design.md`, Risk R-1) found the "simulated touch fallback" this item was meant to replace is unreachable dead code: `CyberNebula.tsx` and `WaterSurface3D.tsx` both return `null` on touch/coarse-pointer devices (gated by `isDesktop`), so there is no live mobile WebGL path for real orientation input to enhance. Building it would mean authoring new mobile WebGL surfaces from scratch — which directly contradicts this proposal's own "mobile gets a static/simplified path" principle (see Acceptance Direction) and puts the non-negotiable mobile Lighthouse Performance >= 90 budget at real risk. The user chose to drop the item rather than build new scope or carry it as a stretch goal. This is a scope decision, not a technical failure — the item was cut because its premise didn't hold, not because it was too hard.
- The iOS device-motion permission UX decision (inline opt-in control anchored to the affected surface, coarse-pointer only — see `design.md` D-2) was made before the item was cut, and is preserved there as decided-but-descoped so a future change proposing real device motion can start from it instead of re-litigating the UX pattern.
- The domain spec `specs/device-orientation-input/spec.md` is kept (marked descoped) rather than deleted, in case a future change revisits real device motion against a genuine mobile WebGL surface.

## Capabilities

### New Capabilities
- `motion-preferences`: single source of truth for reduced-motion and pointer-capability gating, consumed by every motion surface.
- `pointer-interaction-primitives`: reusable magnetic-pull and tilt behaviors exposed as hooks, independent of the components that consume them.
- `scroll-linked-motion`: scroll-progress-driven transforms, distinct from the existing viewport-trigger reveals.
- `performance-budget-gate`: automated per-PR Lighthouse enforcement.

Note: `device-orientation-input` is **not** a delivered capability of this change — see Descoped, above. Its domain spec is retained out-of-scope for future reference.

### Modified Capabilities
- Existing reveal behavior in `hooks/useScrollAnimation.ts` is extended, not replaced.

## Approach
- **Behavior lives in hooks, not components.** Each effect is a hook with a narrow contract; `Hero`, `ProjectCard`, and section components consume them and stay presentational. This keeps the effects independently testable and prevents five copies of pointer math.
- **Extract the math as pure functions.** jsdom has no layout engine, so `getBoundingClientRect()` returns zeros and pointer/scroll geometry cannot be asserted through rendering alone. Pointer-to-offset, tilt-angle, and parallax-range calculations must be pure, directly unit-testable functions, with the hook responsible only for wiring listeners and motion values. Strict TDD is active on this project, so this is a structural requirement, not a preference.
- **Gate before you render.** Every new motion surface resolves reduced-motion and pointer capability first and degrades to a static render. The existing `hooks/useIsDesktop.ts` (`useSyncExternalStore` over `matchMedia`) is the established pattern and the template for the reduced-motion primitive.
- **Reuse `framer-motion`, do not add to it.** `useMotionValue`/`useSpring` cover items 1-2, `useScroll`/`useTransform` cover item 3, and `useReducedMotion` is available for motion-driven surfaces. Import specifier note for later phases: this repo depends on the `framer-motion` package (v12), and existing code imports from `"framer-motion"`. Current upstream documentation is published under the `motion` package and shows `motion/react` imports — the API surface is the same, but the import path in the docs must not be copied verbatim.
- **No new dependency for item 4 unless a real model is proven necessary.** A procedurally generated geometry driven by `useFrame` needs zero new packages and zero asset payload. `@react-three/drei` is only justified if the design phase concludes a glTF asset is required; note that `useGLTF` defaults to fetching Draco decoder binaries from a Google CDN, which is a third-party runtime fetch with CSP and Best-Practices implications. `useLoader(GLTFLoader, url)` via the already-installed `@react-three/fiber` + `three` is the intermediate option that loads glTF without adding drei. Design phase decides; the proposal's default is "no new dependency."
- **Follow the existing WebGL delivery pattern.** `next/dynamic` with `ssr: false`, desktop gating at the call site, disposal on unmount — exactly as `Hero.tsx` already loads `CyberNebula`.
- **Land the performance gate early.** Lighthouse CI should be in place before the first effect merges, so every subsequent PR has a real baseline to regress against instead of a retroactive audit.

## Affected Areas
| Area | Impact | Description |
|------|--------|-------------|
| `hooks/` (new) | Added | Reduced-motion primitive, magnetic-pull hook, tilt hook, parallax hook. |
| `lib/` (new) | Added | Pure geometry/easing functions backing the hooks, unit-tested in isolation. |
| `components/common/Hero.tsx` | Modified | CTA anchors wrapped for magnetic transform; no style or markup semantics changed. |
| `components/common/ProjectCard.tsx` | Modified | Tilt/perspective added around existing card container. |
| `components/features/Services.tsx` | Modified | Hosts the item-4 cursor-driven 3D object stage, mounted inside the existing `#servicios` `<Section>` in `pages/index.tsx`. |
| `components/common/CyberNebula.tsx` | Modified | Reduced-motion gate added (currently missing). |
| `components/common/WaterSurface3D.tsx` | Modified | Same reduced-motion treatment. |
| `hooks/useScrollAnimation.ts` | Modified | Extended with scroll-progress binding alongside existing `useInView` reveals. |
| `styles/globals.css` | Modified | Consolidate the one-off `.about-water-3d` reduced-motion rule into the shared contract. |
| `tests/setup.ts` | Modified | `matchMedia` mock made query-aware so reduced-motion and pointer-coarse can be asserted independently. |
| `.github/workflows/` | Added | Lighthouse CI workflow with blocking thresholds. |
| `package.json` | Modified | Lighthouse CI devDependency; a 3D loader dependency only if the design phase justifies it. |

## Phased Delivery
Phasing mirrors the confirmed priority order. Each phase is independently shippable and independently revertible.

- **Phase 0 — Foundations.** Reduced-motion primitive, query-aware test mock, Lighthouse CI gate, hero nebula reduced-motion repair. Establishes the baseline every later phase is measured against.
- **Phase 1 — Magnetic CTAs.** Lowest risk, highest visible return, no WebGL.
- **Phase 2 — Tilt/depth cards.** Same primitive family as Phase 1; compositor-only transforms.
- **Phase 3 — Parallax scroll.** First scroll-linked work; carries the highest CLS/INP sensitivity of items 1-3.
- **Phase 4 — Cursor-driven 3D object.** First phase that may touch dependencies or assets; gated on Phases 0-3 holding budget. Placement resolved: Services section (`#servicios`).

Delivery strategy is `ask-on-risk`. Phases 0-3 alone plausibly exceed a 400-line diff once colocated tests are counted, so chained PRs are a realistic recommendation — but the split decision belongs to the tasks phase, not here.

## Risks
| Risk | Likelihood | Mitigation |
|------|------------|------------|
| Pointer/scroll handlers regress INP below 200ms | High | Drive transforms through motion values (compositor) rather than React state; passive listeners; no layout reads inside the frame loop. Lighthouse CI as the objective arbiter. |
| Parallax introduces CLS | Medium | Transform-only motion on absolutely positioned decorative layers; never animate properties that affect layout. |
| Item 4's WebGL stage pushes mobile Performance below 90 | Medium | Desktop-only gating for WebGL items, reduced-motion short-circuit, `next/dynamic` + `ssr: false` so effect code never enters the initial bundle. |
| `@react-three/drei` + glTF asset blows the bundle/LCP budget | Medium | Default to procedural geometry with zero new dependencies; require design-phase justification before adding drei or any model asset. |
| jsdom cannot exercise pointer geometry, scroll position, or WebGL | High | Pure-function extraction for all math; hooks tested for wiring/cleanup only; visual/perf correctness delegated to Lighthouse CI. |
| Shared `matchMedia` mock hides reduced-motion regressions | High | Make the mock query-aware in Phase 0, before any effect depends on it. |
| Effects visually conflict with the existing nebula/water scenes | Medium | Additive-only constraint; side-by-side review of hero and About sections before each phase merges. |
| Lighthouse CI wired to an unavailable or auth-protected preview URL | Medium | Prefer running against a production build served inside the CI job over depending on an external preview deployment. |

## Acceptance Direction
- Every new motion or 3D component MUST resolve `prefers-reduced-motion: reduce` and render a static equivalent when set. No exceptions, including the pre-existing hero nebula.
- Every effect MUST be additive: existing `className` values, color tokens, hover states, and DOM semantics of touched components remain unchanged.
- Mobile/coarse-pointer devices MUST receive a simplified or static path, consistent with the existing `CyberNebula`/`WaterSurface3D` gating.
- Interaction math MUST be extracted as pure, unit-tested functions; hooks own wiring and cleanup only.
- Every WebGL surface MUST dispose geometries and materials on unmount.
- CI MUST fail on Lighthouse Performance/Accessibility/SEO/Best-Practices below 90 or on LCP/CLS regression past budget, and existing coverage thresholds (70% lines/statements/functions, 60% branches) MUST hold.
- `pnpm lint`, `pnpm typecheck`, and `pnpm test` MUST pass with no new warnings; strict TDD applies to every new hook and pure function.
- No new runtime dependency may be added without an explicit justification recorded in the design phase.

## Open Questions for Design
1. **Resolved with user**: item 4's placement is the Services section (`#servicios`) — see Scope item 4 above and `design.md` D-1 for the full options comparison and rationale.
2. Item 4's subject: procedural geometry (zero dependencies, zero asset weight) or a real glTF model? If glTF, does it justify `@react-three/drei` over `useLoader(GLTFLoader)` on the already-installed stack?
3. **Resolved then descoped**: item 5's permission UX was decided in `design.md` D-2 (inline opt-in control anchored to the affected surface, coarse-pointer only), but item 5 itself was subsequently removed from scope entirely (see Descoped, above). The decision is preserved in `design.md` for a future change to reuse.
4. Should parallax apply to content or strictly to decorative layers? Content parallax carries materially higher CLS and readability risk.
5. Does Lighthouse CI run against a locally served production build inside the CI job, or against a deployed preview URL? The current `next.config.ts` is empty and the GitHub Pages workflow only publishes a redirect stub, so the authoritative preview target needs confirming.
6. **Resolved with user**: the magnetic effect is NOT scoped to the hero only — it extends to contact links and footer links from the first slice (see Scope item 1 above).

## Rollback Plan
Each phase is an isolated, revertible unit: new hooks and pure functions are additive files, and component changes are wrapper-level only. Reverting a phase restores the prior static behavior without touching styling, layout, or content. The Phase 0 Lighthouse CI gate is independent of the effects and can remain in place after any effect rollback.
