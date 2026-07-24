"use client";

import { useRef, type HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface SpotlightCardProps extends HTMLAttributes<HTMLDivElement> {
  /** 짙은 Marina 배경 위에서 사용할 때 (아쿠아 하이라이트) */
  dark?: boolean;
  children: React.ReactNode;
}

/**
 * 포인터를 따라 부드러운 하이라이트가 움직이는 인터랙티브 카드 래퍼.
 *
 * pointermove 시 CSS 변수 --mx/--my(카드 기준 % 좌표)를 갱신하면
 * globals.css의 .spotlight-card::before 가 그 지점에 방사형 하이라이트를 그립니다.
 * 접근성: prefers-reduced-motion 환경에서는 포인터 추적을 건너뛰고,
 * hover 이동(translateY)도 CSS에서 비활성화됩니다. 하이라이트는 순수 장식입니다.
 */
export function SpotlightCard({
  dark = false,
  className,
  children,
  ...props
}: SpotlightCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  function handlePointerMove(event: React.PointerEvent<HTMLDivElement>) {
    const node = ref.current;
    if (!node) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const rect = node.getBoundingClientRect();
    const mx = ((event.clientX - rect.left) / rect.width) * 100;
    const my = ((event.clientY - rect.top) / rect.height) * 100;
    node.style.setProperty("--mx", `${mx}%`);
    node.style.setProperty("--my", `${my}%`);
  }

  function handlePointerLeave() {
    const node = ref.current;
    if (!node) return;
    node.style.removeProperty("--mx");
    node.style.removeProperty("--my");
  }

  return (
    <div
      ref={ref}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className={cn(
        "spotlight-card",
        dark && "spotlight-card--dark",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
