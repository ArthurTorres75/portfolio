import type React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/common/Section";
import { ProjectCard } from "@/components/common/ProjectCard";
import { Seo } from "@/components/common/Seo";
import { useLanguage } from "@/hooks/useLanguage";
import { t } from "@/lib/translations";
import { PROJECTS } from "@/lib/projects";

export default function Projects(): React.JSX.Element {
  const { language } = useLanguage();
  const projects = PROJECTS.map((p) => ({
    title: t(p.titleKey, language),
    description: t(p.descKey, language),
    technologies: p.technologies,
    link: p.link,
    image: p.image,
    category: t(p.categoryKey, language),
  }));

  return (
    <>
      <Seo
        title="Projects | Arthur Torres"
        description="Explora los proyectos de Arthur Torres: soluciones web y mobile con Next.js, React, Angular, TypeScript y arquitecturas escalables."
        path="/projects/"
        keywords="Arthur Torres projects, Next.js portfolio, React projects, TypeScript"
      />

      <div className="min-h-screen bg-black text-white flex flex-col">
        <Header name="Arthur Torres" />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="iridescent-gradient min-h-[500px] py-32 flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
          </div>

          <div className="relative z-10 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              <span className="iridescent-text">{t("projects.title", language)}</span>
            </h1>
            <p className="text-white/80 text-lg">
              {t("projects.portfolioSubtitle", language)}
            </p>
          </div>
        </section>

        {/* Projects Grid */}
        <Section
          title={t("projects.portfolioTitle", language)}
          subtitle={t("projects.portfolioSubtitle", language)}
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
    </>
  );
}
