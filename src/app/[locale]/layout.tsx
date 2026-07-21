import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import { Outfit, Syne } from "next/font/google";
import { routing } from "@/i18n/routing";
import { siteConfig } from "@/lib/site";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import "../globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Meta" });
  const path = `/${locale}`;
  const languages = Object.fromEntries(
    routing.locales.map((l) => [l === "pt" ? "pt-BR" : "en", `${siteConfig.url}/${l}`]),
  );

  return {
    metadataBase: new URL(siteConfig.url),
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: path,
      languages: {
        ...languages,
        "x-default": `${siteConfig.url}/en`,
      },
    },
    openGraph: {
      title: t("title"),
      description: t("description"),
      url: path,
      siteName: siteConfig.name,
      locale: locale === "pt" ? "pt_BR" : "en_US",
      type: "website",
      images: [
        {
          url: "/pedro.png",
          width: 768,
          height: 1024,
          alt: t("ogAlt"),
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("description"),
      images: ["/pedro.png"],
    },
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();
  const t = await getTranslations("Meta");
  const tNav = await getTranslations("Nav");

  return (
    <html
      lang={locale === "pt" ? "pt-BR" : "en"}
      className={`${outfit.variable} ${syne.variable} h-full antialiased`}
    >
      <body className="atmosphere min-h-full font-sans">
        <NextIntlClientProvider messages={messages}>
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:bg-accent focus:px-3 focus:py-2 focus:text-bg"
          >
            {tNav("skip")}
          </a>
          <Header />
          {children}
          <JsonLd description={t("description")} locale={locale} />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
