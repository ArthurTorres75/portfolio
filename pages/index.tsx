import type React from "react";
import Head from "next/head";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/common/Hero";
import { Section } from "@/components/common/Section";
import { ProjectCard } from "@/components/common/ProjectCard";
import { Seo } from "@/components/common/Seo";
import { ContactLinks } from "@/components/features/ContactLinks";
import { TechStack } from "@/components/features/TechStack";
import { Certifications } from "@/components/features/Certifications";
import { Testimonials } from "@/components/features/Testimonials";
import { WorkHistory } from "@/components/features/WorkHistory";
import { Services } from "@/components/features/Services";
import { useLanguage } from "@/hooks/useLanguage";
import { animationVariants, useScrollAnimation } from "@/hooks/useScrollAnimation";
import { t } from "@/lib/translations";
import { PROJECTS } from "@/lib/projects";

const WaterSurface3D = dynamic(
  () => import("@/components/common/WaterSurface3D").then((mod) => mod.WaterSurface3D),
  { ssr: false }
);

const FULLSTACK_START_YEAR = 2022;
const FRONTEND_START_YEAR = 2022;
const FULLSTACK_UNIVERSITY_YEARS = 2;

function getYearsSince(startYear: number): number {
  return Math.max(0, new Date().getFullYear() - startYear);
}

export default function Home(): React.JSX.Element {
  const { language } = useLanguage();
  const [isDesktop, setIsDesktop] = useState(false);
  const fullStackYears = getYearsSince(FULLSTACK_START_YEAR) + FULLSTACK_UNIVERSITY_YEARS;
  const frontendYears = getYearsSince(FRONTEND_START_YEAR);

  useEffect(() => {
    setIsDesktop(!window.matchMedia("(hover: none), (pointer: coarse)").matches);
  }, []);
  const { ref: aboutRef, isInView: isAboutInView } = useScrollAnimation({
    once: true,
    amount: 0.2,
  });
  const name = "Arthur Torres";
  const aboutCards = [
    {
      key: "frontend",
      title: t("about.frontendTitle", language),
      description: t("about.frontendDesc", language, { frontendYears }),
    },
    {
      key: "backend",
      title: t("about.backendTitle", language),
      description: t("about.backendDesc", language),
    },
    {
      key: "cloud",
      title: t("about.cloudTitle", language),
      description: t("about.cloudDesc", language),
    },
  ];

  const projects = PROJECTS.slice(0, 6).map((p) => ({
    title: t(p.titleKey, language),
    description: t(p.descKey, language),
    technologies: p.technologies,
    link: p.link,
    image: p.image,
  }));

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://arthurtorres75.github.io/portfolio/";

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Arthur Torres Portfolio",
    url: siteUrl,
    author: { "@type": "Person", name },
  };

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name,
    url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://arthurtorres75.github.io/portfolio/",
    sameAs: [
      "https://github.com/ArthurTorres75",
      "https://www.linkedin.com/in/arthur-torres-9b41a2184",
      "https://www.upwork.com/freelancers/~0110023d7209510ffb?mp_source=share",
    ],
    jobTitle: t("hero.title", language),
    knowsAbout: [
      "Next.js", "React", "Angular", "TypeScript", "Node.js", "NestJS", "C", "Java",
      "PostgreSQL", "Prisma", "AWS", "Vercel", "Azure", "React Native",
      "Tailwind CSS", "TanStack Query", "Redux Toolkit", "Zustand",
      "Stripe", "PayPal", "Docker", "Terraform", "GitHub Actions",
      "Frontend Development", "Backend Development", "Cloud Infrastructure",
    ],
    makesOffer: [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Custom Web Application Development",
          "description": "Design and development of modern, scalable web applications using Next.js, React, Angular, and TypeScript.",
        },
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "System Migration & Modernization",
          "description": "Migration and improvement of legacy systems to modern technologies with better performance and maintainability.",
        },
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Payment Integration",
          "description": "Integration of Stripe and PayPal payment gateways with subscriptions, webhooks, and transaction management.",
        },
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Cloud Deployment & DevOps",
          "description": "Application deployment on AWS, Vercel, and Azure with automated CI/CD pipelines and infrastructure as code.",
        },
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Mobile App Development",
          "description": "Cross-platform mobile applications for iOS and Android using React Native and Expo.",
        },
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Performance Optimization & SEO",
          "description": "Website performance optimization achieving Lighthouse scores above 90, Core Web Vitals improvement, and technical SEO.",
        },
      },
    ],
  };

  return (
    <>
      <Seo
        title="Arthur Torres | Ingeniero en Informática · Full Stack Developer"
        description={`Arthur Torres — Desarrollador Full Stack con +${fullStackYears} años de experiencia. Creo aplicaciones web, apps móviles e integro pagos con Next.js, React, Angular, Node.js, NestJS, AWS y Azure. Disponible para proyectos remotos.`}
        path="/"
        keywords="Arthur Torres, Ingeniero en Informática, Computer Engineer, Full Stack Developer, desarrollo web, Next.js, React, Angular, TypeScript, Node.js, NestJS, PostgreSQL, AWS, Azure, Vercel, React Native, integración de pagos, Stripe, PayPal, freelance, remoto"
      />
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </Head>

      <div className="min-h-screen bg-black text-white flex flex-col relative">
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
          subtitle={t("about.subtitle", language, { fullStackYears })}
          className="bg-gradient-to-b from-black to-blue-950/20"
        >
          <motion.div
            ref={aboutRef}
            className="about-water-stage"
            initial="hidden"
            animate={isAboutInView ? "visible" : "hidden"}
            variants={animationVariants.fadeUp}
            custom={0}
          >
            {isDesktop && <WaterSurface3D isVisible={isAboutInView} />}
          </motion.div>

          <div>
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

          {/* My Story */}
          <motion.div
            className="max-w-3xl mx-auto mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={animationVariants.fadeUp}
            custom={0}
          >
            <div className="glass-effect about-card p-6 rounded-lg border border-cyan-500/30">
              <h3 className="text-xl font-semibold text-cyan-400 mb-4">
                {t("about.storyTitle", language)}
              </h3>
              <p className="text-white/70 leading-relaxed">
                {t("about.storyDesc", language)}
              </p>
            </div>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
            {aboutCards.map((card, index) => (
              <motion.div
                key={card.key}
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
            className="mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={animationVariants.fadeUp}
            custom={0}
          >
            <TechStack title={t("about.techStack", language)} />
          </motion.div>

          {/* Work Ethic */}
          <motion.div
            className="max-w-3xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={animationVariants.fadeUp}
            custom={0}
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
          <div className="flex justify-center mt-10">
            <a
              href="/portfolio/projects"
              className="px-8 py-3 rounded-lg border border-cyan-500/60 text-cyan-300 font-semibold hover:bg-cyan-500/10 hover:border-cyan-400 transition-all duration-300"
            >
              {t("projects.viewAll", language)} →
            </a>
          </div>
        </Section>

        {/* Servicios Section */}
        <Section
          id="servicios"
          title={t("services.title", language)}
          subtitle={t("services.subtitle", language)}
          className="bg-gradient-to-b from-blue-950/20 to-black"
        >
          <Services />
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
