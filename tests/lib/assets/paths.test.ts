import { describe, expect, it } from "vitest";
import { normalizeAssetPath, normalizeInternalHref } from "@/lib/assets/paths";

describe("normalizeAssetPath", () => {
  it("prefixes a local leading-slash path with basePath exactly once", () => {
    expect(normalizeAssetPath("/photos/projects/demo.webp", { basePath: "/docs" })).toBe(
      "/docs/photos/projects/demo.webp"
    );
  });

  it("does not double-prefix an already-prefixed path", () => {
    expect(
      normalizeAssetPath("/docs/photos/projects/demo.webp", {
        basePath: "/docs",
      })
    ).toBe("/docs/photos/projects/demo.webp");
  });

  it("normalizes nested path without leading slash", () => {
    expect(normalizeAssetPath("photos/projects/demo.webp", { basePath: "/docs" })).toBe(
      "/docs/photos/projects/demo.webp"
    );
  });

  it("returns empty string for blank input", () => {
    expect(normalizeAssetPath("", { basePath: "/docs" })).toBe("");
  });

  it("keeps root local path unchanged when basePath is empty", () => {
    expect(normalizeAssetPath("/photos/projects/demo.webp", { basePath: "" })).toBe(
      "/photos/projects/demo.webp"
    );
  });
});

describe("normalizeInternalHref", () => {
  it("normalizes in-app route under basePath", () => {
    expect(normalizeInternalHref("/projects", { basePath: "/docs" })).toBe(
      "/docs/projects"
    );
  });

  it("leaves already-prefixed route unchanged", () => {
    expect(normalizeInternalHref("/docs/projects", { basePath: "/docs" })).toBe(
      "/docs/projects"
    );
  });

  it("normalizes hash anchors under basePath", () => {
    expect(normalizeInternalHref("#contact", { basePath: "/docs" })).toBe(
      "/docs/#contact"
    );
  });

  it("keeps root hash anchors without basePath", () => {
    expect(normalizeInternalHref("#contact", { basePath: "" })).toBe("/#contact");
  });

  it("preserves external or non-http navigation targets", () => {
    expect(normalizeInternalHref("https://example.com", { basePath: "/docs" })).toBe(
      "https://example.com"
    );
    expect(normalizeInternalHref("mailto:test@example.com", { basePath: "/docs" })).toBe(
      "mailto:test@example.com"
    );
  });
});
