import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  // Configuración de rutas para GitHub Pages
  // basePath: isProd ? process.env.NEXT_PUBLIC_BASE_PATH || "/" : "",
  // assetPrefix: isProd ? process.env.NEXT_PUBLIC_BASE_PATH || "/" : "",

  // Configuración base
  output: "export",
  trailingSlash: true,

  // Configuración de seguridad
  env: {
    NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_PATH
      ? `https://github.com/ArthurTorres75${process.env.NEXT_PUBLIC_BASE_PATH}`
      : "https://github.com/ArthurTorres75/portfolio",
  },
};

export default nextConfig;
