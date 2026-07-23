const DEFAULT_BASE_PATH = "";

interface NormalizePathOptions {
  basePath?: string;
}

function normalizeBasePath(basePath?: string): string {
  const rawBasePath = (basePath ?? process.env.NEXT_PUBLIC_BASE_PATH ?? DEFAULT_BASE_PATH).trim();

  if (rawBasePath === "" || rawBasePath === "/") {
    return "";
  }

  const withoutLeadingSlash = rawBasePath.replace(/^\/+/, "");
  const withoutTrailingSlash = withoutLeadingSlash.replace(/\/+$/, "");

  return withoutTrailingSlash ? `/${withoutTrailingSlash}` : "";
}

function ensureLeadingSlash(path: string): string {
  return path.startsWith("/") ? path : `/${path}`;
}

export function isExternalNavigationTarget(input: string): boolean {
  const candidate = input.trim();
  return /^(?:[a-z]+:)?\/\//i.test(candidate) || /^(mailto:|tel:|javascript:)/i.test(candidate);
}

export function normalizeAssetPath(input: string, options: NormalizePathOptions = {}): string {
  const candidate = input.trim();

  if (!candidate) {
    return "";
  }

  if (isExternalNavigationTarget(candidate) || candidate.startsWith("data:") || candidate.startsWith("blob:")) {
    return candidate;
  }

  const basePath = normalizeBasePath(options.basePath);
  const localPath = ensureLeadingSlash(candidate);

  if (!basePath || localPath === basePath || localPath.startsWith(`${basePath}/`)) {
    return localPath;
  }

  return `${basePath}${localPath}`;
}

export function normalizeInternalHref(input: string, options: NormalizePathOptions = {}): string {
  const candidate = input.trim();
  const basePath = normalizeBasePath(options.basePath);

  if (!candidate) {
    return basePath ? `${basePath}/` : "/";
  }

  if (isExternalNavigationTarget(candidate)) {
    return candidate;
  }

  if (candidate.startsWith("#")) {
    return basePath ? `${basePath}/${candidate}` : `/${candidate}`;
  }

  const routePath = ensureLeadingSlash(candidate);

  if (!basePath || routePath === basePath || routePath.startsWith(`${basePath}/`)) {
    return routePath;
  }

  return `${basePath}${routePath}`;
}