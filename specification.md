# System Specification — Arthur Torres Portfolio

Living reference document for this system: stack, conventions, hosting, and known gaps.
Maintained as the project evolves through SDD changes (proposal → spec → design → tasks → apply → verify).
Project case studies are captured through a structured technical interview (see "Projects" section) and written using Google's XYZ accomplishment formula: *"Accomplished [X], as measured by [Y], by doing [Z]."*

## Stack

- **Framework**: Next.js 16.1.5, Pages Router (not App Router)
- **UI**: React 19, TypeScript 5 (strict mode)
- **Styling**: Tailwind CSS 4
- **Motion/3D**: Framer Motion, Three.js / React Three Fiber
- **Testing**: Vitest 4 + React Testing Library, colocated `*.test.tsx` pattern, Strict TDD Mode enabled
- **Package manager**: pnpm

## Software Engineering & QA Standards

Binding for every change in this repo — human or agent. Any Claude Code agent (`sdd-apply`, `full-stack-delivery`, `testing-quality-gatekeeper`, etc.) working on this project MUST comply with this section in addition to its own instructions. If an agent's own instructions are silent on testing/coverage/QA (several are — see audit note below), this section is the fallback contract.

**Audit note (2026-07-27)**: none of the project's existing sub-agents enforce all of the below as a single contract — `sdd-apply` only requires TDD mode when detected, `sdd-tasks` doesn't reference testing at all, `testing-quality-gatekeeper` explicitly rejects a numeric coverage floor, and no agent mentions mutation testing. This section closes that gap explicitly rather than relying on any one agent to cover it.

### Testing conventions
- **Vitest 4 + React Testing Library**, colocated `*.test.tsx` / `*.test.ts` next to the file under test.
- **Strict TDD Mode**: RED → GREEN → REFACTOR for new logic. Write the failing test first.
- **Test pyramid**: mostly unit, some integration, minimal e2e — only for critical user flows (nav, project detail routing, language toggle).
- **Behavior-first**: assert the externally visible contract (rendered output, exported function behavior), never internal implementation details. Don't test library internals (React, Next.js) — trust the framework.
- **No `test.only`/`test.skip` committed** — CI must run with `forbidOnly` (or equivalent) so an accidentally-focused test fails the build instead of silently skipping coverage.
- **Mock only at system boundaries** (network, `localStorage`, browser APIs) — never mock code you own just to make a test pass.

### Quality metrics — coverage thresholds
Baseline for a solo-maintained portfolio project — intentionally not 100%; ratchet upward as the suite matures, never downward:
- **Lines / Statements / Functions**: ≥ 70%
- **Branches**: ≥ 60%
- Enforced via `vitest.config.mts` `test.coverage.thresholds` — a PR that drops below the floor fails CI, not just a local warning.
- No blind coverage-chasing: business logic (`lib/*`, `hooks/*`, data transforms) takes priority over presentational components with no branching logic.

### Mutation testing
- **Tool**: StrykerJS (`@stryker-mutator/core` + `@stryker-mutator/vitest-runner` + `@stryker-mutator/typescript-checker`), config at `stryker.conf.json`.
- **Purpose**: coverage % alone doesn't prove tests catch bugs — mutation testing verifies the suite actually fails when logic is deliberately broken.
- **Scope**: run against `lib/`, `hooks/`, and other non-UI business logic first — mutating JSX-heavy presentational components has low signal-to-noise for this codebase.
- **Baseline mutation score threshold**: break build < 50%, warn < 65% — starting floor for a project with only 4 test files today; raise as coverage matures.
- Run on-demand (`pnpm test:mutation`), not on every CI run — mutation testing is slow; reserve it for pre-merge on `lib/`/`hooks/` changes or a scheduled weekly run.

### QA gate order (CI-enforced, matches global CI/CD Standards)
1. Lint (`eslint . --max-warnings=0`)
2. Type-check (`tsc --noEmit`)
3. Tests + coverage thresholds (`vitest run --coverage`)
4. Security audit (`pnpm audit --audit-level=high`)
5. Build (`next build`)

