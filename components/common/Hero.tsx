import type React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/useLanguage";
import { t } from "@/lib/translations";
import { animationVariants } from "@/hooks/useScrollAnimation";

interface HeroProps {
  name: string;
  title: string;
  description: string;
}

export function Hero({ name, title, description }: HeroProps): React.JSX.Element {
  const { language } = useLanguage();
  return (
    <section className="iridescent-gradient min-h-[700px] py-32 flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
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
          <span className="iridescent-text inline-block">{name}</span>
        </motion.h1>

        <motion.h2
          className="text-2xl md:text-3xl text-cyan-300 mb-6 font-semibold"
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
            className="px-8 py-3 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/10 transition-all duration-300"
          >
            {t("hero.contact", language)}
          </a>
          <a
            href="cv-arthur-torres.pdf"
            download
            className="px-8 py-3 border-2 border-white/40 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2"
          >
            <svg
              className="w-5 h-5"
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
            {t("hero.downloadCV", language)}
          </a>
        </motion.div>
      </div>
    </section>
  );
}

