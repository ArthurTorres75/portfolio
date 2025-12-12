import React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/common/Section";
import { ProjectCard } from "@/components/common/ProjectCard";

export default function Projects(): React.JSX.Element {
  const projects = [
    {
      title: "Proyecto 1",
      description: "Una aplicación web moderna construida con Next.js y React.",
      technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
      link: "https://github.com",
    },
    {
      title: "Proyecto 2",
      description: "Sistema de gestión de datos con API REST y base de datos.",
      technologies: ["Node.js", "Express", "PostgreSQL", "React"],
      link: "https://github.com",
    },
    {
      title: "Proyecto 3",
      description:
        "Aplicación móvil con interfaz intuitiva y diseño responsivo.",
      technologies: ["React Native", "JavaScript", "Firebase"],
      link: "https://github.com",
    },
    {
      title: "Proyecto 4",
      description: "Dashboard analítico con gráficos en tiempo real.",
      technologies: ["Next.js", "Chart.js", "TypeScript", "Tailwind"],
      link: "https://github.com",
    },
    {
      title: "Proyecto 5",
      description: "E-commerce con carrito de compras y pasarela de pago.",
      technologies: ["Next.js", "Stripe", "MongoDB", "React"],
      link: "https://github.com",
    },
    {
      title: "Proyecto 6",
      description: "Plataforma de aprendizaje en línea con videos y quizzes.",
      technologies: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind"],
      link: "https://github.com",
    },
    {
      title: "Proyecto 7",
      description: "Chat en tiempo real con autenticación y notificaciones.",
      technologies: ["Next.js", "Socket.io", "MongoDB", "Redux"],
      link: "https://github.com",
    },
    {
      title: "Proyecto 8",
      description: "Generador de portafolios personalizado y responsive.",
      technologies: ["Next.js", "TypeScript", "Tailwind", "Next.js"],
      link: "https://github.com",
    },
    {
      title: "Proyecto 9",
      description:
        "API REST con documentación Swagger y pruebas automatizadas.",
      technologies: ["Node.js", "Express", "Jest", "PostgreSQL"],
      link: "https://github.com",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Header name="Arthur Torres" />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="iridescent-gradient min-h-[400px] flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
          </div>

          <div className="relative z-10 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              <span className="iridescent-text">Mis Proyectos</span>
            </h1>
            <p className="text-white/80 text-lg">
              Explora el código y las historias detrás de cada proyecto
            </p>
          </div>
        </section>

        {/* Projects Grid */}
        <Section
          title="Portafolio Completo"
          subtitle="Una selección de mis mejores trabajos"
          className="bg-black"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </Section>
      </main>

      <Footer />
    </div>
  );
}
