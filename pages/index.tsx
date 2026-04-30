import type React from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/common/Hero";
import { Section } from "@/components/common/Section";
import { ProjectCard } from "@/components/common/ProjectCard";
import { Seo } from "@/components/common/Seo";
import { ContactLinks } from "@/components/features/ContactLinks";
import { Certifications } from "@/components/features/Certifications";
import { Testimonials } from "@/components/features/Testimonials";
import { WorkHistory } from "@/components/features/WorkHistory";
import { Watermark } from "@/components/common/Watermark";
import { useLanguage } from "@/hooks/useLanguage";
import { animationVariants, useScrollAnimation } from "@/hooks/useScrollAnimation";
import { t } from "@/lib/translations";

export default function Home(): React.JSX.Element {
  const { language } = useLanguage();
  const { ref: aboutRef, isInView: isAboutInView } = useScrollAnimation({
    once: false,
    amount: 0.2,
  });
  const name = "Arthur Torres";
  const upworkProfile =
    "https://www.upwork.com/freelancers/~0110023d7209510ffb?mp_source=share";

  const aboutCards = [
    {
      title: t("about.frontendTitle", language),
      description: t("about.frontendDesc", language),
    },
    {
      title: t("about.backendTitle", language),
      description: t("about.backendDesc", language),
    },
    {
      title: t("about.cloudTitle", language),
      description: t("about.cloudDesc", language),
    },
  ];

  const techRows = [
    t("about.techFrontend", language),
    t("about.techBackend", language),
    t("about.techCloud", language),
    t("about.techMobile", language),
  ];
  
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

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name,
    url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://arthurtorres75.github.io/portfolio/",
    sameAs: [
      "https://github.com/ArthurTorres75",
      "https://www.linkedin.com/in/arthur-torres-9b41a2184/",
      upworkProfile,
    ],
    jobTitle: t("hero.title", language),
    knowsAbout: [
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "AWS",
      "Frontend Development",
      "Backend Development",
    ],
  };

  return (
    <>
      <Seo
        title="Arthur Torres | Full Stack Developer"
        description="Portfolio de Arthur Torres: desarrollo web full stack con Next.js, React, TypeScript, Node.js y AWS. Proyectos, experiencia y contacto."
        path="/"
        keywords="Arthur Torres, Full Stack Developer, Next.js, React, TypeScript, Portfolio"
      />
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </Head>

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
          <div ref={aboutRef}>
          {/* Intro */}
          <motion.div
            className="max-w-4xl mx-auto mb-12 text-center"
            initial="hidden"
            animate={isAboutInView ? "visible" : "hidden"}
            variants={animationVariants.fadeUp}
            custom={0.03}
          >
            <p className="text-white/80 text-lg leading-relaxed">
              {t("about.intro", language)}
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
            {aboutCards.map((card, index) => (
              <motion.div
                key={card.title}
                className="glass-effect about-card p-6 rounded-lg"
                initial="hidden"
                animate={isAboutInView ? "visible" : "hidden"}
                variants={animationVariants.fadeUp}
                custom={index * 0.08 + 0.08}
              >
                <h3 className="text-xl font-semibold text-cyan-400 mb-4 about-card__title">
                  {card.title}
                </h3>
                <p className="text-white/70 leading-relaxed text-sm">
                  {card.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Tech Stack */}
          <motion.div
            className="max-w-4xl mx-auto mb-12"
            initial="hidden"
            animate={isAboutInView ? "visible" : "hidden"}
            variants={animationVariants.fadeUp}
            custom={0.32}
          >
            <div className="glass-effect about-card p-8 rounded-lg">
              <h3 className="text-2xl font-semibold text-cyan-400 mb-6 text-center">
                {t("about.techStack", language)}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {techRows.map((tech, index) => (
                  <motion.div
                    key={tech}
                    className="flex items-start gap-2 about-tech-row"
                    initial="hidden"
                    animate={isAboutInView ? "visible" : "hidden"}
                    variants={animationVariants.fadeUp}
                    custom={index * 0.05 + 0.36}
                  >
                    <span className="text-cyan-400 mt-1">→</span>
                    <p className="text-white/70">{tech}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Work Ethic */}
          <motion.div
            className="max-w-3xl mx-auto"
            initial="hidden"
            animate={isAboutInView ? "visible" : "hidden"}
            variants={animationVariants.fadeUp}
            custom={0.5}
          >
            <div className="glass-effect about-card p-6 rounded-lg border border-cyan-500/30">
              <h3 className="text-xl font-semibold text-cyan-400 mb-4">
                {t("about.workEthic", language)}
              </h3>
              <p className="text-white/70 leading-relaxed">
                {t("about.workEthicDesc", language)}
              </p>
            </div>
          </motion.div>
          </div>
        </Section>

        {/* Experiencia Laboral Section */}
        <Section
          id="experiencia"
          title={t("workHistory.title", language)}
          subtitle={t("workHistory.subtitle", language)}
          className="section-blue-surface section-blue-surface--intense"
        >
          <WorkHistory />
        </Section>

        {/* Certificaciones Section */}
        <Section
          id="certificaciones"
          title={t("certifications.title", language)}
          subtitle={t("certifications.subtitle", language)}
          className="section-blue-surface section-blue-surface--soft"
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
              <ProjectCard key={index} {...project} index={index} />
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
          className="section-blue-surface section-blue-surface--intense py-32"
        >
          <ContactLinks />
        </Section>
      </main>

        <Footer />
      </div>
    </>
  );
}
