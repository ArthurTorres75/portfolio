/* eslint-disable @next/next/no-img-element */
import type React from "react";
import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@/tests/test-utils";
import { AvatarImage, ProjectImage } from "./OptimizedImage";

vi.mock("next/router", () => ({
  useRouter: () => ({ basePath: "" }),
}));

vi.mock("next/image", () => ({
  default: ({ src, alt, ...props }: { src: string; alt: string } & Record<string, unknown>) => {
    const filteredProps = Object.fromEntries(
      Object.entries(props).filter(([key]) => !["fill", "placeholder", "blurDataURL", "sizes"].includes(key))
    );
    return <img src={src} alt={alt} {...filteredProps} />;
  },
}));

describe("OptimizedImage", () => {
  it("normalizes local project image src with basePath", () => {
    render(<ProjectImage src="/photos/projects/demo.webp" alt="Demo project" />);

    expect(screen.getByRole("img", { name: "Demo project" })).toHaveAttribute(
      "src",
      "/photos/projects/demo.webp"
    );
  });

  it("keeps root-local src unchanged", () => {
    render(<ProjectImage src="/photos/projects/demo.webp" alt="Prefixed project" />);

    expect(screen.getByRole("img", { name: "Prefixed project" })).toHaveAttribute(
      "src",
      "/photos/projects/demo.webp"
    );
  });

  it("normalizes avatar src and applies explicit size", () => {
    const { container } = render(<AvatarImage src="photos/avatar.webp" alt="Avatar" size={96} />);

    expect(screen.getByRole("img", { name: "Avatar" })).toHaveAttribute(
      "src",
      "/photos/avatar.webp"
    );

    const wrapper = container.firstElementChild as HTMLElement;
    expect(wrapper).toHaveStyle({ width: "96px", height: "96px" });
  });
});
