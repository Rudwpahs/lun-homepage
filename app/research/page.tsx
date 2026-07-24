import type { Metadata } from "next";
import { researchSection } from "@/content/lun-content";
import { PageHero } from "@/components/layout/page-hero";
import { ContentIcon } from "@/components/ui/icon";
import { ButtonLink } from "@/components/ui/button-link";
import { Reveal } from "@/components/ui/reveal";
import { SpotlightCard } from "@/components/ui/spotlight-card";

export const metadata: Metadata = {
  title: "Research — 연구 및 기록",
  description: researchSection.description,
};

export default function ResearchPage() {
  return (
    <>
      <PageHero
        eyebrow="Research"
        title={researchSection.title}
        description={researchSection.description}
      />

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {researchSection.categories.map((category, index) => (
            <Reveal key={category.title} delay={Math.min(index * 80, 240)}>
              <SpotlightCard className="glass-strong flex h-full flex-col rounded-(--radius-card) p-7">
                <div className="flex items-center justify-between">
                  <span className="flex size-11 items-center justify-center rounded-full bg-marina-50 text-marina-700">
                    <ContentIcon name={category.icon} className="size-5" />
                  </span>
                  <span className="text-xs font-semibold tracking-widest text-marina-600 uppercase">
                    {category.label}
                  </span>
                </div>
                <h2 className="mt-5 text-lg font-bold text-marina-900">
                  {category.title}
                </h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-500">
                  {category.description}
                </p>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-t border-line-100 bg-surface">
        <div className="mx-auto flex max-w-4xl flex-col items-center px-4 py-14 text-center sm:px-6 sm:py-16">
          <h2 className="text-xl font-bold tracking-tight text-marina-900 sm:text-2xl">
            현재의 연구는 PR1에서 가장 먼저 구체화됩니다.
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink-500 sm:text-base">
            LUNDA의 연구 방향이 실제 사용자 경험으로 어떻게 이어지는지 PR1에서
            확인하실 수 있습니다.
          </p>
          <div className="mt-7 flex w-full flex-col justify-center gap-3 sm:w-auto sm:flex-row">
            <ButtonLink href="/projects/pr1" showArrow>
              PR1 살펴보기
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
