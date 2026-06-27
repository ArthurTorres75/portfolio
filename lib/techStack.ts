export interface TechItem {
  name: string;
  slug: string;
  hex?: string;
  category: "frontend" | "backend" | "cloud" | "mobile" | "tools";
  noIcon?: boolean;
  core?: boolean;
}

export const TECH_STACK: TechItem[] = [
  // ─── Frontend ───────────────────────────────────────────────────
  { name: "TypeScript", slug: "typescript", category: "frontend", core: true },
  { name: "Angular", slug: "angular", category: "frontend", core: true },
  { name: "RxJS", slug: "reactivex", hex: "B7178C", category: "frontend" },
  { name: "React", slug: "react", category: "frontend", core: true },
  { name: "Next.js", slug: "nextdotjs", category: "frontend", core: true },
  { name: "CSS3", slug: "css", hex: "1572B6", category: "frontend" },
  { name: "Tailwind CSS", slug: "tailwindcss", category: "frontend", core: true },
  { name: "Material UI", slug: "mui", category: "frontend" },
  { name: "shadcn/ui", slug: "shadcn", category: "frontend", noIcon: true },
  { name: "Framer Motion", slug: "framer", category: "frontend" },
  { name: "GSAP", slug: "greensock", category: "frontend" },
  { name: "Three.js", slug: "threedotjs", category: "frontend" },
  { name: "React Hook Form", slug: "reacthookform", category: "frontend", noIcon: true },
  { name: "TanStack Query", slug: "tanstack", category: "frontend" },
  { name: "Zustand", slug: "zustand", category: "frontend", noIcon: true },
  { name: "Redux Toolkit", slug: "redux", category: "frontend" },
  { name: "Axios", slug: "axios", category: "frontend", noIcon: true },
  { name: "Stripe", slug: "stripe", category: "frontend" },
  { name: "PayPal", slug: "paypal", category: "frontend" },

  // ─── Backend ────────────────────────────────────────────────────
  { name: "Node.js", slug: "nodedotjs", category: "backend", core: true },
  { name: "Express", slug: "express", category: "backend" },
  { name: "NestJS", slug: "nestjs", category: "backend", core: true },
  { name: "C", slug: "c", category: "backend", noIcon: true },
  { name: "Java", slug: "java", category: "backend", noIcon: true },
  { name: "PHP", slug: "php", category: "backend" },
  { name: "Laravel", slug: "laravel", category: "backend", core: true },
  { name: "Prisma", slug: "prisma", category: "backend", core: true },
  { name: "MySQL", slug: "mysql", category: "backend" },
  { name: "PostgreSQL", slug: "postgresql", category: "backend", core: true },
  { name: "MongoDB", slug: "mongodb", category: "backend" },
  { name: "Supabase", slug: "supabase", category: "backend" },
  { name: "Redis", slug: "redis", category: "backend" },
  { name: "JWT", slug: "jwt", category: "backend", noIcon: true },
  { name: "Socket.io", slug: "socketdotio", category: "backend" },

  // ─── Cloud ──────────────────────────────────────────────────────
  { name: "AWS", slug: "aws", category: "cloud", noIcon: true, core: true },
  { name: "Vercel", slug: "vercel", category: "cloud", core: true },
  { name: "Firebase", slug: "firebase", category: "cloud" },
  { name: "Docker", slug: "docker", category: "cloud" },
  { name: "Terraform", slug: "terraform", category: "cloud" },
  { name: "GitHub Actions", slug: "githubactions", category: "cloud" },
  { name: "Azure", slug: "azure", category: "cloud", noIcon: true, core: true },
  { name: "Hostinger", slug: "hostinger", category: "cloud" },

  // ─── Mobile ─────────────────────────────────────────────────────
  { name: "React Native", slug: "react", hex: "61DAFB", category: "mobile" },
  { name: "Expo", slug: "expo", category: "mobile" },
  { name: "Ionic", slug: "ionic", category: "mobile" },

  // ─── Tools ──────────────────────────────────────────────────────
  { name: "Git", slug: "git", category: "tools" },
  { name: "GitHub", slug: "github", category: "tools" },
  { name: "GitLab", slug: "gitlab", category: "tools" },
  { name: "Jira", slug: "jira", category: "tools" },
  { name: "Figma", slug: "figma", category: "tools" },
  { name: "Vitest", slug: "vitest", category: "tools" },
  { name: "ESLint", slug: "eslint", category: "tools" },
  { name: "Webpack", slug: "webpack", category: "tools" },
  { name: "Vite", slug: "vite", category: "tools" },
  { name: "pnpm", slug: "pnpm", category: "tools" },
];

export const CATEGORY_LABELS: Record<TechItem["category"], string> = {
  frontend: "Frontend",
  backend: "Backend",
  cloud: "Cloud & DevOps",
  mobile: "Mobile",
  tools: "Tools",
};
