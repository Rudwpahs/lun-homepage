import type { Metadata } from "next";
import { Info } from "lucide-react";
import { pr1, pr1Roadmap } from "@/content/lun-content";
import { PageHero } from "@/components/layout/page-hero";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/ui/section-heading";
import { SignalDiagram } from "@/components/sections/signal-diagram";
import { Pr1Story } from "@/components/sections/pr1-story";
import { RoadmapTimeline } from "@/components/sections/roadmap-timeline";
import { ContentIcon } from "@/components/ui/icon";
import { ButtonLink } from "@/components/ui/button-link";
import { Reveal } from "@/components/ui/reveal";

export const metadata: Metadata = {
  title: "PR1 — 분리형 무선 오디오 시스템",
  description: pr1.description,
};

export default function Pr1Page() {
  return (
    <>
      <PageHero
        eyebrow="Project PR1"
        title={pr1.headline}
        description={pr1.description}
        meta={
          <>
            <Badge tone="primary">{pr1.badge}</Badge>
            <span className="text-sm font-medium text-ink-500">
              {pr1.status} · {pr1.stage}
            </span>
          </>
        }
      />

      {/* 스크롤 개념 스토리 — Separate → Connect → Listen */}
      <Pr1Story />

      {/* 프로젝트 개요 */}
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <Reveal>
          <SectionHeading
            eyebrow="Overview"
            title="핵심 아이디어"
            description={pr1.coreIdea}
          />
        </Reveal>
        <Reveal delay={100}>
          <ul className="mt-10 grid gap-3 sm:grid-cols-2">
            {pr1.researchDirections.map((direction) => (
              <li
                key={direction}
                className="flex items-start gap-3 rounded-(--radius-card) border border-line-100 bg-surface p-4 text-sm leading-relaxed text-ink-700"
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
      </section>

      {/* 시스템 구조 다이어그램 — 짙은 Marina Blue 배경 */}
      <section className="bg-marina-900 text-white">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
          <Reveal>
            <SectionHeading
              eyebrow="System Structure"
              title="송신기에서 청취까지"
              description="오디오 입력에서 오픈이어·골전도 출력까지 이어지는 분리형 전송 구조를 검증하고 있습니다."
              onDark
            />
          </Reveal>
          <Reveal delay={100}>
            <div className="mt-10 rounded-(--radius-card) border border-white/10 bg-white/5 p-5 sm:p-8">
              <SignalDiagram nodes={pr1.diagram} />
            </div>
            <p className="mt-4 text-sm text-marina-100/70">
              * 위 구조는 현재 프로토타입에서 연구 중인 구성이며, 검증 결과에
              따라 변경될 수 있습니다.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 검증 항목 */}
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <Reveal>
          <SectionHeading
            eyebrow="Validation"
            title="현재 검증 중인 항목"
            description="완성된 성능을 주장하기 전에, 아래 항목을 하나씩 실험으로 확인합니다."
          />
        </Reveal>
        <Reveal delay={100}>
          <ul className="mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-(--radius-card) border border-line-100 bg-line-100 sm:grid-cols-2 lg:grid-cols-4">
            {pr1.validationItems.map((item) => (
              <li key={item.label} className="bg-surface p-5">
                <ContentIcon
                  name={item.icon}
                  className="size-5 text-marina-600"
                />
                <p className="mt-3 text-sm font-semibold text-marina-900">
                  {item.label}
                </p>
              </li>
            ))}
            <li className="flex items-center bg-marina-50 p-5">
              <p className="text-sm leading-relaxed font-medium text-marina-800">
                검증 결과는 Research 페이지를 통해 순차적으로 공개할 예정입니다.
              </p>
            </li>
          </ul>
        </Reveal>
      </section>

      {/* 개발 단계 타임라인 */}
      <section className="border-t border-line-100 bg-surface">
        <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6 sm:py-20">
          <Reveal>
            <SectionHeading
              eyebrow="Roadmap"
              title="PR1 개발 단계"
              description="문제 정의부터 제품 방향 결정까지 8단계로 진행합니다."
            />
          </Reveal>
          <RoadmapTimeline steps={pr1Roadmap} className="mt-12" />
        </div>
      </section>

      {/* 정직한 상태 고지 */}
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div
          role="note"
          className="flex items-start gap-3 rounded-(--radius-card) border border-marina-200 bg-marina-50 p-5 text-sm leading-relaxed text-marina-800"
        >
          <Info className="mt-0.5 size-4 shrink-0" aria-hidden />
          <p>{pr1.honestyNote}</p>
        </div>
        <div className="mt-10 flex flex-col gap-3 pb-6 sm:flex-row">
          <ButtonLink href="/development" showArrow>
            개발 과정 확인하기
          </ButtonLink>
          <ButtonLink href="/contact" variant="secondary">
            의견 남기기
          </ButtonLink>
        </div>
      </section>
    </>
  );
}
