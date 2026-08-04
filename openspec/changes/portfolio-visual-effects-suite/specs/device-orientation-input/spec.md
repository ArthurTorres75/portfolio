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
