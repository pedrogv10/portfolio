import { getTranslations } from "next-intl/server";
import { Reveal } from "./Reveal";

export async function About() {
  const t = await getTranslations("About");

  return (
    <section id="about" className="section-pad border-t border-line py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[0.35fr_1fr] md:gap-16">
        <Reveal>
          <h2 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">
            {t("title")}
          </h2>
        </Reveal>
        <div className="space-y-5">
          <Reveal delay={0.05}>
            <p className="prose-width text-lg leading-relaxed text-fg-muted">
              {t("p1")}
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="prose-width text-lg leading-relaxed text-fg-muted">
              {t("p2")}
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="text-sm tracking-wide text-accent uppercase">
              {t("open")}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
