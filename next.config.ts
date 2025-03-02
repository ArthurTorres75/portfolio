import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  // Configuración de meta
  env: {
    SITE_TITLE: "Tu Nombre | Portafolio",
    DESCRIPTION: "Portafolio profesional de desarrollo web",
    AUTHOR: "Tu Nombre",
  },

  // Configuración de imágenes
  // images: {
  //   domains: ["tu-dominio.com"], // Si tienes un dominio personalizado
  //   formats: ["image/avif", "image/webp"],
  //   minimumCacheTTL: 31536000, // 1 año en segundos
  // },

  // Configuración de optimización
  optimizeFonts: true,
  compress: true,

  // Configuración de rutas estáticas
  trailingSlash: true,

  // Configuración de seguridad
  securityHeaders: {
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'", "'unsafe-inline'"],
        scriptSrc: ["'self'", "'unsafe-inline'"],
        styleSrc: ["'self'", "'unsafe-inline'"],
      },
    },
  },
};

export default nextConfig;
