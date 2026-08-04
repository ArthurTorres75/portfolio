import type React from "react";
import { createRef } from "react";
import { describe, expect, it, vi } from "vitest";
import { render } from "@/tests/test-utils";
import { MEDIA_QUERIES } from "@/lib/motion/mediaQueries";
import { setMediaQueryState } from "@/tests/matchMedia";
import { CyberNebula } from "./CyberNebula";

vi.mock("@react-three/fiber", () => ({
  Canvas: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="r3f-canvas-mock">{children}</div>
  ),
  useFrame: () => {},
}));

describe("CyberNebula", () => {
  it("renders nothing when prefers-reduced-motion is active", () => {
    setMediaQueryState({
      [MEDIA_QUERIES.coarsePointer]: false,
      [MEDIA_QUERIES.reducedMotion]: true,
    });

    const containerRef = createRef<HTMLElement>();
    const { container } = render(<CyberNebula containerRef={containerRef} />);

    expect(container.querySelector(".hero-nebula")).toBeNull();
    expect(container).toBeEmptyDOMElement();
  });

  it("renders the nebula canvas wrapper on desktop without reduced motion", () => {
    setMediaQueryState({
      [MEDIA_QUERIES.coarsePointer]: false,
      [MEDIA_QUERIES.reducedMotion]: false,
    });

    const containerRef = createRef<HTMLElement>();
    const { container } = render(<CyberNebula containerRef={containerRef} />);

    expect(container.querySelector(".hero-nebula")).not.toBeNull();
  });
});
