"use client";

import { useEffect, useRef, useState } from "react";
import { brand } from "@/content/lun-content";
import styles from "./lunda-vision-animation.module.css";

const ANIMATION_DURATION_MS = 4200;
const OPENING_SCROLL_TOLERANCE = 8;

const clamp = (value: number) => Math.min(Math.max(value, 0), 1);

const smoothStep = (value: number) => {
  const clamped = clamp(value);
  return clamped * clamped * (3 - 2 * clamped);
};

const segment = (progress: number, start: number, end: number) =>
  smoothStep((progress - start) / (end - start));

export function LundaVisionAnimation() {
  const storyRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const glassRef = useRef<HTMLDivElement>(null);
  const controlsRef = useRef<{ start: () => void; skip: () => void } | null>(
    null,
  );
  const [phase, setPhaseState] = useState<"idle" | "playing" | "complete">(
    "idle",
  );

  useEffect(() => {
    const story = storyRef.current;
    const stage = stageRef.current;
    const glass = glassRef.current;
    if (!story || !stage) return;

    let animationFrame = 0;
    let animationStartedAt = 0;
    let phaseLocal: "idle" | "playing" | "complete" = "idle";
    let touchStartY: number | null = null;
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );

    const setPhase = (nextPhase: typeof phaseLocal) => {
      phaseLocal = nextPhase;
      stage.dataset.phase = nextPhase;
      setPhaseState(nextPhase);
    };

    const renderProgress = (progress: number) => {
      const eArrival = segment(progress, 0.015, 0.2);
      const latinExit = segment(progress, 0.36, 0.48);
      const koreanArrival = segment(progress, 0.42, 0.56);
      const koreanExit = segment(progress, 0.64, 0.74);
      const taglineArrival = segment(progress, 0.52, 0.61);
      const finalArrival = segment(progress, 0.72, 0.86);
      const ringTravel = segment(progress, 0.16, 0.39);
      const ringOpacity =
        segment(progress, 0.15, 0.23) *
        (1 - segment(progress, 0.29, 0.42));

      stage.style.setProperty("--e-opacity", eArrival.toFixed(4));
      stage.style.setProperty(
        "--e-x",
        `${(-3.8 * (1 - eArrival)).toFixed(3)}em`,
      );
      stage.style.setProperty(
        "--e-scale",
        (0.72 + 0.28 * eArrival).toFixed(4),
      );
      stage.style.setProperty(
        "--e-blur",
        `${(10 * (1 - eArrival)).toFixed(2)}px`,
      );
      stage.style.setProperty(
        "--lunda-x",
        `${(-0.38 * (1 - eArrival)).toFixed(3)}em`,
      );
      stage.style.setProperty("--latin-opacity", (1 - latinExit).toFixed(4));
      stage.style.setProperty(
        "--latin-blur",
        `${(14 * latinExit).toFixed(2)}px`,
      );
      stage.style.setProperty(
        "--korean-opacity",
        (koreanArrival * (1 - koreanExit)).toFixed(4),
      );
      stage.style.setProperty(
        "--korean-scale",
        (0.88 + 0.12 * koreanArrival).toFixed(4),
      );
      stage.style.setProperty(
        "--korean-blur",
        `${(14 * (1 - koreanArrival) + 10 * koreanExit).toFixed(2)}px`,
      );
      stage.style.setProperty(
        "--korean-spacing",
        `${(0.08 + 0.2 * (1 - koreanArrival)).toFixed(3)}em`,
      );
      stage.style.setProperty(
        "--tagline-opacity",
        (taglineArrival * (1 - koreanExit)).toFixed(4),
      );
      stage.style.setProperty(
        "--tagline-y",
        `${(0.75 * (1 - taglineArrival) + 0.35 * koreanExit).toFixed(3)}rem`,
      );
      stage.style.setProperty("--final-opacity", finalArrival.toFixed(4));
      stage.style.setProperty(
        "--final-blur",
        `${(12 * (1 - finalArrival)).toFixed(2)}px`,
      );
      stage.style.setProperty(
        "--final-scale",
        (0.94 + 0.06 * finalArrival).toFixed(4),
      );
      stage.style.setProperty(
        "--ring-opacity",
        (0.82 * ringOpacity).toFixed(4),
      );
      stage.style.setProperty(
        "--ring-scale",
        (0.28 + 2.18 * ringTravel).toFixed(4),
      );
      stage.style.setProperty(
        "--start-cue-opacity",
        (1 - segment(progress, 0.01, 0.07)).toFixed(4),
      );
      stage.style.setProperty(
        "--end-cue-opacity",
        segment(progress, 0.88, 0.96).toFixed(4),
      );
    };

    const finishAnimation = () => {
      if (animationFrame) {
        window.cancelAnimationFrame(animationFrame);
        animationFrame = 0;
      }

      renderProgress(1);
      setPhase("complete");
    };

    const playAnimation = (timestamp: number) => {
      if (!animationStartedAt) animationStartedAt = timestamp;

      const progress = clamp(
        (timestamp - animationStartedAt) / ANIMATION_DURATION_MS,
      );
      renderProgress(progress);

      if (progress < 1) {
        animationFrame = window.requestAnimationFrame(playAnimation);
        return;
      }

      animationFrame = 0;
      setPhase("complete");
    };

    const startAnimation = () => {
      if (phaseLocal !== "idle") return;

      setPhase("playing");
      animationStartedAt = 0;
      animationFrame = window.requestAnimationFrame(playAnimation);
    };

    controlsRef.current = {
      start: startAnimation,
      skip: finishAnimation,
    };

    const shouldHoldOpening = () => {
      const storyRect = story.getBoundingClientRect();
      return (
        phaseLocal !== "complete" &&
        window.scrollY <= OPENING_SCROLL_TOLERANCE &&
        storyRect.bottom > 0
      );
    };

    const handleWheel = (event: WheelEvent) => {
      if (event.deltaY <= 0 || !shouldHoldOpening()) return;

      event.preventDefault();
      startAnimation();
    };

    const handleTouchStart = (event: TouchEvent) => {
      touchStartY = event.touches[0]?.clientY ?? null;
    };

    const handleTouchMove = (event: TouchEvent) => {
      const currentY = event.touches[0]?.clientY;
      if (touchStartY === null || currentY === undefined) return;

      const downwardScrollIntent = touchStartY - currentY > 8;
      if (!downwardScrollIntent || !shouldHoldOpening()) return;

      event.preventDefault();
      startAnimation();
    };

    const clearTouchStart = () => {
      touchStartY = null;
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement | null;
      if (
        target?.matches("input, textarea, select, [contenteditable='true']") ||
        event.altKey ||
        event.ctrlKey ||
        event.metaKey
      ) {
        return;
      }

      if (event.key === "Escape" && phaseLocal === "playing") {
        event.preventDefault();
        finishAnimation();
        return;
      }

      if (event.shiftKey) return;

      const isForwardScrollKey = [
        "ArrowDown",
        "PageDown",
        " ",
        "Spacebar",
        "End",
        "Enter",
      ].includes(event.key);

      if (!isForwardScrollKey || !shouldHoldOpening()) return;

      event.preventDefault();
      startAnimation();
    };

    const handleUnexpectedScroll = () => {
      if (
        phaseLocal === "idle" &&
        window.scrollY > OPENING_SCROLL_TOLERANCE &&
        story.getBoundingClientRect().bottom > 0
      ) {
        startAnimation();
      }
    };

    const handleReducedMotionChange = (event: MediaQueryListEvent) => {
      if (event.matches) finishAnimation();
    };

    const handlePointerMove = (event: PointerEvent) => {
      if (!glass || reducedMotion.matches) return;
      const rect = glass.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width) * 100;
      const y = ((event.clientY - rect.top) / rect.height) * 100;
      glass.style.setProperty("--specular-x", `${clamp(x / 100) * 100}%`);
      glass.style.setProperty("--specular-y", `${clamp(y / 100) * 100}%`);
    };

    const handleGlassActivate = () => {
      if (phaseLocal === "idle") startAnimation();
    };

    stage.dataset.phase = "idle";
    renderProgress(0);

    if (reducedMotion.matches || window.scrollY > OPENING_SCROLL_TOLERANCE) {
      finishAnimation();
    }

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("touchstart", handleTouchStart, {
      passive: true,
    });
    window.addEventListener("touchmove", handleTouchMove, { passive: false });
    window.addEventListener("touchend", clearTouchStart, { passive: true });
    window.addEventListener("touchcancel", clearTouchStart, { passive: true });
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("scroll", handleUnexpectedScroll, {
      passive: true,
    });
    reducedMotion.addEventListener("change", handleReducedMotionChange);
    glass?.addEventListener("pointermove", handlePointerMove);
    glass?.addEventListener("click", handleGlassActivate);

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", clearTouchStart);
      window.removeEventListener("touchcancel", clearTouchStart);
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("scroll", handleUnexpectedScroll);
      reducedMotion.removeEventListener("change", handleReducedMotionChange);
      glass?.removeEventListener("pointermove", handlePointerMove);
      glass?.removeEventListener("click", handleGlassActivate);
      controlsRef.current = null;
      if (animationFrame) window.cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <section
      ref={storyRef}
      className={styles.story}
      aria-labelledby="lunda-vision-title"
    >
      <h1 id="lunda-vision-title" className="sr-only">
        LUNDA. 첫 스크롤에서 이룬다로 변한 뒤 다시 LUNDA로 돌아옵니다.{" "}
        {brand.tagline}
      </h1>

      <div className={styles.sticky}>
        <div ref={stageRef} className={styles.stage} data-phase={phase}>
          <span className={`${styles.ambient} ${styles.ambientA}`} aria-hidden />
          <span className={`${styles.ambient} ${styles.ambientB}`} aria-hidden />

          <div ref={glassRef} className={styles.glass} role="presentation">
            <span className={styles.liquidFlow} aria-hidden />
            <span className={styles.specular} aria-hidden />

            <div className={styles.sequence} aria-hidden>
              <span className={styles.fusionRing} />

              <div className={styles.latinWord}>
                <span className={styles.joiningE}>E</span>
                <span className={styles.lunda}>LUNDA</span>
              </div>

              <span className={styles.koreanWord}>이룬다</span>
              <span className={styles.finalWord}>LUNDA</span>
            </div>

            <p className={styles.tagline}>{brand.tagline}</p>

            {phase === "idle" ? (
              <button
                type="button"
                className={`${styles.cue} ${styles.startCue} ${styles.cueButton}`}
                onClick={(event) => {
                  event.stopPropagation();
                  controlsRef.current?.start();
                }}
              >
                스크롤하거나 눌러 시작
              </button>
            ) : null}

            {phase === "playing" ? (
              <button
                type="button"
                className={styles.skipButton}
                onClick={(event) => {
                  event.stopPropagation();
                  controlsRef.current?.skip();
                }}
              >
                건너뛰기
              </button>
            ) : null}

            {phase === "complete" ? (
              <span className={`${styles.cue} ${styles.endCue}`}>
                아래로 계속
              </span>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
