"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing, type Locale } from "@/i18n/routing";

export function LocaleSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  function switchTo(next: Locale) {
    router.replace(pathname, { locale: next });
  }

  return (
    <div
      className="flex items-center gap-1 text-sm tracking-wide text-fg-muted"
      role="group"
      aria-label="Language"
    >
      {routing.locales.map((code) => {
        const active = code === locale;
        return (
          <button
            key={code}
            type="button"
            onClick={() => switchTo(code)}
            className={`rounded-sm px-2 py-1 uppercase transition-colors ${
              active
                ? "text-accent"
                : "hover:text-fg focus-visible:text-fg"
            }`}
            aria-pressed={active}
          >
            {code}
          </button>
        );
      })}
    </div>
  );
}
