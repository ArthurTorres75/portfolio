import type React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/useLanguage";
import { t } from "@/lib/translations";
import { animationVariants } from "@/hooks/useScrollAnimation";

interface CertificationProps {
  title: string;
  issuer: string;
  date: string;
  icon: React.ReactNode;
  credentialUrl?: string;
  inProgress?: boolean;
  language: "es" | "en";
}

function CertificationCard({
  title,
  issuer,
  date,
  icon,
  credentialUrl,
  inProgress = false,
  language,
}: CertificationProps): React.JSX.Element {
  const content = (
    <div
      className={`glass-effect certification-card p-6 rounded-lg h-full ${
        inProgress ? "certification-card--progress" : ""
      }`}
    >
      {inProgress && (
        <div className="certification-card__status">
          {t("certifications.inProgress", language)}
        </div>
      )}
      <div className="flex items-start gap-4">
        <div className="certification-card__icon text-4xl">{icon}</div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-cyan-400 mb-2 certification-card__title">
            {title}
          </h3>
          <p className="text-white/70 text-sm mb-1">{issuer}</p>
          <p className="text-white/50 text-xs">{date}</p>
        </div>
        {credentialUrl && (
          <div className="certification-card__link text-cyan-400 transition-colors">
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
      icon: (
        <span className="inline-block px-2 py-0.5 bg-yellow-500/20 text-yellow-400 rounded font-bold text-xs font-mono">
          &lt;&gt;
        </span>
      ),
      credentialUrl: "https://www.sololearn.com/certificates/CT-WPCZMDGL",
    },
    {
      title: t("cert1.title", language),
      issuer: t("cert1.issuer", language),
      date: t("cert1.date", language),
      icon: (
        <span className="inline-block px-2 py-0.5 bg-orange-500/20 text-orange-400 rounded font-bold text-xs font-mono">
          JS
        </span>
      ),
      credentialUrl: "https://www.sololearn.com/certificates/CT-NPULW3N2",
    },
    {
      title: t("cert2.title", language),
      issuer: t("cert2.issuer", language),
      date: t("cert2.date", language),
      icon: "🎨",
      credentialUrl: "https://www.sololearn.com/certificates/CT-PP0ZQ7KF",
    },
    {
      title: t("cert3.title", language),
      issuer: t("cert3.issuer", language),
      date: t("cert3.date", language),
      icon: "🗄️",
      credentialUrl: "https://www.sololearn.com/certificates/CT-U5DC4HMR",
    },
    {
      title: t("cert4.title", language),
      issuer: t("cert4.issuer", language),
      date: t("cert4.date", language),
      icon: "🐘",
      credentialUrl: "https://www.sololearn.com/certificates/CT-VN1JMINK",
    },
    {
      title: t("cert8.title", language),
      issuer: t("cert8.issuer", language),
      date: t("cert8.date", language),
      icon: "🤖",
      credentialUrl: "https://certificados.thebigschool.com/wp-content/uploads/certs/MDEV2/Certificado-Arthur-Orlando-Torres-Suarez-gxplvh6j.pdf",
    },
    {
      title: t("cert9.title", language),
      issuer: t("cert9.issuer", language),
      date: t("cert9.date", language),
      icon: (
        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-pink-500/20 text-pink-300 font-bold text-base font-mono">
          E
        </span>
      ),
      credentialUrl: "https://www.udemy.com/certificate/UC-7d4d0579-2175-4797-8952-8696a59fbf1c/",
    },
    {
      title: t("cert10.title", language),
      issuer: t("cert10.issuer", language),
      date: t("cert10.date", language),
      icon: "☁️",
      credentialUrl: "",
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
          <motion.div
            key={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={animationVariants.fadeUp}
            custom={index * 0.08}
          >
            <CertificationCard {...cert} language={language} />
          </motion.div>
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
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
                variants={animationVariants.scale}
                custom={index * 0.1}
                className="h-full"
              >
                <CertificationCard
                  title={cert.title}
                  issuer={cert.issuer}
                  date={cert.date}
                  icon={cert.icon}
                  credentialUrl={cert.credentialUrl}
                  inProgress
                  language={language}
                />
              </motion.div>
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
