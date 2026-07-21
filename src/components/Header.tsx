"use client";

import { useTranslations } from "next-intl";
import { LocaleSwitcher } from "./LocaleSwitcher";

const links = [
  { href: "#about", key: "about" as const },
  { href: "#experience", key: "experience" as const },
  { href: "#work", key: "work" as const },
  { href: "#contact", key: "contact" as const },
];

export function Header() {
  const t = useTranslations("Nav");

  return (
    <header className="section-pad absolute inset-x-0 top-0 z-20 flex items-center justify-between py-5">
      <a
        href="#top"
        className="font-display text-sm font-semibold tracking-[0.18em] uppercase text-fg"
      >
        PS
      </a>
      <nav className="hidden items-center gap-7 md:flex" aria-label="Primary">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-sm text-fg-muted transition-colors hover:text-fg"
          >
            {t(link.key)}
          </a>
        ))}
        <LocaleSwitcher />
      </nav>
      <div className="md:hidden">
        <LocaleSwitcher />
      </div>
    </header>
  );
}
