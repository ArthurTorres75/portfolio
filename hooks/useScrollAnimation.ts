import { useInView, type Easing } from "framer-motion";
import { useRef } from "react";

export type AnimationVariant = "fadeUp" | "fadeIn" | "fadeLeft" | "fadeRight" | "scale";

interface UseScrollAnimationOptions {
  once?: boolean;
  amount?: number;
  delay?: number;
}

export function useScrollAnimation(options: UseScrollAnimationOptions = {}) {
  const { once = true, amount = 0.2 } = options;
  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount });

  return { ref, isInView };
}

const EASE_OUT: Easing = "easeOut";

export const animationVariants = {
  fadeUp: {
    hidden: { opacity: 0, y: 40 },
    visible: (delay: number = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: EASE_OUT, delay },
    }),
  },
  fadeIn: {
    hidden: { opacity: 0 },
    visible: (delay: number = 0) => ({
      opacity: 1,
      transition: { duration: 0.5, ease: EASE_OUT, delay },
    }),
  },
  fadeLeft: {
    hidden: { opacity: 0, x: -40 },
    visible: (delay: number = 0) => ({
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: EASE_OUT, delay },
    }),
  },
  fadeRight: {
    hidden: { opacity: 0, x: 40 },
    visible: (delay: number = 0) => ({
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: EASE_OUT, delay },
    }),
  },
  scale: {
    hidden: { opacity: 0, scale: 0.92 },
    visible: (delay: number = 0) => ({
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: EASE_OUT, delay },
    }),
  },
} as const;

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};
