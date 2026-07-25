import { siteConfig } from "@/lib/site";

type JsonLdProps = {
  description: string;
  locale: string;
};

export function JsonLd({ description, locale }: JsonLdProps) {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        name: siteConfig.name,
        jobTitle: "Front-End Developer",
        email: siteConfig.email,
        url: `${siteConfig.url}/${locale}`,
        image: `${siteConfig.url}/pedro.png`,
        sameAs: [siteConfig.linkedin, siteConfig.github],
        address: {
          "@type": "PostalAddress",
          addressRegion: "Minas Gerais",
          addressCountry: "BR",
        },
        knowsAbout: [
          "WordPress",
          "Gutenberg",
          "React",
          "Next.js",
          "TypeScript",
          "PHP",
        ],
      },
      {
        "@type": "WebSite",
        name: `${siteConfig.name} — Portfolio`,
        url: `${siteConfig.url}/${locale}`,
        description,
        inLanguage: locale === "pt" ? "pt-BR" : "en",
        author: { "@type": "Person", name: siteConfig.name },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
