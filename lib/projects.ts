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

export const UPWORK_PROFILE_FALLBACK =
  "https://www.upwork.com/freelancers/~0110023d7209510ffb?mp_source=share";

export const PROJECTS: Project[] = [
  {
    slug: "gmvykon",
    titleKey: "project12.title",
    descKey: "project12.desc",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Strapi", "GSAP"],
    link: "https://www.gmvykon.com/",
    image: "/photos/projects/gmvykon.webp",
    categoryKey: "category.corporateWebsite",
    highlights: [
      {
        en: "One of two senior frontend developers on the project — 118 of 266 commits, the largest individual contributor, building most of the site's pages: home, header, contact, about, login/register, user profile, careers, and equipment sale finder/detail.",
        es: "Uno de los dos frontend developers senior del proyecto — 118 de 266 commits, el mayor contribuyente individual, construyendo la mayoría de las páginas del sitio: home, header, contacto, nosotros, login/registro, perfil de usuario, bolsa de trabajo y buscador/detalle de equipos en venta.",
      },
      {
        en: "Built a PDF viewer feature from scratch (react-pdf-viewer + pdfjs-dist) for equipment spec sheets and documents.",
        es: "Construí desde cero un visor de PDF (react-pdf-viewer + pdfjs-dist) para fichas técnicas y documentos de equipos.",
      },
      {
        en: "Worked on the crane-rental cost simulator and added a permissions layer restricting certain content to registered users.",
        es: "Trabajé en el simulador de costos de renta de grúas y agregué una capa de permisos que restringe cierto contenido a usuarios registrados.",
      },
    ],
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
    link: UPWORK_PROFILE_FALLBACK,
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
    link: UPWORK_PROFILE_FALLBACK,
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
    link: UPWORK_PROFILE_FALLBACK,
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
    technologies: ["Next.js", "React", "Stripe", "PayPal", "Google Maps API"],
    link: "https://www.piggybacknetwork.com/",
    image: "/photos/projects/piggyback-network.webp",
    categoryKey: "category.marketplace",
    highlights: [
      {
        en: "Built the multi-step onboarding flow: first-time users save frequent locations (home, school, practice facility) via Google Places autocomplete, then combine them into origin-to-destination \"Routes\" traced on a Google Maps view (point A to point B).",
        es: "Construí el flujo de onboarding multi-paso: los usuarios primerizos guardan ubicaciones frecuentes (casa, colegio, entrenamiento) con autocompletado de Google Places, y las combinan en \"Rutas\" de origen a destino trazadas sobre un mapa de Google Maps (punto A a punto B).",
      },
      {
        en: "Built the returning-user dashboard: Locations, Routes, Offers, Requests, and Matches, each independently editable, plus a stats sidebar and a \"Current Activity\" summary of upcoming trips.",
        es: "Construí el dashboard del usuario recurrente: Locations, Routes, Offers, Requests y Matches, cada una editable de forma independiente, más una barra lateral de estadísticas y un resumen \"Current Activity\" de próximos viajes.",
      },
      {
        en: "Implemented the offer/request matching UI, including the Pending / Approve / Decline status workflow — the matching algorithm and driver payment-split logic were owned by the project's lead engineer.",
        es: "Implementé la UI de matching entre ofertas y pedidos, incluyendo el flujo de estados Pending / Approve / Decline — el algoritmo de matching y el reparto de pagos al conductor fueron responsabilidad del ingeniero líder del proyecto.",
      },
    ],
  },
  {
    slug: "little-taller",
    titleKey: "project5.title",
    descKey: "project5.desc",
    technologies: ["Next.js", "React", "Firebase", "Material UI"],
    link: UPWORK_PROFILE_FALLBACK,
    repoUrl: "https://github.com/Foster-Cooperative/foster-cooperative",
    image: "/photos/projects/little-taller.webp",
    categoryKey: "category.frontendSuite",
    highlights: [
      {
        en: "Built the forgot-password / reset-password flow for Foster Cooperative (a Next.js/Firebase community platform connecting Phoenix's foster-care community), including token-expiration handling — verified directly against the project's public repo.",
        es: "Construí el flujo de recuperación/reseteo de contraseña para Foster Cooperative (plataforma comunitaria en Next.js/Firebase que conecta a la comunidad de acogida familiar de Phoenix), incluyendo el manejo de expiración de tokens — verificado directamente contra el repo público del proyecto.",
      },
      {
        en: "Also implemented Earmarkz (React + Tailwind CSS, frontend-only, pixel-perfect from Figma) for another Little Taller client — the project was paused and later finished by a different developer after Arthur had moved on to other work.",
        es: "También implementé Earmarkz (React + Tailwind CSS, solo frontend, pixel-perfect desde Figma) para otro cliente de Little Taller — el proyecto se pausó y lo terminó otro desarrollador luego de que Arthur ya estaba en otro trabajo.",
      },
    ],
  },
  {
    slug: "enterprise-dashboard",
    titleKey: "project6.title",
    descKey: "project6.desc",
    technologies: ["Angular", "Angular Material", "GoJS", "TypeScript"],
    link: UPWORK_PROFILE_FALLBACK,
    categoryKey: "category.enterpriseDashboard",
    highlights: [
      {
        en: "Built (with one other developer) a GoJS-based AWS-architecture diagramming canvas for Montrix, the same kind of tool as Cloudshim but for a separate brand.",
        es: "Construí (con otro desarrollador) un canvas de diagramación de arquitecturas AWS basado en GoJS para Montrix, la misma clase de herramienta que Cloudshim pero para una marca separada.",
      },
      {
        en: "Applied the same GoJS performance-optimization approach as Cloudshim to handle diagrams with many nodes: minimal node templates, fewer bindings, incremental model updates, batched transactions, and layouts run only when necessary.",
        es: "Apliqué el mismo enfoque de optimización de performance en GoJS que en Cloudshim para manejar diagramas con muchos nodos: node templates mínimos, menos bindings, actualizaciones incrementales del modelo, transactions agrupadas y layouts ejecutados solo cuando era necesario.",
      },
    ],
  },
  {
    slug: "cloudshim",
    titleKey: "project7.title",
    descKey: "project7.desc",
    technologies: ["Angular", "GoJS", "D3.js", "TypeScript"],
    link: "https://www.cloudshim.com/",
    image: "/photos/projects/cloudshim.webp",
    categoryKey: "category.saasTool",
    highlights: [
      {
        en: "Built the GoJS diagramming canvas: draggable nodes that render as the specific AWS resource shape/icon the user selects (EC2, S3, Lambda, etc.).",
        es: "Construí el canvas de diagramación con GoJS: nodos arrastrables que se renderizan con la forma/ícono del recurso de AWS que el usuario elige (EC2, S3, Lambda, etc.).",
      },
      {
        en: "Built reusable, DRY Angular components for the screens hosting the GoJS diagrams, avoiding duplicated screen code across the app.",
        es: "Construí componentes de Angular reutilizables y sin duplicación (DRY) para las pantallas que alojan los diagramas de GoJS.",
      },
      {
        en: "Diagnosed and fixed a real rendering bottleneck with many nodes on screen: kept node templates minimal, reduced binding count, updated the GoJS model incrementally instead of replacing it, batched changes in transactions, ran layouts only when necessary, and disabled unneeded animations.",
        es: "Diagnostiqué y resolví un cuello de botella real de renderizado con muchos nodos en pantalla: mantuve los node templates simples, reduje la cantidad de bindings, actualicé el modelo de GoJS de forma incremental en vez de reemplazarlo, agrupé cambios en transactions, ejecuté layouts solo cuando era necesario y desactivé animaciones innecesarias.",
      },
    ],
  },
];

export function getProjectPath(slug: string): string {
  return `/projects/${slug}`;
}

export function getProjectBySlug(slug: string): Project | undefined {
  return PROJECTS.find((project) => project.slug === slug);
}
