import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return routing.locales.map((locale) => ({
    url: `${siteConfig.url}/${locale}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 1,
    alternates: {
      languages: Object.fromEntries(
        routing.locales.map((l) => [
          l === "pt" ? "pt-BR" : "en",
          `${siteConfig.url}/${l}`,
        ]),
      ),
    },
  }));
}
