import type React from "react";
import { motion } from "framer-motion";
import {
  siTypescript,
  siAngular,
  siReactivex,
  siReact,
  siNextdotjs,
  siCss,
  siTailwindcss,
  siMui,
  siFramer,
  siGreensock,
  siThreedotjs,
  siTanstack,
  siRedux,
  siStripe,
  siPaypal,
  siNodedotjs,
  siExpress,
  siNestjs,
  siPrisma,
  siMysql,
  siPostgresql,
  siMongodb,
  siSupabase,
  siRedis,
  siSocketdotio,
  siVercel,
  siFirebase,
  siDocker,
  siTerraform,
  siGithubactions,
  siHostinger,
  siExpo,
  siIonic,
  siGit,
  siGithub,
  siGitlab,
  siJira,
  siFigma,
  siVitest,
  siEslint,
  siWebpack,
  siVite,
  siPnpm,
} from "simple-icons";
import type { SimpleIcon } from "simple-icons";
import { TechChip } from "@/components/common/TechChip";
import { TECH_STACK, CATEGORY_LABELS, type TechItem } from "@/lib/techStack";

const ICON_MAP: Record<string, SimpleIcon> = {
  typescript: siTypescript,
  angular: siAngular,
  reactivex: siReactivex,
  react: siReact,
  nextdotjs: siNextdotjs,
  css: siCss,
  tailwindcss: siTailwindcss,
  mui: siMui,
  framer: siFramer,
  greensock: siGreensock,
  threedotjs: siThreedotjs,
  tanstack: siTanstack,
  redux: siRedux,
  stripe: siStripe,
  paypal: siPaypal,
  nodedotjs: siNodedotjs,
  express: siExpress,
  nestjs: siNestjs,
  prisma: siPrisma,
  mysql: siMysql,
  postgresql: siPostgresql,
  mongodb: siMongodb,
  supabase: siSupabase,
  redis: siRedis,
  socketdotio: siSocketdotio,
  vercel: siVercel,
  firebase: siFirebase,
  docker: siDocker,
  terraform: siTerraform,
  githubactions: siGithubactions,
  hostinger: siHostinger,
  expo: siExpo,
  ionic: siIonic,
  git: siGit,
  github: siGithub,
  gitlab: siGitlab,
  jira: siJira,
  figma: siFigma,
  vitest: siVitest,
  eslint: siEslint,
  webpack: siWebpack,
  vite: siVite,
  pnpm: siPnpm,
};

const CATEGORIES: TechItem["category"][] = [
  "frontend",
  "backend",
  "cloud",
  "mobile",
  "tools",
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.04, delayChildren: 0.1 },
  },
};

function CategoryBlock({
  category,
  items,
}: {
  category: TechItem["category"];
  items: TechItem[];
}): React.JSX.Element {
  return (
    <motion.div
      className="rounded-xl border border-white/8 bg-white/3 p-5 backdrop-blur-sm"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={containerVariants}
    >
      <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-400">
        {CATEGORY_LABELS[category]}
      </h4>
      <div className="flex flex-wrap gap-2">
        {items.map((item, i) => (
          <TechChip
            key={item.slug + "-" + item.name}
            item={item}
            icon={item.noIcon ? null : (ICON_MAP[item.slug] ?? null)}
            index={i}
          />
        ))}
      </div>
    </motion.div>
  );
}

export function TechStack({ title }: { title: string }): React.JSX.Element {
  const grouped = CATEGORIES.map((category) => {
    const items = TECH_STACK.filter((t) => t.category === category);
    return {
      category,
      items: [...items.filter((t) => t.core), ...items.filter((t) => !t.core)],
    };
  });

  return (
    <div className="max-w-4xl mx-auto">
      <div className="glass-effect about-card p-8 rounded-lg">
        <h3 className="text-2xl font-semibold text-cyan-400 mb-6 text-center">
          {title}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {grouped.map(({ category, items }) => (
            <CategoryBlock
              key={category}
              category={category}
              items={items}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
