"use client";

import { useRef } from "react";
import { brand } from "@/content/lun-content";
import styles from "./lunda-vision-animation.module.css";

export function LundaVisionAnimation() {
  const stageRef = useRef<HTMLDivElement>(null);

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
    <section className={styles.section} aria-labelledby="lunda-vision-title">
      <h1 id="lunda-vision-title" className="sr-only">
        LUNDA, 이룬다. {brand.tagline}
      </h1>

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
          </div>

          <p className={styles.tagline}>{brand.tagline}</p>
        </div>
      </div>
    </section>
  );
}
