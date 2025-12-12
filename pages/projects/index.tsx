import React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/common/Section";
import { ProjectCard } from "@/components/common/ProjectCard";
import { useLanguage } from "@/hooks/useLanguage";
import { t } from "@/lib/translations";

export default function Projects(): React.JSX.Element {
  const { language } = useLanguage();
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
    {
      title: t("project7.title", language),
      description: t("project7.desc", language),
      technologies: ["Next.js", "Socket.io", "MongoDB", "Redux"],
      link: "https://github.com",
    },
    {
      title: t("project8.title", language),
      description: t("project8.desc", language),
      technologies: ["Next.js", "TypeScript", "Tailwind", "Next.js"],
      link: "https://github.com",
    },
    {
      title: t("project9.title", language),
      description: t("project9.desc", language),
      technologies: ["Node.js", "Express", "Jest", "PostgreSQL"],
      link: "https://github.com",
    },
  ];

  return (
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
  );
}
