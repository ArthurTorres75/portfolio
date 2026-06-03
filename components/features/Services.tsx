import type React from "react";
import { motion, type Variants } from "framer-motion";
import { useLanguage } from "@/hooks/useLanguage";
import { t } from "@/lib/translations";

interface ServiceCardProps {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  tags: string[];
  index: number;
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.4, type: "tween" },
  }),
};

function WebIcon(): React.JSX.Element {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" width={28} height={28} fill="none" stroke="currentColor" strokeWidth={1.6}>
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <path d="M8 21h8M12 17v4" />
      <path d="M6 7h4M6 10h8" />
    </svg>
  );
}

function MigrationIcon(): React.JSX.Element {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" width={28} height={28} fill="none" stroke="currentColor" strokeWidth={1.6}>
      <path d="M4 12h16M13 6l6 6-6 6" />
      <path d="M4 6v12" strokeDasharray="2 2" />
    </svg>
  );
}

function PaymentsIcon(): React.JSX.Element {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" width={28} height={28} fill="none" stroke="currentColor" strokeWidth={1.6}>
      <rect x="2" y="5" width="20" height="14" rx="2" />
      <path d="M2 10h20" />
      <path d="M6 15h4" />
    </svg>
  );
}

function CloudIcon(): React.JSX.Element {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" width={28} height={28} fill="none" stroke="currentColor" strokeWidth={1.6}>
      <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 0 1 0 9z" />
    </svg>
  );
}

function MobileIcon(): React.JSX.Element {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" width={28} height={28} fill="none" stroke="currentColor" strokeWidth={1.6}>
      <rect x="5" y="2" width="14" height="20" rx="2" />
      <path d="M12 18h.01" />
    </svg>
  );
}

function SeoIcon(): React.JSX.Element {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" width={28} height={28} fill="none" stroke="currentColor" strokeWidth={1.6}>
      <circle cx="11" cy="11" r="7" />
      <path d="M21 21l-4.35-4.35" />
      <path d="M11 8v6M8 11h6" />
    </svg>
  );
}

function ServiceCard({ icon, title, description, tags, index }: Omit<ServiceCardProps, "id">): React.JSX.Element {
  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      className="group relative flex flex-col gap-4 rounded-xl border border-white/8 bg-white/3 p-6 backdrop-blur-sm transition-colors duration-300 hover:border-cyan-400/30 hover:bg-cyan-400/5"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300">
        {icon}
      </div>

      <div>
        <h3 className="mb-2 text-lg font-semibold text-white">{title}</h3>
        <p className="text-sm leading-relaxed text-white/65">{description}</p>
      </div>

      <div className="mt-auto flex flex-wrap gap-1.5">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-[11px] font-medium text-white/50"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export function Services(): React.JSX.Element {
  const { language } = useLanguage();

  const services = [
    {
      id: "web",
      icon: <WebIcon />,
      title: t("services.web.title", language),
      description: t("services.web.desc", language),
      tags: ["Next.js", "React", "Angular", "TypeScript", "NestJS"],
    },
    {
      id: "migration",
      icon: <MigrationIcon />,
      title: t("services.migration.title", language),
      description: t("services.migration.desc", language),
      tags: ["Refactoring", "API REST", "PostgreSQL", "Prisma"],
    },
    {
      id: "payments",
      icon: <PaymentsIcon />,
      title: t("services.payments.title", language),
      description: t("services.payments.desc", language),
      tags: ["Stripe", "PayPal", "Webhooks", "Node.js"],
    },
    {
      id: "cloud",
      icon: <CloudIcon />,
      title: t("services.cloud.title", language),
      description: t("services.cloud.desc", language),
      tags: ["AWS", "Vercel", "Azure", "GitHub Actions", "CI/CD"],
    },
    {
      id: "mobile",
      icon: <MobileIcon />,
      title: t("services.mobile.title", language),
      description: t("services.mobile.desc", language),
      tags: ["React Native", "Expo", "iOS", "Android"],
    },
    {
      id: "seo",
      icon: <SeoIcon />,
      title: t("services.seo.title", language),
      description: t("services.seo.desc", language),
      tags: ["Lighthouse", "Core Web Vitals", "Schema.org", "SEO técnico"],
    },
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {services.map((service, index) => (
          <ServiceCard key={service.id} {...service} index={index} />
        ))}
      </motion.div>

      <motion.div
        className="mt-10 text-center"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6, duration: 0.4 }}
      >
        <a
          href="#contacto"
          className="inline-flex items-center gap-2 rounded-lg border border-cyan-500/60 px-8 py-3 text-cyan-300 font-semibold hover:bg-cyan-500/10 hover:border-cyan-400 transition-all duration-300"
        >
          {t("services.cta", language)}
          <svg aria-hidden="true" viewBox="0 0 24 24" width={16} height={16} fill="none" stroke="currentColor" strokeWidth={2}>
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </a>
      </motion.div>
    </div>
  );
}
