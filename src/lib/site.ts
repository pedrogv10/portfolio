export const siteConfig = {
  name: "Pedro Silva",
  url: process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://pedrosilva.dev",
  email: "pedrogv133@gmail.com",
  linkedin: "https://www.linkedin.com/in/pedrogv10/",
  localeDefault: "en" as const,
  locales: ["en", "pt"] as const,
};
