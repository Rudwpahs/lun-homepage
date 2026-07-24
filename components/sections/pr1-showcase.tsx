import { pr1 } from "@/content/lun-content";
import { Badge } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button-link";
import { SignalDiagram } from "@/components/sections/signal-diagram";
import { Reveal } from "@/components/ui/reveal";
import { SpotlightCard } from "@/components/ui/spotlight-card";

/**
 * 홈 화면 PR1 핵심 섹션.
 * PR1은 현재 핵심 개발 프로젝트이므로 홈에서 가장 큰 비중으로,
 * 짙은 Marina Blue 배경의 풀 폭 섹션으로 표현합니다.
 */
export function Pr1Showcase() {
  return (
    <section className="bg-marina-900 text-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <Reveal>
          <div className="flex flex-wrap items-center gap-3">
            <Badge tone="primary" className="bg-aqua-500/20 text-aqua-300">
              {pr1.badge}
            </Badge>
            <span className="text-sm font-medium text-marina-100/70">
              {pr1.status} · {pr1.stage}
            </span>
          </div>
          <h2 className="mt-5 max-w-3xl text-2xl font-bold tracking-tight text-balance sm:text-3xl lg:text-4xl">
            {pr1.headline}
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-marina-100/85 sm:text-lg">
            {pr1.description}
          </p>
        </Reveal>

        <Reveal delay={100}>
          <SpotlightCard
            dark
            className="glass-dark mt-12 rounded-(--radius-card) p-5 sm:p-8"
          >
            <h3 className="text-sm font-semibold tracking-widest text-aqua-300 uppercase">
              Experience Flow
            </h3>
            <SignalDiagram nodes={pr1.diagram} className="mt-6" />
          </SpotlightCard>
        </Reveal>

        <Reveal delay={150}>
          <div className="mt-10 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div>
              <h3 className="text-sm font-semibold tracking-widest text-aqua-300 uppercase">
                Experience Criteria
              </h3>
              <ul className="mt-4 flex max-w-xl flex-wrap gap-2">
                {pr1.validationItems.map((item) => (
                  <li
                    key={item.label}
                    className="rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-sm text-marina-100"
                  >
                    {item.label}
                  </li>
                ))}
              </ul>
            </div>
            <ButtonLink
              href="/projects/pr1"
              variant="onDark"
              showArrow
              className="shrink-0"
            >
              PR1 자세히 보기
            </ButtonLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
