# Apply Progress: full-nextjs-image-migration-portfolio

## Summary
Completed all tasks in the approved single-PR `size:exception` execution. Implemented a shared asset/internal href normalization contract, migrated common image primitives and `ProjectCard` to that contract, and added regression tests for path behavior under static-export basePath.

## Mode
Strict TDD

## Completed Tasks
- [x] 1.1 Create `lib/assets/paths.ts` with `normalizeAssetPath` and `normalizeInternalHref`.
- [x] 1.2 Add `tests/lib/assets/paths.test.ts` matrix cases.
- [x] 2.1 Update `components/common/OptimizedImage.tsx` to call shared normalization for `ProjectImage` and `AvatarImage`.
- [x] 2.2 Refactor `components/common/ProjectCard.tsx` to remove inline `basePath` image concatenation and consume shared image contract.
- [x] 2.3 Validate `lib/projects.ts` image values remain canonical local paths.
- [x] 3.1 Create/adjust `components/common/ProjectCard.test.tsx` for representative image consumer + image-linked navigation behavior.
- [x] 3.2 Create `components/common/OptimizedImage.test.tsx` to lock shared primitive normalization behavior.
- [x] 4.1 Run targeted tests and confirm all green.
- [x] 4.2 Architecture checkpoint for SRP/DRY/Atomic boundaries.
- [x] 4.3 Record `size:exception` approval in apply phase.

## TDD Cycle Evidence
| Task | RED (test first) | GREEN (implementation) | REFACTOR |
|---|---|---|---|
| 1.1 + 1.2 Shared path utility + matrix | Added `tests/lib/assets/paths.test.ts` before creating utility; import failed and normalization expectations failed. | Implemented `lib/assets/paths.ts` with deterministic basePath-safe normalization behavior. | Consolidated basePath handling and external-target detection into focused utility helpers. |
| 2.1 Shared image primitive migration | Added `components/common/OptimizedImage.test.tsx` first; tests failed with unnormalized src. | Updated `ProjectImage` and `AvatarImage` to normalize sources through `normalizeAssetPath` + router basePath. | Kept image behavior centralized in common primitive; removed policy drift risk from consumers. |
| 2.2 + 3.1 Project card migration + link behavior | Added `components/common/ProjectCard.test.tsx` first; internal href normalization assertion failed (`/projects/` vs `/portfolio/projects/`). | Refactored `ProjectCard` to use `ProjectImage`, `normalizeInternalHref`, and external/internal link branching. | Removed inline string composition, aligned with shared contract and Atomic boundary reuse. |
| 4.1 Verification | Ran focused suite on new/changed tests after GREEN changes. | `pnpm test -- tests/lib/assets/paths.test.ts components/common/OptimizedImage.test.tsx components/common/ProjectCard.test.tsx` passed (3 files, 14 tests). | N/A |

## Files Changed
- `lib/assets/paths.ts` (new)
- `tests/lib/assets/paths.test.ts` (new)
- `components/common/OptimizedImage.tsx` (updated)
- `components/common/OptimizedImage.test.tsx` (new)
- `components/common/ProjectCard.tsx` (updated)
- `components/common/ProjectCard.test.tsx` (new)
- `openspec/changes/full-nextjs-image-migration-portfolio/tasks.md` (updated checkboxes)
- `openspec/changes/full-nextjs-image-migration-portfolio/apply-progress.md` (new)

## Architecture Checkpoint (Req 5)
- SRP: path policy is now owned by `lib/assets/paths.ts`.
- DRY: removed duplicated `basePath` string composition from `ProjectCard` image handling.
- Atomic Design: feature card now composes shared common primitive (`ProjectImage`) rather than owning image path policy.

## Risk / Deviation Notes
- No design deviations.
- `lib/projects.ts` kept canonical local asset paths; no deployment-prefixed values were introduced.
- Single PR is continued under approved `size:exception` decision.

## Remaining
- None in apply scope. Ready for `sdd-verify`.
