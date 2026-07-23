import { brand } from "@/content/lun-content";
import { ButtonLink } from "@/components/ui/button-link";
import { HeroVisual } from "@/components/sections/hero-visual";
import { Reveal } from "@/components/ui/reveal";

export function Hero() {
  return (
    <section className="overflow-hidden border-b border-line-100 bg-surface">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-2 lg:py-28">
        <Reveal>
          <p className="text-sm font-semibold tracking-widest text-marina-600 uppercase">
            Audio Interface Research
          </p>
          <h1 className="mt-4 text-3xl leading-tight font-bold tracking-tight text-balance text-marina-900 sm:text-4xl lg:text-5xl">
            {brand.tagline}
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-500 sm:text-lg">
            {brand.description}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/about" showArrow>
              LUN 알아보기
            </ButtonLink>
            <ButtonLink href="/research" variant="secondary">
              연구 방향 보기
            </ButtonLink>
          </div>
        </Reveal>
        <Reveal delay={150} className="flex justify-center lg:justify-end">
          <HeroVisual />
        </Reveal>
      </div>
    </section>
  );
}
