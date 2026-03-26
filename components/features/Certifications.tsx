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
      title: t("cert5.title", language),
      issuer: t("cert5.issuer", language),
      date: t("cert5.date", language),
      icon: "🟨",
      credentialUrl: "",
    },
    {
      title: t("cert1.title", language),
      issuer: t("cert1.issuer", language),
      date: t("cert1.date", language),
      icon: "🟧",
      credentialUrl: "",
    },
    {
      title: t("cert2.title", language),
      issuer: t("cert2.issuer", language),
      date: t("cert2.date", language),
      icon: "🎨",
      credentialUrl: "",
    },
    {
      title: t("cert3.title", language),
      issuer: t("cert3.issuer", language),
      date: t("cert3.date", language),
      icon: "🗄️",
      credentialUrl: "",
    },
    {
      title: t("cert4.title", language),
      issuer: t("cert4.issuer", language),
      date: t("cert4.date", language),
      icon: "🐘",
      credentialUrl: "",
    },
    {
      title: t("cert8.title", language),
      issuer: t("cert8.issuer", language),
      date: t("cert8.date", language),
      icon: "🤖",
      credentialUrl: "https://certificados.thebigschool.com/wp-content/uploads/certs/MDEV2/Certificado-Arthur-Orlando-Torres-Suarez-gxplvh6j.pdf",
    },
  ];

  const inProgress = [
    {
      title: t("cert6.title", language),
      issuer: t("cert6.issuer", language),
      date: t("cert6.date", language),
      icon: "☁️",
      credentialUrl: "",
    },
    {
      title: t("cert7.title", language),
      issuer: t("cert7.issuer", language),
      date: t("cert7.date", language),
      icon: "🏗️",
      credentialUrl: "",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto">
      {/* Completed */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {certifications.map((cert, index) => (
          <CertificationCard key={index} {...cert} />
        ))}
      </div>

      {/* In Progress */}
      <div className="max-w-4xl mx-auto">
        <h3 className="text-xl font-semibold text-cyan-400 mb-6 text-center flex items-center justify-center gap-2">
          <span className="inline-block w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
          {t("certifications.inProgress", language)}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {inProgress.map((cert, index) => {
            const card = (
              <div
                className="glass-effect p-6 rounded-lg border border-yellow-500/30 hover:border-yellow-400 transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute top-2 right-2 px-2 py-0.5 text-[10px] font-bold bg-yellow-500/20 text-yellow-300 rounded-full uppercase tracking-wider">
                  {t("certifications.inProgress", language)}
                </div>
                <div className="flex items-start gap-4">
                  <div className="text-4xl">{cert.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-yellow-400 mb-2">
                      {cert.title}
                    </h3>
                    <p className="text-white/70 text-sm mb-1">{cert.issuer}</p>
                    <p className="text-white/50 text-xs">{cert.date}</p>
                  </div>
                </div>
              </div>
            );

            if (cert.credentialUrl) {
              return (
                <a key={index} href={cert.credentialUrl} target="_blank" rel="noopener noreferrer" className="block">
                  {card}
                </a>
              );
            }

            return <div key={index}>{card}</div>;
          })}
        </div>
      </div>
    </div>
  );
}
