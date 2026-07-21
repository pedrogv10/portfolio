import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "./Reveal";

export async function ProjectCase() {
  const t = await getTranslations("Project");
  const decisions = t.raw("decisions") as string[];
  const stack = t.raw("stack") as string[];

  return (
    <section id="work" className="section-pad border-t border-line py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="mb-3 text-sm tracking-[0.2em] text-accent uppercase">
            {t("label")}
          </p>
          <h2 className="font-display text-3xl font-semibold tracking-tight md:text-5xl">
            {t("title")}
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-fg-muted">{t("tagline")}</p>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="relative mt-12 overflow-hidden border border-line">
            <Image
              src="/projects/timecode/landing.png"
              alt={t("imageAlt")}
              width={1440}
              height={900}
              className="h-auto w-full object-cover"
              sizes="(max-width: 1280px) 100vw, 1280px"
            />
          </div>
        </Reveal>

        <div className="mt-14 grid gap-12 md:grid-cols-2 md:gap-16">
          <Reveal delay={0.05}>
            <div className="space-y-6">
              <div>
                <h3 className="font-display text-xl font-semibold">
                  {t("problemLabel")}
                </h3>
                <p className="mt-3 leading-relaxed text-fg-muted">{t("problem")}</p>
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold">
                  {t("ahaLabel")}
                </h3>
                <p className="mt-3 leading-relaxed text-fg-muted">{t("aha")}</p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <ul className="space-y-4">
              {decisions.map((item) => (
                <li
                  key={item.slice(0, 40)}
                  className="border-l border-accent pl-4 leading-relaxed text-fg-muted"
                >
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-2">
              {stack.map((tech) => (
                <span
                  key={tech}
                  className="border border-line px-3 py-1 text-xs tracking-wide text-fg-muted uppercase"
                >
                  {tech}
                </span>
              ))}
            </div>
            <a
              href={t("url")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-accent transition-opacity hover:opacity-80"
            >
              {t("cta")}
              <ArrowUpRight size={16} weight="bold" />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
