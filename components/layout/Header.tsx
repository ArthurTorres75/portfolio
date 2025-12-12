import React, { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/hooks/useLanguage";
import { t } from "@/lib/translations";

interface HeaderProps {
  name: string;
}

export function Header({ name }: HeaderProps): React.JSX.Element {
  const { language, setLanguage } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: t("nav.inicio", language) },
    { href: "#sobre-mi", label: t("nav.sobreMi", language) },
    { href: "/projects/", label: t("nav.proyectos", language) },
    { href: "#contacto", label: t("nav.contacto", language) },
  ];

  return (
    <header className="sticky top-0 z-50 glass-effect border-b border-cyan-500/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="group">
            <div className="text-2xl font-bold iridescent-text">{name}</div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white/80 hover:text-cyan-400 transition-colors duration-300 relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </nav>

          {/* Language Selector */}
          <div className="hidden md:flex items-center gap-2 bg-black/30 border border-cyan-500/50 rounded px-2 py-1">
            <button
              className={`px-2 py-1 text-sm font-medium rounded transition-all duration-300 ${
                language === "es"
                  ? "bg-cyan-500 text-white"
                  : "text-white/60 hover:text-white"
              }`}
              onClick={() => setLanguage("es")}
            >
              ES
            </button>
            <span className="text-cyan-500/50">|</span>
            <button
              className={`px-2 py-1 text-sm font-medium rounded transition-all duration-300 ${
                language === "en"
                  ? "bg-cyan-500 text-white"
                  : "text-white/60 hover:text-white"
              }`}
              onClick={() => setLanguage("en")}
            >
              EN
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block text-white/80 hover:text-cyan-400 py-2 transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
            
            {/* Mobile Language Selector */}
            <div className="flex items-center gap-2 bg-black/30 border border-cyan-500/50 rounded px-3 py-2 mt-4 w-fit">
              <button
                className={`px-2 py-1 text-sm font-medium rounded transition-all duration-300 ${
                  language === "es"
                    ? "bg-cyan-500 text-white"
                    : "text-white/60 hover:text-white"
                }`}
                onClick={() => setLanguage("es")}
              >
                ES
              </button>
              <span className="text-cyan-500/50">|</span>
              <button
                className={`px-2 py-1 text-sm font-medium rounded transition-all duration-300 ${
                  language === "en"
                    ? "bg-cyan-500 text-white"
                    : "text-white/60 hover:text-white"
                }`}
                onClick={() => setLanguage("en")}
              >
                EN
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
