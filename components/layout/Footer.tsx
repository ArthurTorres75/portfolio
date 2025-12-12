import React from "react";
import Link from "next/link";

export function Footer(): React.JSX.Element {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="glass-effect border-t border-cyan-500/30 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Contact */}
          <div>
            <h3 className="text-cyan-400 font-semibold mb-4">Contacto</h3>
            <ul className="space-y-2 text-white/70">
              <li>
                <a
                  href="mailto:contact@example.com"
                  className="hover:text-cyan-400 transition-colors"
                >
                  Email
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
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
            <h3 className="text-cyan-400 font-semibold mb-4">Enlaces</h3>
            <ul className="space-y-2 text-white/70">
              <li>
                <Link href="/" className="hover:text-cyan-400 transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/projects/" className="hover:text-cyan-400 transition-colors">
                  Proyectos
                </Link>
              </li>
            </ul>
          </div>

          {/* Redes Sociales */}
          <div>
            <h3 className="text-cyan-400 font-semibold mb-4">Redes</h3>
            <div className="flex space-x-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-cyan-400 transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-cyan-400 transition-colors"
              >
                Twitter
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-cyan-500/20 pt-6 text-center text-white/50 text-sm">
          <p>© {currentYear} Arthur Torres. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
