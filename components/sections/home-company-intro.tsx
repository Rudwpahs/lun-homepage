"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { homeIntro } from "@/content/lun-content";
import { useRotatingIndex } from "@/lib/use-rotating-index";
import styles from "./home-company-intro.module.css";

export function HomeCompanyIntro() {
  const { activeIndex, selectIndex } = useRotatingIndex(
    homeIntro.keywords.length,
  );
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
          <p className={styles.instruction} id="lunda-keyword-label">
            세 단어로 보는 LUNDA
          </p>

          <div
            className={styles.keywords}
            role="tablist"
            aria-labelledby="lunda-keyword-label"
            style={
              {
                "--active-index": activeIndex,
              } as React.CSSProperties
            }
            onKeyDown={(event) => {
              const focusTab = (index: number) => {
                selectIndex(index, { user: true });
                window.requestAnimationFrame(() => {
                  document
                    .getElementById(`lunda-keyword-tab-${index}`)
                    ?.focus();
                });
              };

              if (event.key === "ArrowRight" || event.key === "ArrowDown") {
                event.preventDefault();
                focusTab((activeIndex + 1) % homeIntro.keywords.length);
              }
              if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
                event.preventDefault();
                focusTab(
                  (activeIndex - 1 + homeIntro.keywords.length) %
                    homeIntro.keywords.length,
                );
              }
              if (event.key === "Home") {
                event.preventDefault();
                focusTab(0);
              }
              if (event.key === "End") {
                event.preventDefault();
                focusTab(homeIntro.keywords.length - 1);
              }
            }}
          >
            <span className={styles.activeLens} aria-hidden />

            {homeIntro.keywords.map((item, index) => {
              const isActive = index === activeIndex;

              return (
                <button
                  key={item.keyword}
                  type="button"
                  role="tab"
                  id={`lunda-keyword-tab-${index}`}
                  className={styles.keywordButton}
                  data-active={isActive}
                  aria-selected={isActive}
                  aria-controls="lunda-keyword-detail"
                  tabIndex={isActive ? 0 : -1}
                  onPointerEnter={() => selectIndex(index, { user: true })}
                  onFocus={() => selectIndex(index, { user: true })}
                  onClick={() => selectIndex(index, { user: true })}
                >
                  <span className={styles.keyword}>{item.keyword}</span>
                  <span className={styles.keywordHint}>{item.hint}</span>
                </button>
              );
            })}
          </div>

          <div
            id="lunda-keyword-detail"
            role="tabpanel"
            aria-labelledby={`lunda-keyword-tab-${activeIndex}`}
            className={styles.detail}
          >
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
