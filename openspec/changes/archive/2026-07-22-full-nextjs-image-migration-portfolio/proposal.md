# Proposal: Full Next.js Image Migration (Portfolio)

## Problem Statement
The portfolio already uses Next Image in most rendering paths, but image source handling is inconsistent across components. Current behavior mixes direct paths and runtime basePath concatenation, which increases risk of broken assets under static export and GitHub Pages pathing. The gap is no longer component choice, it is normalization and contract consistency.

## Goals
- Establish one frontend contract for static image source normalization under basePath and assetPrefix.
- Ensure all portfolio image entry points follow the same path rules for exported builds.
- Keep component boundaries clean with SOLID responsibilities and DRY image-path logic reuse.
- Align image rendering with Atomic Design by centralizing image behavior in shared/common primitives.

## Non-Goals
- No visual redesign of cards, avatars, or gallery sections.
- No media format conversion, CDN migration, or image optimization strategy rewrite.
- No unrelated routing or translation refactors.

## Scope
### In Scope
- Define and apply a single normalization policy for local static image paths.
- Consolidate path composition responsibilities to shared image utilities/components.
- Standardize component-level usage expectations for image props and fallback behavior.
- Document migration boundaries for feature components consuming project image data.

### Out of Scope
- External image providers and remote patterns.
- Changes to project content inventory in public assets.

## Capabilities
### New Capabilities
- `image-path-normalization`: deterministic normalization for static image paths in export mode.
- `shared-image-contract`: common interface and usage rules for image-bearing UI primitives.

### Modified Capabilities
- None (no existing OpenSpec capability specs in repository yet).

## Approach
- Keep domain data paths source-of-truth in content modules.
- Move path normalization to one shared layer and remove ad hoc per-component concatenation.
- Preserve Atomic Design flow: data -> common image primitive -> feature composition.
- Use incremental migration by first codifying the contract, then updating consumers.

## Affected Areas
| Area | Impact | Description |
|------|--------|-------------|
| `next.config.ts` | Modified | Confirm basePath/assetPrefix/image export constraints as contract inputs. |
| `components/common/OptimizedImage.tsx` | Modified | Primary location for shared image behavior and path contract. |
| `components/common/ProjectCard.tsx` | Modified | Remove local path assembly and consume shared contract. |
| `lib/projects.ts` | Modified | Validate source path format assumptions for project assets. |

## Risks
| Risk | Likelihood | Mitigation |
|------|------------|------------|
| Regression in static export asset URLs | Medium | Add acceptance checks against exported route patterns. |
| Double-prefix or missing-prefix edge cases | High | Define explicit normalization rules and test representative inputs. |
| Drift between common and feature usage | Medium | Enforce shared API ownership and remove duplicate path logic. |

## Acceptance Direction
- Proposal-to-spec MUST define canonical input/output path behavior for static assets.
- All image consumers MUST rely on shared contract, not inline path concatenation.
- Exported pages MUST resolve local project images correctly under configured basePath.
- Architecture decisions MUST demonstrate SOLID, DRY, and Atomic Design compliance.

## Rollback Plan
Revert to previous image path handling by restoring prior shared/common and feature consumer behavior in one commit if export checks fail.
