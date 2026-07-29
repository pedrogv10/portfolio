"use client";

import { useTranslations } from "next-intl";
import { FilePdf } from "@phosphor-icons/react";
import { Link } from "@/i18n/navigation";
import { siteConfig } from "@/lib/site";
import { LocaleSwitcher } from "./LocaleSwitcher";

const links = [
  { href: "/#about" as const, key: "about" as const },
  { href: "/#experience" as const, key: "experience" as const },
  { href: "/#work" as const, key: "work" as const },
  { href: "/#contact" as const, key: "contact" as const },
];

export function Header() {
  const t = useTranslations("Nav");

  return (
    <header className="section-pad absolute inset-x-0 top-0 z-20 flex items-center justify-between py-5">
      <Link
        href="/#top"
        className="font-display text-sm font-semibold tracking-[0.18em] uppercase text-fg"
      >
        PS
      </Link>
      <nav className="hidden items-center gap-7 md:flex" aria-label="Primary">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-sm text-fg-muted transition-colors hover:text-fg"
          >
            {t(link.key)}
          </Link>
        ))}
        <a
          href={siteConfig.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-fg-muted transition-colors hover:text-fg"
        >
          {t("github")}
        </a>
        <Link
          href={siteConfig.cvHref}
          className="inline-flex items-center gap-1.5 border border-line px-3 py-1.5 text-sm text-fg transition-colors hover:border-accent hover:text-accent"
        >
          <FilePdf size={16} weight="regular" />
          {t("cv")}
        </Link>
        <LocaleSwitcher />
      </nav>
      <div className="flex items-center gap-3 md:hidden">
        <Link
          href={siteConfig.cvHref}
          className="inline-flex items-center gap-1.5 border border-line px-2.5 py-1 text-xs text-fg"
          aria-label={t("cv")}
        >
          <FilePdf size={14} weight="regular" />
          CV
        </Link>
        <LocaleSwitcher />
      </div>
    </header>
  );
}
