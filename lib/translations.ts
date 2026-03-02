export type Language = "es" | "en";

export interface Translations {
  [key: string]: {
    es: string;
    en: string;
  };
}

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

  // Hero Section
  "hero.greeting": {
    es: "Hola, soy",
    en: "Hello, I'm",
  },
  "hero.title": {
    es: "Desarrollador Full Stack",
    en: "Full Stack Developer",
  },
  "hero.description": {
    es: "Especializado en crear aplicaciones web modernas, rápidas y escalables con las últimas tecnologías. Transformo ideas en soluciones digitales innovadoras.",
    en: "Specialized in creating modern, fast and scalable web applications with the latest technologies. I transform ideas into innovative digital solutions.",
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

  // About Section
  "about.title": {
    es: "Sobre Mí",
    en: "About Me",
  },
  "about.subtitle": {
    es: "Desarrollador Full Stack con más de 7 años de experiencia",
    en: "Full Stack Developer with over 7 years of experience",
  },
  "about.intro": {
    es: "Soy desarrollador web especializado en brindar a las empresas una presencia digital sólida y orientada a resultados. Diseño y desarrollo sitios profesionales que atraen y convierten clientes, automatizo procesos para ahorrar tiempo y reducir errores, y gestiono el alojamiento en la nube para garantizar rendimiento y disponibilidad. Trabajo de forma personalizada con cada cliente para ofrecer soluciones prácticas que impulsan el crecimiento de su negocio.",
    en: "I am a web developer specializing in providing businesses with a strong, results-driven digital presence. I design and build professional websites that attract and convert customers, automate processes to save time and reduce errors, and manage cloud hosting to ensure performance and availability. I work closely with each client to deliver practical solutions that drive business growth.",
  },
  "about.frontendTitle": {
    es: "🎨 Desarrollador Front-End",
    en: "🎨 Front-End Developer",
  },
  "about.frontendDesc": {
    es: "Más de 4 años con Angular, React.js y Next.js, implementando interfaces interactivas con Material UI, TailwindCSS, shadcn/ui, y librerías de visualización como D3.js, Chart.js y Plotly.js. Experto en APIs de Google Maps, GoJS para diagramas, y optimización de diseños responsivos.",
    en: "Over 4 years with Angular, React.js and Next.js, implementing interactive interfaces with Material UI, TailwindCSS, shadcn/ui, and visualization libraries like D3.js, Chart.js and Plotly.js. Expert in Google Maps APIs, GoJS for diagrams, and responsive layout optimization.",
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
  "about.techFrontend": {
    es: "Frontend: Angular, React, Next.js, TailwindCSS, Material UI, shadcn/ui, Framer Motion",
    en: "Frontend: Angular, React, Next.js, TailwindCSS, Material UI, shadcn/ui, Framer Motion",
  },
  "about.techBackend": {
    es: "Backend: Node.js, NestJS, Prisma, PostgreSQL, MongoDB, Supabase, Redis",
    en: "Backend: Node.js, NestJS, Prisma, PostgreSQL, MongoDB, Supabase, Redis",
  },
  "about.techCloud": {
    es: "Cloud: AWS (S3, Lambda, EC2), Vercel, Firebase, Supabase, Terraform",
    en: "Cloud: AWS (S3, Lambda, EC2), Vercel, Firebase, Supabase, Terraform",
  },
  "about.techMobile": {
    es: "Mobile: React Native, Ionic",
    en: "Mobile: React Native, Ionic",
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
    es: "Oct 2025 – Presente",
    en: "Oct 2025 – Present",
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

  // Cert 6 — AWS Fundamentals (in progress)
  "cert6.title": {
    es: "Fundamentos Técnicos de AWS — Parte 1",
    en: "AWS Technical Fundamentals — Part 1",
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

  // Project Examples
  "project1.title": {
    es: "Proyecto 1",
    en: "Project 1",
  },
  "project1.desc": {
    es: "Una aplicación web moderna construida con Next.js y React.",
    en: "A modern web application built with Next.js and React.",
  },
  "project2.title": {
    es: "Proyecto 2",
    en: "Project 2",
  },
  "project2.desc": {
    es: "Sistema de gestión de datos con API REST y base de datos.",
    en: "Data management system with REST API and database.",
  },
  "project3.title": {
    es: "Proyecto 3",
    en: "Project 3",
  },
  "project3.desc": {
    es: "Aplicación móvil con interfaz intuitiva y diseño responsivo.",
    en: "Mobile application with intuitive interface and responsive design.",
  },
  "project4.title": {
    es: "Proyecto 4",
    en: "Project 4",
  },
  "project4.desc": {
    es: "Dashboard analítico con gráficos en tiempo real.",
    en: "Analytical dashboard with real-time charts.",
  },
  "project5.title": {
    es: "Proyecto 5",
    en: "Project 5",
  },
  "project5.desc": {
    es: "E-commerce con carrito de compras y pasarela de pago.",
    en: "E-commerce with shopping cart and payment gateway.",
  },
  "project6.title": {
    es: "Proyecto 6",
    en: "Project 6",
  },
  "project6.desc": {
    es: "Plataforma de aprendizaje en línea con videos y quizzes.",
    en: "Online learning platform with videos and quizzes.",
  },
  "project7.title": {
    es: "Proyecto 7",
    en: "Project 7",
  },
  "project7.desc": {
    es: "Chat en tiempo real con autenticación y notificaciones.",
    en: "Real-time chat with authentication and notifications.",
  },
  "project8.title": {
    es: "Proyecto 8",
    en: "Project 8",
  },
  "project8.desc": {
    es: "Generador de portafolios personalizado y responsive.",
    en: "Custom portfolio generator that's responsive.",
  },
  "project9.title": {
    es: "Proyecto 9",
    en: "Project 9",
  },
  "project9.desc": {
    es: "API REST con documentación Swagger y pruebas automatizadas.",
    en: "REST API with Swagger documentation and automated tests.",
  },
};

export function t(key: string, language: Language): string {
  const translation = translations[key];
  if (!translation) {
    console.warn(`Translation key not found: ${key}`);
    return key;
  }
  return translation[language];
}
