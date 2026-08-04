import { act, renderHook } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { MEDIA_QUERIES } from "@/lib/motion/mediaQueries";
import { setMediaQueryState } from "@/tests/matchMedia";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

function getSubscribedMediaQueryList(): MediaQueryList {
  const results = vi.mocked(window.matchMedia).mock.results;
  const subscribed = results.find(
    (result) => vi.mocked(result.value.addEventListener).mock.calls.length > 0
  );

  if (!subscribed) {
    throw new Error("No subscribed MediaQueryList found for matchMedia");
  }

  return subscribed.value as MediaQueryList;
}

describe("usePrefersReducedMotion", () => {
  it("returns false when prefers-reduced-motion is not active", () => {
    setMediaQueryState({ [MEDIA_QUERIES.reducedMotion]: false });

    const { result } = renderHook(() => usePrefersReducedMotion());

    expect(result.current).toBe(false);
  });

  it("returns true when prefers-reduced-motion is active", () => {
    setMediaQueryState({ [MEDIA_QUERIES.reducedMotion]: true });

    const { result } = renderHook(() => usePrefersReducedMotion());

    expect(result.current).toBe(true);
  });

  it("updates when the OS-level preference changes at runtime", () => {
    setMediaQueryState({ [MEDIA_QUERIES.reducedMotion]: false });

    const { result } = renderHook(() => usePrefersReducedMotion());
    expect(result.current).toBe(false);

    act(() => {
      setMediaQueryState({ [MEDIA_QUERIES.reducedMotion]: true });
    });

    expect(result.current).toBe(true);
  });

  it("unsubscribes from matchMedia on unmount", () => {
    setMediaQueryState({ [MEDIA_QUERIES.reducedMotion]: false });

    const { unmount } = renderHook(() => usePrefersReducedMotion());
    const mediaQueryList = getSubscribedMediaQueryList();

    expect(mediaQueryList.addEventListener).toHaveBeenCalledWith("change", expect.any(Function));

    unmount();

    expect(mediaQueryList.removeEventListener).toHaveBeenCalledWith(
      "change",
      expect.any(Function)
    );
  });
});
