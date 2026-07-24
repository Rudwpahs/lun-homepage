"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { homeVision } from "@/content/lun-content";
import styles from "./home-vision.module.css";

export function HomeVision() {
  const [activeIndex, setActiveIndex] = useState(0);
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

          <div className={styles.nodes} role="group" aria-label="LUNDA의 세 가지 기준">
            {homeVision.nodes.map((node, index) => {
              const isActive = index === activeIndex;

              return (
                <button
                  key={node.keyword}
                  type="button"
                  className={styles.node}
                  data-active={isActive}
                  aria-pressed={isActive}
                  onPointerEnter={() => setActiveIndex(index)}
                  onFocus={() => setActiveIndex(index)}
                  onClick={() => setActiveIndex(index)}
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
