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
