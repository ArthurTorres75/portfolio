import React from "react";

interface HeroProps {
  name: string;
  title: string;
  description: string;
}

export function Hero({ name, title, description }: HeroProps): React.JSX.Element {
  return (
    <section className="iridescent-gradient min-h-[600px] flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          <span className="text-white">Hola, soy </span>
          <span className="iridescent-text inline-block">{name}</span>
        </h1>

        <h2 className="text-2xl md:text-3xl text-cyan-300 mb-6 font-semibold">
          {title}
        </h2>

        <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto leading-relaxed">
          {description}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="#proyectos"
            className="px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 hover:-translate-y-1"
          >
            Ver Mis Proyectos
          </a>
          <a
            href="#contacto"
            className="px-8 py-3 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/10 transition-all duration-300"
          >
            Contactarme
          </a>
        </div>
      </div>
    </section>
  );
}
