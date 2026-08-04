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
