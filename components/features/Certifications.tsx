import React from "react";
import { useLanguage } from "@/hooks/useLanguage";
import { t } from "@/lib/translations";

interface CertificationProps {
  title: string;
  issuer: string;
  date: string;
  icon: string;
  credentialUrl?: string;
}

function CertificationCard({ title, issuer, date, icon, credentialUrl }: CertificationProps): React.JSX.Element {
  const content = (
    <div className="glass-effect p-6 rounded-lg hover:border-cyan-400 border border-cyan-500/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/20 h-full">
      <div className="flex items-start gap-4">
        <div className="text-4xl">{icon}</div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-cyan-400 mb-2">
            {title}
          </h3>
          <p className="text-white/70 text-sm mb-1">{issuer}</p>
          <p className="text-white/50 text-xs">{date}</p>
        </div>
        {credentialUrl && (
          <div className="text-cyan-400 hover:text-cyan-300 transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </div>
        )}
      </div>
    </div>
  );

  if (credentialUrl) {
    return (
      <a
        href={credentialUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        {content}
      </a>
    );
  }

  return content;
}

export function Certifications(): React.JSX.Element {
  const { language } = useLanguage();

  const certifications = [
    {
      title: t("cert1.title", language),
      issuer: t("cert1.issuer", language),
      date: t("cert1.date", language),
      icon: "☁️",
      credentialUrl: "", // Agregar URL de credencial aquí
    },
    {
      title: t("cert2.title", language),
      issuer: t("cert2.issuer", language),
      date: t("cert2.date", language),
      icon: "🏗️",
      credentialUrl: "", // Agregar URL de credencial aquí
    },
    {
      title: t("cert3.title", language),
      issuer: t("cert3.issuer", language),
      date: t("cert3.date", language),
      icon: "⚛️",
      credentialUrl: "", // Agregar URL de credencial aquí
    },
    // Agregar más certificados según necesites
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
      {certifications.map((cert, index) => (
        <CertificationCard key={index} {...cert} />
      ))}
    </div>
  );
}
