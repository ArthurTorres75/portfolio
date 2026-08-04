# Delta Spec: Portfolio Visual Effects Suite

Concatenated view of all domain specs for this change. Per-domain files (source of truth for archive) live under `specs/{domain}/spec.md` in this change folder.

---

## Domain: motion-preferences

# Motion Preferences Specification

## Purpose

Single source of truth for `prefers-reduced-motion` and pointer-capability gating, consumed by every motion/3D surface in the portfolio (existing and new). Repairs the current gap where `CyberNebula` ignores reduced-motion entirely and only `.about-water-3d` is gated via CSS.

## Requirements

### Requirement: Reduced-Motion Detection Primitive

The system MUST expose a shared hook that resolves `prefers-reduced-motion: reduce` via `matchMedia`, following the existing `useSyncExternalStore`-over-`matchMedia` pattern established by `useIsDesktop`. The hook MUST re-evaluate live when the OS-level preference changes while the page is open.

#### Scenario: Reduced-motion preference is active

- GIVEN the OS/browser reports `prefers-reduced-motion: reduce`
- WHEN the hook is read by any consumer
- THEN it returns `true`

#### Scenario: Preference changes at runtime

- GIVEN a component is mounted with reduced-motion `false`
- WHEN the user toggles the OS-level setting to reduced-motion
- THEN the hook updates to `true` without a page reload

### Requirement: Universal Gating Contract

Every motion or 3D surface (magnetic CTAs, tilt cards, parallax, the cursor-driven 3D object, device-orientation input, `CyberNebula`, `WaterSurface3D`) MUST resolve reduced-motion (and pointer capability, via the existing `useIsDesktop` contract) before starting any animation loop or motion-driven transform, and MUST render a static equivalent when reduced-motion is active. No motion surface is exempt, including pre-existing ones.

#### Scenario: CyberNebula honors reduced-motion (bugfix)

- GIVEN `prefers-reduced-motion: reduce` is set
- WHEN `CyberNebula` mounts
- THEN it renders its static/no-motion path
- AND no animation frame loop starts

#### Scenario: New motion surface without gating is non-compliant

- GIVEN a new pointer- or scroll-driven effect is added
- WHEN it does not consult the shared reduced-motion primitive first
- THEN it fails this requirement (verifiable by code review and a unit test asserting the hook is called before any transform/animation is applied)

### Requirement: Query-Aware Test Mock

The `matchMedia` mock in `tests/setup.ts` MUST return independently controllable `matches` values per query string, at minimum distinguishing `prefers-reduced-motion: reduce` from the coarse-pointer/`hover: none` query already used by `useIsDesktop`.

#### Scenario: Mock differentiates reduced-motion from pointer capability

- GIVEN a test sets reduced-motion `matches: true` and pointer-coarse `matches: false`
- WHEN a component under test reads both hooks
- THEN the reduced-motion hook reports `true` and the pointer-capability hook reports `false` independently

---

## Domain: pointer-interaction-primitives

# Pointer Interaction Primitives Specification

## Purpose

Reusable, independently testable magnetic-pull and 3D-tilt hooks consumed by presentational components, backed by pure geometry functions (jsdom cannot exercise real layout/pointer geometry).

## Requirements

### Requirement: Magnetic Pull Hook

The system MUST expose a hook that computes a bounded x/y transform offset pulling an element toward the pointer within a configured radius, and springs the offset back to `(0, 0)` on pointer-leave, driven by `framer-motion` motion values (no per-frame React state updates). Consumers are the hero's primary and secondary CTAs, the site's contact links, and the footer's link set.

#### Scenario: Pointer within radius

- GIVEN the pointer is within the configured pull radius of the element
- WHEN pointer position updates
- THEN the computed offset moves toward the pointer, bounded to a maximum pull distance

#### Scenario: Pointer leaves the element

- GIVEN an active pull offset
- WHEN the pointer leaves the element
- THEN the offset springs back to `(0, 0)`

#### Scenario: Gated by motion preferences

- GIVEN reduced-motion is active or the device reports coarse-pointer/no-hover
- WHEN the hook is used
- THEN it returns a static, unchanging offset and attaches no pointer listeners

### Requirement: Magnetic Pull Purity and Additivity

The offset calculation MUST be a pure function `(pointerCoords, elementRect, radius, strength) -> {x, y}`, unit-testable without a DOM/layout engine. Applying the hook MUST NOT change the wrapped element's existing `className`, color tokens, hover states, DOM tag, or accessible name.

#### Scenario: Deterministic pure function

- GIVEN identical pointer coordinates, element rect, radius, and strength
- WHEN the pure function is called twice
- THEN it returns identical `{x, y}` output both times, verifiable in a unit test with no DOM

#### Scenario: Existing styling and semantics preserved

