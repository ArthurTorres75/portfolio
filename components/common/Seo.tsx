import type React from "react";
import Head from "next/head";

interface SeoProps {
  title: string;
  description: string;
  path: string;
  keywords?: string;
  imagePath?: string;
  type?: "website" | "article";
  noindex?: boolean;
}

const DEFAULT_SITE_URL = "https://arthurtorres75.github.io/portfolio/";
const DEFAULT_OG_IMAGE = "/next.svg";

function normalizeSiteUrl(url: string): string {
  return url.endsWith("/") ? url.slice(0, -1) : url;
}

function normalizePath(path: string): string {
  if (path === "/") {
    return "";
  }

  return path.replace(/^\/+/, "");
}

function resolveUrl(siteUrl: string, path: string): string {
  const normalizedSiteUrl = normalizeSiteUrl(siteUrl);
  const normalizedPath = normalizePath(path);

  if (normalizedPath.length === 0) {
    return `${normalizedSiteUrl}/`;
  }

  return `${normalizedSiteUrl}/${normalizedPath}`;
}

export function Seo({
  title,
  description,
  path,
  keywords,
  imagePath = DEFAULT_OG_IMAGE,
  type = "website",
  noindex = false,
}: SeoProps): React.JSX.Element {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? DEFAULT_SITE_URL;
  const canonical = resolveUrl(siteUrl, path);
  const ogImage = imagePath.startsWith("http")
    ? imagePath
    : resolveUrl(siteUrl, imagePath);

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="robots" content={noindex ? "noindex, nofollow" : "index, follow"} />
      <link rel="canonical" href={canonical} />

      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:site_name" content="Arthur Torres Portfolio" />
      <meta property="og:image" content={ogImage} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Head>
  );
}
