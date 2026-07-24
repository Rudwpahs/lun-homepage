import type { Metadata } from "next";
import { Info } from "lucide-react";
import { pr1 } from "@/content/lun-content";
import { PageHero } from "@/components/layout/page-hero";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/ui/section-heading";
import { SignalDiagram } from "@/components/sections/signal-diagram";
import { Pr1Story } from "@/components/sections/pr1-story";
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
            eyebrow="Project Direction"
            title="PR1이 만들고자 하는 경험"
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

      {/* 공개용 경험 흐름 다이어그램 — 짙은 Marina Blue 배경 */}
      <section className="bg-marina-900 text-white">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
          <Reveal>
            <SectionHeading
              eyebrow="Experience Flow"
              title="화면을 멀리 두고, 필요한 소리만 이어지는 흐름"
              description="내부 부품이나 구현 방식이 아니라 사용자가 경험하게 될 핵심 흐름을 공개용 개념도로 설명합니다."
              onDark
            />
          </Reveal>
          <Reveal delay={100}>
            <div className="mt-10 rounded-(--radius-card) border border-white/10 bg-white/5 p-5 sm:p-8">
              <SignalDiagram nodes={pr1.diagram} />
            </div>
            <p className="mt-4 text-sm text-marina-100/70">
              * 위 도식은 제품 경험을 설명하는 개념 흐름이며, 실제 제품의 내부
              구조나 확정된 디자인이 아닙니다.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 검증 항목 */}
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <Reveal>
          <SectionHeading
            eyebrow="Experience Criteria"
            title="제품 경험을 판단하는 기준"
            description="완성된 성능을 주장하기 전에, 실제 사용에서 중요한 기준을 하나씩 확인합니다."
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
                확인된 내용과 현재의 가설을 구분해 공개하겠습니다.
              </p>
            </li>
          </ul>
        </Reveal>
      </section>

      {/* 정직한 상태 고지 */}
      <section className="border-t border-line-100 bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div
          role="note"
          className="flex items-start gap-3 rounded-(--radius-card) border border-marina-200 bg-marina-50 p-5 text-sm leading-relaxed text-marina-800"
        >
          <Info className="mt-0.5 size-4 shrink-0" aria-hidden />
          <p>{pr1.honestyNote}</p>
        </div>
        <div className="mt-10 flex flex-col gap-3 pb-6 sm:flex-row">
          <ButtonLink href="/research" showArrow>
            LUNDA 연구 방향 보기
          </ButtonLink>
        </div>
        </div>
      </section>
    </>
  );
}
