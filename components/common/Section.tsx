import React, { ReactNode } from "react";

interface SectionProps {
  id?: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
}

export function Section({
  id,
  title,
  subtitle,
  children,
  className = "",
}: SectionProps): React.JSX.Element {
  return (
    <section id={id} className={`py-24 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold iridescent-text mb-4">
            {title}
          </h2>
          {subtitle && <p className="text-white/70 text-lg">{subtitle}</p>}
        </div>

        {/* Content */}
        {children}
      </div>
    </section>
  );
}
