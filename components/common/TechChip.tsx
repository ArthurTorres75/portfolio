import type React from "react";
import { motion, type Variants } from "framer-motion";
import type { SimpleIcon } from "simple-icons";
import type { TechItem } from "@/lib/techStack";

interface TechChipProps {
  item: TechItem;
  icon: SimpleIcon | null;
  index: number;
}

const chipVariants: Variants = {
  hidden: { opacity: 0, scale: 0.85, y: 8 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      delay: (i as number) * 0.04,
      duration: 0.3,
      type: "tween",
    },
  }),
};

export function TechChip({ item, icon, index }: TechChipProps): React.JSX.Element {
  const brandColor = item.hex
    ? `#${item.hex}`
    : icon
    ? `#${icon.hex}`
    : "#67e8f9";

  return (
    <motion.div
      custom={index}
      variants={chipVariants}
      title={item.name}
      whileHover={{
        scale: 1.08,
        boxShadow: `0 0 12px 2px ${brandColor}55`,
        transition: { duration: 0.15 },
      }}
      className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-white/80 transition-colors hover:border-white/20 hover:text-white cursor-default select-none"
    >
      {icon && !item.noIcon ? (
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          width={16}
          height={16}
          fill={brandColor}
          className="shrink-0"
        >
          <path d={icon.path} />
        </svg>
      ) : (
        <span
          aria-hidden="true"
          className="flex h-4 w-4 shrink-0 items-center justify-center rounded text-[9px] font-bold uppercase"
          style={{ backgroundColor: `${brandColor}22`, color: brandColor }}
        >
          {item.name.slice(0, 2)}
        </span>
      )}
      <span>{item.name}</span>
    </motion.div>
  );
}
