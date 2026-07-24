"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { homeIntro } from "@/content/lun-content";
import styles from "./home-company-intro.module.css";

export function HomeCompanyIntro() {
  const [activeIndex, setActiveIndex] = useState(0);
  const stageRef = useRef<HTMLDivElement>(null);
  const activeItem = homeIntro.keywords[activeIndex];

  const handleStagePointerMove = (
    event: React.PointerEvent<HTMLDivElement>,
  ) => {
    if (event.pointerType === "touch") return;

    const stage = stageRef.current;
    if (!stage) return;

    const rect = stage.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;

    stage.style.setProperty("--stage-x", `${x}%`);
    stage.style.setProperty("--stage-y", `${y}%`);
    stage.style.setProperty("--stage-rotate-y", `${((x - 50) / 50) * 1.4}deg`);
    stage.style.setProperty("--stage-rotate-x", `${((50 - y) / 50) * 1.2}deg`);
  };

  const resetStage = () => {
    const stage = stageRef.current;
    if (!stage) return;

    stage.style.setProperty("--stage-x", "50%");
    stage.style.setProperty("--stage-y", "30%");
    stage.style.setProperty("--stage-rotate-x", "0deg");
    stage.style.setProperty("--stage-rotate-y", "0deg");
  };

  const handleKeywordPointerMove = (
    event: React.PointerEvent<HTMLButtonElement>,
  ) => {
    if (event.pointerType === "touch") return;

    const button = event.currentTarget;
    const rect = button.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;

    button.style.setProperty("--card-x", `${x}%`);
    button.style.setProperty("--card-y", `${y}%`);
    button.style.setProperty("--card-rotate-y", `${((x - 50) / 50) * 5}deg`);
    button.style.setProperty("--card-rotate-x", `${((50 - y) / 50) * 4}deg`);
    button.style.setProperty("--magnet-x", `${((x - 50) / 50) * 5}px`);
    button.style.setProperty("--magnet-y", `${((y - 50) / 50) * 4}px`);
  };

  const resetKeyword = (event: React.PointerEvent<HTMLButtonElement>) => {
    const button = event.currentTarget;
    button.style.setProperty("--card-x", "50%");
    button.style.setProperty("--card-y", "30%");
    button.style.setProperty("--card-rotate-x", "0deg");
    button.style.setProperty("--card-rotate-y", "0deg");
    button.style.setProperty("--magnet-x", "0px");
    button.style.setProperty("--magnet-y", "0px");
  };

  return (
    <section
      id="about-lunda"
      aria-labelledby="about-lunda-title"
      className={styles.section}
    >
      <span className={`${styles.ambient} ${styles.ambientOne}`} aria-hidden />
      <span className={`${styles.ambient} ${styles.ambientTwo}`} aria-hidden />

      <div
        ref={stageRef}
        className={styles.stage}
        onPointerMove={handleStagePointerMove}
        onPointerLeave={resetStage}
      >
        <div className={styles.copy}>
          <p className={styles.brand}>LUNDA</p>
          <h2 id="about-lunda-title" className={styles.title}>
            <span className={styles.titleLine}>
              <span className={styles.titleBase}>화면은</span>{" "}
              <span className={styles.titleAccent}>멀리.</span>
            </span>
            <span className={styles.titleLine}>
              <span className={styles.titleBase}>소리는</span>{" "}
              <span className={styles.titleAccent}>가까이.</span>
            </span>
          </h2>
        </div>

        <div className={styles.experience}>
          <p className={styles.instruction}>직접 선택해 보세요</p>

          <div
            className={styles.keywords}
            style={
              {
                "--active-index": activeIndex,
              } as React.CSSProperties
            }
          >
            <span className={styles.activeLens} aria-hidden />

            {homeIntro.keywords.map((item, index) => {
              const isActive = index === activeIndex;

              return (
                <button
                  key={item.keyword}
                  type="button"
                  className={styles.keywordButton}
                  data-active={isActive}
                  aria-pressed={isActive}
                  aria-controls="lunda-keyword-detail"
                  onPointerEnter={() => setActiveIndex(index)}
                  onFocus={() => setActiveIndex(index)}
                  onClick={() => setActiveIndex(index)}
                  onPointerMove={handleKeywordPointerMove}
                  onPointerLeave={resetKeyword}
                >
                  <span className={styles.keyword}>{item.keyword}</span>
                  <span className={styles.keywordHint}>{item.hint}</span>
                </button>
              );
            })}
          </div>

          <div id="lunda-keyword-detail" className={styles.detail}>
            <p key={activeItem.keyword} aria-live="polite">
              {activeItem.statement}
            </p>
            <Link href="/research" className={styles.link}>
              연구 보기
              <ArrowUpRight className="size-4" aria-hidden />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
