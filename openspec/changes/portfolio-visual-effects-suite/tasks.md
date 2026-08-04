# Tasks: Portfolio Visual Effects Suite

Scope: Phases 0-4 only. Phase 5 (device motion) is descoped — no tasks below.

## Review Workload Forecast

| Field | Value |
|---|---|
| Estimated changed lines | ~1050-1300 total (0: 280-340, 1: 330-400, 2: 150-190, 3: 150-190, 4: 150-220) |
| 400-line budget risk | High (whole change); Phase 0 and Phase 1 individually border/exceed 400 alone |
| Chained PRs recommended | Yes |
| Suggested split | PR per phase (5 PRs), stacked in phase order; split Phase 1 further into 1a/1b if its diff exceeds 400 |
| Delivery strategy | ask-on-risk |
| Chain strategy | pending — user must choose stacked-to-main or feature-branch-chain |

Decision needed before apply: Yes
Chained PRs recommended: Yes
Chain strategy: pending
400-line budget risk: High

### Suggested Work Units

| Unit | Goal | Likely PR | Notes |
|---|---|---|---|
| 1 | Phase 0 — reduced-motion primitive, query-aware mock, Lighthouse CI gate, nebula/water bugfix | PR 1 | Independent; must land+pass on `main` before PR 2 (Req: Baseline Precedes Effects) |
| 2 | Phase 1 — magnetic CTAs (geometry, magnetism, hook, `MagneticLink`, Hero/ContactLinks/Footer wiring) | PR 2 | Depends on PR 1. If diff >400 lines, split: 2a = `lib/motion/geometry.ts`+`magnetism.ts`+`useMagneticPointer`+`MagneticLink`+tests; 2b = Hero/ContactLinks/Footer wiring |
| 3 | Phase 2 — tilt cards (`tilt.ts`, `usePointerTilt`, `ProjectCard`) | PR 3 | Depends on PR 1 only (not PR 2) |
| 4 | Phase 3 — parallax (`parallax.ts`, `useParallaxLayer`, `useScrollAnimation`, Hero blobs) | PR 4 | Depends on PR 1; touches `Hero.tsx` again after PR 2 — rebase to avoid conflict |
| 5 | Phase 4 — cursor 3D object in Services | PR 5 | Depends on PR 1 (motion capability gate); independent of PR 2-4 |

## Phase 0: Foundations (Sequential — blocks all later phases)

- [x] 0.1 Create `tests/matchMedia.ts` — query-aware mock (`setMediaQueryState`/`resetMediaQueryState`), default `matches:false` for unregistered queries (Req: Query-Aware Test Mock).
- [x] 0.2 Modify `tests/setup.ts` — delegate to `matchMedia.ts`; call `resetMediaQueryState()` in existing `afterEach`.
- [x] 0.3 Create `lib/motion/mediaQueries.ts` — `MEDIA_QUERIES` const object (`reducedMotion`, `coarsePointer`).
- [x] 0.4 TDD: `hooks/usePrefersReducedMotion.test.tsx` then `.ts` — `useSyncExternalStore` over `matchMedia(reducedMotion)`; server snapshot `true`; reacts to `change`; unsubscribes on unmount (Req: Reduced-Motion Detection Primitive).
- [x] 0.5 Modify `hooks/useIsDesktop.ts` — use `MEDIA_QUERIES.coarsePointer`, no behavior change.
- [x] 0.6 TDD: `hooks/useMotionCapability.test.tsx` then `.ts` — composes `useIsDesktop` + `usePrefersReducedMotion` into `{isDesktop, prefersReducedMotion, isPointerMotionEnabled}` (Req: Universal Gating Contract).
- [x] 0.7 Modify `components/common/CyberNebula.tsx` and `components/common/WaterSurface3D.tsx` — consume `useMotionCapability`, return `null` under reduced motion; fix `WaterSurface3D`'s narrower `"(hover: none)"` query to the shared constant (R-2).
- [x] 0.8 Modify `styles/globals.css` — consolidate `.about-water-3d` rule into shared reduced-motion contract.
- [x] 0.9 Create `.lighthouserc.json` + `.github/workflows/lighthouse.yml` — local prod build, `numberOfRuns:3`, blocking assertions (perf/a11y/seo/best-practices ≥0.9, LCP≤2500ms, CLS≤0.1, TBT≤200ms); add `@lhci/cli` to `package.json`.
- [x] 0.10 Verify: `pnpm lint`/`typecheck`/`test` green; Lighthouse workflow present and green on `main` before Phase 1 merges (Req: Baseline Precedes Effects).

