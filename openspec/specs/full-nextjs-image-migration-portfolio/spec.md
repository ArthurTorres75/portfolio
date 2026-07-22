# Specification: full-nextjs-image-migration-portfolio

## Purpose

Define a single, testable contract for image and static-asset paths in exported Next.js portfolio pages, including basePath-safe internal links and minimal regression coverage.

## Requirements

### Requirement 1: Next.js Image Standardization

The system MUST render local project images through shared image primitives built on `next/image`, and MUST NOT allow feature components to concatenate basePath or assetPrefix inline.

#### Acceptance Criteria

- Shared/common image entry points are the only allowed path for local image rendering in portfolio UI components.
- Feature-level components receive normalized image props and do not compose deployment prefixes.

#### Scenario: Feature component consumes shared image contract

- GIVEN a feature component displays a project thumbnail or avatar
- WHEN the component renders a local image
- THEN it uses the shared image primitive contract
- AND no local prefix concatenation is present in that feature component

### Requirement 2: BasePath-Safe Internal Links

The system MUST generate internal navigation links that resolve correctly when `basePath` is configured for static export, including links associated with image-based cards and CTAs.

#### Acceptance Criteria

- Internal links remain in-app relative navigation and resolve under the configured base path.
- Link generation follows one contract across common and feature components.

#### Scenario: Internal route works under exported subpath

- GIVEN the app is exported with a non-root base path
- WHEN a user clicks an internal link from an image card
- THEN navigation resolves to the correct in-app route under that base path

### Requirement 3: Static Asset Reference Normalization

The system MUST normalize local static asset references deterministically for both raw asset usage and image component usage, preventing missing-prefix and double-prefix outputs.

#### Acceptance Criteria

- Canonical input/output rules are defined for leading slash, already-prefixed paths, and nested asset paths.
- Invalid or ambiguous local paths are handled by a documented fallback rule.

#### Scenario: Leading-slash local asset is normalized

- GIVEN a local path such as `/images/project-a.webp`
- WHEN the path is normalized for rendering
- THEN the output is exactly one valid basePath-safe asset URL

#### Scenario: Already-prefixed path is not double-prefixed

- GIVEN a local path already containing the configured base path
- WHEN normalization runs
- THEN the output contains no duplicate prefix segment

### Requirement 4: Minimal Regression Tests

The system MUST include minimal automated regression checks that validate path normalization, basePath-safe internal links, and representative image consumers.

#### Acceptance Criteria

- Unit tests cover normalization edge cases at minimum: plain local path, already-prefixed local path, and nested local path.
- Component-level tests verify at least one shared image consumer and one image-linked internal navigation path.

#### Scenario: Normalization test matrix passes

- GIVEN the normalization test suite
- WHEN tests run in CI
- THEN all defined edge-case fixtures resolve to expected canonical URLs

### Requirement 5: Architecture Quality Constraints

The change MUST preserve SOLID, DRY, and Atomic Design constraints.

#### Acceptance Criteria

- Single Responsibility: path normalization behavior is owned by one shared responsibility boundary.
- DRY: duplicated prefix/path composition logic is removed from feature consumers.
- Atomic Design: image behavior is centralized in common primitives and composed by feature sections without policy leakage.

#### Scenario: Architecture constraints are verifiable in review

- GIVEN a code review of affected files
- WHEN responsibilities and path logic are inspected
- THEN shared/common owns path policy
- AND feature components only consume the shared contract
