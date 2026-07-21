import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost" | "onDark";

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-marina-700 text-white hover:bg-marina-800 active:bg-marina-900 shadow-card",
  secondary:
    "border border-line-300 bg-surface text-marina-800 hover:border-marina-500 hover:text-marina-700",
  ghost: "text-marina-700 hover:bg-marina-50",
  onDark:
    "bg-white/10 text-white border border-white/25 hover:bg-white/20",
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
        "inline-flex min-h-11 cursor-pointer items-center justify-center gap-2 rounded-(--radius-btn) px-5 py-2.5 text-sm font-semibold transition-colors duration-200",
        variantClasses[variant],
        className,
      )}
    >
      {children}
      {showArrow && <ArrowRight className="size-4" aria-hidden />}
    </Link>
  );
}
