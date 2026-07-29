const DEFAULT_SITE_URL = "https://www.pedrosilvadev.com";

function resolveSiteUrl(): string {
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim().replace(/\/$/, "");
  // Ignore missing/stale template values baked into old Vercel envs.
  if (!raw || /seu-projeto|vercel\.app/i.test(raw)) {
    return DEFAULT_SITE_URL;
  }

  try {
    const url = new URL(raw);
    if (url.hostname === "pedrosilvadev.com") {
      url.hostname = "www.pedrosilvadev.com";
    }
    return url.origin;
  } catch {
    return DEFAULT_SITE_URL;
  }
}

export const siteConfig = {
  name: "Pedro Silva",
  url: resolveSiteUrl(),
  email: "pedrogv133@gmail.com",
  linkedin: "https://www.linkedin.com/in/pedrogv10/",
  github: "https://github.com/pedrogv10",
  cvPath: "/pedro-silva-cv.pdf",
  cvPathPt: "/pedro-silva-cv-pt.pdf",
  cvHref: "/cv",
  localeDefault: "en" as const,
  locales: ["en", "pt"] as const,
};

export function cvPathForLocale(locale: string): string {
  return locale === "pt" ? siteConfig.cvPathPt : siteConfig.cvPath;
}
