import { pr2 } from "@/content/lun-content";
import { Badge } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button-link";
import { Reveal } from "@/components/ui/reveal";
import { SpotlightCard } from "@/components/ui/spotlight-card";

/**
 * 홈 화면 PR2 소개 섹션.
 * PR2는 미래 연구 프로젝트이므로 PR1보다 명확히 작은 비중으로 배치합니다.
 */
export function Pr2Preview() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
      <Reveal>
        <SpotlightCard className="glass-strong rounded-(--radius-card) p-7 sm:p-10">
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <div className="flex flex-wrap items-center gap-3">
                <Badge tone="future">{pr2.badge}</Badge>
                <span className="text-sm text-ink-500">
                  {pr2.status} · PR1 검증 이후 본격 개발 예정
                </span>
              </div>
              <h2 className="mt-4 text-xl font-bold tracking-tight text-marina-900 sm:text-2xl">
                {pr2.headline}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-ink-500 sm:text-base">
                {pr2.description}
              </p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {pr2.keywords.map((keyword) => (
                  <li
                    key={keyword.key}
                    className="rounded-full bg-marina-50 px-3.5 py-1.5 text-sm font-medium text-marina-800"
                  >
                    {keyword.key}
                  </li>
                ))}
              </ul>
            </div>
            <ButtonLink
              href="/projects/pr2"
              variant="secondary"
              showArrow
              className="shrink-0"
            >
              PR2 살펴보기
            </ButtonLink>
          </div>
        </SpotlightCard>
      </Reveal>
    </section>
  );
}
