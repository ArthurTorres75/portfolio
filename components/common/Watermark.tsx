import React from "react";
import { useLanguage } from "@/hooks/useLanguage";
import { t } from "@/lib/translations";

const REPEAT_COUNT = 80;

export function Watermark(): React.JSX.Element {
  const { language } = useLanguage();
  const text = t("watermark.text", language);

  return (
    <div className="watermark-overlay" aria-hidden="true">
      <div className="watermark-inner">
        {Array.from({ length: REPEAT_COUNT }, (_, i) => (
          <span key={i}>{text}</span>
        ))}
      </div>
    </div>
  );
}
