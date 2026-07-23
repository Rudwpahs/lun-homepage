import { ArrowDown, ArrowRight } from "lucide-react";
import { companyOverview } from "@/content/lun-content";
import { Badge } from "@/components/ui/badge";
import { ContentIcon } from "@/components/ui/icon";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

/**
 * 문제 → LUN의 접근 → PR1 → PR2 관계를 설명하는 공개용 브랜드 구조도.
 * 내부 prestudy의 구현·검증 데이터는 이 시각화에 포함하지 않습니다.
 */
export function CompanyOverview() {
  return (
    <section className="border-b border-line-100 bg-surface">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
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
              <Badge tone="primary">{companyOverview.core.label}</Badge>
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

          <ol
            aria-label="LUN의 문제 인식부터 미래 연구까지"
            className="flex flex-col lg:flex-row lg:items-stretch"
          >
            {companyOverview.journey.map((step, index) => {
              const isLast = index === companyOverview.journey.length - 1;
              const cardClass =
                step.tone === "primary"
                  ? "border-marina-300 bg-marina-50"
                  : step.tone === "future"
                    ? "border-line-300 bg-paper"
                    : "border-line-100 bg-surface";

              return (
                <li
                  key={step.label}
                  className="flex min-w-0 flex-1 flex-col lg:flex-row"
                >
                  <article
                    className={`flex min-h-64 flex-1 flex-col rounded-(--radius-card) border p-6 ${cardClass}`}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <Badge tone={step.tone}>{step.label}</Badge>
                      <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-marina-900 text-white">
                        <ContentIcon name={step.icon} className="size-5" />
                      </span>
                    </div>
                    <p className="mt-5 text-xs font-semibold tracking-widest text-marina-600 uppercase">
                      {step.labelKo}
                    </p>
                    <h4 className="mt-2 text-lg leading-snug font-bold tracking-tight text-marina-900">
                      {step.title}
                    </h4>
                    <p className="mt-3 text-sm leading-relaxed text-ink-500">
                      {step.description}
                    </p>
                  </article>

                  {!isLast && (
                    <span
                      aria-hidden
                      className="flex h-10 shrink-0 items-center justify-center text-marina-500 lg:h-auto lg:w-10"
                    >
                      <ArrowDown className="size-5 lg:hidden" />
                      <ArrowRight className="hidden size-5 lg:block" />
                    </span>
                  )}
                </li>
              );
            })}
          </ol>

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
      </div>
    </section>
  );
}
