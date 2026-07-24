import type { Metadata } from "next";
import { Info } from "lucide-react";
import { pr2, pr2Roadmap } from "@/content/lun-content";
import { PageHero } from "@/components/layout/page-hero";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/ui/section-heading";
import { RoadmapTimeline } from "@/components/sections/roadmap-timeline";
import { ButtonLink } from "@/components/ui/button-link";
import { Reveal } from "@/components/ui/reveal";

export const metadata: Metadata = {
  title: "PR2 — 초소형 오픈이어 오디오 연구",
  description: pr2.description,
};

export default function Pr2Page() {
  return (
    <>
      <PageHero
        eyebrow="미래 프로젝트 · PR2"
        title={"더 작게.\n더 자연스럽게."}
        description="PR2는 PR1 검증 이후 구체화할 일상형 오디오 연구입니다."
        meta={
          <Badge tone="future">{pr2.badgeKo}</Badge>
        }
        visualLabel="PR2 핵심 방향"
        visualItems={[
          { word: "작게", detail: "부담 없는 크기" },
          { word: "낮게", detail: "드러남은 최소로" },
          { word: "열리게", detail: "주변과 함께 듣기" },
        ]}
      />

      {/* 세 가지 키워드 */}
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <Reveal>
          <SectionHeading
            eyebrow="핵심 방향"
            title="세 가지 연구 키워드"
            description="PR2는 귀 내부의 자연스러운 공간을 활용하는 착용 방식을 중심으로, 다음 세 가지 방향을 탐색합니다."
          />
        </Reveal>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {pr2.keywords.map((keyword, index) => (
            <Reveal key={keyword.key} delay={index * 100}>
              <article className="h-full rounded-(--radius-card) border border-line-100 bg-surface p-7 shadow-card">
                <span className="text-sm font-semibold tracking-widest text-line-300">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 text-lg font-bold text-marina-900">
                  {keyword.key}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-500">
                  {keyword.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 연구 방향 */}
      <section className="border-y border-line-100 bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
          <Reveal>
            <SectionHeading
              eyebrow="탐색 방향"
              title="탐색 중인 연구 방향"
            />
          </Reveal>
          <Reveal delay={100}>
            <ul className="mt-10 grid gap-3 sm:grid-cols-2">
              {pr2.researchDirections.map((direction) => (
                <li
                  key={direction}
                  className="flex items-start gap-3 rounded-(--radius-card) border border-line-100 bg-paper p-4 text-sm leading-relaxed text-ink-700"
                >
                  <span
                    aria-hidden
                    className="mt-2 size-1.5 shrink-0 rounded-full bg-marina-500"
                  />
                  {direction}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* PR1과의 관계 */}
      <section className="mx-auto max-w-4xl px-4 py-14 sm:px-6 sm:py-20">
        <Reveal>
          <SectionHeading
            eyebrow="PR1 다음"
            title="PR1 검증 이후 본격화됩니다"
            description={pr2.relationToPr1}
          />
        </Reveal>
        <Reveal delay={100}>
          <div className="mt-10">
            <RoadmapTimeline steps={pr2Roadmap} />
          </div>
        </Reveal>
      </section>

      {/* 정직한 상태 고지 */}
      <section className="mx-auto max-w-6xl px-4 pb-14 sm:px-6">
        <div
          role="note"
          className="flex items-start gap-3 rounded-(--radius-card) border border-marina-200 bg-marina-50 p-5 text-sm leading-relaxed text-marina-800"
        >
          <Info className="mt-0.5 size-4 shrink-0" aria-hidden />
          <p>{pr2.honestyNote}</p>
        </div>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/projects/pr1" showArrow>
            현재 진행 중인 PR1 보기
          </ButtonLink>
        </div>
      </section>
    </>
  );
}
