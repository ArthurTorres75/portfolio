import type React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/useLanguage";
import { t } from "@/lib/translations";
import { animationVariants } from "@/hooks/useScrollAnimation";
import { ProjectImage } from "@/components/common/OptimizedImage";
import {
  isExternalNavigationTarget,
  normalizeInternalHref,
} from "@/lib/assets/paths";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  image?: string;
  index?: number;
  category?: string;
}

export function ProjectCard({
  title,
  description,
  technologies,
  link,
  image,
  index = 0,
  category,
}: ProjectCardProps): React.JSX.Element {
  const { language } = useLanguage();
  const { basePath } = useRouter();
  const normalizedLink = link
    ? normalizeInternalHref(link, { basePath })
    : undefined;
  const isExternalLink = link ? isExternalNavigationTarget(link) : false;

  return (
    <motion.div
      className="group card-hover glass-effect rounded-lg p-6 border border-cyan-500/25"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={animationVariants.fadeUp}
      custom={index * 0.1}
    >
      {/* Project image (falls back to the iridescent gradient when none is set) */}
      {image ? (
        normalizedLink && !isExternalLink ? (
          <Link
            href={normalizedLink}
            className="block mb-4"
            aria-label={`${title} image link`}
          >
            <ProjectImage src={image} alt={title} />
          </Link>
        ) : (
          <ProjectImage src={image} alt={title} className="mb-4" />
        )
      ) : (
        <div className="relative w-full h-40 mb-4 rounded-md overflow-hidden">
          <div
            aria-hidden="true"
            className="iridescent-gradient absolute inset-0 flex items-center justify-center transition-transform duration-500 group-hover:scale-105"
          >
            <span className="text-2xl font-bold text-white/90 px-4 text-center line-clamp-2">
              {title}
            </span>
          </div>
        </div>
      )}

      {/* Header */}
      <div className="mb-4">
        {category && (
          <span className="inline-block text-xs px-2 py-0.5 rounded-full bg-cyan-500/15 text-cyan-400 border border-cyan-500/30 mb-2 font-medium tracking-wide">
            {category}
          </span>
        )}
        <h3 className="text-xl font-bold text-white group-hover:iridescent-text transition-all duration-300">
          {title}
        </h3>
      </div>

      {/* Description */}
      <p className="text-white/70 mb-4 line-clamp-3">{description}</p>

      {/* Technologies */}
      <div className="flex flex-wrap gap-2 mb-4">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="text-xs px-3 py-1 rounded-full bg-gradient-to-r from-blue-500/30 to-cyan-500/30 text-cyan-300 border border-cyan-500/30"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Link */}
      {link && (
        isExternalLink ? (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-cyan-300 project-link group/link"
          >
            {t("projects.viewProject", language)}
            <svg
              className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </a>
        ) : (
          <Link
            href={normalizedLink ?? "#"}
            className="inline-flex items-center text-cyan-300 project-link group/link"
          >
            {t("projects.viewProject", language)}
            <svg
              className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </Link>
        )
      )}
    </motion.div>
  );
}
