import React from "react";
import { useLanguage } from "@/hooks/useLanguage";
import { Language, t } from "@/lib/translations";

interface ContactLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
  description: string;
  meta: string;
  language: Language;
  isExternal?: boolean;
}

function MailIcon(): React.JSX.Element {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M4 7l8 6 8-6" />
    </svg>
  );
}

function GitHubIcon(): React.JSX.Element {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="currentColor"
    >
      <path d="M12 2C6.477 2 2 6.589 2 12.25c0 4.53 2.865 8.372 6.839 9.729.5.096.682-.223.682-.496 0-.245-.009-.894-.014-1.755-2.782.618-3.37-1.388-3.37-1.388-.455-1.184-1.11-1.499-1.11-1.499-.909-.637.069-.624.069-.624 1.004.072 1.532 1.056 1.532 1.056.893 1.566 2.343 1.114 2.914.852.091-.666.35-1.114.636-1.37-2.221-.261-4.555-1.14-4.555-5.073 0-1.121.39-2.038 1.029-2.757-.103-.262-.446-1.314.098-2.739 0 0 .839-.276 2.75 1.053A9.292 9.292 0 0112 6.849c.85.004 1.706.118 2.505.347 1.909-1.329 2.747-1.053 2.747-1.053.546 1.425.203 2.477.1 2.739.641.719 1.027 1.636 1.027 2.757 0 3.943-2.338 4.809-4.566 5.065.359.32.679.951.679 1.918 0 1.384-.012 2.501-.012 2.842 0 .275.18.596.688.495C19.138 20.618 22 16.778 22 12.25 22 6.589 17.523 2 12 2z" />
    </svg>
  );
}

function LinkedInIcon(): React.JSX.Element {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="currentColor"
    >
      <path d="M6.94 8.5H3.56V19h3.38V8.5zM5.25 3C4.17 3 3.5 3.72 3.5 4.67c0 .93.65 1.67 1.71 1.67h.02c1.1 0 1.77-.74 1.77-1.67C6.98 3.72 6.35 3 5.25 3zM20.5 12.48C20.5 9.31 18.82 8 16.58 8c-1.81 0-2.61 1.02-3.06 1.74V8.5h-3.38c.05.82 0 10.5 0 10.5h3.38v-5.86c0-.31.02-.62.11-.84.25-.62.81-1.26 1.76-1.26 1.24 0 1.74.97 1.74 2.39V19H20.5v-6.52z" />
    </svg>
  );
}

function UpworkIcon(): React.JSX.Element {
  return (
    <div className="flex h-5 w-5 items-center justify-center rounded-md bg-emerald-400/20 text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-300">
      UW
    </div>
  );
}

function ContactLink({
  href,
  icon,
  label,
  description,
  meta,
  language,
  isExternal = false,
}: ContactLinkProps): React.JSX.Element {
  const linkProps = isExternal
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <a
      href={href}
      {...linkProps}
      className="group relative block overflow-hidden rounded-2xl border border-cyan-400/20 bg-slate-950/65 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/60 hover:shadow-[0_24px_60px_-24px_rgba(34,211,238,0.5)]"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.18),transparent_28%),linear-gradient(135deg,rgba(15,23,42,0.3),rgba(2,132,199,0.06))] opacity-80 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/60 to-transparent" />

      <div className="relative z-10 mb-5 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-200 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
            {icon}
          </div>
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-cyan-300/70">
              {t("contact.channelLabel", language)}
            </p>
            <h3 className="mt-1 text-xl font-semibold text-white transition-colors group-hover:text-cyan-200">
              {label}
            </h3>
          </div>
        </div>

        <div className="flex h-10 w-10 items-center justify-center rounded-full border border-cyan-400/20 bg-slate-900/80 text-cyan-300 transition-all duration-300 group-hover:translate-x-1 group-hover:border-cyan-300/60 group-hover:text-white">
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
          >
            <path d="M5 12h14" />
            <path d="M13 6l6 6-6 6" />
          </svg>
        </div>
      </div>

      <div className="relative z-10 flex items-end justify-between gap-4">
        <div className="min-w-0 flex-1">
          <p className="mb-3 text-sm leading-relaxed text-white/82 transition-colors group-hover:text-white">
            {description}
          </p>
          <div className="inline-flex max-w-full items-center rounded-full border border-cyan-400/15 bg-slate-900/80 px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.24em] text-cyan-200/80">
            <span className="mr-2 h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(103,232,249,0.8)]" />
            <span className="truncate">{meta}</span>
          </div>
        </div>

        <div className="hidden rounded-xl border border-cyan-400/10 bg-slate-900/70 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-cyan-300/70 md:block">
          {t("contact.openLink", language)}
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-cyan-400/25 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    </a>
  );
}

export function ContactLinks(): React.JSX.Element {
  const { language } = useLanguage();

  const contactMethods = [
    {
      href: "mailto:arthurtorres75@gmail.com?subject=Contacto desde Portfolio",
      icon: <MailIcon />,
      label: t("contact.emailLabel", language),
      description: "arthurtorres75@gmail.com",
      meta: t("contact.emailMeta", language),
      isExternal: false,
    },
    {
      href: "https://github.com/arthurtorres75",
      icon: <GitHubIcon />,
      label: t("contact.githubLabel", language),
      description: t("contact.githubDesc", language),
      meta: "github.com/arthurtorres75",
      isExternal: true,
    },
    {
      href: "https://www.linkedin.com/in/arthur-torres-9b41a2184/",
      icon: <LinkedInIcon />,
      label: t("contact.linkedinLabel", language),
      description: t("contact.linkedinDesc", language),
      meta: "linkedin.com/in/arthur-torres-9b41a2184",
      isExternal: true,
    },
    {
      href: "https://www.upwork.com/freelancers/~0110023d7209510ffb?mp_source=share",
      icon: <UpworkIcon />,
      label: t("contact.upworkLabel", language),
      description: t("contact.upworkDesc", language),
      meta: t("contact.upworkMeta", language),
      isExternal: true,
    },
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8 text-center">
        <p className="mb-3 text-white/75">
          {t("contact.directMessage", language)}
        </p>
        <div className="inline-flex items-center gap-3 rounded-full border border-cyan-400/20 bg-slate-950/70 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.26em] text-cyan-200/75">
          <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(74,222,128,0.8)]" />
          {t("contact.availability", language)}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {contactMethods.map((method, index) => (
          <ContactLink key={index} {...method} language={language} />
        ))}
      </div>
    </div>
  );
}
