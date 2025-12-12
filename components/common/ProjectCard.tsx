import React from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  image?: string;
}

export function ProjectCard({
  title,
  description,
  technologies,
  link,
}: ProjectCardProps): React.JSX.Element {
  return (
    <div className="group card-hover glass-effect rounded-lg p-6 hover:border-cyan-400/50">
      {/* Header con efecto tornasolado */}
      <div className="mb-4">
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
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors group/link"
        >
          Ver Proyecto
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
      )}
    </div>
  );
}
