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
