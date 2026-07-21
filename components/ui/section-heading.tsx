import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  /** 섹션 위 작은 라벨 (예: Approach) */
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  onDark?: boolean;
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  onDark = false,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && (
        <p
          className={cn(
            "mb-3 text-sm font-semibold tracking-widest uppercase",
            onDark ? "text-aqua-300" : "text-marina-600",
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          "text-2xl font-bold tracking-tight text-balance sm:text-3xl lg:text-4xl",
          onDark ? "text-white" : "text-marina-900",
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-4 text-base leading-relaxed sm:text-lg",
            onDark ? "text-marina-100" : "text-ink-500",
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
