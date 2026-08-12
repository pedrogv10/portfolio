import type { CSSProperties } from "react";
import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";

export async function Hero() {
  const t = await getTranslations("Hero");

  return (
    <section
      id="top"
      className="relative min-h-[100dvh] overflow-hidden"
      aria-label={t("name")}
    >
      <div className="absolute inset-0">
        <div className="hero-media absolute inset-0 md:inset-y-0 md:left-[38%] md:right-0">
          <Image
            src="/pedro.png"
            alt={t("photoAlt")}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 62vw"
            className="object-cover object-[center_20%]"
          />
        </div>
        <div
          className="absolute inset-0 bg-gradient-to-t from-bg via-bg/75 to-bg/40 md:bg-gradient-to-r md:from-bg md:via-bg/90 md:to-transparent"
          aria-hidden
        />
        <div
          className="absolute inset-0 opacity-40 md:hidden"
          style={{
            background:
              "radial-gradient(ellipse at 70% 20%, var(--glow), transparent 55%)",
          }}
          aria-hidden
        />
      </div>

      <div className="section-pad relative z-10 flex min-h-[100dvh] max-w-7xl flex-col justify-end pb-16 pt-28 md:justify-center md:pb-24 md:pt-24">
        <div className="max-w-xl md:max-w-lg lg:max-w-xl">
          <p
            className="hero-enter mb-4 text-sm tracking-[0.22em] text-accent uppercase"
            style={{ "--enter-delay": "0.05s" } as CSSProperties}
          >
            {t("role")}
          </p>
          <h1
            className="hero-enter font-display text-[clamp(3.2rem,9vw,5.75rem)] leading-[1.02] font-semibold tracking-tight text-fg"
            style={{ "--enter-delay": "0.12s" } as CSSProperties}
          >
            {t("name")}
          </h1>
          <p
            className="hero-enter mt-6 max-w-[32ch] text-xl leading-snug text-fg md:text-2xl"
            style={{ "--enter-delay": "0.22s" } as CSSProperties}
          >
            {t("headline")}
          </p>
          <p
            className="hero-enter prose-width mt-4 text-base leading-relaxed text-fg-muted"
            style={{ "--enter-delay": "0.3s" } as CSSProperties}
          >
            {t("supporting")}
          </p>
          <div
            className="hero-enter mt-9 flex flex-wrap gap-3"
            style={{ "--enter-delay": "0.38s" } as CSSProperties}
          >
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-accent px-5 py-3 text-sm font-medium text-bg transition-opacity hover:opacity-90"
            >
              {t("ctaContact")}
            </a>
            <a
              href="#work"
              className="inline-flex items-center gap-2 border border-line px-5 py-3 text-sm font-medium text-fg transition-colors hover:border-accent hover:text-accent"
            >
              {t("ctaWork")}
              <ArrowUpRight size={16} weight="bold" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
