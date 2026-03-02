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

  // Certifications Section
  "certifications.title": {
    es: "Certificaciones",
    en: "Certifications",
  },
  "certifications.subtitle": {
    es: "Certificaciones y cursos completados",
    en: "Certifications and completed courses",
  },
  "cert1.title": {
    es: "AWS Cloud Practitioner",
    en: "AWS Cloud Practitioner",
  },
  "cert1.issuer": {
    es: "Amazon Web Services",
    en: "Amazon Web Services",
  },
  "cert1.date": {
    es: "2024",
    en: "2024",
  },
  "cert2.title": {
    es: "Terraform Associate",
    en: "Terraform Associate",
  },
  "cert2.issuer": {
    es: "HashiCorp",
    en: "HashiCorp",
  },
  "cert2.date": {
    es: "2024",
    en: "2024",
  },
  "cert3.title": {
    es: "React Advanced",
    en: "React Advanced",
  },
  "cert3.issuer": {
    es: "Udemy",
    en: "Udemy",
  },
  "cert3.date": {
    es: "2023",
    en: "2023",
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
