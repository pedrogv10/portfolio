import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;

  const home = routing.locales.map((locale) => ({
    url: `${base}/${locale}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 1,
    alternates: {
      languages: {
        en: `${base}/en`,
        "pt-BR": `${base}/pt`,
      },
    },
  }));

  const cv = routing.locales.map((locale) => ({
    url: `${base}/${locale}/cv`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
    alternates: {
      languages: {
        en: `${base}/en/cv`,
        "pt-BR": `${base}/pt/cv`,
      },
    },
  }));

  return [...home, ...cv];
}
