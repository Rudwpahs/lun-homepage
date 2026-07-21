import {
  CheckCircle2,
  Circle,
  CircleDashed,
  CircleDot,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { statusLabels, type ProjectStatus } from "@/content/lun-content";

type BadgeTone = "primary" | "future" | "neutral";

const toneClasses: Record<BadgeTone, string> = {
  primary: "bg-marina-700 text-white",
  future: "bg-marina-50 text-marina-800 border border-marina-200",
  neutral: "bg-line-100 text-ink-700",
};

interface BadgeProps {
  tone?: BadgeTone;
  className?: string;
  children: React.ReactNode;
}

/** 프로젝트 배지 (예: Current Focus, Future Research) */
export function Badge({ tone = "neutral", className, children }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold tracking-wide uppercase",
        toneClasses[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}

/**
 * 로드맵 상태 배지.
 * 접근성: 색상만으로 상태를 구분하지 않도록 아이콘 + 텍스트 라벨을 함께 표시.
 */
const statusStyles: Record<
  ProjectStatus,
  { className: string; Icon: typeof Circle }
> = {
  Completed: {
    className: "bg-status-done-bg text-status-done",
    Icon: CheckCircle2,
  },
  "In Progress": {
    className: "bg-status-progress-bg text-status-progress",
    Icon: CircleDot,
  },
  Planned: {
    className: "bg-status-planned-bg text-status-planned",
    Icon: Circle,
  },
  Future: {
    className: "bg-status-future-bg text-status-future",
    Icon: CircleDashed,
  },
};

interface StatusBadgeProps {
  status: ProjectStatus;
  className?: string;
}

export function StatusBadge({ status, className }: StatusBadgeProps) {
  const { className: toneClass, Icon } = statusStyles[status];
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold",
        toneClass,
        className,
      )}
    >
      <Icon className="size-3.5" aria-hidden />
      {statusLabels[status]}
      <span className="font-normal opacity-80">{status}</span>
    </span>
  );
}
