import { companyOverview } from "@/content/lun-content";
import { Badge } from "@/components/ui/badge";
import { ContentIcon } from "@/components/ui/icon";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

/**
 * LUN 회사와 PR1·PR2의 관계를 설명하는 공개용 브랜드 구조도.
 * 내부 prestudy의 구현·검증 데이터는 이 시각화에 포함하지 않습니다.
 */
export function CompanyOverview() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
      <Reveal>
        <SectionHeading
          eyebrow="Company Overview"
          title={companyOverview.title}
          description={companyOverview.description}
        />
      </Reveal>

      <Reveal delay={100}>
        <figure className="mt-12">
          <div className="grid gap-8 rounded-(--radius-card) bg-marina-900 p-7 sm:p-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
            <div>
              <Badge tone="primary">
                {companyOverview.core.label}
              </Badge>
              <h3
                className="mt-6 max-w-xl text-2xl leading-tight font-bold tracking-tight text-white sm:text-3xl"
              >
                {companyOverview.core.title}
              </h3>
            </div>

            <div>
              <p className="leading-relaxed text-marina-100">
                {companyOverview.core.description}
              </p>
              <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2 border-t border-white/15 pt-5">
                {companyOverview.core.principles.map((principle) => (
                  <li
                    key={principle}
                    className="text-xs font-semibold tracking-wider text-aqua-300 uppercase"
                  >
                    {principle}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div aria-hidden className="mx-auto h-8 w-px bg-line-300" />

          <div className="relative">
            <div
              aria-hidden
              className="absolute top-0 right-1/4 left-1/4 hidden h-px bg-line-300 md:block"
            />
            <div className="grid gap-6 md:grid-cols-2 md:gap-8">
              {companyOverview.projects.map((project) => (
                <div key={project.name} className="relative pt-6">
                  <div
                    aria-hidden
                    className="absolute top-0 left-1/2 h-6 w-px bg-line-300"
                  />
                  <article
                    className={
                      project.tone === "primary"
                        ? "h-full rounded-(--radius-card) border border-marina-200 bg-surface p-6 shadow-card sm:p-8"
                        : "h-full rounded-(--radius-card) border border-line-300 bg-marina-50 p-6 sm:p-8"
                    }
                  >
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <Badge tone={project.tone}>{project.badge}</Badge>
                      <ContentIcon
                        name={project.icon}
                        className="size-6 text-marina-600"
                      />
                    </div>
                    <p className="mt-6 text-sm font-semibold tracking-widest text-marina-600 uppercase">
                      {project.name}
                    </p>
                    <h4 className="mt-2 text-xl font-bold tracking-tight text-marina-900">
                      {project.title}
                    </h4>
                    <p className="mt-4 text-sm leading-relaxed text-ink-500 sm:text-base">
                      {project.description}
                    </p>
                    <p className="mt-6 text-sm font-semibold text-marina-700">
                      {project.badgeKo}
                    </p>
                  </article>
                </div>
              ))}
            </div>
          </div>

          <figcaption className="mt-8 rounded-(--radius-card) border border-line-100 bg-surface px-6 py-5 text-sm leading-relaxed text-marina-900 sm:flex sm:items-center sm:gap-8 sm:px-8">
            <span className="block shrink-0 text-xs font-semibold tracking-widest text-marina-600 uppercase">
              Research Sequence
            </span>
            <span className="mt-2 block font-medium sm:mt-0">
              {companyOverview.sequence}
            </span>
          </figcaption>
        </figure>
      </Reveal>
    </section>
  );
}