- GIVEN a hero CTA wrapped with the magnetic hook
- WHEN rendered
- THEN its `className`, visible text/accessible name, and underlying tag (`a`/`button`) are identical to the pre-change markup

### Requirement: 3D Tilt Hook

The system MUST expose a hook producing pointer-relative `rotateX`/`rotateY` (with perspective) for card-like elements, bounded to a maximum rotation angle, computed via a pure tilt-angle function, and resetting to neutral rotation on pointer-leave. Existing `group-hover:scale-105` and `card-hover` styling on `ProjectCard` MUST remain unchanged.

#### Scenario: Pointer near card edge

- GIVEN the pointer moves toward a card's edge
- WHEN the tilt hook recalculates
- THEN rotation approaches, but never exceeds, the configured maximum angle

#### Scenario: Pointer leaves the card

- GIVEN an active tilt rotation
- WHEN the pointer leaves the card
- THEN rotation resets to `0, 0`

### Requirement: Keyboard and Focus Parity

Magnetic and tilt effects MUST NOT be required to operate the affected control. Keyboard-driven focus and activation (Tab, then Enter/Space, or a pointerless click) MUST retain the existing focus-visible outline and activation behavior unchanged, and MUST NOT introduce a wrapping element that changes the control's accessible role.

#### Scenario: Keyboard-only activation

- GIVEN a user tabs to a magnetic CTA
- WHEN they press Enter
- THEN the link/button activates normally, no pointer-driven offset is applied, and the existing focus-visible outline is rendered

---

## Domain: scroll-linked-motion

# Scroll-Linked Motion Specification

## Purpose

Scroll-progress-driven transforms (parallax) on decorative/background layers, additive to and independent from the existing viewport-trigger reveal system in `hooks/useScrollAnimation.ts`.

## Requirements

### Requirement: Scroll-Progress Parallax Hook

The system MUST expose a hook using scroll-progress binding (`useScroll`/`useTransform`) to derive a transform for a target ref, parameterized by intensity/range, applied only to decorative/background layers — never to text or interactive content layers.

#### Scenario: Scroll progresses

- GIVEN a decorative layer bound to the parallax hook
- WHEN the user scrolls
- THEN the derived transform value changes monotonically within the configured range

### Requirement: Layout-Safe Transform Only

The parallax hook MUST only ever animate the `transform` CSS property (translate/scale/rotate) and MUST NOT animate properties that affect layout or paint outside compositing (e.g., `top`, `left`, `width`, `margin`), to hold CLS under 0.1.

#### Scenario: Only transform is mutated

- GIVEN the parallax hook is active during scroll
- WHEN its output is inspected per frame
- THEN only the element's `transform` style is set; no layout-affecting property changes

### Requirement: Reveal System Regression Safety

The existing `useScrollAnimation` viewport-trigger API (`ref`, `isInView`, and the `once`/`amount`/`delay` options) MUST continue to behave exactly as before. The parallax addition MUST be a separate, independently importable export from the same hooks layer, not a breaking change to the existing hook's signature or return shape.

#### Scenario: Existing consumer is unaffected

- GIVEN a component calling `useScrollAnimation({ once: true, amount: 0.2 })` as it does today
- WHEN it renders after this change
- THEN `ref` and `isInView` behave identically to pre-change behavior

#### Scenario: Reveal and parallax coexist

- GIVEN a page uses both the existing reveal hook and the new parallax hook in the same tree
- WHEN both are active
- THEN neither hook's state or transform output interferes with the other

### Requirement: Reduced-Motion Gating

Parallax transforms MUST resolve the shared reduced-motion primitive and render the decorative layer at its static rest position when reduced-motion is active, regardless of scroll offset.

#### Scenario: Reduced-motion active during scroll

- GIVEN reduced-motion is active
- WHEN the user scrolls past a parallax-bound layer
- THEN the layer's position remains fixed at rest and does not track scroll offset

---

## Domain: device-orientation-input

# Device Orientation Input Specification

## Status: DESCOPED — not part of this change's delivery

Item 5 (real device motion, the capability this spec describes) was removed from the `portfolio-visual-effects-suite` change entirely, not deferred. Reason: the "simulated touch fallback" this capability was meant to replace is unreachable dead code — `CyberNebula.tsx` and `WaterSurface3D.tsx` both return `null` on touch/coarse-pointer devices, so there is no live mobile WebGL path to enhance. See `proposal.md`'s Descoped section and `design.md` Risk R-1 for the full rationale, and `design.md` D-2 for the iOS permission-UX pattern that was decided (but not implemented) before the cut. The requirements below are preserved, unimplemented, for a possible future change that proposes a genuine mobile WebGL surface.

## Purpose

