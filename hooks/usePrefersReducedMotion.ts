import { useSyncExternalStore } from "react";
import { MEDIA_QUERIES } from "@/lib/motion/mediaQueries";

function subscribe(callback: () => void): () => void {
  const mediaQuery = window.matchMedia(MEDIA_QUERIES.reducedMotion);
  mediaQuery.addEventListener("change", callback);
  return () => mediaQuery.removeEventListener("change", callback);
}

function getSnapshot(): boolean {
  return window.matchMedia(MEDIA_QUERIES.reducedMotion).matches;
}

/**
 * Exported for direct unit testing: `renderHook()` always exercises the
 * client `getSnapshot` path in jsdom, so this is the only way to lock the
 * SSR default without mocking `useSyncExternalStore` internals.
 */
export function getServerSnapshot(): boolean {
  return true;
}

/**
 * Resolves `prefers-reduced-motion: reduce` reactively, following the same
 * `useSyncExternalStore`-over-`matchMedia` pattern as `useIsDesktop`.
 *
 * The server snapshot is `true` (degraded/no-motion) so the accessibility-safe
 * default wins the SSR-to-client tie for every motion surface.
 */
export function usePrefersReducedMotion(): boolean {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
