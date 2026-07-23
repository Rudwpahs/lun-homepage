"use client";

import { useRef } from "react";

/**
 * 히어로 장식 비주얼.
 * 무선 신호(동심 호), 공간(점 그리드), 사람의 이동(점선 경로),
 * 오디오 파형을 추상적인 선과 점으로 표현합니다.
 * 순수 장식 요소이므로 스크린리더에서는 숨깁니다.
 * prefers-reduced-motion 환경에서는 애니메이션이 정지됩니다 (globals.css).
 */
export function HeroVisual() {
  const stageRef = useRef<HTMLDivElement>(null);

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (event.pointerType === "touch") return;
    const stage = stageRef.current;
    if (!stage) return;
    const rect = stage.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;
    const rotateY = ((x - 50) / 50) * 2.2;
    const rotateX = ((50 - y) / 50) * 2.2;

    stage.style.setProperty("--glass-x", `${x}%`);
    stage.style.setProperty("--glass-y", `${y}%`);
    stage.style.setProperty("--glass-rotate-x", `${rotateX}deg`);
    stage.style.setProperty("--glass-rotate-y", `${rotateY}deg`);
  };

  const resetPointer = () => {
    const stage = stageRef.current;
    if (!stage) return;
    stage.style.setProperty("--glass-x", "50%");
    stage.style.setProperty("--glass-y", "35%");
    stage.style.setProperty("--glass-rotate-x", "0deg");
    stage.style.setProperty("--glass-rotate-y", "0deg");
  };

  return (
    <div
      ref={stageRef}
      aria-hidden
      className="hero-glass-stage w-full max-w-lg"
      onPointerMove={handlePointerMove}
      onPointerLeave={resetPointer}
    >
      <span className="hero-glass-ambient hero-glass-ambient--one" />
      <span className="hero-glass-ambient hero-glass-ambient--two" />
      <div className="hero-glass-lens">
        <svg
          viewBox="0 0 520 400"
          fill="none"
          className="h-auto w-full"
        >
          {/* 공간을 나타내는 점 그리드 */}
          <g fill="var(--color-line-300)">
            {Array.from({ length: 7 }).map((_, row) =>
              Array.from({ length: 9 }).map((_, col) => (
                <circle
                  key={`${row}-${col}`}
                  cx={40 + col * 55}
                  cy={40 + row * 55}
                  r="1.5"
                />
              )),
            )}
          </g>

          {/* 송신 지점 */}
          <circle cx="110" cy="220" r="10" fill="var(--color-marina-700)" />
          <circle cx="110" cy="220" r="4" fill="var(--color-aqua-500)" />

          {/* 무선 신호 동심 호 */}
          <g
            stroke="var(--color-marina-500)"
            strokeWidth="2"
            strokeLinecap="round"
            fill="none"
          >
            <path d="M138 192 A40 40 0 0 1 138 248" className="signal-pulse" />
            <path
              d="M160 170 A72 72 0 0 1 160 270"
              className="signal-pulse"
              style={{ animationDelay: "0.5s" }}
              opacity="0.7"
            />
            <path
              d="M182 148 A104 104 0 0 1 182 292"
              className="signal-pulse"
              style={{ animationDelay: "1s" }}
              opacity="0.45"
            />
          </g>

          {/* 사람의 이동 경로 (점선) */}
          <path
            d="M120 330 C200 300 260 320 330 280 C390 245 420 200 430 150"
            stroke="var(--color-marina-200)"
            strokeWidth="2"
            strokeDasharray="1 10"
            strokeLinecap="round"
          />

          {/* 청취자 지점 */}
          <circle cx="430" cy="150" r="8" fill="var(--color-marina-700)" />
          <circle
            cx="430"
            cy="150"
            r="16"
            stroke="var(--color-aqua-500)"
            strokeWidth="1.5"
            opacity="0.6"
          />

          {/* 청취자 근처 오디오 파형 */}
          <g
            stroke="var(--color-marina-600)"
            strokeWidth="2.5"
            strokeLinecap="round"
          >
            <line x1="404" y1="112" x2="404" y2="120" />
            <line x1="414" y1="104" x2="414" y2="128" />
            <line x1="424" y1="98" x2="424" y2="122" />
            <line x1="434" y1="108" x2="434" y2="124" />
            <line x1="444" y1="102" x2="444" y2="118" />
            <line x1="454" y1="110" x2="454" y2="120" />
          </g>
        </svg>
        <span className="hero-glass-highlight" />
      </div>
      <div className="hero-glass-chip">
        <span className="size-1.5 rounded-full bg-aqua-500" />
        Screen-light audio
      </div>
    </div>
  );
}
