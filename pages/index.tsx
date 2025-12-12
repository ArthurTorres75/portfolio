import React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/common/Hero";
import { Section } from "@/components/common/Section";
import { ProjectCard } from "@/components/common/ProjectCard";

export default function Home(): React.JSX.Element {
  const name = "Arthur Torres";
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
  ];

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Header name={name} />

      <main className="flex-grow">
        {/* Hero Section */}
        <Hero
          name={name}
          title="Desarrollador Full Stack"
          description="Especializado en crear aplicaciones web modernas, rápidas y escalables con las últimas tecnologías. Transformo ideas en soluciones digitales innovadoras."
        />

        {/* Sobre Mí Section */}
        <Section
          id="sobre-mi"
          title="Sobre Mí"
          subtitle="Conoce más acerca de mi experiencia y habilidades"
          className="bg-gradient-to-b from-black to-blue-950/20"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="glass-effect p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-cyan-400 mb-4">
                🎯 Mi Enfoque
              </h3>
              <p className="text-white/70 leading-relaxed">
                Me dedico a crear soluciones digitales que no solo funcionan
                correctamente, sino que también ofrecen una experiencia de
                usuario excepcional. Utilizando las mejores prácticas del
                desarrollo moderno.
              </p>
            </div>
            <div className="glass-effect p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-cyan-400 mb-4">
                💻 Habilidades
              </h3>
              <ul className="text-white/70 space-y-2">
                <li>• JavaScript / TypeScript</li>
                <li>• React & Next.js</li>
                <li>• Tailwind CSS & Diseño Responsivo</li>
                <li>• Node.js & Bases de Datos</li>
              </ul>
            </div>
          </div>
        </Section>

        {/* Proyectos Section */}
        <Section
          id="proyectos"
          title="Mis Proyectos"
          subtitle="Explora algunos de mis trabajos más destacados"
          className="bg-black"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </Section>

        {/* Contacto Section */}
        <Section
          id="contacto"
          title="Ponte en Contacto"
          subtitle="¿Tienes un proyecto en mente? Hablemos"
          className="bg-gradient-to-b from-black to-blue-950/20"
        >
          <div className="max-w-2xl mx-auto glass-effect p-8 rounded-lg">
            <form className="space-y-6">
              <div>
                <label className="block text-white font-semibold mb-2">
                  Nombre
                </label>
                <input
                  type="text"
                  className="w-full bg-black/50 border border-cyan-500/30 rounded-lg px-4 py-2 text-white placeholder-white/50 focus:outline-none focus:border-cyan-400 transition-colors"
                  placeholder="Tu nombre"
                />
              </div>
              <div>
                <label className="block text-white font-semibold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full bg-black/50 border border-cyan-500/30 rounded-lg px-4 py-2 text-white placeholder-white/50 focus:outline-none focus:border-cyan-400 transition-colors"
                  placeholder="tu@email.com"
                />
              </div>
              <div>
                <label className="block text-white font-semibold mb-2">
                  Mensaje
                </label>
                <textarea
                  rows={5}
                  className="w-full bg-black/50 border border-cyan-500/30 rounded-lg px-4 py-2 text-white placeholder-white/50 focus:outline-none focus:border-cyan-400 transition-colors"
                  placeholder="Tu mensaje aquí..."
                />
              </div>
              <button
                type="submit"
                className="w-full px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 hover:-translate-y-1"
              >
                Enviar Mensaje
              </button>
            </form>
          </div>
        </Section>
      </main>

      <Footer />
    </div>
  );
}
