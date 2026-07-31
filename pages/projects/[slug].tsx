import type React from "react";
import type { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import Link from "next/link";
import { siTelegram } from "simple-icons";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/common/Section";
import { ProjectImage } from "@/components/common/OptimizedImage";
import { Seo } from "@/components/common/Seo";
import { useLanguage } from "@/hooks/useLanguage";
import {
  getProjectBySlug,
  getProjectPath,
  PROJECTS,
  UPWORK_PROFILE_FALLBACK,
  type Project,
} from "@/lib/projects";
import { t } from "@/lib/translations";
import { CALCOM_URL, getTelegramUrl } from "@/lib/contact";

type ProjectDetailPageProps = {
  project: Project;
};

function CalendarIcon(): React.JSX.Element {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M3 10h18" />
      <path d="M8 3v4" />
      <path d="M16 3v4" />
    </svg>
  );
}

function TelegramIcon(): React.JSX.Element {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
      <path d={siTelegram.path} />
    </svg>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: PROJECTS.map((project) => ({
      params: { slug: project.slug },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<ProjectDetailPageProps> = async ({ params }) => {
  const slugParam = Array.isArray(params?.slug) ? params.slug[0] : params?.slug;

  if (!slugParam) {
    return { notFound: true };
  }

  const project = getProjectBySlug(slugParam);

  if (!project) {
    return { notFound: true };
  }

  return {
    props: {
      project,
    },
  };
};

export default function ProjectDetailPage({
  project,
}: InferGetStaticPropsType<typeof getStaticProps>): React.JSX.Element {
  const { language } = useLanguage();
  const title = t(project.titleKey, language);
  const description = t(project.descKey, language);
  const category = t(project.categoryKey, language);
  const pagePath = getProjectPath(project.slug);
  const hasHighlights = Boolean(project.highlights && project.highlights.length > 0);
  const isPrivateRepo = hasHighlights && !project.repoUrl;
  const hasRealDemoLink = project.link !== UPWORK_PROFILE_FALLBACK;

  return (
    <>
      <Seo
        title={`${title} | ${t("seo.projects.title", language)}`}
        description={description}
        path={pagePath}
        keywords={`Arthur Torres, ${title}, Next.js, TypeScript, portfolio project`}
        type="article"
      />

      <div className="min-h-screen bg-black text-white flex flex-col">
        <Header name="Arthur Torres" />

        <main className="flex-grow">
          <section className="iridescent-gradient min-h-[380px] py-24 flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute -top-28 -right-28 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
              <div className="absolute -bottom-28 -left-28 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
            </div>

            <div className="relative z-10 text-center px-4">
              <p className="text-cyan-300 text-sm md:text-base uppercase tracking-wider mb-3">
                {category}
              </p>
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                <span className="iridescent-text">{title}</span>
              </h1>
              <p className="text-white/80 text-lg max-w-3xl mx-auto">{description}</p>
            </div>
          </section>

          <Section className="bg-black" title={t("projects.detailsTitle", language)}>
            <div className="max-w-4xl mx-auto">
              {project.image ? (
                <ProjectImage src={project.image} alt={title} className="mb-8 h-64 md:h-80" />
              ) : null}

              <div className="glass-effect rounded-lg p-6 border border-cyan-500/25 mb-6">
                <h2 className="text-xl font-semibold text-cyan-300 mb-4">Stack</h2>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="text-xs px-3 py-1 rounded-full bg-gradient-to-r from-blue-500/30 to-cyan-500/30 text-cyan-300 border border-cyan-500/30"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>

              {hasHighlights ? (
                <div className="glass-effect rounded-lg p-6 border border-cyan-500/25 mb-6">
                  <h2 className="text-xl font-semibold text-cyan-300 mb-4">
                    {t("projects.highlightsTitle", language)}
                  </h2>
                  <ul className="space-y-3">
                    {(project.highlights ?? []).map((highlight) => (
                      <li
                        key={highlight[language]}
                        className="flex gap-3 text-white/80 leading-relaxed"
                      >
                        <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-cyan-400" />
                        <span>{highlight[language]}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}

              {isPrivateRepo ? (
                <p className="text-white/70 mb-4">
                  {t("projects.privateRepoNote", language)}
                </p>
              ) : null}

              <div className="flex flex-wrap gap-4">
                {hasRealDemoLink ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 rounded-lg border border-cyan-500/60 text-cyan-300 font-semibold hover:bg-cyan-500/10 hover:border-cyan-400 transition-all duration-300"
                  >
                    {t("projects.viewProject", language)}
                  </a>
                ) : null}
                {isPrivateRepo ? (
                  <>
                    <a
                      href={CALCOM_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-cyan-500/60 text-cyan-300 font-semibold hover:bg-cyan-500/10 hover:border-cyan-400 transition-all duration-300"
                    >
                      <CalendarIcon />
                      {t("projects.scheduleCall", language)}
                    </a>
                    <a
                      href={getTelegramUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-white/30 text-white/85 font-semibold hover:bg-white/10 transition-all duration-300"
                    >
                      <TelegramIcon />
                      {t("projects.messageTelegram", language)}
                    </a>
                  </>
                ) : !hasRealDemoLink ? (
                  <a
                    href={project.repoUrl ?? project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 rounded-lg border border-cyan-500/60 text-cyan-300 font-semibold hover:bg-cyan-500/10 hover:border-cyan-400 transition-all duration-300"
                  >
                    {t("projects.viewProject", language)}
                  </a>
                ) : null}
                <Link
                  href="/projects"
                  className="px-6 py-3 rounded-lg border border-white/30 text-white/85 font-semibold hover:bg-white/10 transition-all duration-300"
                >
                  {t("projects.viewAll", language)}
                </Link>
              </div>
            </div>
          </Section>
        </main>

        <Footer />
      </div>
    </>
  );
}
