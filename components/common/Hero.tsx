import type React from "react";
import { useRef } from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { useLanguage } from "@/hooks/useLanguage";
import { t } from "@/lib/translations";
import { animationVariants } from "@/hooks/useScrollAnimation";

interface HeroProps {
  name: string;
  title: string;
  description: string;
}

const CyberNebula = dynamic(
  () => import("@/components/common/CyberNebula").then((mod) => mod.CyberNebula),
  { ssr: false }
);

const sandContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.04,
      delayChildren: 0.1,
    },
  },
};

function sandCharVariants(i: number) {
  return {
    hidden: {
      opacity: 0,
      filter: "blur(14px)",
      x: ((i * 19 + 5) % 32) - 16,
      y: ((i * 11 + 7) % 20) - 10,
      scale: 0.4,
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      x: 0,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.23, 1, 0.32, 1] as const,
      },
    },
  };
}

export function Hero({ name, title, description }: HeroProps): React.JSX.Element {
  const { language } = useLanguage();
  const heroSectionRef = useRef<HTMLElement | null>(null);

  return (
    <section
      ref={heroSectionRef}
      className="iridescent-gradient min-h-screen py-32 flex items-center justify-center relative overflow-hidden"
    >
      <CyberNebula containerRef={heroSectionRef} />

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden z-[1]">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-6"
          initial="hidden"
          animate="visible"
          variants={animationVariants.fadeUp}
          custom={0}
        >
          <span className="text-white">{t("hero.greeting", language)}, </span>
          <motion.span
            className="inline-block"
            initial="hidden"
            animate="visible"
            variants={sandContainer}
          >
            {name.split("").map((char, i) => (
              <motion.span
                key={i}
                className="iridescent-text"
                style={{ display: char === " " ? "inline" : "inline-block" }}
                variants={sandCharVariants(i)}
              >
                {char === " " ? " " : char}
              </motion.span>
            ))}
          </motion.span>
        </motion.h1>

        <motion.h2
          className="text-2xl md:text-3xl text-white mb-6 font-semibold" style={{ textShadow: "0 0 24px rgba(34,211,238,0.55)" }}
          initial="hidden"
          animate="visible"
          variants={animationVariants.fadeUp}
          custom={0.15}
        >
          {title}
        </motion.h2>

        <motion.p
          className="text-lg text-white/80 mb-8 max-w-2xl mx-auto leading-relaxed"
          initial="hidden"
          animate="visible"
          variants={animationVariants.fadeUp}
          custom={0.3}
        >
          {description}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-4"
          initial="hidden"
          animate="visible"
          variants={animationVariants.fadeUp}
          custom={0.45}
        >
          <a
            href="#proyectos"
            className="px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 hover:-translate-y-1"
          >
            {t("hero.viewProjects", language)}
          </a>
          <a
            href="#contacto"
            className="hero-cta hero-cta--contact"
          >
            <span className="hero-cta__label">{t("hero.contact", language)}</span>
          </a>
          <a
            href="cv-arthur-torres.pdf"
            download
            className="hero-cta hero-cta--download"
          >
            <svg
              className="hero-cta__icon w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            <span className="hero-cta__label">{t("hero.downloadCV", language)}</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

