import type { Metadata } from "next";
import { NotebookPen } from "lucide-react";
import {
  pr1Roadmap,
  pr2Roadmap,
  statusLabels,
  type ProjectStatus,
} from "@/content/lun-content";
import { PageHero } from "@/components/layout/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { StatusBadge } from "@/components/ui/badge";
import { RoadmapTimeline } from "@/components/sections/roadmap-timeline";
import { Reveal } from "@/components/ui/reveal";

export const metadata: Metadata = {
  title: "Development — 개발 과정",
  description:
    "LUN 프로젝트의 단계별 개발 로드맵과 진행 상황을 공개합니다. PR1은 현재 핵심 개발 프로젝트, PR2는 향후 연구 프로젝트입니다.",
};

const statusOrder: ProjectStatus[] = [
  "Completed",
  "In Progress",
  "Planned",
  "Future",
];

const statusDescriptions: Record<ProjectStatus, string> = {
  Completed: "이미 완료한 단계",
  "In Progress": "현재 진행 중인 단계",
  Planned: "가까운 다음 단계",
  Future: "PR1 검증 이후 진행할 단계",
};

export default function DevelopmentPage() {
  return (
    <>
      <PageHero
        eyebrow="Development"
        title="단계별 검증으로 진행하는 개발 과정"
        description="LUN은 과장된 목표 대신, 확인 가능한 단계를 하나씩 통과하는 방식으로 개발을 진행합니다. 각 단계의 상태를 그대로 공개합니다."
      />

      {/* 상태 라벨 안내 */}
      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <h2 className="sr-only">상태 라벨 안내</h2>
        <dl className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {statusOrder.map((status) => (
            <div
              key={status}
              className="glass rounded-(--radius-card) p-4"
            >
              <dt>
                <StatusBadge status={status} />
              </dt>
              <dd className="mt-2 text-sm text-ink-500">
                {statusDescriptions[status]}
                <span className="sr-only">({statusLabels[status]})</span>
              </dd>
            </div>
          ))}
        </dl>
      </section>

      {/* PR1 로드맵 */}
      <section className="mx-auto max-w-4xl px-4 py-10 sm:px-6 sm:py-14">
        <Reveal>
          <SectionHeading
            eyebrow="PR1 — Current Focus"
            title="PR1 개발 로드맵"
            description="현재 핵심 개발 프로젝트인 PR1의 8단계 로드맵입니다."
          />
        </Reveal>
        <RoadmapTimeline steps={pr1Roadmap} className="mt-10" />
      </section>

      {/* PR2 로드맵 — 작은 비중 */}
      <section className="border-t border-line-100/60">
        <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 sm:py-14">
          <Reveal>
            <SectionHeading
              eyebrow="PR2 — Future Research"
              title="PR2 연구 로드맵"
              description="PR2는 미래 연구 프로젝트로, 대부분의 단계가 PR1 검증 이후로 계획되어 있습니다."
            />
          </Reveal>
          <RoadmapTimeline steps={pr2Roadmap} className="mt-10" />
        </div>
      </section>

      {/* 개발 일지 준비 중 */}
      <section className="mx-auto max-w-4xl px-4 py-14 sm:px-6 sm:py-16">
        <div className="glass rounded-(--radius-card) border-dashed border-line-300 p-8 text-center">
          <NotebookPen
            className="mx-auto size-8 text-marina-600"
            strokeWidth={1.5}
            aria-hidden
          />
          <h2 className="mt-4 text-lg font-bold text-marina-900">
            개발 일지 — 준비 중
          </h2>
          <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-ink-500">
            실험과 검증이 진행되는 대로 개발 일지를 이곳에 공개할 예정입니다.
            아직 공개된 게시물이 없습니다.
          </p>
        </div>
      </section>
    </>
  );
}
