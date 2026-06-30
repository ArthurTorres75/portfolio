export type Language = "es" | "en";

export interface Translations {
  [key: string]: {
    es: string;
    en: string;
  };
}

type TranslationParams = Record<string, string | number>;

export const translations: Translations = {
  // Navigation
  "nav.inicio": {
    es: "Inicio",
    en: "Home",
  },
  "nav.sobreMi": {
    es: "Sobre Mí",
    en: "About Me",
  },
  "nav.certificaciones": {
    es: "Certificaciones",
    en: "Certifications",
  },
  "nav.proyectos": {
    es: "Proyectos",
    en: "Projects",
  },
  "nav.testimonios": {
    es: "Testimonios",
    en: "Testimonials",
  },
  "nav.contacto": {
    es: "Contacto",
    en: "Contact",
  },

  // Watermark
  "watermark.text": {
    es: "El Señor es mi proveedor ✝ El Shaddai",
    en: "The Lord is my provider ✝ El Shaddai",
  },

  // Hero Section
  "hero.greeting": {
    es: "Hola, soy",
    en: "Hello, I'm",
  },
  "hero.title": {
    es: "Senior Full-Stack Software Engineer",
    en: "Senior Full-Stack Software Engineer",
  },
  "hero.description": {
    es: "Ingeniero en Informática. Construyo aplicaciones web que funcionan rápido, no se rompen y crecen con tu negocio. Trabajo con método: mido, decido con criterio y dejo procesos que se sostienen solos. Y cuando no existe un camino, lo diseño.",
    en: "Computer Engineer. I build web applications that run fast, don't break, and grow with your business. I work with method: I measure, decide with criteria, and leave processes that run on their own. And when no path exists, I design one.",
  },
  "hero.viewProjects": {
    es: "Ver Mis Proyectos",
    en: "View My Projects",
  },
  "hero.contact": {
    es: "Contactarme",
    en: "Contact Me",
  },
  "hero.downloadCV": {
    es: "Descargar CV",
    en: "Download CV",
  },

  // Services Section
  "nav.servicios": {
    es: "Servicios",
    en: "Services",
  },
  "services.title": {
    es: "¿En qué puedo ayudarte?",
    en: "How Can I Help You?",
  },
  "services.subtitle": {
    es: "Soluciones digitales a medida para hacer crecer tu negocio",
    en: "Custom digital solutions to grow your business",
  },
  "services.cta": {
    es: "Hablemos de tu proyecto",
    en: "Let's talk about your project",
  },
  "services.web.title": {
    es: "Aplicaciones Web a Medida",
    en: "Custom Web Applications",
  },
  "services.web.desc": {
    es: "Diseño y desarrollo tu plataforma desde cero — interfaces modernas, rápidas y escalables adaptadas exactamente a los procesos de tu negocio.",
    en: "I design and build your platform from scratch — modern, fast, and scalable interfaces tailored exactly to your business processes.",
  },
  "services.migration.title": {
    es: "Migración y Mejora de Sistemas",
    en: "System Migration & Improvement",
  },
  "services.migration.desc": {
    es: "¿Tu sistema actual es lento, difícil de mantener o quedó chico? Lo modernizo, migro a tecnologías actuales y agrego las funcionalidades que necesitás.",
    en: "Is your current system slow, hard to maintain, or outgrown? I modernize it, migrate to current technologies, and add the features you need.",
  },
  "services.payments.title": {
    es: "Integración de Pagos",
    en: "Payment Integration",
  },
  "services.payments.desc": {
    es: "Integro pasarelas de pago seguras (Stripe, PayPal) con flujos de cobro, suscripciones, webhooks y gestión de transacciones para tu plataforma.",
    en: "I integrate secure payment gateways (Stripe, PayPal) with checkout flows, subscriptions, webhooks, and transaction management for your platform.",
  },
  "services.cloud.title": {
    es: "Deploy y Cloud",
    en: "Cloud Deployment",
  },
  "services.cloud.desc": {
    es: "Configuro y despliego tu aplicación en AWS, Vercel o Azure con CI/CD automatizado, variables de entorno seguras y monitoreo de disponibilidad.",
    en: "I configure and deploy your application on AWS, Vercel, or Azure with automated CI/CD, secure environment variables, and uptime monitoring.",
  },
  "services.mobile.title": {
    es: "Apps Móviles",
    en: "Mobile Apps",
  },
  "services.mobile.desc": {
    es: "Desarrollo aplicaciones móviles para iOS y Android con React Native — una sola base de código, experiencia nativa y sincronización en tiempo real.",
    en: "I build mobile apps for iOS and Android with React Native — one codebase, native experience, and real-time synchronization.",
  },
  "services.seo.title": {
    es: "Rendimiento y SEO",
    en: "Performance & SEO",
  },
  "services.seo.desc": {
    es: "Optimizo tu sitio para que cargue rápido, aparezca en Google y convierta visitas en clientes — Lighthouse ≥ 90, Core Web Vitals y SEO técnico.",
    en: "I optimize your site to load fast, rank on Google, and convert visits into clients — Lighthouse ≥ 90, Core Web Vitals, and technical SEO.",
  },

  // About Section
  "about.title": {
    es: "Sobre Mí",
    en: "About Me",
  },
  "about.subtitle": {
    es: "Senior Full-Stack Software Engineer · +{fullStackYears} años en desarrollo full stack · Soluciones Web y Móviles Escalables · Desarrollo asistido por IA · SDD · Trabajo remoto",
    en: "Senior Full-Stack Software Engineer · +{fullStackYears} years in full-stack development · Building Scalable Web & Mobile Solutions · AI-assisted development · SDD · Remote work",
  },
  "about.intro": {
    es: "Soy un Senior Full-Stack Software Engineer especializado en construir soluciones web y móviles escalables. Trabajo con desarrollo asistido por IA y Specification-Driven Development (SDD) para entregar software confiable, mantenible y alineado al negocio. Colaboro de forma remota con equipos y clientes, cuidando arquitectura, rendimiento y una ejecución clara de punta a punta.",
    en: "I am a Senior Full-Stack Software Engineer focused on building scalable web and mobile solutions. I work with AI-assisted development and Specification-Driven Development (SDD) to deliver reliable, maintainable software aligned with business goals. I collaborate remotely with teams and clients while maintaining strong architecture, performance, and clear end-to-end execution.",
  },
  "about.storyTitle": {
    es: "🌱 Mi Historia",
    en: "🌱 My Story",
  },
  "about.storyDesc": {
    es: "Vengo de una familia humilde que me enseñó dos cosas: a creer en Dios y a no rendirme nunca. Me enamoré de la informática antes de la universidad, de pura curiosidad: trasteando scripts, haciendo mods para juegos como Counter-Strike y armando mi primera página web. Así aprendí HTML, CSS, JavaScript, PHP y SQL por mi cuenta. En la universidad sumé C y Java, pero mis proyectos siempre fueron la web. Después, por la situación económica, hice una pausa y trabajé seis años en Timberland — empecé en el depósito y crecí hasta gerente de tienda, una etapa que me dio disciplina, trato con la gente y experiencia liderando un equipo. En 2018 volví a mi verdadero camino: reinicié mi carrera en el desarrollo de software, primero como frontend y luego como full stack. Mi fe es el centro de todo lo que hago: de ahí saco la constancia, la honestidad y las ganas de hacer las cosas bien, no solo rápido.",
    en: "I come from a humble family that taught me two things: to believe in God and to never give up. I fell in love with computing before university, out of pure curiosity — tinkering with scripts, building mods for games like Counter-Strike, and putting together my first website. That's how I taught myself HTML, CSS, JavaScript, PHP, and SQL. At university I added C and Java, but my projects were always the web. Later, due to financial circumstances, I paused and spent six years at Timberland — I started in the warehouse and worked my way up to store manager, a stage that gave me discipline, people skills, and real experience leading a team. In 2018 I returned to my true path: I restarted my career in software development, first as a frontend developer and then full stack. My faith is at the center of everything I do: it's where my consistency, honesty, and drive to do things right — not just fast — come from.",
  },
  "about.frontendTitle": {
    es: "🎨 Desarrollador Front-End",
    en: "🎨 Front-End Developer",
  },
  "about.frontendDesc": {
    es: "Más de {frontendYears} años con Angular (Signals, RxJS), React.js y Next.js, implementando interfaces interactivas con Material UI, TailwindCSS, shadcn/ui y Payload CMS. Gestión de estado con Zustand y Redux Toolkit, formularios con React Hook Form, data fetching con TanStack Query y Axios sobre REST APIs. Librerías de visualización como D3.js, Chart.js y Plotly.js. Actualmente aprendiendo Three.js y Anime.js. Experto en APIs de Google Maps, GoJS para diagramas y optimización de diseños responsivos.",
    en: "Over {frontendYears} years with Angular (Signals, RxJS), React.js and Next.js, building interactive interfaces with Material UI, TailwindCSS, shadcn/ui, and Payload CMS. State management with Zustand and Redux Toolkit, forms with React Hook Form, data fetching with TanStack Query and Axios over REST APIs. Visualization libraries such as D3.js, Chart.js, and Plotly.js. Currently learning Three.js and Anime.js. Expert in Google Maps APIs, GoJS for diagrams, and responsive layout optimization.",
  },
  "about.backendTitle": {
    es: "⚙️ Desarrollador Full-Stack",
    en: "⚙️ Full-Stack Developer",
  },
  "about.backendDesc": {
    es: "Experiencia con Node.js, NestJS, Prisma ORM, construyendo aplicaciones escalables con PostgreSQL, MongoDB, Firebase y Supabase. Implementación de autenticación JWT, RBAC, generación de reportes (PDF/Excel), cron jobs, Redis para caché, y SendGrid para emails automatizados.",
    en: "Experience with Node.js, NestJS, Prisma ORM, building scalable applications with PostgreSQL, MongoDB, Firebase and Supabase. Implementation of JWT authentication, RBAC, report generation (PDF/Excel), cron jobs, Redis for caching, and SendGrid for automated emails.",
  },
  "about.cloudTitle": {
    es: "☁️ Cloud & DevOps",
    en: "☁️ Cloud & DevOps",
  },
  "about.cloudDesc": {
    es: "Experiencia desplegando aplicaciones en AWS (S3, Lambda, EC2), Vercel, Terraform para infraestructura como código, Firebase (authentication, hosting, Firestore), Supabase y Hostinger. Familiarizado con CI/CD, Git, GitLab, GitHub, y herramientas de gestión como Jira y Trello.",
    en: "Experience deploying applications on AWS (S3, Lambda, EC2), Vercel, Terraform for infrastructure as code, Firebase (authentication, hosting, Firestore), Supabase and Hostinger. Familiar with CI/CD, Git, GitLab, GitHub, and management tools like Jira and Trello.",
  },
  "about.techStack": {
    es: "🛠️ Stack Tecnológico",
    en: "🛠️ Tech Stack",
  },
  "about.workEthic": {
    es: "💼 Enfoque Profesional",
    en: "💼 Work Ethic",
  },
  "about.workEthicDesc": {
    es: "Altamente organizado y comprometido con las mejores prácticas de programación. Tomo mi trabajo con seriedad, asegurando resultados de alta calidad mientras mantengo un enfoque colaborativo y comunicativo con mi equipo.",
    en: "Highly organized and committed to best programming practices. I take my work seriously, ensuring high-quality results while maintaining a collaborative and communicative approach with my team.",
  },

  // Work History Section
  "nav.experiencia": {
    es: "Experiencia",
    en: "Experience",
  },
  "workHistory.title": {
    es: "Experiencia Laboral",
    en: "Work Experience",
  },
  "workHistory.subtitle": {
    es: "Mi trayectoria profesional en desarrollo de software",
    en: "My professional career in software development",
  },
  "workHistory.present": {
    es: "Presente",
    en: "Present",
  },
  "workHistory.otherExperiencesTitle": {
    es: "Otras experiencias",
    en: "Other Experiences",
  },
  "workHistory.otherExperiencesSubtitle": {
    es: "Proyectos destacados fuera de mi historial laboral principal",
    en: "Featured projects outside my main work history",
  },
  "workHistory.other1.title": {
    es: "Proyecto de Hackathon",
    en: "Hackathon Project",
  },
  "workHistory.other1.desc": {
    es: "Proyecto desarrollado en formato hackathon, enfocado en entregar una solución funcional en tiempo limitado con alto impacto visual y técnico.",
    en: "Project built in a hackathon format, focused on delivering a functional solution in limited time with high visual and technical impact.",
  },
  "workHistory.other2.title": {
    es: "Mountain Portfolio",
    en: "Mountain Portfolio",
  },
  "workHistory.other2.desc": {
    es: "Portfolio temático con enfoque creativo, animaciones inmersivas y diseño visual orientado a destacar identidad y storytelling del proyecto.",
    en: "Thematic portfolio with a creative approach, immersive animations, and visual design focused on highlighting project identity and storytelling.",
  },
  "workHistory.other3.title": {
    es: "Sistema Multi-Agente de Orquestación con IA",
    en: "AI Multi-Agent Orchestration System",
  },
  "workHistory.other3.desc": {
    es: "Diseñé un sistema multi-agente que orquesta sub-agentes especializados aplicando Specification-Driven Development (SDD): yo escribo y soy dueño de la especificación, y la IA implementa contra ese contrato bajo mi dirección y supervisión. Incluye lógica de decisión y escalación, ruteo de modelos por tarea, integraciones MCP y memoria persistente. La IA es una herramienta para acelerar mi trabajo — la dirección siempre es humana.",
    en: "I designed a multi-agent system that orchestrates specialized sub-agents using Specification-Driven Development (SDD): I write and own the specification, and the AI implements against that contract under my direction and supervision. It includes decision and escalation logic, per-task model routing, MCP integrations, and persistent memory. AI is a tool to accelerate my work — direction always stays human.",
  },
  "workHistory.other4.title": {
    es: "Olimpiadas Venezolanas de Informática — Software Educativo",
    en: "Venezuelan Informatics Olympics — Educational Software",
  },
  "workHistory.other4.desc": {
    es: "Participante en las III Olimpiadas Venezolanas de Informática (2011-2012), categoría Software Educativo, representando al IUT Táchira en la I Gran Feria Nacional de Edumática y Telemática. Mi primer acercamiento formal a construir software con propósito educativo — la misma vocación que hoy impulsa mi proyecto School SaaS.",
    en: "Participant in the III Venezuelan Informatics Olympics (2011-2012), Educational Software category, representing IUT Táchira at the I National Edumática & Telemática Fair. My first formal experience building software with an educational purpose — the same drive behind my School SaaS project today.",
  },

  // Job 12 — Upwork (MERN Stack)
  "job12.title": {
    es: "Desarrollador Full Stack (MERN)",
    en: "Full Stack Developer (MERN)",
  },
  "job12.company": {
    es: "Upwork / Development MERN Stack — Remoto",
    en: "Upwork / Development MERN Stack — Remote",
  },
  "job12.period": {
    es: "Feb 2025 – Presente",
    en: "Feb 2025 – Present",
  },
  "job12.desc": {
    es: "Contrato activo en Upwork como desarrollador full stack con MERN, NestJS y Next.js. Implementación de interfaces con Tailwind CSS, desarrollo de APIs y módulos backend, despliegue y administración de hosting en Hostinger, y soporte de mantenimiento para nuevos requerimientos.",
    en: "Active Upwork contract as a full-stack developer using MERN, NestJS, and Next.js. Built interfaces with Tailwind CSS, developed APIs and backend modules, managed deployment and hosting on Hostinger, and provided maintenance support for new requirements.",
  },

  // Job 13 — Fibtotech
  "job13.title": {
    es: "Desarrollador Frontend",
    en: "Frontend Developer",
  },
  "job13.company": {
    es: "Fibtotech — Remoto",
    en: "Fibtotech — Remote",
  },
  "job13.period": {
    es: "Feb 2025 – Jul 2025",
    en: "Feb 2025 – Jul 2025",
  },
  "job13.desc": {
    es: "Soporte frontend para varios sistemas con Next.js, Tailwind CSS y visualizaciones avanzadas con Plotly y Chart.js. Integración de Google Maps y optimización de rendimiento para manejar millones de registros de datos en interfaces interactivas.",
    en: "Frontend support across multiple systems with Next.js, Tailwind CSS, and advanced visualizations using Plotly and Chart.js. Integrated Google Maps and optimized performance to handle millions of data records in interactive interfaces.",
  },

  // Job 1 — Hacking HR
  "job1.title": {
    es: "Desarrollador Full Stack",
    en: "Full-Stack Developer",
  },
  "job1.company": {
    es: "Hacking HR — Remoto (EE. UU.)",
    en: "Hacking HR — Remote (USA)",
  },
  "job1.period": {
    es: "Oct 2025 – Mar 2026",
    en: "Oct 2025 – Mar 2026",
  },
  "job1.desc": {
    es: "Desarrollo de una plataforma escalable de gestión de eventos con Next.js y un CMS headless, optimizando el consumo de APIs y el rendimiento frontend. Extensión de estructuras en Payload CMS. Lideré la migración de Brevo a Amazon SES, configuración de verificación de dominio y SMTP. Análisis de DNS y tráfico con Cloudflare, infraestructura AWS con Terraform, despliegues en AWS Amplify y resolución de incidencias CI/CD.",
    en: "Contributed to a scalable event management platform built with Next.js and a headless CMS, optimizing API consumption and improving frontend performance. Extended Payload CMS structures to support new features. Led migration from Brevo to Amazon SES, configuring domain verification and SMTP for better deliverability. Analyzed DNS and traffic with Cloudflare, supported AWS infrastructure using Terraform, and managed deployments in AWS Amplify.",
  },

  // Job 2 — Speedy Delivery
  "job2.title": {
    es: "Desarrollador Mobile",
    en: "Mobile Developer",
  },
  "job2.company": {
    es: "Speedy Delivery — Híbrido (Venezuela)",
    en: "Speedy Delivery — Hybrid (Venezuela)",
  },
  "job2.period": {
    es: "Ago 2025 – Oct 2025",
    en: "Aug 2025 – Oct 2025",
  },
  "job2.desc": {
    es: "Desarrollo de aplicación móvil de delivery de comida con React Native y Expo Go. Implementación de interfaces responsivas con Tailwind CSS y flujos de pedidos en tiempo real.",
    en: "Development of a food delivery mobile app with React Native and Expo Go. Implementation of responsive interfaces with Tailwind CSS and real-time order flows.",
  },

  // Job 3 — OtherWorld Gift
  "job3.title": {
    es: "Desarrollador Full Stack",
    en: "Full-Stack Developer",
  },
  "job3.company": {
    es: "OtherWorld Gift — Remoto (Argentina)",
    en: "OtherWorld Gift — Remote (Argentina)",
  },
  "job3.period": {
    es: "Jun 2024 – Ene 2025",
    en: "Jun 2024 – Jan 2025",
  },
  "job3.desc": {
    es: "Desarrollo de un sistema robusto con reportes automatizados en Excel y PDF, módulos CRUD completos, autorización de ventas para control de crédito y gestión de inventario. Implementación de cron jobs con soporte de zona horaria, algoritmos para gestión de productos duplicados, modelos de datos optimizados en Prisma, integración de sistemas de pago y gestión de caja con seguimiento de ingresos y transferencias bancarias.",
    en: "Developed a robust system with automated Excel and PDF reporting, full CRUD modules, a sales authorization module for credit control, and inventory management. Implemented cron jobs with time zone support, designed algorithms to manage duplicate products, optimized data models in Prisma with advanced validations, integrated payment systems, and implemented a cash management system with revenue tracking and bank transfers.",
  },

  // Job 4 — PiggyBack Network
  "job4.title": {
    es: "Desarrollador Frontend",
    en: "Frontend Developer",
  },
  "job4.company": {
    es: "PiggyBack Network — Remoto (EE. UU.)",
    en: "PiggyBack Network — Remote (USA)",
  },
  "job4.period": {
    es: "Abr 2022 – May 2024",
    en: "Apr 2022 – May 2024",
  },
  "job4.desc": {
    es: "Desarrollo frontend con Next.js, React y TypeScript. Integración de pasarelas de pago Stripe y PayPal. Optimización de rendimiento, diseño responsivo e infraestructura AWS para una plataforma web escalable.",
    en: "Frontend development with Next.js, React, and TypeScript. Integration of Stripe and PayPal payment gateways. Performance optimization, responsive design, and AWS infrastructure for a scalable web platform.",
  },

  // Job 5 — Little Taller
  "job5.title": {
    es: "Desarrollador Frontend",
    en: "Frontend Developer",
  },
  "job5.company": {
    es: "Little Taller — Remoto (EE. UU.)",
    en: "Little Taller — Remote (USA)",
  },
  "job5.period": {
    es: "Ago 2022 – Ene 2024",
    en: "Aug 2022 – Jan 2024",
  },
  "job5.desc": {
    es: "Desarrollo frontend con React, Material UI, Firebase, Tailwind CSS y TypeScript. Despliegues en Vercel. Comunicación efectiva en equipo y optimización de aplicaciones web.",
    en: "Frontend development with React, Material UI, Firebase, Tailwind CSS, and TypeScript. Deployments on Vercel. Effective team communication and web application optimization.",
  },

  // Job 6 — Montrix
  "job6.title": {
    es: "Desarrollador Frontend",
    en: "Frontend Developer",
  },
  "job6.company": {
    es: "Montrix — Remoto (EE. UU.)",
    en: "Montrix — Remote (USA)",
  },
  "job6.period": {
    es: "Jun 2021 – Jul 2022",
    en: "Jun 2021 – Jul 2022",
  },
  "job6.desc": {
    es: "Desarrollo de interfaces interactivas con Angular, Angular Material y Bootstrap. Integración de APIs de Google Maps y GoJS para diagramas. Optimización de rendimiento y diseño UX en aplicaciones empresariales de gran escala en AWS.",
    en: "Development of interactive interfaces with Angular, Angular Material, and Bootstrap. Integration of Google Maps APIs and GoJS for diagrams. Performance optimization and UX design in large-scale enterprise applications on AWS.",
  },

  // Job 7 — Cloudshim
  "job7.title": {
    es: "Desarrollador Frontend",
    en: "Front-End Developer",
  },
  "job7.company": {
    es: "Cloudshim — Remoto (EE. UU.)",
    en: "Cloudshim — Remote (USA)",
  },
  "job7.period": {
    es: "Oct 2020 – May 2021",
    en: "Oct 2020 – May 2021",
  },
  "job7.desc": {
    es: "Desarrollo de software con Angular, Angular Material y bibliotecas JavaScript como GoJS y D3.js. Adquirí un conocimiento profundo de la librería GoJS para diagramación. Diseño responsivo y gráficos interactivos en AWS.",
    en: "Software development with Angular, Angular Material, and JavaScript libraries like GoJS and D3.js. Gained deep-level knowledge of the GoJS diagramming library. Responsive design and interactive charts on AWS.",
  },

  // Job 8 — Zippyttech
  "job8.title": {
    es: "Desarrollador Frontend",
    en: "Front-End Developer",
  },
  "job8.company": {
    es: "Zippyttech Tecnología e Innovación — Venezuela",
    en: "Zippyttech Technology & Innovation — Venezuela",
  },
  "job8.period": {
    es: "Feb 2018 – Oct 2020",
    en: "Feb 2018 – Oct 2020",
  },
  "job8.desc": {
    es: "Desarrollo frontend con Angular, TypeScript, Angular Material y Bootstrap. Integración de Google Maps API, diseño responsivo con CSS y SCSS. Trabajo en equipo con metodologías ágiles en entorno Linux.",
    en: "Frontend development with Angular, TypeScript, Angular Material, and Bootstrap. Google Maps API integration, responsive design with CSS and SCSS. Agile team collaboration in a Linux environment.",
  },

  // Job 9 — Crazy Imagine Software (Umbrella)
  "job9.title": {
    es: "Desarrollador Full Stack — Freelance",
    en: "Full Stack Developer — Freelance",
  },
  "job9.company": {
    es: "Crazy Imagine Software — Venezuela",
    en: "Crazy Imagine Software — Venezuela",
  },
  "job9.period": {
    es: "Oct 2020 – Presente",
    en: "Oct 2020 – Present",
  },
  "job9.desc": {
    es: "Desarrollo de software freelance para múltiples clientes internacionales a través de esta agencia. Aplicación de metodologías ágiles en proyectos de diversa escala y tecnologías.",
    en: "Freelance software development for multiple international clients through this agency. Application of agile methodologies across projects of varying scale and technologies.",
  },

  // Job 10 — Escuela Luis Caceres de Arismendi
  "job10.title": {
    es: "Desarrollador Full Stack",
    en: "Full Stack Developer",
  },
  "job10.company": {
    es: "Escuela Luis Cáceres de Arismendi — Venezuela",
    en: "Escuela Luis Cáceres de Arismendi — Venezuela",
  },
  "job10.period": {
    es: "Feb 2012 – Feb 2013",
    en: "Feb 2012 – Feb 2013",
  },
  "job10.desc": {
    es: "Desarrollo de una aplicación web para el control administrativo de la escuela. Generación de reportes de constancias de estudio para alumnos en formato PDF con PHP, MySQL y JavaScript.",
    en: "Development of a web application for the school's administrative management. Generation of student enrollment certificate reports in PDF format using PHP, MySQL, and JavaScript.",
  },

  // Job 11 — Comunidad del Barrio San Pedro
  "job11.title": {
    es: "Programador Full Stack",
    en: "Full Stack Developer",
  },
  "job11.company": {
    es: "Comunidad del Barrio San Pedro — Venezuela",
    en: "Comunidad del Barrio San Pedro — Venezuela",
  },
  "job11.period": {
    es: "Feb 2011 – Feb 2012",
    en: "Feb 2011 – Feb 2012",
  },
  "job11.desc": {
    es: "Desarrollo de una aplicación web para el registro y control de los habitantes de la comunidad. Implementación con PHP, MySQL, JavaScript, HTML y CSS.",
    en: "Development of a web application for community resident registration and management. Built with PHP, MySQL, JavaScript, HTML, and CSS.",
  },

  // Job 14 — Chamco Digital
  "job14.title": {
    es: "Desarrollador Full Stack",
    en: "Full Stack Developer",
  },
  "job14.company": {
    es: "Chamco Digital — Remoto",
    en: "Chamco Digital — Remote",
  },
  "job14.period": {
    es: "May 2026 – Presente",
    en: "May 2026 – Present",
  },
  "job14.desc": {
    es: "Desarrollo del panel de administración, optimización de SEO y rendimiento Lighthouse, configuración de CI/CD con GitHub Actions, despliegue en Vercel, servidor PostgreSQL en Azure, configuración de envío de emails con Microsoft Graph API, subida de imágenes con Azure Blob Storage y limpieza general de calidad de código.",
    en: "Built the admin panel, optimized SEO and Lighthouse performance scores, configured CI/CD with GitHub Actions, deployed on Vercel, set up a PostgreSQL server on Azure, configured email delivery via Microsoft Graph API, implemented image uploads with Azure Blob Storage, and performed overall code quality improvements.",
  },

  // Education Section
  "education.title": {
    es: "Formación Académica",
    en: "Education",
  },
  "education.subtitle": {
    es: "Mi trayectoria académica",
    en: "My academic background",
  },
  "education.degree.title": {
    es: "Ingeniero en Informática",
    en: "Computer Engineer (Ingeniero en Informática)",
  },
  "education.degree.issuer": {
    es: "Instituto Universitario de Tecnología Agro-Industrial — San Cristóbal, Táchira (Venezuela)",
    en: "Instituto Universitario de Tecnología Agro-Industrial — San Cristóbal, Táchira (Venezuela)",
  },
  "education.degree.date": {
    es: "Diciembre 2013",
    en: "December 2013",
  },
  "education.bachelor.title": {
    es: "Bachiller en Ciencias",
    en: "High School Diploma, Science (Bachiller en Ciencias)",
  },
  "education.bachelor.issuer": {
    es: "Unidad Educativa Monseñor Sanmiguel — San Cristóbal, Táchira (Venezuela)",
    en: "Unidad Educativa Monseñor Sanmiguel — San Cristóbal, Táchira (Venezuela)",
  },
  "education.bachelor.date": {
    es: "2005",
    en: "2005",
  },

  // Certifications Section
  "certifications.title": {
    es: "Certificaciones",
    en: "Certifications",
  },
  "certifications.subtitle": {
    es: "Certificaciones y cursos completados",
    en: "Certifications and completed courses",
  },
  "certifications.inProgress": {
    es: "En Progreso",
    en: "In Progress",
  },
  "certifications.completed": {
    es: "Completado",
    en: "Completed",
  },

  // Cert 1 — HTML
  "cert1.title": {
    es: "Comprensión Teórica de HTML",
    en: "Theoretical Understanding of HTML",
  },
  "cert1.issuer": {
    es: "Desarrollo Web",
    en: "Web Development",
  },
  "cert1.date": {
    es: "Nov 2017",
    en: "Nov 2017",
  },

  // Cert 2 — CSS
  "cert2.title": {
    es: "Comprensión Teórica de CSS",
    en: "Theoretical Understanding of CSS",
  },
  "cert2.issuer": {
    es: "Desarrollo Web",
    en: "Web Development",
  },
  "cert2.date": {
    es: "Nov 2017",
    en: "Nov 2017",
  },

  // Cert 3 — SQL
  "cert3.title": {
    es: "Comprensión Teórica de SQL",
    en: "Theoretical Understanding of SQL",
  },
  "cert3.issuer": {
    es: "Desarrollo Web",
    en: "Web Development",
  },
  "cert3.date": {
    es: "Dic 2017",
    en: "Dec 2017",
  },

  // Cert 4 — PHP
  "cert4.title": {
    es: "Comprensión Teórica de PHP",
    en: "Theoretical Understanding of PHP",
  },
  "cert4.issuer": {
    es: "Desarrollo Web",
    en: "Web Development",
  },
  "cert4.date": {
    es: "Dic 2017",
    en: "Dec 2017",
  },

  // Cert 5 — JavaScript
  "cert5.title": {
    es: "Comprensión Teórica y Práctica de JavaScript",
    en: "Theoretical and Practical Understanding of JavaScript",
  },
  "cert5.issuer": {
    es: "Desarrollo Web",
    en: "Web Development",
  },
  "cert5.date": {
    es: "Jul 2022",
    en: "Jul 2022",
  },

  // Cert 6 — AWS Fundamentals Part 2 (in progress)
  "cert6.title": {
    es: "Fundamentos Técnicos de AWS — Parte 2",
    en: "AWS Technical Fundamentals — Part 2",
  },
  "cert6.issuer": {
    es: "Amazon Skill Builder",
    en: "Amazon Skill Builder",
  },
  "cert6.date": {
    es: "En progreso",
    en: "In progress",
  },

  // Cert 7 — AWS & Terraform Udemy (in progress)
  "cert7.title": {
    es: "AWS y Terraform",
    en: "AWS and Terraform",
  },
  "cert7.issuer": {
    es: "Udemy",
    en: "Udemy",
  },
  "cert7.date": {
    es: "En progreso",
    en: "In progress",
  },

  // Cert 8 — AI Development
  "cert8.title": {
    es: "Curso de Desarrollo con IA de 0 a producción",
    en: "AI Development from 0 to Production",
  },
  "cert8.issuer": {
    es: "MoureDev - Big School",
    en: "MoureDev - Big School",
  },
  "cert8.date": {
    es: "Mar 2026",
    en: "Mar 2026",
  },

  // Cert 9 — Elementor Master
  "cert9.title": {
    es: "Máster en Elementor 2026, ¡Desde Cero Hasta Experto!",
    en: "Elementor Master 2026, From Zero to Expert!",
  },
  "cert9.issuer": {
    es: "Udemy",
    en: "Udemy",
  },
  "cert9.date": {
    es: "Abr 2026",
    en: "Apr 2026",
  },

  // Cert 10 — AWS Fundamentals Part 1 (completed)
  "cert10.title": {
    es: "Fundamentos Técnicos de AWS — Parte 1",
    en: "AWS Technical Fundamentals — Part 1",
  },
  "cert10.issuer": {
    es: "Amazon Skill Builder",
    en: "Amazon Skill Builder",
  },
  "cert10.date": {
    es: "Abr 2026",
    en: "Apr 2026",
  },

  // Cert 11 — Technical Support (IUT, trayecto I)
  "cert11.title": {
    es: "Soporte Técnico a Usuarios y Equipos",
    en: "Technical Support for Users & Equipment",
  },
  "cert11.issuer": {
    es: "Instituto Universitario de Tecnología Agro-Industrial (IUT)",
    en: "Instituto Universitario de Tecnología Agro-Industrial (IUT)",
  },
  "cert11.date": {
    es: "Jul 2011",
    en: "Jul 2011",
  },

  // Testimonials Section
  "testimonials.title": {
    es: "Lo Que Dicen Mis Clientes",
    en: "What My Clients Say",
  },
  "testimonials.subtitle": {
    es: "Opiniones reales de clientes satisfechos en Upwork",
    en: "Real reviews from satisfied clients on Upwork",
  },
  "testimonial.duration": {
    es: "Duración",
    en: "Duration",
  },
  "testimonial.earned": {
    es: "Ganado",
    en: "Earned",
  },
  "testimonial.hours": {
    es: "Horas",
    en: "Hours",
  },
  "testimonial.avgRating": {
    es: "Calificación Promedio",
    en: "Average Rating",
  },
  "testimonial.totalJobs": {
    es: "Proyectos Totales",
    en: "Total Jobs",
  },
  "testimonial.totalHours": {
    es: "Horas Totales",
    en: "Total Hours",
  },
  "testimonial.totalEarned": {
    es: "Ganancia Total",
    en: "Total Earned",
  },

  // Testimonial 1 - React & Node
  "testimonial1.role": {
    es: "Desarrollador Front-End, React y Node",
    en: "Front-End Developer, React and Node",
  },
  "testimonial1.comment": {
    es: "Arthur es un ingeniero muy inteligente y eficiente. Se tomó el tiempo de entender completamente los requisitos del proyecto y entregar código de gran calidad cada vez. Es un placer trabajar con él.",
    en: "Arthur is a very smart, efficient engineer. He took great care to fully understand the project requirements and deliver great code every time. He's a pleasure to work with.",
  },

  // Testimonial 2 - Next.js/NestJS
  "testimonial2.role": {
    es: "Desarrollador Full Stack - JavaScript, Next.js, NestJS",
    en: "Full Stack Developer - JavaScript, Next.js, NestJS",
  },
  "testimonial2.comment": {
    es: "Excelente desarrollador especializado en el stack moderno de JavaScript. Entrega constante de código limpio y bien estructurado.",
    en: "Excellent developer specialized in modern JavaScript stack. Consistent delivery of clean and well-structured code.",
  },

  // Testimonial 3 - Angular (Montrix)
  "testimonial3.role": {
    es: "Desarrollador Frontend - Angular",
    en: "Frontend Developer - Angular",
  },
  "testimonial3.comment": {
    es: "Arthur trabajó en este proyecto durante mucho tiempo y proporcionó aportes útiles. Siempre hace buenas preguntas para aclarar detalles y es muy amigable para trabajar, incluso cuando el trabajo es desafiante.",
    en: "Arthur has worked on this project very long and provided useful inputs. He always asks good questions for clarification and is very friendly to work with, even when the work is challenging.",
  },

  // Testimonial 4 - GoJS
  "testimonial4.role": {
    es: "Desarrollador Front-End",
    en: "Front End Developer",
  },
  "testimonial4.comment": {
    es: "Arthur es un desarrollador FE capacitado. Proactivo con las soluciones, aprende muy rápido. ¡Siempre proponiendo ideas sobre cómo mejorar las cosas! Tiene experiencia con la librería de diagramación GoJS.",
    en: "Arthur is a skilled FE dev. Proactive with solutions, he picks on really fast. Always pitching ideas on how to make things better! He is experienced with diagraming library GoJS.",
  },

  // Testimonial 5 - Cloudshim
  "testimonial5.role": {
    es: "Desarrollador Frontend para proyecto Angular",
    en: "Frontend Developer for Angular project",
  },
  "testimonial5.comment": {
    es: "Arthur trabajó excelentemente y como se esperaba. Pudimos cerrar las tareas planificadas a tiempo para nuestro cliente y él también quedó satisfecho con lo entregado. ¡Gracias Arthur!",
    en: "Arthur worked excellently and as expected. We were able to close the planned tasks on time for our client and he was also satisfied with what was delivered. Thank you Arthur!",
  },

  // Badges
  "badge.quality": {
    es: "Comprometido con la Calidad",
    en: "Committed to Quality",
  },
  "badge.collaborative": {
    es: "Colaborativo",
    en: "Collaborative",
  },
  "badge.communicator": {
    es: "Comunicador Claro",
    en: "Clear Communicator",
  },
  "badge.reliable": {
    es: "Confiable",
    en: "Reliable",
  },
  "badge.efficient": {
    es: "Eficiente",
    en: "Efficient",
  },
  "badge.solutionOriented": {
    es: "Orientado a Soluciones",
    en: "Solution Oriented",
  },

  // Projects Section
  "projects.title": {
    es: "Mis Proyectos",
    en: "My Projects",
  },
  "projects.subtitle": {
    es: "Explora algunos de mis trabajos más destacados",
    en: "Explore some of my most highlighted works",
  },
  "projects.viewProject": {
    es: "Ver Proyecto",
    en: "View Project",
  },
  "projects.portfolioTitle": {
    es: "Portafolio Completo",
    en: "Complete Portfolio",
  },
  "projects.portfolioSubtitle": {
    es: "Una selección de mis mejores trabajos",
    en: "A selection of my best work",
  },
  "projects.viewAll": {
    es: "Ver Todos los Proyectos",
    en: "View All Projects",
  },

  // Contact Section
  "contact.title": {
    es: "Ponte en Contacto",
    en: "Get In Touch",
  },
  "contact.subtitle": {
    es: "¿Tienes un proyecto en mente? Hablemos",
    en: "Do you have a project in mind? Let's talk",
  },
  "contact.name": {
    es: "Nombre",
    en: "Name",
  },
  "contact.namePlaceholder": {
    es: "Tu nombre",
    en: "Your name",
  },
  "contact.email": {
    es: "Email",
    en: "Email",
  },
  "contact.emailPlaceholder": {
    es: "tu@email.com",
    en: "your@email.com",
  },
  "contact.message": {
    es: "Mensaje",
    en: "Message",
  },
  "contact.messagePlaceholder": {
    es: "Tu mensaje aquí...",
    en: "Your message here...",
  },
  "contact.send": {
    es: "Enviar Mensaje",
    en: "Send Message",
  },
  "contact.directMessage": {
    es: "Elige tu método de contacto preferido:",
    en: "Choose your preferred contact method:",
  },
  "contact.channelLabel": {
    es: "Canal de contacto",
    en: "Contact channel",
  },
  "contact.openLink": {
    es: "Abrir enlace",
    en: "Open link",
  },
  "contact.availability": {
    es: "Disponible para trabajo remoto",
    en: "Available for remote work",
  },
  "contact.emailMeta": {
    es: "Correo directo",
    en: "Direct email",
  },
  "contact.emailLabel": {
    es: "Correo Electrónico",
    en: "Email",
  },
  "contact.githubLabel": {
    es: "GitHub",
    en: "GitHub",
  },
  "contact.githubDesc": {
    es: "Explora mis proyectos y contribuciones",
    en: "Explore my projects and contributions",
  },
  "contact.linkedinLabel": {
    es: "LinkedIn",
    en: "LinkedIn",
  },
  "contact.linkedinDesc": {
    es: "Conecta conmigo profesionalmente",
    en: "Connect with me professionally",
  },
  "contact.upworkLabel": {
    es: "Upwork",
    en: "Upwork",
  },
  "contact.upworkDesc": {
    es: "Contrátame en Upwork",
    en: "Hire me on Upwork",
  },
  "contact.upworkMeta": {
    es: "Perfil con contrato activo",
    en: "Active contract profile",
  },

  // Footer
  "footer.contact": {
    es: "Contacto",
    en: "Contact",
  },
  "footer.links": {
    es: "Enlaces",
    en: "Links",
  },
  "footer.social": {
    es: "Redes",
    en: "Social",
  },
  "footer.copyright": {
    es: "Todos los derechos reservados.",
    en: "All rights reserved.",
  },

  // Project Categories
  "category.corporateWebsite": { es: "Sitio Corporativo", en: "Corporate Website" },
  "category.adminPanel": { es: "Panel Admin", en: "Admin Panel" },
  "category.saas": { es: "SaaS", en: "SaaS" },
  "category.eventPlatform": { es: "Plataforma de Eventos", en: "Event Platform" },
  "category.erp": { es: "ERP / Inventario", en: "ERP / Inventory" },
  "category.mobileApp": { es: "App Móvil", en: "Mobile App" },
  "category.ecommerce": { es: "E-commerce", en: "E-commerce" },
  "category.frontendSuite": { es: "Frontend Suite", en: "Frontend Suite" },
  "category.enterpriseDashboard": { es: "Dashboard Empresarial", en: "Enterprise Dashboard" },
  "category.saasTool": { es: "SaaS Tool", en: "SaaS Tool" },

  // Project Examples
  "project1.title": {
    es: "Hacking HR — Plataforma de Eventos Escalable",
    en: "Hacking HR — Scalable Event Platform",
  },
  "project1.desc": {
    es: "Plataforma de gestión de eventos construida con Next.js y CMS headless, con optimización de APIs, mejora de rendimiento frontend y despliegue en AWS Amplify.",
    en: "Event management platform built with Next.js and a headless CMS, with API optimization, improved frontend performance, and deployment on AWS Amplify.",
  },
  "project2.title": {
    es: "OtherWorld Gift — Sistema de Inventario y Ventas",
    en: "OtherWorld Gift — Inventory & Sales System",
  },
  "project2.desc": {
    es: "Sistema de inventario y ventas para The Chicken Kings (Argentina), con integración a AFIP para facturación electrónica, reportes automatizados en Excel/PDF, autorización de ventas, gestión de inventario, cron jobs y módulo de caja con transferencias bancarias.",
    en: "Inventory and sales system for The Chicken Kings (Argentina), with AFIP integration for electronic invoicing, automated Excel/PDF reports, sales authorization, inventory management, cron jobs, and a cash module with bank transfers.",
  },
  "project3.title": {
    es: "Speedy Delivery — App Móvil de Delivery",
    en: "Speedy Delivery — Food Delivery Mobile App",
  },
  "project3.desc": {
    es: "Aplicación móvil para delivery de comida desarrollada con React Native y Expo, con interfaz responsiva y flujo de pedidos en tiempo real.",
    en: "Food delivery mobile app developed with React Native and Expo, featuring a responsive UI and real-time order flow.",
  },
  "project4.title": {
    es: "PiggyBack Network — Plataforma E-commerce con Pagos",
    en: "PiggyBack Network — E-commerce Platform with Payments",
  },
  "project4.desc": {
    es: "Desarrollo frontend para plataforma de e-commerce con integración de Stripe y PayPal, optimización de rendimiento y arquitectura escalable en AWS.",
    en: "Frontend development for an e-commerce platform with Stripe and PayPal integration, performance optimization, and scalable AWS architecture.",
  },
  "project5.title": {
    es: "Little Taller — Suite Frontend para Clientes",
    en: "Little Taller — Client Frontend Suite",
  },
  "project5.desc": {
    es: "Conjunto de interfaces frontend con React, TypeScript, Firebase y Material UI, desplegadas en Vercel para productos web orientados a cliente final.",
    en: "Collection of frontend interfaces using React, TypeScript, Firebase, and Material UI, deployed on Vercel for customer-facing web products.",
  },
  "project6.title": {
    es: "Montrix — Dashboard Operacional con Mapas",
    en: "Montrix — Operational Dashboard with Maps",
  },
  "project6.desc": {
    es: "Aplicación empresarial con Angular, Angular Material y Google Maps API para visualización operativa, experiencia UX mejorada y alto rendimiento.",
    en: "Enterprise application using Angular, Angular Material, and Google Maps API for operational visualization, improved UX, and high performance.",
  },
  "project7.title": {
    es: "Cloudshim — Herramienta de Diagramación Avanzada",
    en: "Cloudshim — Advanced Diagramming Tool",
  },
  "project7.desc": {
    es: "Plataforma frontend con Angular y GoJS para diagramación compleja, gráficos interactivos con D3.js y diseño responsivo para entornos cloud.",
    en: "Frontend platform with Angular and GoJS for complex diagramming, interactive D3.js charts, and responsive design for cloud environments.",
  },
  "project8.title": {
    es: "Zippyttech — Portal Web de Operaciones",
    en: "Zippyttech — Operations Web Portal",
  },
  "project8.desc": {
    es: "Portal frontend desarrollado con Angular y TypeScript, integración de Google Maps y componentes responsivos para flujos operativos de negocio.",
    en: "Frontend portal built with Angular and TypeScript, integrating Google Maps and responsive components for business operational workflows.",
  },
  "project9.title": {
    es: "Escuela Luis Cáceres — Sistema Administrativo",
    en: "Escuela Luis Cáceres — Administrative System",
  },
  "project9.desc": {
    es: "Aplicación web para control administrativo escolar y emisión de constancias en PDF, desarrollada con PHP, MySQL y JavaScript.",
    en: "Web application for school administrative management and PDF certificate issuance, developed with PHP, MySQL, and JavaScript.",
  },
  "project10.title": {
    es: "School SaaS — Proyecto Personal",
    en: "School SaaS — Personal Project",
  },
  "project10.desc": {
    es: "Proyecto personal que estoy desarrollando por mi cuenta: un SaaS educativo para gestión escolar, con enfoque en experiencia moderna, flujos administrativos y despliegue continuo en Vercel.",
    en: "Personal project I am building on my own: an educational SaaS for school management, focused on modern UX, administrative workflows, and continuous deployment on Vercel.",
  },

  // Project 11 — Chamco Digital
  "project11.title": {
    es: "Chamco Digital — Plataforma Web con Panel Admin",
    en: "Chamco Digital — Web Platform with Admin Panel",
  },
  "project11.desc": {
    es: "Panel de administración completo, optimización SEO y Lighthouse, CI/CD con GitHub Actions, despliegue en Vercel, base de datos PostgreSQL en Azure, envío de emails con Microsoft Graph API y almacenamiento de imágenes en Azure Blob Storage.",
    en: "Full admin panel, SEO and Lighthouse optimization, CI/CD with GitHub Actions, deployment on Vercel, PostgreSQL database on Azure, email delivery via Microsoft Graph API, and image storage on Azure Blob Storage.",
  },

  // Project 12 — Gmvykon
  "project12.title": {
    es: "Gmvykon — Sitio Web Corporativo",
    en: "Gmvykon — Corporate Website",
  },
  "project12.desc": {
    es: "Sitio web corporativo construido con Next.js, TypeScript y Tailwind CSS, con contenido gestionado a través de Strapi CMS. Diseño en Figma, despliegue en Vercel y flujo de trabajo asistido por IA.",
    en: "Corporate website built with Next.js, TypeScript, and Tailwind CSS, with content managed through Strapi CMS. Designed in Figma, deployed on Vercel, and developed with an AI-assisted workflow.",
  },
};

export function t(key: string, language: Language, params?: TranslationParams): string {
  const translation = translations[key];
  if (!translation) {
    console.warn(`Translation key not found: ${key}`);
    return key;
  }

  const value = translation[language];
  if (!params) {
    return value;
  }

  return value.replace(/\{(\w+)\}/g, (_match, paramKey: string) => {
    const paramValue = params[paramKey];
    return paramValue === undefined ? `{${paramKey}}` : String(paramValue);
  });
}
