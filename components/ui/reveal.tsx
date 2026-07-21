"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface RevealProps {
  /** 등장 지연 (ms). 카드 목록에서 순차 등장에 사용 */
  delay?: number;
  className?: string;
  children: React.ReactNode;
}

/**
 * 뷰포트 진입 시 부드럽게 나타나는 래퍼.
 * prefers-reduced-motion 환경에서는 CSS에서 애니메이션이 비활성화되므로
 * 콘텐츠가 즉시 보입니다 (globals.css 참고).
 */
export function Reveal({ delay = 0, className, children }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.1 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={cn("reveal", visible && "is-visible", className)}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
