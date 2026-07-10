# Arthur Torres — Portfolio

Personal portfolio site for Arthur Torres, Senior Full-Stack Software Engineer. Built with [Next.js 15](https://nextjs.org) (Pages Router), bilingual (Spanish/English) via a client-side language toggle, and deployed as a static export to GitHub Pages.

## Stack

- Next.js 15 · Pages Router · Static Export
- React 19 · React Compiler
- TypeScript 5 (strict mode)
- Tailwind CSS 4
- Framer Motion, Three.js / React Three Fiber
- Vitest + React Testing Library

## Getting Started

Install dependencies and run the dev server:

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to see the result.

## Available Scripts

| Script | Description |
| --- | --- |
| `pnpm dev` | Start the development server |
| `pnpm build` | Build the production app |
| `pnpm start` | Start the production server |
| `pnpm lint` | Run ESLint |
| `pnpm typecheck` | Run TypeScript in no-emit mode |
| `pnpm test` | Run the test suite once |
| `pnpm test:watch` | Run tests in watch mode |
| `pnpm test:coverage` | Run tests with coverage report |
| `pnpm test:ui` | Run tests with the Vitest UI |

## Project Structure

```
pages/          # Routes (Pages Router)
components/     # UI components (common, features, layout)
hooks/          # useLanguage, useScrollAnimation
lib/            # translations.ts, projects.ts
tests/          # Test setup and utilities
public/         # Static assets
styles/         # Global styles
```
