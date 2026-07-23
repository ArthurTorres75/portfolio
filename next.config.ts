import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // Static export para GitHub Pages
  images: {
    unoptimized: true, // Requerido para exportación estática
  },
};

export default nextConfig;
