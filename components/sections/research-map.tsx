"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { researchSection } from "@/content/lun-content";
import { ContentIcon } from "@/components/ui/icon";
import styles from "./research-map.module.css";

export function ResearchMap() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeDirection = researchSection.directions[activeIndex];

  return (
    <section className={styles.section} aria-labelledby="research-map-title">
      <div className={styles.shell}>
        <div className={styles.heading}>
          <p>하나의 질문, 네 방향</p>
          <h2 id="research-map-title">무엇을 연구하나요?</h2>
        </div>

        <div className={styles.map}>
          <span className={`${styles.flow} ${styles.flowA}`} aria-hidden />
          <span className={`${styles.flow} ${styles.flowB}`} aria-hidden />
          <span className={styles.axisHorizontal} aria-hidden />
          <span className={styles.axisVertical} aria-hidden />

          <div className={styles.core}>
            <span>LUNDA</span>
            <strong key={activeDirection.keyword}>{activeDirection.keyword}</strong>
          </div>

          <div className={styles.directions} role="group" aria-label="연구 방향 선택">
            {researchSection.directions.map((direction, index) => {
              const isActive = index === activeIndex;

              return (
                <button
                  key={direction.keyword}
                  type="button"
                  className={styles.direction}
                  data-active={isActive}
                  aria-pressed={isActive}
                  aria-controls="research-direction-detail"
                  onPointerEnter={() => setActiveIndex(index)}
                  onFocus={() => setActiveIndex(index)}
                  onClick={() => setActiveIndex(index)}
                >
                  <ContentIcon name={direction.icon} className={styles.icon} />
                  <strong>{direction.keyword}</strong>
                  <span>{direction.hint}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div id="research-direction-detail" className={styles.detail}>
          <span>{activeDirection.keyword}</span>
          <p key={activeDirection.statement} aria-live="polite">
            {activeDirection.statement}
          </p>
        </div>

        <div className={styles.projects} aria-label="연구에서 프로젝트로 이어지는 흐름">
          {researchSection.projects.map((project, index) => (
            <div key={project.name} className={styles.projectStep}>
              <Link href={project.href} className={styles.project}>
                <span>{project.phase}</span>
                <strong>{project.name}</strong>
                <p>{project.title}</p>
                <ArrowUpRight aria-hidden />
              </Link>
              {index < researchSection.projects.length - 1 ? (
                <ArrowRight className={styles.projectArrow} aria-hidden />
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
