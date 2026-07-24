import type { Metadata } from "next";
import { Info } from "lucide-react";
import { developmentSection } from "@/content/lun-content";
import { PageHero } from "@/components/layout/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button-link";
import { ContentIcon } from "@/components/ui/icon";
import { Reveal } from "@/components/ui/reveal";
import { SpotlightCard } from "@/components/ui/spotlight-card";

export const metadata: Metadata = {
  title: "Development — LUNDA의 개발 원칙",
  description: developmentSection.description,
};

export default function DevelopmentPage() {
  return (
    <>
      <PageHero
        eyebrow="How We Work"
        title={developmentSection.title}
        description={developmentSection.description}
      />

      {/* 공개 가능한 개발 원칙 */}
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <Reveal>
          <SectionHeading
            eyebrow="Principles"
            title="제품보다 먼저 지키는 네 가지 기준"
            description="LUNDA의 내부 실험 세부사항 대신, 모든 프로젝트에 공통으로 적용하는 판단 기준을 공개합니다."
          />
        </Reveal>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {developmentSection.principles.map((principle, index) => (
            <Reveal
              key={principle.key}
              delay={Math.min(index * 70, 210)}
            >
              <article className="h-full">
                <SpotlightCard className="glass-strong h-full rounded-(--radius-card) p-6">
                  <div className="flex items-center justify-between gap-4">
                    <span className="flex size-11 items-center justify-center rounded-full bg-marina-900 text-white">
                      <ContentIcon name={principle.icon} className="size-5" />
                    </span>
                    <span className="text-xs font-semibold tracking-widest text-line-300">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <p className="mt-5 text-xs font-semibold tracking-widest text-marina-600 uppercase">
                    {principle.key}
                  </p>
                  <h3 className="mt-2 text-lg font-bold text-marina-900">
                    {principle.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-500">
                    {principle.description}
                  </p>
                </SpotlightCard>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 프로젝트 포트폴리오의 현재와 미래 */}
      <section className="bg-marina-900 text-white">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
          <Reveal>
            <SectionHeading
              eyebrow="Portfolio"
              title="현재 집중과 미래 연구를 구분합니다."
              description="PR1과 PR2를 동시에 완성된 제품처럼 보이지 않도록, 역할과 우선순위를 명확히 나눕니다."
              onDark
            />
          </Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {developmentSection.portfolio.map((project, index) => (
              <Reveal key={project.name} delay={index * 100}>
                <article className="h-full">
                  <SpotlightCard
                    dark
                    className="glass-dark flex h-full flex-col rounded-(--radius-card) p-7 sm:p-8"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <Badge
                        tone={project.tone}
                        className={
                          project.tone === "primary"
                            ? "bg-aqua-500/20 text-aqua-300"
                            : undefined
                        }
                      >
                        {project.badge}
                      </Badge>
                      <span className="text-sm font-semibold tracking-widest text-marina-100/55">
                        {project.name}
                      </span>
                    </div>
                    <h3 className="mt-6 text-xl font-bold tracking-tight text-white">
                      {project.title}
                    </h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-marina-100/80 sm:text-base">
                      {project.description}
                    </p>
                    <div className="mt-7">
                      <ButtonLink
                        href={project.href}
                        variant="onDark"
                        showArrow
                      >
                        {project.name} 살펴보기
                      </ButtonLink>
                    </div>
                  </SpotlightCard>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 공개 원칙 고지 */}
      <section className="mx-auto max-w-4xl px-4 py-14 sm:px-6 sm:py-16">
        <div
          role="note"
          className="glass flex items-start gap-3 rounded-(--radius-card) border-marina-200 p-5 text-sm leading-relaxed text-marina-800"
        >
          <Info className="mt-0.5 size-4 shrink-0" aria-hidden />
          <p>{developmentSection.disclosure}</p>
        </div>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <ButtonLink href="/research" showArrow>
            연구 방향 보기
          </ButtonLink>
        </div>
      </section>
    </>
  );
}
