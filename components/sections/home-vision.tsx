"use client";

import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { homeVision } from "@/content/lun-content";
import { useRotatingIndex } from "@/lib/use-rotating-index";
import styles from "./home-vision.module.css";

export function HomeVision() {
  const { activeIndex, selectIndex } = useRotatingIndex(
    homeVision.nodes.length,
  );
  const activeNode = homeVision.nodes[activeIndex];

  return (
    <section className={styles.section} aria-labelledby="home-vision-title">
      <div className={styles.shell}>
        <div className={styles.copy}>
          <p className={styles.label}>{homeVision.label}</p>
          <h2 id="home-vision-title" className={styles.title}>
            {homeVision.headline.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </h2>
        </div>

        <div className={styles.system}>
          <span className={`${styles.flow} ${styles.flowA}`} aria-hidden />
          <span className={`${styles.flow} ${styles.flowB}`} aria-hidden />
          <span className={styles.ring} aria-hidden />

          <div className={styles.center}>
            <span className={styles.centerBrand}>LUNDA</span>
            <strong key={activeNode.keyword} className={styles.centerKeyword}>
              {activeNode.keyword}
            </strong>
            <span className={styles.centerStatement} aria-live="polite">
              {activeNode.statement}
            </span>
          </div>

          <div
            className={styles.nodes}
            role="tablist"
            aria-label="LUNDA의 세 가지 기준"
            onKeyDown={(event) => {
              const focusTab = (index: number) => {
                selectIndex(index, { user: true });
                window.requestAnimationFrame(() => {
                  document.getElementById(`home-vision-tab-${index}`)?.focus();
                });
              };

              if (event.key === "ArrowRight" || event.key === "ArrowDown") {
                event.preventDefault();
                focusTab((activeIndex + 1) % homeVision.nodes.length);
              }
              if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
                event.preventDefault();
                focusTab(
                  (activeIndex - 1 + homeVision.nodes.length) %
                    homeVision.nodes.length,
                );
              }
              if (event.key === "Home") {
                event.preventDefault();
                focusTab(0);
              }
              if (event.key === "End") {
                event.preventDefault();
                focusTab(homeVision.nodes.length - 1);
              }
            }}
          >
            {homeVision.nodes.map((node, index) => {
              const isActive = index === activeIndex;

              return (
                <button
                  key={node.keyword}
                  type="button"
                  role="tab"
                  id={`home-vision-tab-${index}`}
                  className={styles.node}
                  data-active={isActive}
                  aria-selected={isActive}
                  tabIndex={isActive ? 0 : -1}
                  onPointerEnter={() => selectIndex(index, { user: true })}
                  onFocus={() => selectIndex(index, { user: true })}
                  onClick={() => selectIndex(index, { user: true })}
                >
                  {node.keyword}
                </button>
              );
            })}
          </div>
        </div>

        <div className={styles.projects} aria-label="LUNDA 프로젝트 흐름">
          {homeVision.projects.map((project, index) => (
            <div key={project.name} className={styles.projectStep}>
              <Link href={project.href} className={styles.project}>
                <span className={styles.projectPhase}>{project.phase}</span>
                <strong>{project.name}</strong>
                <span>{project.title}</span>
                <ArrowUpRight className={styles.projectIcon} aria-hidden />
              </Link>
              {index < homeVision.projects.length - 1 ? (
                <ArrowRight className={styles.projectArrow} aria-hidden />
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