No step may be skipped or reordered. A failing gate blocks merge — enforced by `.github/workflows/ci.yml`.

### Accepted security-audit risk (2026-07-28)
Two HIGH advisories are ignored via `pnpm-workspace.yaml`'s `auditConfig.ignoreGhsas` — both verified unfixable without breaking the build, and both judged zero real-world exploitability for this app:

- **`GHSA-f88m-g3jw-g9cj`** (sharp/libvips CVEs) — `next@16.2.12` (latest as of this writing) still pins `sharp@^0.34.5`; the patched `>=0.35.0` isn't installable without overriding next's own dependency. `next.config.ts` sets no `images.remotePatterns`, so Next's Image Optimization only ever processes our own trusted `/public` assets — no path exists for an attacker to feed sharp a malicious image.
- **`GHSA-mh99-v99m-4gvg`** (brace-expansion DoS) — pulled in by ESLint's `minimatch@3` (via `@eslint/eslintrc` and `@eslint/config-array`), which calls `brace-expansion` as a callable CJS function; forcing the patched `>=5.0.8` line breaks that contract (confirmed: `pnpm lint` crashes with `TypeError: expand is not a function`). Dev-only glob matching over our own `eslint.config.mjs` ignore patterns — never reachable with attacker-controlled input.

**Re-evaluate both on every dependency bump** (`pnpm audit` will still list them, just non-blocking) — drop the ignore entries the moment `next` or the ESLint toolchain ship a compatible fix.

## Git Workflow & PR Conventions

Binding for humans and agents, same as the QA standards above — matches this repo's actual history (verified via `git log`), not an aspirational process.

### Branches
- Base/integration branch: **`development`** — not `main`. `main` is production; it only receives `development` via its own promotion, never a direct feature-branch PR.
- Feature branches: `type/short-kebab-description`, lowercase. Types in active use: `feat`, `fix`, `chore`, `docs`, `refactor`, `test`, `ci`.
- `dependabot/npm_and_yarn/*` branches are automated (see `.github/dependabot.yml`) — don't hand-create branches in that namespace.

### Commits — Conventional Commits
- `type(scope): description` or `type: description`. Types: `feat`, `fix`, `chore`, `refactor`, `test`, `docs`, `ci`, `perf`, `build`, `style`, `revert`.
- **No AI attribution** (`Co-Authored-By: Claude`, etc.) — conventional commits only, human authorship.
- One commit per logical unit of work. Don't bundle unrelated concerns (e.g. a dependency fix + a new feature) into a single commit — separate commits keep `git blame`/revert meaningful. (Lesson from this repo's own history: a QA-standards commit and a lint-bugfix commit got bundled together on 2026-07-28 and had to be untangled after the fact.)

