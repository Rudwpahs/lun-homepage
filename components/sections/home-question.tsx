import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { homeQuestion } from "@/content/lun-content";
import styles from "./home-question.module.css";

/**
 * 히어로·키워드 섹션과 비전 사이의 한 줄 서사 브릿지.
 * 카드 그리드 없이 질문 하나 + CTA만 둔다.
 */
export function HomeQuestion() {
  return (
    <section
      className={styles.section}
      aria-labelledby="home-question-title"
    >
      <div className={styles.panel}>
        <span className={styles.sheen} aria-hidden />
        <p className={styles.label}>{homeQuestion.label}</p>
        <h2 id="home-question-title" className={styles.title}>
          {homeQuestion.headline}
        </h2>
        <p className={styles.body}>{homeQuestion.body}</p>
        <div className={styles.actions}>
          <Link href={homeQuestion.primary.href} className={styles.primary}>
            {homeQuestion.primary.label}
            <ArrowUpRight className="size-4" aria-hidden />
          </Link>
          <Link href={homeQuestion.secondary.href} className={styles.secondary}>
            {homeQuestion.secondary.label}
          </Link>
        </div>
      </div>
    </section>
  );
}
