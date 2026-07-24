"use client";

import { useEffect, useRef } from "react";
import { brand } from "@/content/lun-content";
import styles from "./lunda-vision-animation.module.css";

const clamp = (value: number) => Math.min(Math.max(value, 0), 1);

const smoothStep = (value: number) => {
  const clamped = clamp(value);
  return clamped * clamped * (3 - 2 * clamped);
};

const segment = (progress: number, start: number, end: number) =>
  smoothStep((progress - start) / (end - start));

export function LundaVisionAnimation() {
  const storyRef = useRef<HTMLElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const story = storyRef.current;
    const sticky = stickyRef.current;
    const stage = stageRef.current;
    if (!story || !sticky || !stage) return;

    let animationFrame = 0;
    let startScroll = 0;
    let endScroll = 1;

    const renderProgress = () => {
      animationFrame = 0;

      const progress = clamp(
        (window.scrollY - startScroll) / (endScroll - startScroll),
      );
      const eArrival = segment(progress, 0.015, 0.2);
      const latinExit = segment(progress, 0.36, 0.48);
      const koreanArrival = segment(progress, 0.42, 0.56);
      const koreanExit = segment(progress, 0.68, 0.79);
      const taglineArrival = segment(progress, 0.52, 0.61);
      const finalArrival = segment(progress, 0.77, 0.91);
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
        segment(progress, 0.91, 0.98).toFixed(4),
      );
    };

    const scheduleRender = () => {
      if (animationFrame) return;
      animationFrame = window.requestAnimationFrame(renderProgress);
    };

    const measure = () => {
      const storyTop = window.scrollY + story.getBoundingClientRect().top;
      const stickyTop = Number.parseFloat(
        window.getComputedStyle(sticky).top,
      );

      startScroll = storyTop - (Number.isFinite(stickyTop) ? stickyTop : 0);
      endScroll = Math.max(
        startScroll + 1,
        storyTop + story.offsetHeight - window.innerHeight,
      );
      scheduleRender();
    };

    measure();
    window.addEventListener("scroll", scheduleRender, { passive: true });
    window.addEventListener("resize", measure);

    return () => {
      window.removeEventListener("scroll", scheduleRender);
      window.removeEventListener("resize", measure);
      if (animationFrame) window.cancelAnimationFrame(animationFrame);
    };
  }, []);

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (event.pointerType === "touch") return;

    const stage = stageRef.current;
    if (!stage) return;

    const rect = stage.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;
    const rotateY = ((x - 50) / 50) * 1.4;
    const rotateX = ((50 - y) / 50) * 1.4;

    stage.style.setProperty("--vision-x", `${x}%`);
    stage.style.setProperty("--vision-y", `${y}%`);
    stage.style.setProperty("--vision-rotate-x", `${rotateX}deg`);
    stage.style.setProperty("--vision-rotate-y", `${rotateY}deg`);
  };

  const resetPointer = () => {
    const stage = stageRef.current;
    if (!stage) return;

    stage.style.setProperty("--vision-x", "50%");
    stage.style.setProperty("--vision-y", "32%");
    stage.style.setProperty("--vision-rotate-x", "0deg");
    stage.style.setProperty("--vision-rotate-y", "0deg");
  };

  return (
    <section
      ref={storyRef}
      className={styles.story}
      aria-labelledby="lunda-vision-title"
    >
      <h1 id="lunda-vision-title" className="sr-only">
        LUNDA. 스크롤하면 E가 결합해 이룬다로 변한 뒤 다시 LUNDA로
        돌아옵니다. {brand.tagline}
      </h1>

      <div ref={stickyRef} className={styles.sticky}>
        <div
          ref={stageRef}
          className={styles.stage}
          onPointerMove={handlePointerMove}
          onPointerLeave={resetPointer}
        >
          <span className={`${styles.ambient} ${styles.ambientA}`} aria-hidden />
          <span className={`${styles.ambient} ${styles.ambientB}`} aria-hidden />

          <div className={styles.glass}>
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
              SCROLL
            </span>
            <span className={`${styles.cue} ${styles.endCue}`} aria-hidden>
              ABOUT LUNDA
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
