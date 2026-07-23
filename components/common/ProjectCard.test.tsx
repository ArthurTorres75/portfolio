/* eslint-disable @next/next/no-img-element */
import type React from "react";
import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@/tests/test-utils";
import { ProjectCard } from "./ProjectCard";

vi.mock("next/router", () => ({
  useRouter: () => ({
    basePath: "",
    pathname: "/",
  }),
}));

vi.mock("next/image", () => ({
  default: ({ src, alt, ...props }: { src: string; alt: string } & Record<string, unknown>) => {
    const filteredProps = Object.fromEntries(
      Object.entries(props).filter(([key]) => !["fill", "placeholder", "blurDataURL", "sizes"].includes(key))
    );
    return <img src={src} alt={alt} {...filteredProps} />;
  },
}));

vi.mock("next/link", () => ({
  default: ({ href, children, ...props }: { href: string; children: React.ReactNode } & Record<string, unknown>) => (
    <a href={href} {...props}>
      {children}
    </a>
  ),
}));

describe("ProjectCard", () => {
  const defaultProps = {
    title: "Demo Project",
    description: "Demo description",
    technologies: ["Next.js", "TypeScript"],
    image: "/photos/projects/demo.webp",
  };

  it("renders normalized image src through shared contract", () => {
    render(<ProjectCard {...defaultProps} />);

    expect(screen.getByRole("img", { name: "Demo Project" })).toHaveAttribute(
      "src",
      "/photos/projects/demo.webp"
    );
  });

  it("normalizes internal link under basePath for navigation", () => {
    render(<ProjectCard {...defaultProps} link="/projects" />);

    const internalLinks = screen.getAllByRole("link", { name: /ver proyecto|view project/i });
    expect(internalLinks[0]).toHaveAttribute("href", "/projects");
  });

  it("keeps external links unchanged", () => {
    render(<ProjectCard {...defaultProps} link="https://example.com/demo" />);

    const cta = screen.getByRole("link", { name: /ver proyecto|view project/i });
    expect(cta).toHaveAttribute("href", "https://example.com/demo");
    expect(cta).toHaveAttribute("target", "_blank");
    expect(cta).toHaveAttribute("rel", "noopener noreferrer");
  });
});
