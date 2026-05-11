# Skill Registry

## User Skills

Ubicación: `c:\Users\Arthur\.copilot\skills\`

| Skill | Trigger |
| ----- | ------- |
| `nextjs-15` | Next.js routing, Server Actions, data fetching, next.config |
| `react-19` | Componentes React, hooks, sin useMemo/useCallback |
| `tailwind-4` | Estilos, clases Tailwind, cn(), theme variables |
| `css-architecture` | CSS puro, arquitectura CSS, responsive design |
| `typescript` | Tipos, interfaces, generics, strict mode |
| `vitest-testing` | Tests, Vitest, RTL, describe/it/expect, hooks test |
| `gsap-motion` | Animaciones GSAP, timeline, ScrollTrigger, performance |
| `express-api` | APIs con Express, middleware, validaciones, errores |
| `auth-security` | Auth con JWT/OAuth/sessions, RBAC, hardening |
| `docker-devops` | Dockerfiles, Compose, multi-stage builds, networking |
| `mysql-data` | Modelado MySQL, índices, optimización, migraciones |
| `seo-web` | SEO técnico, metadata, sitemap, schema.org, Core Web Vitals |
| `analytics-tracking` | Instrumentación de eventos, GA4, GTM, consentimiento |
| `github-workflow` | GitHub Actions, branching strategy, PR automation |
| `agile-scrum` | Scrum/Kanban, refinamiento, estimación, retros |
| `gitlab-ci` | Pipelines GitLab CI, runners, environments |
| `ci-cd-pipelines` | Estrategias CI/CD, release flow, deployment gates |
| `shadcn` | Componentes shadcn/ui, components.json, presets |
| `tanstack-query` | Data fetching con TanStack Query |
| `zod-4` | Validación con Zod v4 |
| `branch-pr` | Creación de PRs, workflow issue-first |
| `issue-creation` | Creación de issues en GitHub |
| `judgment-day` | Review adversarial paralelo (dual judge) |
| `skill-creator` | Crear nuevas skills para agentes |
| `sdd-init` | Inicializar SDD en un proyecto |
| `sdd-explore` | Explorar ideas antes de un cambio |
| `sdd-propose` | Crear propuesta de cambio |
| `sdd-spec` | Escribir especificaciones |
| `sdd-design` | Diseño técnico y arquitectura |
| `sdd-tasks` | Desglose de tareas de implementación |
| `sdd-apply` | Implementar tareas del cambio |
| `sdd-verify` | Validar implementación contra specs |
| `sdd-archive` | Archivar cambio completado |

## Project Conventions

- `.github/copilot-instructions.md` — estándares de código: Next.js 15, React 19, TypeScript, Tailwind, Framer Motion, imágenes, i18n, Vitest
- `agents.md` — routing de agentes, skill triggers, patrones de animación/imagen/tests

## Compact Rules

- **NO** `import React from "react"` — usar named imports o `import type React from "react"`
- **NO** `useMemo`/`useCallback` manuales — React Compiler lo maneja
- **NO** hardcodear textos — siempre `t("key", language)` de `@/lib/translations`
- **SIEMPRE** `<Image>` de next/image para imágenes propias
- **SIEMPRE** `once: true` en `useScrollAnimation`
- **SIEMPRE** ambas traducciones (es y en) al agregar claves
- Animaciones scroll: `useScrollAnimation` + `animationVariants` de `@/hooks/useScrollAnimation`
- Imágenes reutilizables: `ProjectImage`, `AvatarImage` en `@/components/common/OptimizedImage`
- Tests: custom render de `@/tests/test-utils` (incluye LanguageProvider)
- No crear rutas dinámicas (GitHub Pages static export)
- Pages Router (NO App Router)
- CI/CD: fail fast, cache de dependencias, checks obligatorios por PR
- Seguridad: nunca commitear secretos; usar variables de entorno y secret stores

## User Skills Trigger Table

| Contexto | Skill |
| -------- | ----- |
| Componentes React, hooks, estado | react-19 |
| Routing, data fetching, Next.js config | nextjs-15 |
| Estilos, clases Tailwind | tailwind-4 |
| CSS puro, layout responsive, arquitectura CSS | css-architecture |
| TypeScript, tipos, interfaces | typescript |
| Tests, Vitest, RTL | vitest-testing |
| Animaciones avanzadas con timeline/scroll | gsap-motion |
| Backend Node.js, APIs REST, middleware | express-api |
| Autenticación/autorización (JWT, OAuth, RBAC) | auth-security |
| Docker, Docker Compose, contenedores | docker-devops |
| MySQL, modelado, índices, queries, migraciones | mysql-data |
| SEO técnico, metadata, OG, schema.org | seo-web |
| Analytics, eventos, GA4, GTM, consent mode | analytics-tracking |
| GitHub Actions, branching, PR workflow | github-workflow |
| Scrum, Kanban, metodologías ágiles | agile-scrum |
| GitLab, runners, pipelines | gitlab-ci |
| CI/CD multi-entorno, releases, deployments | ci-cd-pipelines |
| PR, branch | branch-pr |
| Issues GitHub | issue-creation |
| SDD workflow | sdd-init, sdd-explore, sdd-propose, sdd-spec, sdd-design, sdd-tasks, sdd-apply, sdd-verify, sdd-archive |
| Review adversarial | judgment-day |
