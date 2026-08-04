import { useIsDesktop } from "@/hooks/useIsDesktop";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

export interface MotionCapability {
  isDesktop: boolean;
  prefersReducedMotion: boolean;
  isPointerMotionEnabled: boolean;
}

/**
 * Composes `useIsDesktop` and `usePrefersReducedMotion` into the single
 * gating contract every pointer- or scroll-driven motion/3D surface must
 * consult before starting an animation loop or motion-driven transform.
 */
export function useMotionCapability(): MotionCapability {
  const isDesktop = useIsDesktop();
  const prefersReducedMotion = usePrefersReducedMotion();

  return {
    isDesktop,
    prefersReducedMotion,
    isPointerMotionEnabled: isDesktop && !prefersReducedMotion,
  };
}
