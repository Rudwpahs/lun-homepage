"use client";

import { useEffect, useRef } from "react";
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

  useEffect(() => {
    const story = storyRef.current;
    const stage = stageRef.current;
    if (!story || !stage) return;

    let animationFrame = 0;
    let animationStartedAt = 0;
    let phase: "idle" | "playing" | "complete" = "idle";
    let touchStartY: number | null = null;
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );

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
      stage.style.setProperty(
        "--latin-opacity",
        (1 - latinExit).toFixed(4),
      );
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

    const setPhase = (nextPhase: typeof phase) => {
      phase = nextPhase;
      stage.dataset.phase = nextPhase;
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
      if (phase !== "idle") return;

      setPhase("playing");
      animationStartedAt = 0;
      animationFrame = window.requestAnimationFrame(playAnimation);
    };

    const shouldHoldOpening = () => {
      const storyRect = story.getBoundingClientRect();
      return (
        phase !== "complete" &&
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
        event.metaKey ||
        event.shiftKey
      ) {
        return;
      }

      const isForwardScrollKey = [
        "ArrowDown",
        "PageDown",
        " ",
        "Spacebar",
        "End",
      ].includes(event.key);

      if (!isForwardScrollKey || !shouldHoldOpening()) return;

      event.preventDefault();
      startAnimation();
    };

    const handleUnexpectedScroll = () => {
      if (
        phase === "idle" &&
        window.scrollY > OPENING_SCROLL_TOLERANCE &&
        story.getBoundingClientRect().bottom > 0
      ) {
        startAnimation();
      }
    };

    const handleReducedMotionChange = (event: MediaQueryListEvent) => {
      if (event.matches) finishAnimation();
    };

    stage.dataset.phase = "idle";
    renderProgress(0);

    if (
      reducedMotion.matches ||
      window.scrollY > OPENING_SCROLL_TOLERANCE
    ) {
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

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", clearTouchStart);
      window.removeEventListener("touchcancel", clearTouchStart);
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("scroll", handleUnexpectedScroll);
      reducedMotion.removeEventListener("change", handleReducedMotionChange);
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
        <div
          ref={stageRef}
          className={styles.stage}
        >
          <span className={`${styles.ambient} ${styles.ambientA}`} aria-hidden />
          <span className={`${styles.ambient} ${styles.ambientB}`} aria-hidden />

          <div className={styles.glass}>
            <span className={styles.liquidFlow} aria-hidden />
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

            <span className={`${styles.cue} ${styles.startCue}`} aria-hidden>
              스크롤하여 시작
            </span>
            <span className={`${styles.cue} ${styles.endCue}`} aria-hidden>
              아래로 계속
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
