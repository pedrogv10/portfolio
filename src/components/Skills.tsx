import { getTranslations } from "next-intl/server";
import { Reveal } from "./Reveal";

export async function Skills() {
  const t = await getTranslations("Skills");
  const items = t.raw("items") as string[];

  return (
    <section className="section-pad border-t border-line py-24 md:py-28">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <h2 className="font-display mb-10 text-3xl font-semibold tracking-tight md:text-4xl">
            {t("title")}
          </h2>
        </Reveal>
        <Reveal delay={0.06}>
          <ul className="flex flex-wrap items-baseline gap-x-3 gap-y-3 md:gap-x-4">
            {items.map((item, index) => (
              <li
                key={item}
                className="font-display text-2xl tracking-tight text-fg md:text-3xl"
              >
                {item}
                {index < items.length - 1 ? (
                  <span className="ml-3 text-fg-muted md:ml-4" aria-hidden>
                    /
                  </span>
                ) : null}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
