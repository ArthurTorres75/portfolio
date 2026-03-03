import React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/common/Hero";
import { Section } from "@/components/common/Section";
import { ProjectCard } from "@/components/common/ProjectCard";
import { ContactLinks } from "@/components/features/ContactLinks";
import { Certifications } from "@/components/features/Certifications";
import { Testimonials } from "@/components/features/Testimonials";
import { WorkHistory } from "@/components/features/WorkHistory";
import { Watermark } from "@/components/common/Watermark";
import { useLanguage } from "@/hooks/useLanguage";
import { t } from "@/lib/translations";

export default function Home(): React.JSX.Element {
  const { language } = useLanguage();
  const name = "Arthur Torres";
  const upworkProfile =
    "https://www.upwork.com/freelancers/~0110023d7209510ffb?mp_source=share";
  
  const projects = [
    {
      title: t("project1.title", language),
      description: t("project1.desc", language),
      technologies: ["Next.js", "TypeScript", "Payload CMS", "AWS Amplify"],
      link: upworkProfile,
    },
    {
      title: t("project2.title", language),
      description: t("project2.desc", language),
      technologies: ["Next.js", "NestJS", "Prisma", "MySQL"],
      link: upworkProfile,
    },
    {
      title: t("project3.title", language),
      description: t("project3.desc", language),
      technologies: ["React Native", "Expo", "Tailwind CSS", "TypeScript"],
      link: upworkProfile,
    },
    {
      title: t("project4.title", language),
      description: t("project4.desc", language),
      technologies: ["Next.js", "React", "Stripe", "PayPal"],
      link: upworkProfile,
    },
    {
      title: t("project5.title", language),
      description: t("project5.desc", language),
      technologies: ["React", "TypeScript", "Firebase", "Material UI"],
      link: upworkProfile,
    },
    {
      title: t("project6.title", language),
      description: t("project6.desc", language),
      technologies: ["Angular", "Angular Material", "Google Maps API", "AWS"],
      link: upworkProfile,
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white flex flex-col relative">
      <Watermark />
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
          {/* Intro */}
          <div className="max-w-4xl mx-auto mb-12 text-center">
            <p className="text-white/80 text-lg leading-relaxed">
              {t("about.intro", language)}
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
            <div className="glass-effect p-6 rounded-lg hover:border-cyan-400 border border-cyan-500/30 transition-all duration-300">
              <h3 className="text-xl font-semibold text-cyan-400 mb-4">
                {t("about.frontendTitle", language)}
              </h3>
              <p className="text-white/70 leading-relaxed text-sm">
                {t("about.frontendDesc", language)}
              </p>
            </div>

            <div className="glass-effect p-6 rounded-lg hover:border-cyan-400 border border-cyan-500/30 transition-all duration-300">
              <h3 className="text-xl font-semibold text-cyan-400 mb-4">
                {t("about.backendTitle", language)}
              </h3>
              <p className="text-white/70 leading-relaxed text-sm">
                {t("about.backendDesc", language)}
              </p>
            </div>

            <div className="glass-effect p-6 rounded-lg hover:border-cyan-400 border border-cyan-500/30 transition-all duration-300">
              <h3 className="text-xl font-semibold text-cyan-400 mb-4">
                {t("about.cloudTitle", language)}
              </h3>
              <p className="text-white/70 leading-relaxed text-sm">
                {t("about.cloudDesc", language)}
              </p>
            </div>
          </div>

          {/* Tech Stack */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="glass-effect p-8 rounded-lg">
              <h3 className="text-2xl font-semibold text-cyan-400 mb-6 text-center">
                {t("about.techStack", language)}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">→</span>
                  <p className="text-white/70">{t("about.techFrontend", language)}</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">→</span>
                  <p className="text-white/70">{t("about.techBackend", language)}</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">→</span>
                  <p className="text-white/70">{t("about.techCloud", language)}</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">→</span>
                  <p className="text-white/70">{t("about.techMobile", language)}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Work Ethic */}
          <div className="max-w-3xl mx-auto">
            <div className="glass-effect p-6 rounded-lg border border-cyan-500/30">
              <h3 className="text-xl font-semibold text-cyan-400 mb-4">
                {t("about.workEthic", language)}
              </h3>
              <p className="text-white/70 leading-relaxed">
                {t("about.workEthicDesc", language)}
              </p>
            </div>
          </div>
        </Section>

        {/* Experiencia Laboral Section */}
        <Section
          id="experiencia"
          title={t("workHistory.title", language)}
          subtitle={t("workHistory.subtitle", language)}
          className="bg-black"
        >
          <WorkHistory />
        </Section>

        {/* Certificaciones Section */}
        <Section
          id="certificaciones"
          title={t("certifications.title", language)}
          subtitle={t("certifications.subtitle", language)}
          className="bg-black"
        >
          <Certifications />
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

        {/* Testimonios Section */}
        <Section
          id="testimonios"
          title={t("testimonials.title", language)}
          subtitle={t("testimonials.subtitle", language)}
          className="bg-gradient-to-b from-black to-blue-950/20"
        >
          <Testimonials />
        </Section>

        {/* Contacto Section */}
        <Section
          id="contacto"
          title={t("contact.title", language)}
          subtitle={t("contact.subtitle", language)}
          className="bg-gradient-to-b from-black to-blue-950/20 py-32"
        >
          <ContactLinks />
        </Section>
      </main>

      <Footer />
    </div>
  );
}
