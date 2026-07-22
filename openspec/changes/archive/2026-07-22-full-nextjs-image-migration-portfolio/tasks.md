# Tasks: Full Next.js Image Migration (Portfolio)

## Review Workload Forecast

| Field | Value |
|---|---|
| Estimated changed lines | 420-560 |
| 400-line budget risk | High |
| Chained PRs recommended | Yes |
| Suggested split | PR1 utilities/tests, PR2 migration/tests, PR3 verification |
| Delivery strategy | single-pr |
| Chain strategy | size-exception |

Decision needed before apply: Yes
Chained PRs recommended: Yes
Chain strategy: size-exception
400-line budget risk: High

### Suggested Work Units

| Unit | Goal | Likely PR | Notes |
|---|---|---|---|
| 1 | Path contract + unit matrix | PR 1 | Independent |
| 2 | Common/feature migration | PR 2 | Depends on 1 |
| 3 | Regression proof + risk gate | PR 3 | Depends on 2 |

## Phase 1: Foundation (Sequential)

- [x] 1.1 Create [lib/assets/paths.ts](lib/assets/paths.ts) with `normalizeAssetPath` and `normalizeInternalHref` (Req 3, Req 5). Verify: one deterministic rule-set for plain, prefixed, nested, invalid inputs.
- [x] 1.2 Add [tests/lib/assets/paths.test.ts](tests/lib/assets/paths.test.ts) matrix cases (Req 3, Req 4). Verify: no missing-prefix or double-prefix outputs.

## Phase 2: Core Migration (Sequential)

- [x] 2.1 Update [components/common/OptimizedImage.tsx](components/common/OptimizedImage.tsx) to call shared normalization for `ProjectImage` and `AvatarImage` (Req 1, Req 3, Req 5). Verify: path policy lives only in common layer.
- [x] 2.2 Refactor [components/common/ProjectCard.tsx](components/common/ProjectCard.tsx) to remove `useRouter().basePath` string composition and consume shared image contract (Req 1, Req 5). Verify: zero inline prefix concatenation.
- [x] 2.3 Validate [lib/projects.ts](lib/projects.ts) image values remain canonical local paths (Req 3, Req 5). Verify: no deployment-prefixed data is stored.

## Phase 3: Regression Tests (Parallel after 2.2)

- [x] 3.1 Create/adjust [components/common/ProjectCard.test.tsx](components/common/ProjectCard.test.tsx) for representative image consumer + image-linked navigation behavior (Req 2, Req 4). Verify: href/src resolve under configured basePath rules.
- [x] 3.2 Create [components/common/OptimizedImage.test.tsx](components/common/OptimizedImage.test.tsx) to lock shared primitive normalization behavior (Req 1, Req 4). Verify: canonical src output is stable.

## Phase 4: Final Verification and Risk Checkpoint (Sequential)

- [x] 4.1 Run targeted tests for migration files and confirm all green (Req 4). Verify: utility matrix and component regressions pass.
- [x] 4.2 Architecture checkpoint across [lib/assets/paths.ts](lib/assets/paths.ts), [components/common/OptimizedImage.tsx](components/common/OptimizedImage.tsx), [components/common/ProjectCard.tsx](components/common/ProjectCard.tsx) (Req 5). Verify: SRP, DRY, Atomic boundaries hold.
- [x] 4.3 Apply gate for single-pr: record/approve `size-exception` if diff is >400 lines, then mark this file complete (risk control).
