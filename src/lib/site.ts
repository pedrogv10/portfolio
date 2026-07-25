function requireSiteUrl(): string {
  const url = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
  if (!url) {
    throw new Error(
      "NEXT_PUBLIC_SITE_URL is required (e.g. https://pedrosilvadev.com)",
    );
  }
  return url;
}

export const siteConfig = {
  name: "Pedro Silva",
  url: requireSiteUrl(),
  email: "pedrogv133@gmail.com",
  linkedin: "https://www.linkedin.com/in/pedrogv10/",
  github: "https://github.com/pedrogv10",
  cvPath: "/pedro-silva-cv.pdf",
  localeDefault: "en" as const,
  locales: ["en", "pt"] as const,
};
