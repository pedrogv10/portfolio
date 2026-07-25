import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { selectedWork } from "@/data/selected-work";
import { Reveal } from "./Reveal";

export async function SelectedWork() {
  const t = await getTranslations("SelectedWork");

  return (
    <section
      id="selected-work"
      className="section-pad border-t border-line py-24 md:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <h2 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">
            {t("title")}
          </h2>
          <p className="mt-3 max-w-xl text-fg-muted">{t("supporting")}</p>
        </Reveal>

        <ul className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {selectedWork.map((item, index) => (
            <Reveal key={item.id} delay={0.04 * index}>
              <li>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block"
                >
                  <div className="relative aspect-[4/3] overflow-hidden border border-line bg-bg-elevated">
                    <Image
                      src={item.thumbnail}
                      alt=""
                      fill
                      className="object-cover transition-opacity group-hover:opacity-90"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  </div>
                  <div className="mt-4 flex items-start justify-between gap-2">
                    <div>
                      <p className="font-display text-lg font-semibold tracking-tight">
                        {item.name}
                      </p>
                      <p className="mt-1 text-sm text-fg-muted">{item.niche}</p>
                    </div>
                    <ArrowUpRight
                      size={16}
                      weight="bold"
                      className="mt-1 shrink-0 text-accent opacity-70 transition-opacity group-hover:opacity-100"
                    />
                  </div>
                  <p className="mt-2 text-xs tracking-wide text-fg-muted uppercase">
                    {item.stack.join(" · ")}
                  </p>
                </a>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
