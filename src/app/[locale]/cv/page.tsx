import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { ArrowLeft, DownloadSimple } from "@phosphor-icons/react/dist/ssr";
import { Link } from "@/i18n/navigation";
import { siteConfig } from "@/lib/site";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Cv" });
  const path = `/${locale}/cv`;

  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
    alternates: {
      canonical: path,
      languages: {
        en: "/en/cv",
        "pt-BR": "/pt/cv",
        "x-default": "/en/cv",
      },
    },
    openGraph: {
      title: t("metaTitle"),
      description: t("metaDescription"),
      url: path,
      siteName: siteConfig.name,
      locale: locale === "pt" ? "pt_BR" : "en_US",
      type: "website",
    },
  };
}

export default async function CvPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("Cv");

  return (
    <main id="main" className="flex min-h-[100dvh] flex-col pt-20">
      <div className="section-pad flex flex-wrap items-center justify-between gap-3 border-b border-line py-4">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-fg-muted transition-colors hover:text-fg"
        >
          <ArrowLeft size={16} weight="bold" />
          {t("back")}
        </Link>
        <a
          href={siteConfig.cvPath}
          download
          className="inline-flex items-center gap-1.5 border border-line px-3 py-1.5 text-sm text-fg transition-colors hover:border-accent hover:text-accent"
        >
          <DownloadSimple size={16} weight="regular" />
          {t("download")}
        </a>
      </div>
      <iframe
        src={`${siteConfig.cvPath}#view=FitH`}
        title={t("title")}
        className="w-full flex-1 bg-bg-elevated"
        style={{ minHeight: "calc(100dvh - 8.5rem)" }}
      />
    </main>
  );
}
