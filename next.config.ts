import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // Static export para GitHub Pages
  images: {
    unoptimized: true, // Requerido para exportación estática
  },
  trailingSlash: true, // Recomendado para GitHub Pages
};

export default nextConfig;
