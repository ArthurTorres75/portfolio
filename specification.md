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

### 3. School Platform — SaaS
`Next.js, TypeScript, Tailwind CSS, Vercel`
- X / Y / Z: TBD

### 4. Hacking HR — Event Platform
`Next.js, TypeScript, Payload CMS, AWS Amplify`
- X / Y / Z: TBD

### 5. Otherworld Gift — ERP
`Next.js, NestJS, Prisma, MySQL, AFIP`
- X / Y / Z: TBD

### 6. Speedy Delivery — Mobile App
`React Native, Expo, Tailwind CSS, TypeScript`
- X / Y / Z: TBD

### 7. Piggyback Network — E-commerce
`Next.js, React, Stripe, PayPal`
- X / Y / Z: TBD

### 8. Little Taller — Frontend Suite
`React, TypeScript, Firebase, Material UI`
- X / Y / Z: TBD

### 9. Enterprise Dashboard
`Angular, Angular Material, Google Maps API, AWS`
- X / Y / Z: TBD

### 10. Cloudshim — SaaS Tool
`Angular, GoJS, D3.js, TypeScript`
- X / Y / Z: TBD

## Open Decisions / Backlog

- [ ] Fix `lib/translations.ts:1072-1075` (`project12.desc`) — currently reads "Sitio web corporativo **construido con**..." implying Arthur built the whole site; real scope was 3 pages + responsive fixes on an existing project (see GMVYKON case study above). Rewrite to reflect honest scope before a client/recruiter catches the gap in an interview.
- [ ] Replace the 8 broken project links (Upwork → live demo or repo per project)
- [ ] Buy a custom domain; update `NEXT_PUBLIC_SITE_URL` and all references
- [ ] Disable GitHub Pages source / delete `gh-pages` branch; merge + trigger the redirect stub
- [ ] Add `<lastmod>` to `sitemap.xml`
- [ ] Decide on locale routing / `hreflang` strategy
- [ ] `eslint-config-next` is pinned to `15.2.9` while `next` is `16.1.5` — version mismatch, not yet addressed
