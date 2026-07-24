import {
  CheckCircle2,
  Circle,
  CircleDashed,
  CircleDot,
} from "lucide-react";
import { cn } from "@/lib/utils";
import type { ProjectStatus, RoadmapStep } from "@/content/lun-content";
import { StatusBadge } from "@/components/ui/badge";
import { Reveal } from "@/components/ui/reveal";

const nodeStyles: Record<
  ProjectStatus,
  { Icon: typeof Circle; className: string }
> = {
  Completed: { Icon: CheckCircle2, className: "text-status-done" },
  "In Progress": { Icon: CircleDot, className: "text-status-progress" },
  Planned: { Icon: Circle, className: "text-status-planned" },
  Future: { Icon: CircleDashed, className: "text-status-future" },
};

interface RoadmapTimelineProps {
  steps: RoadmapStep[];
  className?: string;
}

/**
 * 세로형 개발 단계 타임라인.
 * 21st.dev "Process Timeline"(id 1943)의 단계 카드 구성을 참고하되,
 * 스크롤 고정형 가로 이동 대신 접근성이 좋은 정적 세로 구조로 재설계했습니다.
 * 상태는 색상 + 아이콘 + 텍스트 라벨로 함께 표시합니다.
 */
export function RoadmapTimeline({ steps, className }: RoadmapTimelineProps) {
  return (
    <ol className={cn("relative", className)}>
      {steps.map((step, index) => {
        const { Icon, className: nodeClass } = nodeStyles[step.status];
        const isLast = index === steps.length - 1;
        return (
          <li key={step.name} className="relative flex gap-4 sm:gap-6">
            {/* 타임라인 축 */}
            <div className="flex flex-col items-center">
              <span
                className={cn(
                  "z-10 flex size-8 shrink-0 items-center justify-center rounded-full bg-surface",
                  nodeClass,
                )}
              >
                <Icon className="size-5" aria-hidden />
              </span>
              {!isLast && (
                <span
                  aria-hidden
                  className="w-px flex-1 bg-line-300"
                />
              )}
            </div>

            <Reveal
              className={cn("flex-1", !isLast && "pb-8")}
              delay={Math.min(index * 60, 240)}
            >
              <div className="glass rounded-(--radius-card) p-5">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="font-bold text-marina-900">
                    <span className="mr-2 text-sm font-semibold tracking-widest text-line-300">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {step.nameKo}
                  </h3>
                  <StatusBadge status={step.status} />
                </div>
                <p className="mt-1 text-xs tracking-wide text-ink-500 uppercase">
                  {step.name}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-ink-500">
                  {step.description}
                </p>
              </div>
            </Reveal>
          </li>
        );
      })}
    </ol>
  );
}
