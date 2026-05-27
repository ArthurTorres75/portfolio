import { useEffect, useState } from "react";
import type React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useLanguage } from "@/hooks/useLanguage";
import { t } from "@/lib/translations";

interface HeaderProps {
  name: string;
}

export function Header({ name }: HeaderProps): React.JSX.Element {
  const router = useRouter();
  const { language, setLanguage } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  const isProjectsPage = router.pathname === "/projects";
  const isHomePage = router.pathname === "/";
  const homeBase = isHomePage ? "" : router.basePath + "/";

  useEffect(() => {
    if (router.pathname !== "/") {
      setActiveSection("");
      return;
    }

    const sectionIds = [
      "sobre-mi",
      "experiencia",
      "certificaciones",
      "proyectos",
      "testimonios",
      "contacto",
    ];

    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries.find((entry) => entry.isIntersecting);

        if (visibleEntry?.target.id) {
          setActiveSection(visibleEntry.target.id);
        }
      },
      {
        root: null,
        rootMargin: "-45% 0px -45% 0px",
        threshold: 0,
      }
    );

    sections.forEach((section) => observer.observe(section));

    const onScroll = (): void => {
      if (window.scrollY < 120) {
        setActiveSection("");
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, [router.pathname]);

  type NavLink = {
    href: string;
    label: string;
    sectionId?: string;
    route?: "/" | "/projects";
  };

  const navLinks: NavLink[] = [
    { href: isHomePage ? "#" : `${router.basePath}/`, label: t("nav.inicio", language), route: "/" },
    {
      href: `${homeBase}#sobre-mi`,
      label: t("nav.sobreMi", language),
      sectionId: "sobre-mi",
    },
    {
      href: `${homeBase}#experiencia`,
      label: t("nav.experiencia", language),
      sectionId: "experiencia",
    },
    {
      href: `${homeBase}#certificaciones`,
      label: t("nav.certificaciones", language),
      sectionId: "certificaciones",
    },
    {
      href: isProjectsPage ? "/projects/" : `${homeBase}#proyectos`,
      label: t("nav.proyectos", language),
      sectionId: "proyectos",
      route: "/projects",
    },
    {
      href: `${homeBase}#testimonios`,
      label: t("nav.testimonios", language),
      sectionId: "testimonios",
    },
    {
      href: `${homeBase}#contacto`,
      label: t("nav.contacto", language),
      sectionId: "contacto",
    },
  ];

  const isLinkActive = (link: NavLink): boolean => {
    if (link.route === "/projects" && isProjectsPage) {
      return true;
    }

    if (router.pathname !== "/") {
      return false;
    }

    if (link.sectionId) {
      return activeSection === link.sectionId;
    }

    return link.route === "/" && activeSection === "";
  };

  return (
    <header className="sticky top-0 z-50 glass-effect border-b border-cyan-500/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="group">
            <div className="text-2xl font-bold iridescent-text">{name}</div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`nav-link ${
                  isLinkActive(link) ? "nav-link-active" : ""
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Language Selector */}
          <div className="hidden lg:flex items-center gap-2 bg-black/30 border border-cyan-500/50 rounded px-2 py-1">
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
            className="lg:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-nav"
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
          <nav id="mobile-nav" className="lg:hidden pb-4 space-y-2 flex flex-col items-start">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`block py-2 transition-colors duration-300 nav-link-mobile ${
                  isLinkActive(link)
                    ? "nav-link-mobile-active"
                    : "text-white/80 hover:text-cyan-300"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            
            {/* Mobile Language Selector */}
            <div className="inline-flex items-center gap-2 bg-black/30 border border-cyan-500/50 rounded px-3 py-2 mt-4">
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
