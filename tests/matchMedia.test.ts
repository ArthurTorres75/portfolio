import { describe, expect, it, vi } from "vitest";
import { resetMediaQueryState, setMediaQueryState } from "./matchMedia";

const QUERY_A = "(prefers-reduced-motion: reduce)";
const QUERY_B = "(hover: none), (pointer: coarse)";

describe("matchMedia test mock", () => {
  it("defaults to matches:false for an unregistered query", () => {
    expect(window.matchMedia(QUERY_A).matches).toBe(false);
  });

  it("flips matches only for the targeted query", () => {
    setMediaQueryState({ [QUERY_A]: true });

    expect(window.matchMedia(QUERY_A).matches).toBe(true);
    expect(window.matchMedia(QUERY_B).matches).toBe(false);
  });

  it("restores the default (unregistered/false) state on reset", () => {
    setMediaQueryState({ [QUERY_A]: true });
    expect(window.matchMedia(QUERY_A).matches).toBe(true);

    resetMediaQueryState();

    expect(window.matchMedia(QUERY_A).matches).toBe(false);
  });

  it("notifies a registered change listener when its query's state changes", () => {
    const listener = vi.fn();
    const mediaQueryList = window.matchMedia(QUERY_A);
    mediaQueryList.addEventListener("change", listener);

    setMediaQueryState({ [QUERY_A]: true });

    expect(listener).toHaveBeenCalledTimes(1);
    expect(listener).toHaveBeenCalledWith(
      expect.objectContaining({ matches: true, media: QUERY_A })
    );
  });

  it("does not notify listeners registered for a different query", () => {
    const listener = vi.fn();
    const mediaQueryList = window.matchMedia(QUERY_B);
    mediaQueryList.addEventListener("change", listener);

    setMediaQueryState({ [QUERY_A]: true });

    expect(listener).not.toHaveBeenCalled();
  });

  it("stops notifying a listener after it is removed", () => {
    const listener = vi.fn();
    const mediaQueryList = window.matchMedia(QUERY_A);
    mediaQueryList.addEventListener("change", listener);
    mediaQueryList.removeEventListener("change", listener);

    setMediaQueryState({ [QUERY_A]: true });

    expect(listener).not.toHaveBeenCalled();
  });
});