## Phase 1: Magnetic CTAs (Sequential, depends on Phase 0)

- [ ] 1.1 TDD: `tests/lib/motion/geometry.test.ts` then `lib/motion/geometry.ts` — `clamp`, `normalizePointerInBounds`, `distanceFromCenter`; matrix incl. zero-size bounds.
- [ ] 1.2 TDD: `tests/lib/motion/magnetism.test.ts` then `lib/motion/magnetism.ts` — `calculateMagneticOffset`; falloff, clamp to `maxOffset`, zero outside radius.
- [ ] 1.3 TDD: `hooks/useMagneticPointer.test.tsx` then `.ts` — passive listeners, cleanup on unmount, no-op when motion disabled; returns spring-wrapped `{ref,x,y}`.
- [ ] 1.4 TDD: `components/common/MagneticLink.test.tsx` then `.tsx` — `className`/`href`/`download`/`rel`/`target` byte-identical passthrough; renders plain `<a>` when disabled (R-4).
- [ ] 1.5 Modify `components/common/Hero.tsx` — wrap the three CTA anchors in `MagneticLink`; no `className` change.
- [ ] 1.6 Modify `components/features/ContactLinks.tsx` and `components/layout/Footer.tsx` — link roots become `MagneticLink`.
- [ ] 1.7 Verify: existing Hero CTA `className` assertions pass unchanged; keyboard-only Tab+Enter activation and focus-visible outline unaffected.

## Phase 2: Tilt/Depth Cards (Sequential, depends on Phase 0 only)

- [ ] 2.1 TDD: `tests/lib/motion/tilt.test.ts` then `lib/motion/tilt.ts` — `calculateTiltAngles`; sign convention, clamp at `maxDegrees`, zero at center.
- [ ] 2.2 TDD: `hooks/usePointerTilt.test.tsx` then `.ts` — wiring/cleanup contract; resets to `(0,0)` on pointer-leave.
- [ ] 2.3 Modify `components/common/ProjectCard.tsx` — root `motion.div` gains `style={{rotateX, rotateY, transformPerspective}}`; existing `group`/`card-hover`/`glass-effect`/`group-hover:scale-105` unchanged.
- [ ] 2.4 Verify: existing `ProjectCard.test.tsx` class assertions still pass.

## Phase 3: Parallax Scroll (Sequential, depends on Phase 0; rebase after Phase 1 for `Hero.tsx`)

- [ ] 3.1 TDD: `tests/lib/motion/parallax.test.ts` then `lib/motion/parallax.ts` — `mapProgressToRange`; clamp 0..1, exact endpoints, inverted ranges.
- [ ] 3.2 TDD: `hooks/useParallaxLayer.test.tsx` then `.ts` — correct `offset` passed to `useScroll`; identity transform under reduced motion.
- [ ] 3.3 Modify `hooks/useScrollAnimation.ts` — re-export `useParallaxLayer`; existing `useInView` API/signature untouched.
- [ ] 3.4 Modify `components/common/Hero.tsx` — bind the two absolute-positioned decorative blobs to `useParallaxLayer`, transform-only (ADR-04).
- [ ] 3.5 Verify: existing `useScrollAnimation({once, amount, delay})` consumers behave identically; reveal and parallax coexist without state interference.

## Phase 4: Cursor-Driven 3D Object — Services Section (Sequential, depends on Phase 0)

- [ ] 4.1 Create `components/common/CursorObject3D.tsx` — procedural geometry (ADR-03), `useFrame` pointer-follow rotation, dispose geometries/materials on unmount, under 300 lines.
- [ ] 4.2 Modify `components/features/Services.tsx` — mount via `next/dynamic({ssr:false})` inside the existing `#servicios` `<Section>` in `pages/index.tsx`, gated on `isPointerMotionEnabled` (desktop-only, D-1).
- [ ] 4.3 Verify: WebGL correctness via manual review + Lighthouse CI (untestable in jsdom); confirm mobile Performance ≥90 budget unaffected.
