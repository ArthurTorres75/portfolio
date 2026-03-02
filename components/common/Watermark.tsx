import React from "react";

const WATERMARK_TEXT = "El Señor es mi proveedor ✝ El Shaddai";
const REPEAT_COUNT = 80;

export function Watermark(): React.JSX.Element {
  return (
    <div className="watermark-overlay" aria-hidden="true">
      <div className="watermark-inner">
        {Array.from({ length: REPEAT_COUNT }, (_, i) => (
          <span key={i}>{WATERMARK_TEXT}</span>
        ))}
      </div>
    </div>
  );
}
