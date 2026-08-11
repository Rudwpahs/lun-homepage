"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const AUTO_INTERVAL_MS = 4500;
const RESUME_AFTER_MS = 9000;

/**
 * 키워드/노드 선택용 인덱스 훅.
 * - 사용자 조작 시 자동 순환을 잠시 멈추고
 * - prefers-reduced-motion 이면 자동 순환을 끈다.
 */
export function useRotatingIndex(length: number) {
  const [activeIndex, setActiveIndex] = useState(0);
  const pausedUntilRef = useRef(0);
  const interactedRef = useRef(false);

  const selectIndex = useCallback(
    (index: number, options?: { user?: boolean }) => {
      const next = ((index % length) + length) % length;
      setActiveIndex(next);
      if (options?.user) {
        interactedRef.current = true;
        pausedUntilRef.current = Date.now() + RESUME_AFTER_MS;
      }
    },
    [length],
  );

  const step = useCallback(
    (delta: number, options?: { user?: boolean }) => {
      selectIndex(activeIndex + delta, options);
    },
    [activeIndex, selectIndex],
  );

  useEffect(() => {
    if (length <= 1) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reducedMotion.matches) return;

    const timer = window.setInterval(() => {
      if (Date.now() < pausedUntilRef.current) return;
      setActiveIndex((current) => (current + 1) % length);
    }, AUTO_INTERVAL_MS);

    const handleChange = (event: MediaQueryListEvent) => {
      if (event.matches) window.clearInterval(timer);
    };

    reducedMotion.addEventListener("change", handleChange);
    return () => {
      window.clearInterval(timer);
      reducedMotion.removeEventListener("change", handleChange);
    };
  }, [length]);

  return {
    activeIndex,
    selectIndex,
    step,
    hasInteracted: interactedRef,
  };
}
