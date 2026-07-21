import { cn } from "@/lib/utils";

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  description?: string;
  /** 배지 등 제목 위에 표시할 요소 */
  meta?: React.ReactNode;
  className?: string;
}

/** 서브페이지 상단 공통 헤더 */
export function PageHero({
  eyebrow,
  title,
  description,
  meta,
  className,
}: PageHeroProps) {
  return (
    <div className={cn("border-b border-line-100 bg-surface", className)}>
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        {meta && <div className="mb-4 flex flex-wrap items-center gap-3">{meta}</div>}
        {eyebrow && (
          <p className="mb-3 text-sm font-semibold tracking-widest text-marina-600 uppercase">
            {eyebrow}
          </p>
        )}
        <h1 className="max-w-3xl text-3xl font-bold tracking-tight text-balance text-marina-900 sm:text-4xl">
          {title}
        </h1>
        {description && (
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-500 sm:text-lg">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
