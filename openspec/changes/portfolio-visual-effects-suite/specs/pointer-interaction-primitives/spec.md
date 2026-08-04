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
