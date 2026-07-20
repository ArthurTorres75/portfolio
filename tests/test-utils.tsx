import { render, RenderOptions } from "@testing-library/react";
import { ReactNode } from "react";
import { LanguageProvider } from "@/hooks/useLanguage";

function AllProviders({ children }: { children: ReactNode }) {
  return <LanguageProvider>{children}</LanguageProvider>;
}

const customRender = (ui: React.ReactElement, options?: RenderOptions) =>
  render(ui, { wrapper: AllProviders, ...options });

export * from "@testing-library/react";
export { customRender as render };
