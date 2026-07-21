"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import Image from "next/image";
import { pr1Story } from "@/content/lun-content";
import { cn } from "@/lib/utils";

/**
 * PR1 스크롤 스토리 — 캔버스 프레임 스크럽 (개념 시각화).
 *
 * 스크롤 진행도에 따라 사전 렌더된 개념 애니메이션 프레임
 * (public/frames/pr1-story/, scripts/generate_pr1_story_frames.py 로 생성)을
 * 캔버스에 그립니다. 스크롤 이벤트 리스너 없이 requestAnimationFrame 루프와
 * getBoundingClientRect만 사용합니다.
 *
 * 접근성:
 * - prefers-reduced-motion 환경에서는 스크럽 대신 마지막 프레임의 정적
 *   이미지와 단계 설명 목록을 보여줍니다 (핀 고정·모션 없음).
 * - 프레임은 장식이 아니라 서사이므로 단계 설명 텍스트를 항상 함께 제공합니다.
 *
 * 진실성: 추상 개념 애니메이션이며 실제 제품 형상이 아님을 화면에 명시합니다.
 */
const FRAME_COUNT = 100;

const frameSrc = (i: number) =>
  `/frames/pr1-story/frame_${String(i + 1).padStart(4, "0")}.jpg`;

/** 진행도 → 스토리 단계 인덱스 */
const phaseAt = (progress: number) =>
  progress < 0.34 ? 0 : progress < 0.66 ? 1 : 2;

export function Pr1Story() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [phase, setPhase] = useState(0);

  // 모션 감소 선호를 외부 스토어로 구독 (SSR에서는 false로 시작)
  const reducedMotion = useSyncExternalStore(
    (onChange) => {
      const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
      mq.addEventListener("change", onChange);
      return () => mq.removeEventListener("change", onChange);
    },
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    () => false,
  );

  useEffect(() => {
    if (reducedMotion) return;
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const sizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = canvas.clientWidth * dpr;
      canvas.height = canvas.clientHeight * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    sizeCanvas();

    const images: HTMLImageElement[] = [];
    let currentIdx = -1;

    // contain-fit: 프레임 배경색과 캔버스 배경색이 동일해 레터박스가 보이지
    // 않으며, 모바일 세로 화면에서도 좌우가 잘리지 않는다.
    const draw = (idx: number) => {
      const img = images[idx];
      if (!img || !img.complete || img.naturalWidth === 0) return;
      const cw = canvas.clientWidth;
      const ch = canvas.clientHeight;
      const scale = Math.min(cw / img.naturalWidth, ch / img.naturalHeight);
      const dw = img.naturalWidth * scale;
      const dh = img.naturalHeight * scale;
      ctx.fillStyle = "#06222e"; // marina-950 — 프레임 배경과 동일
      ctx.fillRect(0, 0, cw, ch);
      ctx.drawImage(img, (cw - dw) / 2, (ch - dh) / 2, dw, dh);
      currentIdx = idx;
    };

    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new window.Image();
      img.src = frameSrc(i);
      if (i === 0) img.onload = () => draw(0);
      images.push(img);
    }

    let rafId = 0;
    let lastPhase = -1;
    const loop = () => {
      const top = container.getBoundingClientRect().top;
      const progress = Math.max(
        0,
        Math.min(1, -top / (container.offsetHeight - window.innerHeight)),
      );
      const target = Math.round(progress * (FRAME_COUNT - 1));
      if (target !== currentIdx) draw(target);
      const nextPhase = phaseAt(progress);
      if (nextPhase !== lastPhase) {
        lastPhase = nextPhase;
        setPhase(nextPhase);
      }
      rafId = requestAnimationFrame(loop);
    };
    rafId = requestAnimationFrame(loop);

    const onResize = () => {
      sizeCanvas();
      if (currentIdx >= 0) draw(currentIdx);
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", onResize);
    };
  }, [reducedMotion]);

  // 모션 감소 환경: 정적 이미지 + 단계 목록 (핀 고정 없음)
  if (reducedMotion) {
    return (
      <section className="bg-marina-950 text-white">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
          <p className="text-sm font-semibold tracking-widest text-aqua-300 uppercase">
            {pr1Story.label} · {pr1Story.labelKo}
          </p>
          <Image
            src={frameSrc(FRAME_COUNT - 1)}
            alt="PR1 개념 시각화: 사람이 스마트폰에서 떨어져 걸어가고, 송신 노드의 무선 신호가 공간을 가로질러 사람에게 도달하며, 사람 곁에 오디오 파형이 표시된 추상 다이어그램"
            width={1600}
            height={900}
            className="mt-6 h-auto w-full rounded-(--radius-card)"
          />
          <ol className="mt-8 grid gap-6 md:grid-cols-3">
            {pr1Story.phases.map((p, i) => (
              <li key={p.key}>
                <h3 className="font-bold text-aqua-300">
                  {String(i + 1).padStart(2, "0")} {p.key}
                  <span className="ml-2 text-sm font-medium text-marina-100">
                    {p.title}
                  </span>
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-marina-100/80">
                  {p.description}
                </p>
              </li>
            ))}
          </ol>
          <p className="mt-6 text-xs text-marina-100/50">{pr1Story.honesty}</p>
        </div>
      </section>
    );
  }

  return (
    <section aria-label="PR1 개념 스토리">
      <div
        ref={containerRef}
        style={{ height: "280vh" }}
        className="relative bg-marina-950"
      >
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          <canvas
            ref={canvasRef}
            className="block h-full w-full"
            role="img"
            aria-label="PR1 개념 시각화: 스크롤에 따라 사람이 스마트폰에서 분리되어 이동하고, 무선 신호가 공간을 건너 사람에게 도달해 화면 없이 오디오를 듣는 과정을 표현한 추상 애니메이션"
          />

          {/* 상단 라벨 */}
          <div className="pointer-events-none absolute inset-x-0 top-0 flex items-start justify-between p-5 sm:p-8">
            <p className="text-xs font-semibold tracking-widest text-aqua-300 uppercase sm:text-sm">
              {pr1Story.label} · {pr1Story.labelKo}
            </p>
            <p className="max-w-40 text-right text-[11px] leading-snug text-marina-100/50 sm:max-w-none">
              {pr1Story.honesty}
            </p>
          </div>

          {/* 하단 단계 캡션 — 진행도에 따라 크로스페이드 */}
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 p-5 pb-8 sm:p-8 sm:pb-12"
            style={{
              background:
                "linear-gradient(to top, rgba(6,34,46,0.92) 0%, rgba(6,34,46,0.4) 60%, transparent 100%)",
            }}
          >
            <div className="mx-auto grid max-w-6xl gap-2 sm:grid-cols-3 sm:gap-6">
              {pr1Story.phases.map((p, i) => (
                <div
                  key={p.key}
                  aria-hidden={phase !== i}
                  className={cn(
                    "transition-opacity duration-500",
                    phase === i ? "opacity-100" : "opacity-30",
                  )}
                >
                  <h3 className="text-sm font-bold tracking-wide text-white sm:text-base">
                    <span className="mr-2 text-aqua-300">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {p.key}
                    <span className="ml-2 text-xs font-medium text-marina-100/80 sm:text-sm">
                      {p.title}
                    </span>
                  </h3>
                  <p
                    className={cn(
                      "mt-1 max-w-md text-xs leading-relaxed text-marina-100/85 sm:text-sm",
                      phase === i ? "block" : "hidden sm:block",
                    )}
                  >
                    {p.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
