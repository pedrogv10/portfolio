import { getTranslations } from "next-intl/server";
import { Reveal } from "./Reveal";

export async function Experience() {
  const t = await getTranslations("Experience");
  const jobs = t.raw("jobs") as Array<{
    role: string;
    company: string;
    place: string;
    period: string;
    bullets: string[];
  }>;

  return (
    <section
      id="experience"
      className="section-pad border-t border-line py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <h2 className="font-display mb-14 text-3xl font-semibold tracking-tight md:text-4xl">
            {t("title")}
          </h2>
        </Reveal>
        <ol className="space-y-16">
          {jobs.map((job, index) => (
            <Reveal key={`${job.company}-${job.period}`} delay={index * 0.06}>
              <li className="grid gap-6 md:grid-cols-[minmax(0,220px)_1fr] md:gap-12">
                <div>
                  <p className="text-sm text-fg-muted">{job.period}</p>
                  <p className="mt-2 text-sm text-fg-muted">{job.place}</p>
                </div>
                <div>
                  <h3 className="font-display text-2xl font-semibold tracking-tight">
                    {job.role}
                  </h3>
                  <p className="mt-1 text-accent">{job.company}</p>
                  <ul className="mt-5 space-y-3">
                    {job.bullets.map((bullet) => (
                      <li
                        key={bullet.slice(0, 48)}
                        className="prose-width relative pl-4 text-base leading-relaxed text-fg-muted before:absolute before:top-[0.7em] before:left-0 before:h-1 before:w-1 before:rounded-full before:bg-accent before:content-['']"
                      >
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