Permission-gated real `deviceorientation` input for `CyberNebula` and `WaterSurface3D` on touch-capable devices, replacing the simulated `Math.sin`/`Math.cos` fallback as the primary path while keeping the simulation as the degraded fallback.

## Requirements

### Requirement: Real Orientation Input Hook

The system MUST expose a hook wrapping `deviceorientation` events, normalizing `alpha`/`beta`/`gamma` into the same value shape currently produced by the simulated `Math.sin`/`Math.cos` fallback, so consuming WebGL scenes require no interface change.

#### Scenario: Orientation events drive the value

- GIVEN a `deviceorientation` listener is attached and granted
- WHEN the device orientation changes
- THEN the hook returns updated, bounded values in the same shape the simulated fallback produces

### Requirement: Explicit Permission Gate

On platforms requiring `DeviceOrientationEvent.requestPermission()` (iOS 13+), the hook MUST NOT request permission automatically on mount. It MUST only request permission in direct response to an explicit user gesture, and MUST expose a `prompt` | `granted` | `denied` state to the consumer.

#### Scenario: Permission not yet requested

- GIVEN iOS Safari and no prior permission request
- WHEN the hook mounts
- THEN its state is `prompt`, no `deviceorientation` listener is attached, and the simulated fallback drives the scene

#### Scenario: User gesture grants permission

- GIVEN the user performs the designated gesture to request permission
- WHEN permission is granted
- THEN state becomes `granted`, the real listener attaches, and the simulated fallback stops driving values

#### Scenario: User denies permission

- GIVEN the user performs the gesture and denies permission
- WHEN the response resolves
- THEN state becomes `denied` for the session, the simulated fallback remains active, and no repeated automatic prompts occur

### Requirement: Non-Permission Platform Fallback

On platforms/browsers without `DeviceOrientationEvent.requestPermission` (e.g., Android), the hook MUST attach the `deviceorientation` listener directly, without a permission step.

#### Scenario: No permission API present

- GIVEN `DeviceOrientationEvent.requestPermission` is `undefined`
- WHEN the hook mounts on a touch-capable device
- THEN it attaches the listener immediately and reports state `granted`

### Requirement: Simulated Fallback Preserved as Degraded Path

The existing simulated `Math.sin`/`Math.cos` motion MUST remain available and MUST drive `CyberNebula`/`WaterSurface3D` whenever real orientation is unavailable, denied, or unsupported, so a touch-capable device is never left without motion input.

#### Scenario: Sensor unsupported

- GIVEN the device has no orientation sensor or the API throws
- WHEN the hook initializes
- THEN the simulated fallback drives the scene exactly as it does today

---

## Domain: performance-budget-gate

# Performance Budget Gate Specification

## Purpose

Automated, blocking per-PR Lighthouse enforcement of the portfolio's non-negotiable mobile budget, landed before the first visual-effect PR merges.

## Requirements

### Requirement: Blocking Lighthouse CI Workflow

The system MUST add a CI workflow that runs Lighthouse (mobile config) against a production build on every PR and MUST fail the check when Performance, Accessibility, SEO, or Best Practices falls below 90, or when LCP >= 2.5s, INP >= 200ms, or CLS >= 0.1.

#### Scenario: Budgets met

- GIVEN a PR's production build meets all thresholds
- WHEN the Lighthouse CI workflow runs
- THEN the check passes

#### Scenario: A metric regresses

- GIVEN a PR's production build drops any single tracked metric below its threshold
- WHEN the Lighthouse CI workflow runs
- THEN the check fails and blocks merge

### Requirement: Locally Served Production Build Target

Lighthouse CI MUST run against a production build (`next build` output) served within the CI job itself, not an external or preview-deployment URL, so the check cannot flake or be skipped due to an unavailable deployment.

#### Scenario: CI serves its own build

- GIVEN the workflow runs on a PR
- WHEN the Lighthouse step executes
- THEN it builds and serves the app locally in the job, then audits that local server

### Requirement: Coexistence With Existing Gates

The Lighthouse workflow MUST run alongside, not replace, the existing `ci.yml` steps (lint, typecheck, coverage, audit, build), and MUST NOT lower the existing coverage thresholds (70% lines/statements/functions, 60% branches).

#### Scenario: Both gates required for merge

- GIVEN a PR triggers CI
- WHEN both `ci.yml` and the new Lighthouse workflow run
- THEN merge eligibility requires both to pass independently, and coverage thresholds remain at their current values

### Requirement: Baseline Precedes Effects

The Lighthouse CI gate MUST land and pass on `main` before the first visual-effect PR (magnetic CTAs) merges, establishing a pre-effects baseline every later phase is measured against.

#### Scenario: Gate exists before Phase 1

- GIVEN the project's commit history
- WHEN the magnetic-CTA PR (Phase 1) is reviewed
- THEN the Lighthouse CI workflow is already present and green on `main` prior to that merge
