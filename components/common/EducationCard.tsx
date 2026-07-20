import type React from "react";

export type EducationVariant = "degree" | "diploma";

interface EducationCardProps {
  variant: EducationVariant;
  icon: string;
  title: string;
  issuer: string;
  date: string;
}

const VARIANT_STYLES: Record<
  EducationVariant,
  { container: string; icon: string; title: string }
> = {
  degree: {
    container:
      "glass-effect p-6 md:p-8 rounded-xl border border-cyan-400/40 bg-cyan-500/5 flex items-center gap-5",
    icon: "text-5xl shrink-0",
    title: "text-lg md:text-xl font-bold text-white",
  },
  diploma: {
    container:
      "mt-3 rounded-lg border border-cyan-400/20 bg-white/[0.02] px-5 py-4 flex items-center gap-4",
    icon: "text-2xl shrink-0",
    title: "text-sm md:text-base font-semibold text-white/90",
  },
};

export function EducationCard({
  variant,
  icon,
  title,
  issuer,
  date,
}: EducationCardProps): React.JSX.Element {
  const styles = VARIANT_STYLES[variant];

  return (
    <div className={styles.container}>
      <div className={styles.icon} aria-hidden="true">
        {icon}
      </div>
      <div className="flex-1">
        <h4 className={styles.title}>{title}</h4>
        {variant === "degree" ? (
          <>
            <p className="text-cyan-400/90 text-sm font-medium mt-1">{issuer}</p>
            <p className="text-white/50 text-xs mt-1">{date}</p>
          </>
        ) : (
          <p className="text-white/50 text-xs mt-0.5">
            {issuer} · {date}
          </p>
        )}
      </div>
    </div>
  );
}
