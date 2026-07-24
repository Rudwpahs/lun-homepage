import { pr1Roadmap } from "@/content/lun-content";
import { SectionHeading } from "@/components/ui/section-heading";
import { StatusBadge } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button-link";
import { Reveal } from "@/components/ui/reveal";

/** 홈 화면 개발 단계 프리뷰 — 전체 로드맵은 /development에서 확인 */
export function RoadmapPreview() {
  return (
    <section className="border-y border-line-100/60">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <Reveal>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="Development"
              title="단계별로 검증하며 나아갑니다"
              description="PR1은 문제 정의부터 현장 테스트까지 8단계 로드맵을 따라 진행 중입니다."
            />
            <ButtonLink
              href="/development"
              variant="secondary"
              showArrow
              className="shrink-0"
            >
              개발 과정 전체 보기
            </ButtonLink>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <ol className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {pr1Roadmap.map((step, index) => (
              <li
                key={step.name}
                className="glass rounded-(--radius-card) p-5 transition-transform duration-300 motion-safe:hover:-translate-y-0.5"
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="text-sm font-semibold tracking-widest text-line-300">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <StatusBadge status={step.status} />
                </div>
                <h3 className="mt-3 text-sm font-bold text-marina-900">
                  {step.nameKo}
                </h3>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}
