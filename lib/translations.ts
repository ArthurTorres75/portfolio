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
  "nav.proyectos": {
    es: "Proyectos",
    en: "Projects",
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
    es: "Conoce más acerca de mi experiencia y habilidades",
    en: "Learn more about my experience and skills",
  },
  "about.approach": {
    es: "🎯 Mi Enfoque",
    en: "🎯 My Approach",
  },
  "about.approachDesc": {
    es: "Me dedico a crear soluciones digitales que no solo funcionan correctamente, sino que también ofrecen una experiencia de usuario excepcional. Utilizando las mejores prácticas del desarrollo moderno.",
    en: "I am dedicated to creating digital solutions that not only work correctly, but also provide an exceptional user experience. Using the best practices of modern development.",
  },
  "about.skills": {
    es: "💻 Habilidades",
    en: "💻 Skills",
  },
  "about.skillsJavaScript": {
    es: "• JavaScript / TypeScript",
    en: "• JavaScript / TypeScript",
  },
  "about.skillsReact": {
    es: "• React & Next.js",
    en: "• React & Next.js",
  },
  "about.skillsTailwind": {
    es: "• Tailwind CSS & Diseño Responsivo",
    en: "• Tailwind CSS & Responsive Design",
  },
  "about.skillsBackend": {
    es: "• Node.js & Bases de Datos",
    en: "• Node.js & Databases",
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
