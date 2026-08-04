import type React from "react";
import { describe, expect, it, vi } from "vitest";
import { render } from "@/tests/test-utils";
import { MEDIA_QUERIES } from "@/lib/motion/mediaQueries";
import { setMediaQueryState } from "@/tests/matchMedia";
import { WaterSurface3D } from "./WaterSurface3D";

vi.mock("@react-three/fiber", () => ({
  Canvas: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="r3f-canvas-mock">{children}</div>
  ),
  useFrame: () => {},
}));

describe("WaterSurface3D", () => {
  it("renders nothing when prefers-reduced-motion is active", () => {
    setMediaQueryState({
      [MEDIA_QUERIES.coarsePointer]: false,
      [MEDIA_QUERIES.reducedMotion]: true,
    });

    const { container } = render(<WaterSurface3D />);

    expect(container.querySelector(".about-water-3d")).toBeNull();
    expect(container).toBeEmptyDOMElement();
  });

  it("renders the water surface canvas wrapper on desktop without reduced motion", () => {
    setMediaQueryState({
      [MEDIA_QUERIES.coarsePointer]: false,
      [MEDIA_QUERIES.reducedMotion]: false,
    });

    const { container } = render(<WaterSurface3D />);

    expect(container.querySelector(".about-water-3d")).not.toBeNull();
  });
});
