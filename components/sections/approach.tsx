import { approachSection } from "@/content/lun-content";
import { SectionHeading } from "@/components/ui/section-heading";
import { ContentIcon } from "@/components/ui/icon";
import { Reveal } from "@/components/ui/reveal";
import { SpotlightCard } from "@/components/ui/spotlight-card";

export function Approach() {
  return (
    // 배경 투명 → 뒤 오로라가 비쳐 글래스 카드가 유리로 읽힌다
    <section className="border-y border-line-100/60">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <Reveal>
          <SectionHeading
            eyebrow="Approach"
            title={approachSection.title}
            description={approachSection.description}
          />
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {approachSection.cards.map((card, index) => (
            <Reveal key={card.key} delay={index * 100}>
              <SpotlightCard className="glass-strong h-full rounded-(--radius-card) p-7">
                <div className="flex items-center justify-between">
                  <span className="flex size-11 items-center justify-center rounded-full bg-marina-700 text-white">
                    <ContentIcon name={card.icon} className="size-5" />
                  </span>
                  <span className="text-sm font-semibold tracking-widest text-line-300">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-6 text-lg font-bold text-marina-900">
                  {card.key}
                  <span className="ml-2 text-sm font-medium text-ink-500">
                    {card.title}
                  </span>
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-500">
                  {card.description}
                </p>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
