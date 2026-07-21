import Link from "next/link";
import { cn } from "@/lib/utils";

/**
 * LUN 로고 컴포넌트.
 *
 * 현재는 텍스트 워드마크 + 간단한 임시 웨이브 심볼을 사용합니다.
 * 향후 고래에서 영감을 받은 정식 심볼 로고가 확정되면
 * 이 컴포넌트 내부만 교체하면 사이트 전체에 반영됩니다.
 * (public/brand/ 에 SVG를 넣고 <Image>로 교체하는 방법은 README 참고)
 */
export function Logo({
  onDark = false,
  className,
}: {
  onDark?: boolean;
  className?: string;
}) {
  return (
    <Link
      href="/"
      aria-label="LUN 홈으로 이동"
      className={cn(
        "inline-flex min-h-11 items-center gap-2.5 font-bold tracking-[0.2em]",
        onDark ? "text-white" : "text-marina-900",
        className,
      )}
    >
      {/* 임시 심볼: 파동을 나타내는 간단한 곡선 (확정 로고 아님) */}
      <svg
        viewBox="0 0 40 20"
        className={cn("h-4 w-8", onDark ? "text-aqua-300" : "text-marina-600")}
        fill="none"
        aria-hidden
      >
        <path
          d="M2 10C7 3 12 3 17 10C22 17 27 17 32 10"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <circle cx="37" cy="10" r="2" fill="currentColor" />
      </svg>
      <span className="text-lg leading-none">LUN</span>
    </Link>
  );
}
