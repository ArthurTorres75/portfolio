import { useSyncExternalStore } from "react";
import { MEDIA_QUERIES } from "@/lib/motion/mediaQueries";

function subscribe(callback: () => void): () => void {
  const mediaQuery = window.matchMedia(MEDIA_QUERIES.coarsePointer);
  mediaQuery.addEventListener("change", callback);
  return () => mediaQuery.removeEventListener("change", callback);
}

function getSnapshot(): boolean {
  return !window.matchMedia(MEDIA_QUERIES.coarsePointer).matches;
}

function getServerSnapshot(): boolean {
  return false;
}

export function useIsDesktop(): boolean {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
