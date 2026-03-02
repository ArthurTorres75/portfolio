import React from "react";
import { useLanguage } from "@/hooks/useLanguage";
import { t } from "@/lib/translations";

interface ContactLinkProps {
  href: string;
  icon: string;
  label: string;
  description: string;
  isExternal?: boolean;
}

function ContactLink({ href, icon, label, description, isExternal = false }: ContactLinkProps): React.JSX.Element {
  const linkProps = isExternal
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <a
      href={href}
      {...linkProps}
      className="group glass-effect glass-effect--no-blur p-6 rounded-lg hover:border-cyan-400 border border-cyan-500/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/20"
    >
      <div className="flex items-start gap-4">
        <div className="text-4xl">{icon}</div>
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-cyan-400 mb-2 group-hover:text-cyan-300 transition-colors">
            {label}
          </h3>
          <p className="text-white/90 group-hover:text-white transition-colors">
            {description}
          </p>
        </div>
        <div className="text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity">
          →
        </div>
      </div>
    </a>
  );
}

export function ContactLinks(): React.JSX.Element {
  const { language } = useLanguage();

  const contactMethods = [
    {
      href: "mailto:arthurtorres75@gmail.com?subject=Contacto desde Portfolio",
      icon: "📧",
      label: t("contact.emailLabel", language),
      description: "arthurtorres75@gmail.com",
      isExternal: false,
    },
    {
      href: "https://github.com/arthurtorres75",
      icon: "💻",
      label: t("contact.githubLabel", language),
      description: t("contact.githubDesc", language),
      isExternal: true,
    },
    {
      href: "https://www.linkedin.com/in/arthur-torres-9b41a2184/",
      icon: "💼",
      label: t("contact.linkedinLabel", language),
      description: t("contact.linkedinDesc", language),
      isExternal: true,
    },
    {
      href: "https://www.upwork.com/freelancers/~0110023d7209510ffb?mp_source=share",
      icon: "🟢",
      label: t("contact.upworkLabel", language),
      description: t("contact.upworkDesc", language),
      isExternal: true,
    },
  ];

  return (
    <div className="max-w-3xl mx-auto space-y-4">
      <p className="text-center text-white/70 mb-8">
        {t("contact.directMessage", language)}
      </p>
      {contactMethods.map((method, index) => (
        <ContactLink key={index} {...method} />
      ))}
    </div>
  );
}
