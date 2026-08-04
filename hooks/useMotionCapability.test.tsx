import { renderHook } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { MEDIA_QUERIES } from "@/lib/motion/mediaQueries";
import { setMediaQueryState } from "@/tests/matchMedia";
import { useMotionCapability } from "@/hooks/useMotionCapability";

describe("useMotionCapability", () => {
  it("enables pointer motion on desktop without reduced motion", () => {
    setMediaQueryState({
      [MEDIA_QUERIES.coarsePointer]: false,
      [MEDIA_QUERIES.reducedMotion]: false,
    });

    const { result } = renderHook(() => useMotionCapability());

    expect(result.current).toEqual({
      isDesktop: true,
      prefersReducedMotion: false,
      isPointerMotionEnabled: true,
    });
  });

  it("disables pointer motion on desktop when reduced motion is preferred", () => {
    setMediaQueryState({
      [MEDIA_QUERIES.coarsePointer]: false,
      [MEDIA_QUERIES.reducedMotion]: true,
    });

    const { result } = renderHook(() => useMotionCapability());

    expect(result.current).toEqual({
      isDesktop: true,
      prefersReducedMotion: true,
      isPointerMotionEnabled: false,
    });
  });

  it("disables pointer motion on a coarse-pointer device without reduced motion", () => {
    setMediaQueryState({
      [MEDIA_QUERIES.coarsePointer]: true,
      [MEDIA_QUERIES.reducedMotion]: false,
    });

    const { result } = renderHook(() => useMotionCapability());

    expect(result.current).toEqual({
      isDesktop: false,
      prefersReducedMotion: false,
      isPointerMotionEnabled: false,
    });
  });

  it("disables pointer motion on a coarse-pointer device with reduced motion", () => {
    setMediaQueryState({
      [MEDIA_QUERIES.coarsePointer]: true,
      [MEDIA_QUERIES.reducedMotion]: true,
    });

    const { result } = renderHook(() => useMotionCapability());

    expect(result.current).toEqual({
      isDesktop: false,
      prefersReducedMotion: true,
      isPointerMotionEnabled: false,
    });
  });
});
