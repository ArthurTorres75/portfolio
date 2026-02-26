import React from "react";
import { useLanguage } from "@/hooks/useLanguage";
import { t } from "@/lib/translations";

interface Badge {
  text: string;
  icon: string;
}

interface TestimonialProps {
  clientName: string;
  role: string;
  comment: string;
  rating: number;
  duration: string;
  amount: string;
  hours: string;
  badges: Badge[];
}

function TestimonialCard({
  clientName,
  role,
  comment,
  rating,
  duration,
  amount,
  hours,
  badges,
}: TestimonialProps): React.JSX.Element {
  return (
    <div className="glass-effect p-6 rounded-lg border border-cyan-500/30 hover:border-cyan-400 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/20 h-full flex flex-col">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-cyan-400 mb-1">
            {clientName}
          </h3>
          <p className="text-white/60 text-sm">{role}</p>
        </div>
        <div className="flex items-center gap-1 text-yellow-400">
          {Array.from({ length: 5 }).map((_, i) => (
            <span key={i} className={i < rating ? "text-yellow-400" : "text-white/20"}>
              ★
            </span>
          ))}
          <span className="ml-2 text-white/70 text-sm">{rating.toFixed(1)}</span>
        </div>
      </div>

      {/* Comment */}
      <blockquote className="text-white/70 italic mb-4 flex-grow border-l-2 border-cyan-500/50 pl-4">
        &ldquo;{comment}&rdquo;
      </blockquote>

      {/* Badges */}
      {badges.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {badges.map((badge, index) => (
            <span
              key={index}
              className="inline-flex items-center gap-1 px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-xs text-cyan-300"
            >
              <span>{badge.icon}</span>
              <span>{badge.text}</span>
            </span>
          ))}
        </div>
      )}

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/10">
        <div className="text-center">
          <p className="text-white/50 text-xs mb-1">{t("testimonial.duration", useLanguage().language)}</p>
          <p className="text-white font-semibold text-sm">{duration}</p>
        </div>
        <div className="text-center">
          <p className="text-white/50 text-xs mb-1">{t("testimonial.earned", useLanguage().language)}</p>
          <p className="text-cyan-400 font-semibold text-sm">{amount}</p>
        </div>
        <div className="text-center">
          <p className="text-white/50 text-xs mb-1">{t("testimonial.hours", useLanguage().language)}</p>
          <p className="text-white font-semibold text-sm">{hours}</p>
        </div>
      </div>
    </div>
  );
}

export function Testimonials(): React.JSX.Element {
  const { language } = useLanguage();

  const testimonials: TestimonialProps[] = [
    {
      clientName: "React & Node Client",
      role: t("testimonial1.role", language),
      comment: t("testimonial1.comment", language),
      rating: 5.0,
      duration: "Aug 2022 - Jan 2024",
      amount: "$31,462",
      hours: "2,622",
      badges: [
        { text: t("badge.quality", language), icon: "⭐" },
        { text: t("badge.collaborative", language), icon: "🤝" },
        { text: t("badge.communicator", language), icon: "💬" },
      ],
    },
    {
      clientName: "JavaScript/Next.js Client",
      role: t("testimonial2.role", language),
      comment: t("testimonial2.comment", language),
      rating: 5.0,
      duration: "Jun 2024 - Jan 2025",
      amount: "$19,592",
      hours: "1,224",
      badges: [
        { text: t("badge.efficient", language), icon: "⚡" },
        { text: t("badge.quality", language), icon: "⭐" },
      ],
    },
    {
      clientName: "Montrix",
      role: t("testimonial3.role", language),
      comment: t("testimonial3.comment", language),
      rating: 5.0,
      duration: "Jun 2021 - Jul 2022",
      amount: "$7,829",
      hours: "1,566",
      badges: [
        { text: t("badge.communicator", language), icon: "💬" },
        { text: t("badge.collaborative", language), icon: "🤝" },
      ],
    },
    {
      clientName: "GoJS Client",
      role: t("testimonial4.role", language),
      comment: t("testimonial4.comment", language),
      rating: 5.0,
      duration: "Oct 2020 - May 2021",
      amount: "$6,784",
      hours: "1,611",
      badges: [
        { text: t("badge.collaborative", language), icon: "🤝" },
        { text: t("badge.quality", language), icon: "⭐" },
        { text: t("badge.solutionOriented", language), icon: "💡" },
      ],
    },
    {
      clientName: "Cloudshim",
      role: t("testimonial5.role", language),
      comment: t("testimonial5.comment", language),
      rating: 5.0,
      duration: "Jun 2021 - Aug 2021",
      amount: "$523",
      hours: "81",
      badges: [
        { text: t("badge.reliable", language), icon: "✅" },
        { text: t("badge.quality", language), icon: "⭐" },
      ],
    },
  ];

  return (
    <div className="space-y-6">
      {/* Upwork Stats Banner */}
      <div className="glass-effect p-6 rounded-lg border border-cyan-500/30 text-center mb-8">
        <div className="flex flex-wrap justify-center items-center gap-8">
          <div>
            <p className="text-4xl font-bold text-cyan-400">5.0</p>
            <p className="text-white/70 text-sm">{t("testimonial.avgRating", language)}</p>
          </div>
          <div className="h-12 w-px bg-white/20" />
          <div>
            <p className="text-4xl font-bold text-cyan-400">6</p>
            <p className="text-white/70 text-sm">{t("testimonial.totalJobs", language)}</p>
          </div>
          <div className="h-12 w-px bg-white/20" />
          <div>
            <p className="text-4xl font-bold text-cyan-400">7,104</p>
            <p className="text-white/70 text-sm">{t("testimonial.totalHours", language)}</p>
          </div>
          <div className="h-12 w-px bg-white/20" />
          <div>
            <p className="text-4xl font-bold text-cyan-400">$66K+</p>
            <p className="text-white/70 text-sm">{t("testimonial.totalEarned", language)}</p>
          </div>
        </div>
      </div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
}
