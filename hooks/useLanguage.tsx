import { createContext, useContext, useEffect, useSyncExternalStore, type ReactNode } from "react";
import type { Language } from "@/lib/translations";

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const STORAGE_KEY = "language";
const DEFAULT_LANGUAGE: Language = "es";
const listeners = new Set<() => void>();

function subscribe(callback: () => void): () => void {
  listeners.add(callback);
  return () => listeners.delete(callback);
}

function getSnapshot(): Language {
  return (localStorage.getItem(STORAGE_KEY) as Language | null) ?? DEFAULT_LANGUAGE;
}

function getServerSnapshot(): Language {
  return DEFAULT_LANGUAGE;
}

interface ProviderProps {
  children: ReactNode;
}

export function LanguageProvider({ children }: ProviderProps) {
  const language = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const setLanguage = (lang: Language): void => {
    localStorage.setItem(STORAGE_KEY, lang);
    listeners.forEach((listener) => listener());
  };

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextType {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
