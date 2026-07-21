"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { useTranslations } from "next-intl";
import { ArrowUpRight } from "@phosphor-icons/react";

export function Hero() {
  const t = useTranslations("Hero");
  const reduce = useReducedMotion();

  const fade = (delay: number) =>
    reduce
      ? undefined
      : {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const, delay },
        };

  return (
    <section
      id="top"
      className="relative min-h-[100dvh] overflow-hidden"
      aria-label={t("name")}
    >
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 md:inset-y-0 md:left-[38%] md:right-0"
          {...(reduce
            ? {}
            : {
                initial: { opacity: 0, scale: 1.04 },
                animate: { opacity: 1, scale: 1 },
                transition: { duration: 1.1, ease: [0.22, 1, 0.36, 1] },
              })}
        >
          <Image
            src="/pedro.png"
            alt={t("photoAlt")}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 62vw"
            className="object-cover object-[center_20%]"
          />
        </motion.div>
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
          <motion.p
            className="mb-4 text-sm tracking-[0.22em] text-accent uppercase"
            {...fade(0.05)}
          >
            {t("role")}
          </motion.p>
          <motion.h1
            className="font-display text-[clamp(3.2rem,9vw,5.75rem)] leading-[1.02] font-semibold tracking-tight text-fg"
            {...fade(0.12)}
          >
            {t("name")}
          </motion.h1>
          <motion.p
            className="mt-6 max-w-[32ch] text-xl leading-snug text-fg md:text-2xl"
            {...fade(0.22)}
          >
            {t("headline")}
          </motion.p>
          <motion.p
            className="prose-width mt-4 text-base leading-relaxed text-fg-muted"
            {...fade(0.3)}
          >
            {t("supporting")}
          </motion.p>
          <motion.div className="mt-9 flex flex-wrap gap-3" {...fade(0.38)}>
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
          </motion.div>
        </div>
      </div>
    </section>
  );
}
