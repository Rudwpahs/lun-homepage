"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { homeIntro } from "@/content/lun-content";
import styles from "./home-company-intro.module.css";

export function HomeCompanyIntro() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = homeIntro.keywords[activeIndex];

  return (
    <section
      id="about-lunda"
      aria-labelledby="about-lunda-title"
      className={styles.section}
    >
      <span className={`${styles.ambient} ${styles.ambientOne}`} aria-hidden />
      <span className={`${styles.ambient} ${styles.ambientTwo}`} aria-hidden />

      <div className={styles.stage}>
        <span className={styles.liquidFlow} aria-hidden />

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
          <p className={styles.instruction}>세 단어로 보는 LUNDA</p>

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
