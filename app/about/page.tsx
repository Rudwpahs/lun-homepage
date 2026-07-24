import type { Metadata } from "next";
import { aboutSection, brand } from "@/content/lun-content";
import { PageHero } from "@/components/layout/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { ButtonLink } from "@/components/ui/button-link";
import { Reveal } from "@/components/ui/reveal";
import { SpotlightCard } from "@/components/ui/spotlight-card";

export const metadata: Metadata = {
  title: "About — LUNDA에 대하여",
  description: aboutSection.definition,
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Vision"
        title={aboutSection.title}
        description={aboutSection.definition}
      />

      {/* 브랜드 철학 */}
      <section className="mx-auto max-w-4xl px-4 py-14 sm:px-6 sm:py-20">
        <Reveal>
          <SectionHeading eyebrow="Why" title="왜 이 문제인가" />
        </Reveal>
        <Reveal delay={100}>
          <div className="mt-8 space-y-5 text-base leading-relaxed text-ink-700 sm:text-lg">
            {aboutSection.philosophy.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </Reveal>
      </section>

      {/* 비전 인용 — 짙은 배경 */}
      <section className="bg-marina-900 text-white">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 sm:py-20">
          <Reveal>
            <blockquote className="text-xl leading-relaxed font-semibold text-balance sm:text-2xl">
              &ldquo;{brand.vision}&rdquo;
            </blockquote>
          </Reveal>
        </div>
      </section>

      {/* 핵심 가치 */}
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <Reveal>
          <SectionHeading
            eyebrow="Values"
            title="LUNDA가 지키는 여섯 가지 방향"
          />
        </Reveal>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {brand.values.map((value, index) => (
            <Reveal key={value.key} delay={Math.min(index * 80, 240)}>
              <SpotlightCard className="glass-strong h-full rounded-(--radius-card) p-6">
                <h3 className="font-bold text-marina-900">{value.key}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-500">
                  {value.description}
                </p>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 현재 상태 — 정직 고지 */}
      <section className="border-t border-line-100/60">
        <div className="mx-auto max-w-4xl px-4 py-14 text-center sm:px-6">
          <Reveal>
            <p className="mx-auto max-w-2xl text-base leading-relaxed text-ink-700">
              {aboutSection.currentState}
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <ButtonLink href="/research" showArrow>
                연구 방향 보기
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
