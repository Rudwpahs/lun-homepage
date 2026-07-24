import { cn } from "@/lib/utils";
import {
  PageHeroVisual,
  type PageHeroVisualItem,
} from "@/components/layout/page-hero-visual";

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  description?: string;
  /** 배지 등 제목 위에 표시할 요소 */
  meta?: React.ReactNode;
  visualLabel?: string;
  visualItems?: readonly PageHeroVisualItem[];
  className?: string;
}

/** 서브페이지 상단 공통 헤더 */
export function PageHero({
  eyebrow,
  title,
  description,
  meta,
  visualLabel,
  visualItems,
  className,
}: PageHeroProps) {
  return (
    <div
      className={cn(
        // 반투명 프로스티드 밴드 → 뒤 오로라가 비치되 텍스트 대비는 유지
        "border-b border-line-100/70 bg-surface/55 backdrop-blur-md backdrop-saturate-150",
        className,
      )}
    >
      <div
        className={cn(
          "mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20",
          Boolean(visualItems?.length) &&
            "grid items-center gap-10 lg:grid-cols-[0.92fr_1.08fr]",
        )}
      >
        <div>
          {meta && (
            <div className="mb-4 flex flex-wrap items-center gap-3">{meta}</div>
          )}
          {eyebrow && (
            <p className="mb-3 text-sm font-semibold tracking-widest text-marina-600">
              {eyebrow}
            </p>
          )}
          <h1 className="max-w-3xl whitespace-pre-line text-4xl leading-[0.98] font-bold tracking-[-0.055em] text-balance text-marina-950 sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          {description && (
            <p className="mt-5 max-w-xl text-base leading-relaxed text-ink-500 sm:text-lg">
              {description}
            </p>
          )}
        </div>

        {visualItems?.length ? (
          <PageHeroVisual
            label={visualLabel ?? title}
            items={visualItems}
          />
        ) : null}
      </div>
    </div>
  );
}
