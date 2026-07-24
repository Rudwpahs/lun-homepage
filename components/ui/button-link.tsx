import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost" | "onDark";

const variantClasses: Record<ButtonVariant, string> = {
  // primary: hover 시 아쿠아/마리나 글로우 + 미세 상승 (reduced-motion에서 이동 억제)
  primary:
    "bg-marina-700 text-white shadow-card hover:bg-marina-800 hover:shadow-[0_10px_28px_-10px_rgb(14_98_133_/_0.6)] active:bg-marina-900 motion-safe:hover:-translate-y-0.5",
  // secondary: 글래스 표면 위 반투명 카드 hover
  secondary:
    "border border-line-300 bg-surface/70 text-marina-800 backdrop-blur-sm hover:border-marina-500 hover:bg-surface hover:text-marina-700",
  ghost: "text-marina-700 hover:bg-marina-50/80",
  onDark:
    "border border-white/25 bg-white/10 text-white backdrop-blur-sm hover:border-white/40 hover:bg-white/20 hover:shadow-[0_8px_24px_-10px_rgb(122_208_217_/_0.5)]",
};

interface ButtonLinkProps {
  href: string;
  variant?: ButtonVariant;
  showArrow?: boolean;
  className?: string;
  children: React.ReactNode;
}

/**
 * 링크형 버튼. 터치 타깃 최소 44px(min-h-11)을 보장합니다.
 */
export function ButtonLink({
  href,
  variant = "primary",
  showArrow = false,
  className,
  children,
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex min-h-11 cursor-pointer items-center justify-center gap-2 rounded-(--radius-btn) px-5 py-2.5 text-sm font-semibold transition-[background-color,border-color,box-shadow,transform,color] duration-200",
        variantClasses[variant],
        className,
      )}
    >
      {children}
      {showArrow && <ArrowRight className="size-4" aria-hidden />}
    </Link>
  );
}
