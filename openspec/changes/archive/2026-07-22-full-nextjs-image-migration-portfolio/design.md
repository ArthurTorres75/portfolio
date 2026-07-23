# Design: Full Next.js Image Migration (Portfolio)

## Technical Approach

Adopt a single shared asset-path policy for static export and enforce it through common image primitives. Data modules keep raw local paths (source of truth), shared utilities normalize paths once, and feature components consume normalized contracts without prefix logic. This implements Requirement 1/3/5 while keeping UI unchanged and migration scoped to image/link path behavior.

## Architecture Decisions

| Decision | Options | Tradeoff | Selected |
|---|---|---|---|
| Path normalization ownership | A) Feature components normalize, B) Shared utility normalizes | A duplicates logic and leaks policy; B centralizes behavior and is testable | **B** |
| Image render boundary | A) `ProjectCard` uses `next/image` directly, B) `ProjectCard` uses shared `ProjectImage` | A keeps duplication; B enforces Atomic Design and DRY | **B** |
| Internal route normalization | A) Inline `basePath` concatenation, B) Shared `normalizeInternalHref` utility | A risks double-prefix drift; B deterministic and unit-testable | **B** |
| Data contract in content layer | A) Store prefixed URLs, B) Store canonical local paths (`/photos/...`) | A couples content to deployment; B keeps data portable and SRP-compliant | **B** |

### ADR-01: Shared path policy utility
- Choice: Create a dedicated utility layer for `normalizeAssetPath` and `normalizeInternalHref`.
- Rationale: SOLID SRP and DIP. Policy changes occur in one place, and UI components depend on stable functions, not router details.
- Rejected alternative: per-component normalization (violates DRY, raises regression risk).

### ADR-02: Common primitive as Atomic boundary
- Choice: `components/common/OptimizedImage.tsx` becomes the atomic boundary for local image rendering behavior.
- Rationale: Atomic Design alignment (atoms/molecules in common, composition in features), plus consistent `next/image` usage and fallback handling.
- Rejected alternative: leave `ProjectCard` and other features with independent image behavior.

### ADR-03: Keep next.config as contract input, not logic host
- Choice: Keep `next.config.ts` values (`basePath`, `assetPrefix`, `images.unoptimized`) as static deployment inputs; do not add business logic there.
- Rationale: Configuration stays declarative, utility remains the execution layer.
- Rejected alternative: deriving dynamic runtime path logic from config in every component.

## Component Boundaries and Utility Layering

- Data layer: `lib/projects.ts`
  - Responsibility: project metadata with canonical local image paths only.
- Utility layer: `lib/assets/paths.ts` (new)
  - Responsibility: deterministic normalization of local asset paths and internal hrefs.
- Common UI layer: `components/common/OptimizedImage.tsx`
  - Responsibility: render image primitives and invoke normalization utility.
- Feature UI layer: `components/common/ProjectCard.tsx` and feature sections
  - Responsibility: compose UI; no basePath/assetPrefix concatenation.

This split enforces SOLID (single reasons to change), DRY (single normalization implementation), and Atomic Design (policy in common primitives, not feature composition).

## Data Flow

`lib/projects.ts ("/photos/..." raw)`
  -> `ProjectCard` passes `image` prop untouched
  -> `ProjectImage` / `AvatarImage`
  -> `normalizeAssetPath` in `lib/assets/paths.ts`
  -> `next/image` receives canonical src
  -> static export under `/portfolio` resolves correctly

For links:

`feature/common CTA href`
  -> `normalizeInternalHref`
  -> `next/link` or anchor receives basePath-safe in-app path

## File Changes

| File | Action | Description |
|---|---|---|
| `openspec/changes/full-nextjs-image-migration-portfolio/design.md` | Create | This design artifact. |
| `lib/assets/paths.ts` | Create | `normalizeAssetPath` + `normalizeInternalHref` contract and guards. |
| `components/common/OptimizedImage.tsx` | Modify | Centralize normalized image source handling in shared primitives. |
| `components/common/ProjectCard.tsx` | Modify | Remove inline `useRouter().basePath` concatenation and consume shared contract. |
| `lib/projects.ts` | Validate/Minimal modify | Keep canonical local paths; no deployment-prefixed values. |
| `tests/lib/assets/paths.spec.ts` | Create | Unit matrix for normalization edge cases. |
| `tests/components/common/ProjectCard.spec.tsx` | Create/Modify | Verify representative image consumer and link behavior path contract. |

## Interfaces / Contracts

```ts
export interface AssetPathNormalizer {
  normalizeAssetPath(input: string): string;
  normalizeInternalHref(input: string): string;
}
```

Normalization rules:
- Local asset input `/photos/x.webp` -> exactly one basePath-safe path.
- Already-prefixed local input `/portfolio/photos/x.webp` -> unchanged (no double-prefix).
- Nested local path stays nested.
- Empty/invalid local input -> documented fallback (`""` for no-image render path).

## Testing Strategy

| Layer | What to Test | Approach |
|---|---|---|
| Unit | Path normalization matrix (plain, already-prefixed, nested, invalid) | Vitest specs for `lib/assets/paths.ts`. |
| Integration/component | `ProjectCard` image src contract and absence of inline prefix logic regression | RTL + Vitest with shared render helper in `tests/test-utils.tsx`. |
| Export safety check | Representative route/image path under basePath in built output assumptions | CI test step validating canonical normalized outputs used by components. |

## Migration and Rollback

Migration strategy (incremental, low risk):
1. Add utility and tests first.
2. Wire `OptimizedImage` to utility.
3. Migrate `ProjectCard` off inline basePath logic.
4. Run targeted regression tests.

Rollback strategy:
- Single revert commit restoring previous `OptimizedImage` and `ProjectCard` behavior if exported asset resolution fails.
- Keep utility isolated so revert scope is limited to migration files only.

## Scope Guard

This design intentionally excludes visual redesign, remote image providers, CDN changes, and non-image routing refactors.
