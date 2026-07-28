import { describe, expect, it, beforeEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { LanguageProvider, useLanguage } from "@/hooks/useLanguage";

function LanguageConsumer() {
  const { language, setLanguage } = useLanguage();
  return (
    <div>
      <span data-testid="language">{language}</span>
      <button onClick={() => setLanguage("en")}>set-en</button>
    </div>
  );
}

describe("useLanguage", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("defaults to Spanish when nothing is persisted", () => {
    render(
      <LanguageProvider>
        <LanguageConsumer />
      </LanguageProvider>
    );

    expect(screen.getByTestId("language")).toHaveTextContent("es");
  });

  it("reads a previously persisted language on mount", () => {
    localStorage.setItem("language", "en");

    render(
      <LanguageProvider>
        <LanguageConsumer />
      </LanguageProvider>
    );

    expect(screen.getByTestId("language")).toHaveTextContent("en");
  });

  it("persists and reflects the language when setLanguage is called", () => {
    render(
      <LanguageProvider>
        <LanguageConsumer />
      </LanguageProvider>
    );

    fireEvent.click(screen.getByText("set-en"));

    expect(screen.getByTestId("language")).toHaveTextContent("en");
    expect(localStorage.getItem("language")).toBe("en");
  });

  it("throws when used outside a LanguageProvider", () => {
    expect(() => render(<LanguageConsumer />)).toThrow(
      "useLanguage must be used within a LanguageProvider"
    );
  });
});
