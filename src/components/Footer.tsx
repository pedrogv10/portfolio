import { getTranslations } from "next-intl/server";

export async function Footer() {
  const t = await getTranslations("Footer");
  const year = new Date().getFullYear();

  return (
    <footer className="section-pad border-t border-line py-8">
      <div className="mx-auto flex max-w-7xl items-center justify-between text-sm text-fg-muted">
        <p>
          © {year} {t("rights")}
        </p>
        <a href="#top" className="transition-colors hover:text-fg">
          ↑
        </a>
      </div>
    </footer>
  );
}
