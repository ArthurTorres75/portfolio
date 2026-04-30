import type React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/useLanguage";
import { t } from "@/lib/translations";
import { animationVariants } from "@/hooks/useScrollAnimation";

interface Job {
  titleKey: string;
  companyKey: string;
  periodKey: string;
  descKey: string;
}

const JOB_ORDER = [1, 12, 13, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11] as const;

const JOBS: Job[] = JOB_ORDER.map((n) => ({
  titleKey: `job${n}.title`,
  companyKey: `job${n}.company`,
  periodKey: `job${n}.period`,
  descKey: `job${n}.desc`,
}));

export function WorkHistory(): React.JSX.Element {
  const { language } = useLanguage();

  return (
    <div className="max-w-4xl mx-auto relative">
      {/* Timeline line */}
      <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 via-blue-500 to-cyan-400/20" />

      {JOBS.map((job, index) => {
        const isLeft = index % 2 === 0;

        return (
          <div
            key={job.titleKey}
            className={`relative flex items-start mb-12 last:mb-0 ${
              isLeft ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >
            {/* Timeline dot */}
            <motion.div
              className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-cyan-400 border-4 border-black z-10 shadow-lg shadow-cyan-400/50"
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            />

            {/* Card */}
            <motion.div
              className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] ${
                isLeft ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
              }`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={isLeft ? animationVariants.fadeLeft : animationVariants.fadeRight}
              custom={index * 0.04}
            >
              <div className="glass-effect p-6 rounded-lg border border-cyan-500/30 hover:border-cyan-400 transition-all duration-300 group">
                {/* Period badge */}
                <span className="inline-block px-3 py-1 text-xs font-semibold bg-cyan-500/20 text-cyan-300 rounded-full mb-3">
                  {t(job.periodKey, language)}
                </span>

                {/* Job title */}
                <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors duration-300">
                  {t(job.titleKey, language)}
                </h3>

                {/* Company */}
                <p className="text-cyan-400/80 text-sm font-medium mb-3">
                  {t(job.companyKey, language)}
                </p>

                {/* Description */}
                <p className="text-white/70 text-sm leading-relaxed">
                  {t(job.descKey, language)}
                </p>
              </div>
            </motion.div>
          </div>
        );
      })}
    </div>
  );
}
