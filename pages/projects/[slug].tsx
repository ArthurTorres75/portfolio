import type React from "react";
import type { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/common/Section";
import { ProjectImage } from "@/components/common/OptimizedImage";
import { Seo } from "@/components/common/Seo";
import { useLanguage } from "@/hooks/useLanguage";
import { getProjectBySlug, getProjectPath, PROJECTS, type Project } from "@/lib/projects";
import { t } from "@/lib/translations";

type ProjectDetailPageProps = {
  project: Project;
};

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

          <Section className="bg-black" title={t("projects.portfolioTitle", language)}>
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

              <div className="flex flex-wrap gap-4">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-lg border border-cyan-500/60 text-cyan-300 font-semibold hover:bg-cyan-500/10 hover:border-cyan-400 transition-all duration-300"
                >
                  {t("projects.viewProject", language)}
                </a>
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
