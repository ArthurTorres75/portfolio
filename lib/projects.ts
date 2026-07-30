export interface Project {
  slug: string;
  titleKey: string;
  descKey: string;
  technologies: string[];
  link: string;
  image?: string;
  categoryKey: string;
  repoUrl?: string;
  highlights?: { es: string; en: string }[];
}

export const PROJECTS: Project[] = [
  {
    slug: "gmvykon",
    titleKey: "project12.title",
    descKey: "project12.desc",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Strapi", "Vercel"],
    link: "https://www.gmvykon.com/",
    image: "/photos/projects/gmvykon.webp",
    categoryKey: "category.corporateWebsite",
  },
  {
    slug: "chamco-digital",
    titleKey: "project11.title",
    descKey: "project11.desc",
    technologies: ["Next.js", "PostgreSQL", "Azure", "Vercel"],
    link: "https://chamcodigital.com/",
    image: "/photos/projects/chamco-digital.webp",
    categoryKey: "category.adminPanel",
  },
  {
    slug: "school-platform",
    titleKey: "project10.title",
    descKey: "project10.desc",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    link: "https://school-mauve-eight.vercel.app/",
    categoryKey: "category.saas",
    highlights: [
      {
        en: "Hexagonal/Clean Architecture on the backend — each NestJS module separates domain, application, and infrastructure layers, with zero infrastructure imports in the domain.",
        es: "Arquitectura Hexagonal/Clean en el backend — cada módulo de NestJS separa dominio, aplicación e infraestructura, sin imports de infraestructura en el dominio.",
      },
      {
        en: "Real multi-tenant data isolation enforced with a 4-layer model: database-level Row-Level Security, a tenantId column on every tenant-scoped table, a single mandatory data-access point (forTenant()), and JWT as the only source of tenant identity.",
        es: "Aislamiento multi-tenant real con un modelo de 4 capas: Row-Level Security a nivel de base de datos, columna tenantId en cada tabla, un único punto de acceso obligatorio a los datos (forTenant()) y JWT como única fuente de identidad de tenant.",
      },
      {
        en: "Full-stack monorepo (Turborepo + pnpm workspaces): Next.js 16 / React 19 / Auth.js on the frontend, NestJS 11 / Prisma 6 / PostgreSQL on the backend.",
        es: "Monorepo full-stack (Turborepo + pnpm workspaces): Next.js 16 / React 19 / Auth.js en el frontend, NestJS 11 / Prisma 6 / PostgreSQL en el backend.",
      },
      {
        en: "In active development — MVP, Stripe billing, and authentication are complete; CRUD surface is intentionally scoped per module (full CRUD for manageable entities like students/courses, restricted verbs for immutable records like payments and grades).",
        es: "En desarrollo activo — MVP, facturación con Stripe y autenticación completos; la superficie de CRUD está definida a propósito por módulo (CRUD completo para entidades gestionables como estudiantes/cursos, verbos restringidos para registros inmutables como pagos y calificaciones).",
      },
    ],
  },
  {
    slug: "hacking-hr",
    titleKey: "project1.title",
    descKey: "project1.desc",
    technologies: ["Next.js", "TypeScript", "Payload CMS", "AWS Amplify"],
    link: "https://www.upwork.com/freelancers/~0110023d7209510ffb?mp_source=share",
    image: "/photos/projects/hacking-hr.webp",
    categoryKey: "category.eventPlatform",
    highlights: [
      {
        en: "Owned Stripe payments end-to-end (frontend + backend): subscription checkout with coupon discounts across two membership tiers.",
        es: "Responsable de pagos con Stripe de punta a punta (frontend + backend): checkout de suscripción con cupones de descuento en dos planes de membresía.",
      },
      {
        en: "Co-designed two MongoDB backend modules (job search and community pods).",
        es: "Co-diseñé dos módulos backend en MongoDB (búsqueda de empleos y comunidades/pods).",
      },
      {
        en: "Cut monthly AWS query costs from ~$11 to ~$3–4 and page load time from ~3s to ~1.5s by replacing database indexing with client-side pagination (TanStack Query) — a deliberate cost-vs-performance trade-off.",
        es: "Reduje el costo mensual de queries en AWS de ~$11 a ~$3–4 y el tiempo de carga de ~3s a ~1.5s, reemplazando índices de base de datos por paginación client-side (TanStack Query) — una decisión deliberada de costo vs. performance.",
      },
    ],
  },
  {
    slug: "otherworld-gift-erp",
    titleKey: "project2.title",
    descKey: "project2.desc",
    technologies: ["Next.js", "NestJS", "Prisma", "MySQL", "AFIP"],
    link: "https://www.upwork.com/freelancers/~0110023d7209510ffb?mp_source=share",
    categoryKey: "category.erp",
    highlights: [
      {
        en: "Built AFIP electronic-invoicing integration for tax-compliant billing in Argentina.",
        es: "Integración de facturación electrónica con AFIP para cumplimiento fiscal en Argentina.",
      },
      {
        en: "Delivered inventory management and sales authorization workflows.",
        es: "Flujos de gestión de inventario y autorización de ventas.",
      },
      {
        en: "Automated Excel/PDF reporting, scheduled cron jobs, and a cash module with bank-transfer reconciliation.",
        es: "Reportes automatizados en Excel/PDF, cron jobs programados y módulo de caja con conciliación de transferencias bancarias.",
      },
    ],
  },
  {
    slug: "speedy-delivery-mobile",
    titleKey: "project3.title",
    descKey: "project3.desc",
    technologies: ["React Native", "Firebase", "TypeScript"],
    link: "https://www.upwork.com/freelancers/~0110023d7209510ffb?mp_source=share",
    image: "/photos/projects/speedy-delivery.webp",
    categoryKey: "category.mobileApp",
    highlights: [
      {
        en: "Built the entire mobile app solo: authentication with password recovery via verification code, and two distinct role-based flows — restaurant (order creation) and rider (order fulfillment).",
        es: "Construí toda la app móvil en solitario: autenticación con recuperación de contraseña por código de verificación, y dos flujos de rol distintos — restaurante (creación de pedidos) y motorizado (cumplimiento de pedidos).",
      },
      {
        en: "Designed a real-time order-assignment queue: incoming orders route to riders in arrival order, automatically reassigning to the next rider if one doesn't accept in time — powered by Firebase real-time notifications.",
        es: "Diseñé una cola de asignación de pedidos en tiempo real: los pedidos entrantes se asignan a motorizados por orden de llegada, reasignándose automáticamente al siguiente si no se acepta a tiempo — con notificaciones instantáneas vía Firebase.",
      },
      {
        en: "Migrated the app from Expo's managed workflow to bare React Native to get reliable Firebase Cloud Messaging push notifications in production.",
        es: "Migré la app del modo managed de Expo a React Native nativo puro para lograr que las notificaciones push de Firebase Cloud Messaging funcionaran de forma confiable en producción.",
      },
      {
        en: "Implemented ~20 screens pixel-perfect from Figma, covering onboarding, both role dashboards, and order tracking.",
        es: "Implementé ~20 pantallas pixel-perfect desde Figma, cubriendo onboarding, ambos dashboards de rol y seguimiento de pedidos.",
      },
    ],
  },
  {
    slug: "piggyback-network",
    titleKey: "project4.title",
    descKey: "project4.desc",
    technologies: ["Next.js", "React", "Stripe", "PayPal"],
    link: "https://www.upwork.com/freelancers/~0110023d7209510ffb?mp_source=share",
    image: "/photos/projects/piggyback-network.webp",
    categoryKey: "category.ecommerce",
  },
  {
    slug: "little-taller",
    titleKey: "project5.title",
    descKey: "project5.desc",
    technologies: ["React", "TypeScript", "Firebase", "Material UI"],
    link: "https://www.upwork.com/freelancers/~0110023d7209510ffb?mp_source=share",
    image: "/photos/projects/little-taller.webp",
    categoryKey: "category.frontendSuite",
  },
  {
    slug: "enterprise-dashboard",
    titleKey: "project6.title",
    descKey: "project6.desc",
    technologies: ["Angular", "Angular Material", "Google Maps API", "AWS"],
    link: "https://www.upwork.com/freelancers/~0110023d7209510ffb?mp_source=share",
    categoryKey: "category.enterpriseDashboard",
  },
  {
    slug: "cloudshim",
    titleKey: "project7.title",
    descKey: "project7.desc",
    technologies: ["Angular", "GoJS", "D3.js", "TypeScript"],
    link: "https://www.upwork.com/freelancers/~0110023d7209510ffb?mp_source=share",
    image: "/photos/projects/cloudshim.webp",
    categoryKey: "category.saasTool",
  },
];

export function getProjectPath(slug: string): string {
  return `/projects/${slug}`;
}

export function getProjectBySlug(slug: string): Project | undefined {
  return PROJECTS.find((project) => project.slug === slug);
}
