import { getTranslations } from "next-intl/server";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { siteConfig } from "@/lib/site";
import { Reveal } from "./Reveal";

export async function Contact() {
  const t = await getTranslations("Contact");

  return (
    <section
      id="contact"
      className="section-pad border-t border-line py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <h2 className="font-display text-3xl font-semibold tracking-tight md:text-5xl">
            {t("title")}
          </h2>
          <p className="mt-4 max-w-xl text-lg text-fg-muted">{t("supporting")}</p>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="mt-12 flex flex-col gap-6">
            <a
              href={`mailto:${siteConfig.email}`}
              className="group inline-flex items-center gap-3 font-display text-2xl tracking-tight transition-colors hover:text-accent md:text-4xl"
            >
              {t("email")}
              <ArrowUpRight
                size={28}
                weight="bold"
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-fg-muted transition-colors hover:text-accent"
            >
              {t("linkedinLabel")}
              <ArrowUpRight size={16} weight="bold" />
            </a>
            <p className="text-sm text-fg-muted">{t("location")}</p>
            <p className="text-sm text-fg-muted">{t("education")}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
