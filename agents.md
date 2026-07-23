# Agents — Arthur Portfolio

Instrucciones de routing para sub-agentes en este proyecto.

## Stack

- Next.js 16.1.5 · Pages Router · Static Export (GitHub Pages)
- React 19.0.0 · React Compiler
- TypeScript 5+ strict
- Tailwind CSS 4
- Framer Motion (animaciones)
- Vitest + React Testing Library (tests)
- i18n: `lib/translations.ts` + `hooks/useLanguage.tsx`

## Reglas Globales (aplican a TODOS los agentes)

- **NUNCA hardcodear textos** — usar siempre `t("key", language)` de `@/lib/translations`
- **NUNCA `import React from "react"`** — solo named imports o `import type React from "react"`
- **NUNCA `useMemo`/`useCallback`** manuales — React Compiler lo maneja
- **SIEMPRE `<Image>` de next/image** para imágenes propias
- **SIEMPRE `once: true`** en `useScrollAnimation`
- **SIEMPRE ambas traducciones** (es y en) al agregar claves
- No construir después de cambios (`next build`)

## Skill Triggers

| Contexto | Skill |
| -------- | ----- |
| Componentes React, hooks, estado | react-19 |
| Routing, data fetching, Next.js config | nextjs-15 |
| Estilos, clases Tailwind | tailwind-4 |
| CSS puro, layout responsive, arquitectura CSS | css-architecture |
| TypeScript, tipos, interfaces | typescript |
| Tests, Vitest, RTL | vitest-testing |
| Animaciones, Framer Motion | (ver sección 13 de copilot-instructions.md) |
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
| Imágenes, OptimizedImage | (ver sección 14 de copilot-instructions.md) |
| i18n, traducciones | (ver sección 11 de copilot-instructions.md) |
| PR, branch, issue | branch-pr, issue-creation |
| SDD workflow | sdd-init, sdd-explore, sdd-propose, sdd-spec, sdd-design, sdd-tasks, sdd-apply, sdd-verify, sdd-archive |

## Estructura del Proyecto

```
pages/          # Rutas (Pages Router)
components/
  common/       # Componentes reutilizables (Hero, Section, ProjectCard, OptimizedImage)
  features/     # Secciones del portfolio (Certifications, Testimonials, WorkHistory, ContactLinks)
  layout/       # Header, Footer
hooks/          # useLanguage, useScrollAnimation
lib/            # translations.ts
tests/          # setup.ts, test-utils.tsx
public/         # Imágenes estáticas (referenciar como /imagen.jpg)
styles/         # globals.css (clases iridescent, glass-effect, etc.)
.atl/           # SDD skill registry
```

## Animaciones — Patrón

```typescript
// Scroll-triggered (secciones)
import { useScrollAnimation, animationVariants } from "@/hooks/useScrollAnimation";

const { ref, isInView } = useScrollAnimation({ amount: 0.2 });
<motion.div ref={ref} initial="hidden" animate={isInView ? "visible" : "hidden"}
  variants={animationVariants.fadeUp} custom={0} />

// Al montar (Hero)
<motion.h1 initial="hidden" animate="visible"
  variants={animationVariants.fadeUp} custom={0.15} />

// Grillas con stagger (cards)
<ProjectCard index={index} /> // custom={index * 0.1} internamente
```

## Imágenes — Patrón

```typescript
// Imagen con tamaño fijo
import Image from "next/image";
<Image src="/img.jpg" alt="desc" width={400} height={300} priority />

// Imagen fill
<div className="relative w-full h-40">
  <Image src={src} alt={alt} fill sizes="..." className="object-cover" />
</div>

// Componentes listos: ProjectImage, AvatarImage
import { ProjectImage, AvatarImage } from "@/components/common/OptimizedImage";
```

## Tests — Patrón

```typescript
import { describe, it, expect } from "vitest";
import { render, screen } from "@/tests/test-utils"; // siempre test-utils, no RTL directo
import { MiComponente } from "./MiComponente";

describe("MiComponente", () => {
  it("muestra el contenido esperado", () => {
    render(<MiComponente />);
    expect(screen.getByRole("heading")).toBeInTheDocument();
  });
});
```
