import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost" | "onDark";

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "liquid-control--tint bg-marina-700 text-white hover:bg-marina-800 active:bg-marina-900",
  secondary:
    "liquid-control--light border border-line-300 bg-surface text-marina-800 hover:border-marina-500 hover:text-marina-700",
  ghost: "liquid-control--ghost text-marina-700 hover:bg-white/45",
  onDark:
    "liquid-control--dark border border-white/25 bg-white/10 text-white hover:bg-white/20",
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
        "liquid-control inline-flex min-h-11 cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-full px-5 py-2.5 text-sm font-semibold",
        variantClasses[variant],
        className,
      )}
    >
      <span className="relative z-10">{children}</span>
      {showArrow && (
        <ArrowRight className="relative z-10 size-4" aria-hidden />
      )}
    </Link>
  );
}