### Pull Requests
- Target `development`, never `main` directly.
- **Merge strategy: merge commit** (not squash, not rebase) — confirmed from existing history (`git log --merges` shows real 2-parent merge commits, e.g. PR #32).
- Title: mirrors the primary commit type, `type: short description`, under 70 characters.
- Body: 1-3 bullet summary + a test-plan checklist (lint/typecheck/test/build/manual verification actually run, not assumed).
- No mandatory issue-linking — this repo has no issue-tracker workflow and no `.github/PULL_REQUEST_TEMPLATE.md`; don't import that convention from unrelated projects/skills.

## Internationalization (i18n)

- Custom client-side implementation: React Context (`hooks/useLanguage.tsx`) + dictionary (`lib/translations.ts`).
- **Not** a routing-level i18n system — no `next-intl`, no `i18n` key in `next.config.ts`, no locale-based URLs (`/en/`, `/es/`).
- Default language state is `"es"` before hydration reads `localStorage`.
- **Known gap**: a single URL serves both languages. No `hreflang`, no dedicated indexable English URL. Googlebot always sees the Spanish render first. This limits organic reach for English-language search intent (international clients).

## Hosting & Deployment

- Migrated from GitHub Pages (static export) to Vercel (native Next.js hosting) — 2026-07-23.
- `next.config.ts`: `output: "export"` and `images.unoptimized` removed; Vercel now handles Image Optimization natively.
- Current canonical URL: `https://portfolio-three-ashen-72.vercel.app/` (temporary — a custom domain is planned).
- `.github/workflows/nextjs.yml` (old GitHub Pages deploy) deleted to stop duplicate, competing redeploys.
- Legacy GitHub Pages redirect stub built: `gh-pages-redirect/index.html` + `404.html` (meta-refresh + `canonical` + `noindex`, bilingual ES/EN) and `.github/workflows/pages-redirect.yml` (manual `workflow_dispatch`). GitHub Pages cannot serve real HTTP 301/410 status codes — this is the standard equivalent, and preserves per-path SEO signal transfer (e.g. `/projects/gmvykon` redirects to the same path on Vercel, not the homepage).
- **Pending**: set `NEXT_PUBLIC_SITE_URL` in Vercel project env vars; disable the GitHub Pages source in repo settings (or delete the `gh-pages` branch); commit, open PR, merge to `main`, then manually trigger the redirect workflow.

## SEO Audit Findings (2026-07-23)

**Strengths**: `Seo.tsx` component with canonical/OG/Twitter cards per page; JSON-LD `Person` + `WebSite` schema with `knowsAbout`/`makesOffer` (`pages/index.tsx`); `robots.txt` + `sitemap.xml` present; single `h1` per page; `alt` text enforced on images; static export removed → real Image Optimization available now.

**Gaps**:
1. 8 of 10 `link` entries in `lib/projects.ts` point to the same generic Upwork profile URL instead of a live demo or repo — thin, duplicated outbound links across pages, near-zero chance of ranking.
2. Project detail pages (`pages/projects/[slug].tsx`) are thin: title + one paragraph + stack chips + broken link. No problem → decision → result narrative.
3. No custom domain yet (see Hosting).
4. `sitemap.xml` has no `<lastmod>`.
5. i18n is client-side only — no locale-specific indexable URL, no `hreflang` (see i18n section).
6. Most content lives behind anchors on `/` (`#servicios`, `#proyectos`) rather than indexable URLs — limits ranking for specific search intent.

## Recruiter Audit Findings (2026-07-23)

**Strengths**: real, verifiable social proof — Upwork stats (5.0★, 8 jobs, 7,104 hrs, $67K+ in `components/features/Testimonials.tsx`), a 14-entry `WorkHistory` timeline, genuine client testimonials with quotes.

**Gaps**: same broken project links as SEO gap #1 above — a recruiter clicking "View Project" on 8 of 10 cards lands on a generic Upwork profile instead of proof of that specific project. Case studies don't demonstrate engineering judgment (decisions made, trade-offs, measurable outcomes) — only a tech-stack tag list.

## Projects — Case Studies

Status legend: `TBD` = pending technical interview. Order matches `lib/projects.ts`.

### 1. GMVYKON — Corporate Website
`Next.js, TypeScript, Tailwind CSS, Strapi, Vercel`

**Verified scope** (interview 2026-07-23): Arthur joined an existing project — home page + ~3 pages already built by teammates, on a pre-existing component library. He did **not** architect the site, the Strapi CMS, or its SEO setup (already in place before he joined).

- **X (Accomplished)**: Delivered 3 new pages and responsive-layout fixes across the existing page/component set for a live corporate website.
- **Y (Measured by)**: 1-month turnaround for all 3 pages, full pixel-perfect fidelity to Figma specs, zero rework requested on SEO or backend.
- **Z (By doing)**: Implementing pages in Next.js/TypeScript/Tailwind CSS from Figma using an AI-assisted scaffolding workflow (Lovable) to accelerate the design-to-code pass, extending a pre-built component library, adding new Strapi collections that mirrored the existing content schema (no CMS architecture from scratch), and going through peer code review before deploy to Vercel.

**Do NOT claim** for this project: Strapi architecture/content-modeling from scratch, SEO setup, or full site ownership — the current live copy overclaims this (see Open Decisions).

### 2. Chamco Digital — Admin Panel
`Next.js, PostgreSQL, Azure, Vercel`

**Verified scope** (interview 2026-07-23): Arthur owned the architecture end to end — confirmed consistent across two independent accounts. `media` as a distinct CRUD entity is unconfirmed; Arthur needs to check the Chamco repo's Prisma schema directly (not accessible from this repo) before that specific claim is used publicly.

- **X (Accomplished)**: Migrated a WordPress content site to a custom Next.js platform with full architecture ownership, reaching near-perfect performance scores.
- **Y (Measured by)**: Google PageSpeed Insights — desktop Lighthouse 100 on the homepage and ≥90 across most pages (up from a 50-60 baseline); mobile scores 80-92+ across most pages (up from the same baseline).
- **Z (By doing)**: Proposing MongoDB vs. PostgreSQL and implementing the client's choice (PostgreSQL, for enterprise robustness) with a fully self-designed schema (posts, users, articles + indexes anticipating future scale); choosing Azure Blob Storage for cost-efficient media storage per the client's budget constraint; implementing role-based access (admin/user/guest); building a custom CMS for CRUD (posts, articles, users — media entity TBD); migrating WordPress content with SSR + ISR (10-minute revalidation, plus on-demand revalidation on post update); applying lazy-loading, caching, and CDN delivery for images to cut media-related delay.

**Framing note**: backend is organized by domain modules (content/CMS, media, roles/auth kept separate) — this is pragmatic modular architecture, not a formally-run DDD process (no event storming, no ubiquitous language, no explicit aggregates/domain events). Do not describe this as "DDD" or "bounded contexts" without that caveat.

### 3. School Platform ("Aula") — School Management SaaS (Multi-tenant)
`lib/projects.ts` lists: `Next.js, TypeScript, Tailwind CSS, Vercel` — **significantly incomplete**, see below.

**Confirmed against real `package.json` files + repo structure (2026-07-29)**: solo personal project (not client work — frame accordingly, unlike GMVYKON/Chamco). **Still in active construction** — MVP + Stripe billing + login/logout complete. Do not describe it as finished/production-ready.

- **Architecture**: Hexagonal/Clean with Screaming Architecture on the backend — each NestJS module splits `domain/application/infrastructure`, domain has zero infrastructure imports. Monorepo: pnpm workspaces + Turborepo.
- **CRUD surface is deliberately uneven by module type — this is a design decision, not incomplete work**:
  - Full CRUD (`GET/POST/PATCH/DELETE`): students, teachers, courses, sections, evaluation-plans — these are manageable entities.
  - `GET/POST/DELETE`, no `PATCH`: enrollments, representatives — a relationship is created/broken, not edited.
  - `GET/PUT` only, no separate `POST`/`DELETE`: grades — upsert via `PUT`, no delete, consistent with an audit trail for grading.
  - `GET/POST` only: attendance — marking attendance is an upsert-by-day `POST`, no edit/delete exposed.
  - `GET/POST` only, immutable by design: payments, billing — a financial record is never edited or deleted.
  - No REST controller at all: notifications — cross-cutting concern via a `NotificationPort` with Resend/Telegram adapters, not exposed over REST.
- **Frontend** (`apps/web`): Next.js 16 (App Router, Turbopack) + React 19, TypeScript; Auth.js (NextAuth v5 beta) + `jose` for JWT; Radix UI + Tailwind CSS 3 + shadcn-style components (`class-variance-authority`, `tailwind-merge`); React Hook Form + Zod 4; Stripe (`@stripe/react-stripe-js`); testing via Vitest + Testing Library + Playwright (E2E) + `@axe-core/playwright`.
- **Backend** (`apps/api`): NestJS 11 + Express 5, TypeScript; Prisma 6 + PostgreSQL with **real multi-tenant Row-Level Security** — RLS enforced at the DB level (not just a `WHERE` clause in code), `tenantId` on every tenant-scoped table, `forTenant()` as the sole Prisma client access point; Passport + JWT (`passport-jwt`), `nestjs-cls` for per-request context, `nestjs-zod` for validated DTOs; Stripe SDK for billing, Resend for transactional emails, Helmet + Throttler for security/rate-limiting; testing via Vitest + Supertest.
- **Domain modules implemented** (`apps/api/src/modules`): auth, tenants/tenancy, students, teachers, courses, sections, enrollments, grades, evaluation-plans, attendance, representatives, billing, payments, notifications.
- **Shared**: `packages/shared` (shared TS types), `packages/config` (ESLint/tsconfig/Vitest base) — zero type duplication between frontend and backend.
- **CI/CD**: GitHub Actions (`ci.yml`), Node 24 LTS pinned via `.nvmrc`, pnpm 10.
- **Correction to prior memory**: multi-tenant isolation was previously flagged as "never technically confirmed — don't claim it." That's now outdated — it's confirmed real via a **4-layer tenant-isolation model**: `tenantId` column + DB-level RLS policy + mandatory `forTenant()` + JWT as the sole tenant-identity source (never the `Host` header). This is a genuine architectural-maturity signal, citable as-is.
- **No AI/agent feature exists today** (a parent-complaints-triage agent is a *future plan*, not built) — do not describe this project as having a "súper agente."
- X / Y / Z: still TBD for a formal write-up — project is mid-build, so avoid publishing completion/scale claims. The 4-layer tenant-isolation model above is strong citable material once the case study is written.

### 4. Hacking HR — Event Platform
`Next.js, TypeScript, Payload CMS, AWS Amplify` (frontend tags confirmed correct)

**Partially recovered from memory**: Full-Stack Developer, Oct 2025–Mar 2026. Real live URL: **https://www.hackinghrlab.io/** (currently NOT used as the project link — it points to the generic Upwork profile instead; this is a quick win for backlog item "replace broken links").
- Backend: helped design (**collaborative, not sole architect**) two MongoDB modules — "jobs" (job search) and "pods." Added TanStack Query (React Query) for pagination/query speed.
- Real trade-off story: team considered adding DB indexes to speed queries, but indexes would raise cloud cost and the client wanted minimum spend — so they deliberately skipped indexing and solved it client-side (TanStack Query + pagination) instead. Genuine cost-vs-performance judgment call, citable as-is.
- Owned Stripe payments **end-to-end** (frontend + backend) — subscription-mode checkout with coupon discounts across two membership tiers (Premium $199/yr, Premium+ $359/yr, live-verified 2026-07-24). This is Arthur's only confirmed backend-Stripe project — do not attribute backend/webhook Stripe work to Piggyback Network (frontend-only there, see #7).
- X / Y / Z (Arthur's recall, approximate — not independently verified against dashboards/invoices, mark accordingly if published): cut monthly AWS query costs from ~$11 to ~$3–4 and reduced page load time from ~3s to ~1.5s, by replacing DB indexing with client-side pagination via TanStack Query.

### 5. Otherworld Gift — ERP
`Next.js, NestJS, Prisma, MySQL, AFIP` (tags confirmed correct)

**Partially recovered from memory**: confirmed feature scope — AFIP e-invoicing (Argentina's tax-compliant invoice generation, the direct analog to "GST invoicing" asks), inventory management, sales authorization. No formal XYZ interview has been run yet (only Upwork-proposal framing exists) — do not publish metrics that don't exist.
- **Correction**: the "found hardcoded secrets, moved to env vars" anecdote belongs to a *different, undocumented* project (Wya Group / mymoldtech.com) — Arthur previously mis-attributed it to Otherworld Gift. Do not use that story for this case study.
- **No cover image**: `lib/projects.ts` has no `image` field for this entry. A `public/photos/projects/otherworld-gift.webp` file existed but was actually a screenshot of Moldtech's public marketing site (an unrelated Wya Group client, not Arthur's work) mislabeled with this project's name — removed 2026-07-30. Don't re-add an image here without a real Otherworld Gift screenshot.
- X / Y / Z: TBD — needs a real interview.

### 6. Speedy Delivery — Mobile App
`React Native, Expo, Tailwind CSS, TypeScript` — **"Expo" tag is misleading, see stack note below**.

**Confirmed via interview (2026-07-30)**: **not published on the Play Store** — no public install link exists; never describe it as a "live/downloadable app." A companion web app also exists for this product, but it was built by a different developer — Arthur's scope is the mobile app only; do not use web screenshots/UI as evidence of his work here.
- Built all screens solo: login + password recovery (verification code sent via message), admin dashboard, and two distinct role-based flows — restaurant (creates orders) and rider/"motorizado" (fulfills orders).
- Real-time order-assignment logic: incoming orders form a first-in-first-out queue per rider; if a rider doesn't accept within the window, the order automatically reassigns to the next rider in the queue. Both sides get instant push notifications on status changes.
- **Stack note**: started on React Native + Expo (managed workflow), then **fully ejected to bare React Native** because Expo's managed push-notification setup wasn't reliable enough for Firebase Cloud Messaging in production. EAS Build is still used as the CI/build tool, but the actual build is always produced without the Expo managed runtime. Update `lib/projects.ts` tags to `React Native, Firebase, TypeScript` (drop "Expo" as a standalone tag, or footnote it as "EAS Build only, ejected app" if kept).
- **Design fidelity confirmed (Figma screenshots reviewed 2026-07-30)**: implemented the full screen set pixel-perfect from Figma — ~20 screens covering the splash/brand screen, login, dual-role signup (Driver vs. Restaurant, each with its own registration form), password recovery with OTP code entry, driver dashboard/profile/history, and restaurant order-status tracking with an embedded map plus delivery history.
- Real project story (useful for interviews/proposals, needs careful framing for a public case study): Arthur estimated 15 days; the MVP itself took ~1 month, but unscoped revision requests ("arreglos y arreglos") pushed the total to ~3 months. If used publicly, frame as a lesson applied going forward (now caps revision rounds and writes scope boundaries into proposals) rather than as a raw timeline miss.
- X / Y / Z: pixel-perfect Figma-to-code implementation across ~20 screens, plus the order-queue reassignment logic + Firebase real-time notifications (rider/restaurant sync), is the strongest technical material here. No hard performance/scale metrics confirmed yet (e.g. number of riders, order volume) — don't publish numbers that weren't given.

### 7. Piggyback Network — Kids' Transportation Matching Platform
`Next.js, React, Stripe, PayPal` — tags need a category fix too, see below.

**Major correction (2026-07-30): this is NOT an e-commerce site.** Current live copy (`project4.title`/`project4.desc` in `lib/translations.ts`, `categoryKey: "category.ecommerce"` in `lib/projects.ts`) is wrong and must be rewritten. The real product: a two-sided marketplace matching parents/drivers for **children's transportation** — a user registers and either offers a route (as a driver, setting their own availability) or requests a ride for their kids; a matching algorithm pairs supply and demand. Revenue model: users pay a **subscription** to Piggyback Network, which in turn pays participating drivers their share. Real live URL: **https://www.piggybacknetwork.com/** (currently NOT used as the project link — quick-win, same as Hacking HR).

**Confirmed scope (Figma reviewed + interview, 2026-07-30)**: **frontend-only** — the matching algorithm and driver payment-split logic were built by the project's lead programmer, NOT Arthur. Do not attribute that backend logic to him.
- **Onboarding (multi-step)**: first-time users save frequent locations (home, school, practice facility, etc. — minimum 2, via Google Places autocomplete), then build "Routes" by combining saved locations into an origin → destination trip.
- **Returning-user dashboard**: sidebar with profile, a points/stats counter (gamification), and counts of routes/offers/requests. Main panel organized into editable sections — Locations, Routes, Offers, Request, and Matches.
- **Matching UI**: a driver's "Offer" (available route) is matched against a parent's "Request" (needed ride) for the same route, with a visible Pending / Approve / Decline status workflow — Arthur built this UI, the underlying match logic is the lead programmer's.
- **"Current Activity" widget**: summarizes upcoming trips (e.g. "You are driving" / "Your request is pending").
- Stripe/PayPal integration is frontend UI only (subscription payment forms), no backend/webhook handling — consistent with prior scope note; do not attribute backend-Stripe ownership here (that's Hacking HR, see #4).
- X / Y / Z: the two-sided marketplace UI (onboarding → route builder → offer/request → match approval) is strong, concrete frontend material. No hard usage/scale metrics confirmed — don't publish numbers that weren't given.

### 8. Little Taller — Frontend Suite
`React, TypeScript, Firebase, Material UI`
- No memory found. X / Y / Z: TBD — needs a real interview from scratch.

### 9. Enterprise Dashboard
`Angular, Angular Material, Google Maps API, AWS`
- No memory found. X / Y / Z: TBD — needs a real interview from scratch.

### 10. Cloudshim — SaaS Tool
`Angular, GoJS, D3.js, TypeScript` (tags confirmed correct)

**Partially recovered from memory**: Frontend Developer on a **team project** (not solo) — custom diagramming canvas built with Angular + GoJS + D3.js. Real live URL: **https://www.cloudshim.com/** (currently NOT used as the project link — third quick-win for the broken-links backlog item).
- X / Y / Z: TBD — needs a real interview for accomplishment/metrics.

## Open Decisions / Backlog

- [ ] Fix `lib/translations.ts:1072-1075` (`project12.desc`) — currently reads "Sitio web corporativo **construido con**..." implying Arthur built the whole site; real scope was 3 pages + responsive fixes on an existing project (see GMVYKON case study above). Rewrite to reflect honest scope before a client/recruiter catches the gap in an interview.
- [ ] Replace broken project links in `lib/projects.ts` — 3 have real URLs recovered from memory and are quick wins: **Hacking HR** → `https://www.hackinghrlab.io/`, **Piggyback Network** → `https://www.piggybacknetwork.com/`, **Cloudshim** → `https://www.cloudshim.com/` (all currently point to the generic Upwork profile). The other 4 Upwork-linked projects (Otherworld Gift, Speedy Delivery, Little Taller, Enterprise Dashboard) have no known public URL — need a repo/demo link or stay Upwork-linked.
- [ ] Write real X/Y/Z case studies for projects #3–#10 using the "Partially recovered from memory" notes above as a starting point (School, Hacking HR, Otherworld Gift, Speedy Delivery, Piggyback Network) or from scratch (Little Taller, Enterprise Dashboard have no memory at all; Cloudshim has scope but no metrics).
- [ ] Fix School Platform's stack tags in `lib/projects.ts` — currently frontend-only (`Next.js, TypeScript, Tailwind CSS, Vercel`), real stack also includes NestJS backend, PostgreSQL/Neon, Railway, Turborepo.
- [ ] Add a scope caveat to Piggyback Network's copy (frontend-only Stripe/PayPal, no backend/webhooks) so it doesn't read as backend payments ownership — that's Hacking HR's story, not this one.
- [ ] Buy a custom domain — not resolved; `NEXT_PUBLIC_SITE_URL` set to the Vercel URL as an interim value (2026-07-28)
- [ ] Disable GitHub Pages source / delete `gh-pages` branch; merge + trigger the redirect stub (source is already GitHub Actions — just needs the workflow run, see Hosting & Deployment)
- [ ] Add `<lastmod>` to `sitemap.xml`
- [ ] Decide on locale routing / `hreflang` strategy
- [x] `eslint-config-next` version mismatch — resolved 2026-07-28 (bumped to match `next`, migrated to flat config)
