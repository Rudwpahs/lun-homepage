"use client";

import { useState } from "react";
import styles from "./page-hero-visual.module.css";

export interface PageHeroVisualItem {
  word: string;
  detail: string;
}

interface PageHeroVisualProps {
  label: string;
  items: readonly PageHeroVisualItem[];
}

export function PageHeroVisual({ label, items }: PageHeroVisualProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = items[activeIndex];

  return (
    <div className={styles.frame} aria-label={label}>
      <span className={`${styles.flow} ${styles.flowA}`} aria-hidden />
      <span className={`${styles.flow} ${styles.flowB}`} aria-hidden />
      <span className={styles.orbit} aria-hidden />

      <div className={styles.center}>
        <p className={styles.label}>LUNDA</p>
        <p key={activeItem.word} className={styles.word} aria-live="polite">
          {activeItem.word}
        </p>
        <p className={styles.detail}>{activeItem.detail}</p>
      </div>

      <div className={styles.controls} role="group" aria-label={`${label} 선택`}>
        {items.map((item, index) => {
          const isActive = index === activeIndex;

          return (
            <button
              key={item.word}
              type="button"
              aria-pressed={isActive}
              className={styles.control}
              data-active={isActive}
              onPointerEnter={() => setActiveIndex(index)}
              onFocus={() => setActiveIndex(index)}
              onClick={() => setActiveIndex(index)}
            >
              {item.word}
            </button>
          );
        })}
      </div>
    </div>
  );
}
