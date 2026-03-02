import React from "react";
import Link from "next/link";
import { useLanguage } from "@/hooks/useLanguage";
import { t } from "@/lib/translations";

export function Footer(): React.JSX.Element {
  const currentYear = new Date().getFullYear();
  const { language } = useLanguage();

  return (
    <footer className="glass-effect border-t border-cyan-500/30 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Contact */}
          <div>
            <h3 className="text-cyan-400 font-semibold mb-4">{t("footer.contact", language)}</h3>
            <ul className="space-y-2 text-white/70">
              <li>
                <a
                  href="mailto:arthurtorres75@gmail.com"
                  className="hover:text-cyan-400 transition-colors"
                >
                  {t("contact.emailLabel", language)}
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/arthur-torres-9b41a2184/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-400 transition-colors"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-cyan-400 font-semibold mb-4">{t("footer.links", language)}</h3>
            <ul className="space-y-2 text-white/70">
              <li>
                <Link href="/" className="hover:text-cyan-400 transition-colors">
                  {t("nav.inicio", language)}
                </Link>
              </li>
              <li>
                <Link href="/projects/" className="hover:text-cyan-400 transition-colors">
                  {t("nav.proyectos", language)}
                </Link>
              </li>
            </ul>
          </div>

          {/* Redes Sociales */}
          <div>
            <h3 className="text-cyan-400 font-semibold mb-4">{t("footer.social", language)}</h3>
            <div className="flex space-x-4">
              <a
                href="https://github.com/ArthurTorres75"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-cyan-400 transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://www.upwork.com/freelancers/~0110023d7209510ffb?mp_source=share"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-cyan-400 transition-colors"
              >
                Upwork
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-cyan-500/20 pt-6 text-center text-white/50 text-sm">
          <p>© {currentYear} Arthur Torres. {t("footer.copyright", language)}</p>
        </div>
      </div>
    </footer>
  );
}
