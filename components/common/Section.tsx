import type React from "react";
import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { useScrollAnimation, animationVariants } from "@/hooks/useScrollAnimation";

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
  const { ref, isInView } = useScrollAnimation({ amount: 0.15 });

  return (
    <section
      id={id}
      className={`relative overflow-hidden py-24 ${className}`}
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <motion.div
          ref={ref}
          className="mb-12 text-center"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={animationVariants.fadeUp}
          custom={0}
        >
          <h2 className="text-4xl md:text-5xl font-bold iridescent-text mb-4">
            {title}
          </h2>
          {subtitle && <p className="text-white/70 text-lg">{subtitle}</p>}
        </motion.div>

        {/* Content */}
        {children}
      </div>
    </section>
  );
}
