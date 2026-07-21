import type { Metadata } from "next";
import { researchSection } from "@/content/lun-content";
import { PageHero } from "@/components/layout/page-hero";
import { ContentIcon } from "@/components/ui/icon";
import { Reveal } from "@/components/ui/reveal";

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
              <article className="flex h-full flex-col rounded-(--radius-card) border border-line-100 bg-surface p-7 shadow-card">
                <div className="flex items-center justify-between">
                  <span className="flex size-11 items-center justify-center rounded-full bg-marina-50 text-marina-700">
                    <ContentIcon name={category.icon} className="size-5" />
                  </span>
                  {/* 게시물이 준비되기 전까지는 '준비 중' 상태를 정직하게 표시 */}
                  <span className="rounded-full border border-line-300 px-3 py-1 text-xs font-semibold text-ink-500">
                    {researchSection.emptyStateLabel}
                  </span>
                </div>
                <h2 className="mt-5 text-lg font-bold text-marina-900">
                  {category.title}
                </h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-500">
                  {category.description}
                </p>
                <p className="mt-4 border-t border-line-100 pt-4 text-xs text-ink-500">
                  {researchSection.emptyStateDescription}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
