import React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/common/Hero";
import { Section } from "@/components/common/Section";
import { ProjectCard } from "@/components/common/ProjectCard";
import { useLanguage } from "@/hooks/useLanguage";
import { t } from "@/lib/translations";

export default function Home(): React.JSX.Element {
  const { language } = useLanguage();
  const name = "Arthur Torres";
  
  const projects = [
    {
      title: t("project1.title", language),
      description: t("project1.desc", language),
      technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
      link: "https://github.com",
    },
    {
      title: t("project2.title", language),
      description: t("project2.desc", language),
      technologies: ["Node.js", "Express", "PostgreSQL", "React"],
      link: "https://github.com",
    },
    {
      title: t("project3.title", language),
      description: t("project3.desc", language),
      technologies: ["React Native", "JavaScript", "Firebase"],
      link: "https://github.com",
    },
    {
      title: t("project4.title", language),
      description: t("project4.desc", language),
      technologies: ["Next.js", "Chart.js", "TypeScript", "Tailwind"],
      link: "https://github.com",
    },
    {
      title: t("project5.title", language),
      description: t("project5.desc", language),
      technologies: ["Next.js", "Stripe", "MongoDB", "React"],
      link: "https://github.com",
    },
    {
      title: t("project6.title", language),
      description: t("project6.desc", language),
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
          title={t("hero.title", language)}
          description={t("hero.description", language)}
        />

        {/* Sobre Mí Section */}
        <Section
          id="sobre-mi"
          title={t("about.title", language)}
          subtitle={t("about.subtitle", language)}
          className="bg-gradient-to-b from-black to-blue-950/20"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="glass-effect p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-cyan-400 mb-4">
                {t("about.approach", language)}
              </h3>
              <p className="text-white/70 leading-relaxed">
                {t("about.approachDesc", language)}
              </p>
            </div>
            <div className="glass-effect p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-cyan-400 mb-4">
                {t("about.skills", language)}
              </h3>
              <ul className="text-white/70 space-y-2">
                <li>{t("about.skillsJavaScript", language)}</li>
                <li>{t("about.skillsReact", language)}</li>
                <li>{t("about.skillsTailwind", language)}</li>
                <li>{t("about.skillsBackend", language)}</li>
              </ul>
            </div>
          </div>
        </Section>

        {/* Proyectos Section */}
        <Section
          id="proyectos"
          title={t("projects.title", language)}
          subtitle={t("projects.subtitle", language)}
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
          title={t("contact.title", language)}
          subtitle={t("contact.subtitle", language)}
          className="bg-gradient-to-b from-black to-blue-950/20 py-32"
        >
          <div className="max-w-2xl mx-auto glass-effect p-8 rounded-lg">
            <form className="space-y-6">
              <div>
                <label className="block text-white font-semibold mb-2">
                  {t("contact.name", language)}
                </label>
                <input
                  type="text"
                  className="w-full bg-black/50 border border-cyan-500/30 rounded-lg px-4 py-2 text-white placeholder-white/50 focus:outline-none focus:border-cyan-400 transition-colors"
                  placeholder={t("contact.namePlaceholder", language)}
                />
              </div>
              <div>
                <label className="block text-white font-semibold mb-2">
                  {t("contact.email", language)}
                </label>
                <input
                  type="email"
                  className="w-full bg-black/50 border border-cyan-500/30 rounded-lg px-4 py-2 text-white placeholder-white/50 focus:outline-none focus:border-cyan-400 transition-colors"
                  placeholder={t("contact.emailPlaceholder", language)}
                />
              </div>
              <div>
                <label className="block text-white font-semibold mb-2">
                  {t("contact.message", language)}
                </label>
                <textarea
                  rows={5}
                  className="w-full bg-black/50 border border-cyan-500/30 rounded-lg px-4 py-2 text-white placeholder-white/50 focus:outline-none focus:border-cyan-400 transition-colors"
                  placeholder={t("contact.messagePlaceholder", language)}
                />
              </div>
              <button
                type="submit"
                className="w-full px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 hover:-translate-y-1"
              >
                {t("contact.send", language)}
              </button>
            </form>
          </div>
        </Section>
      </main>

      <Footer />
    </div>
  );
}
