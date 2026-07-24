import { contactSection } from "@/content/lun-content";
import { ButtonLink } from "@/components/ui/button-link";
import { Reveal } from "@/components/ui/reveal";

export function ContactCta() {
  return (
    <section className="border-t border-line-100/60">
      <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 sm:py-20">
        <Reveal>
          <h2 className="text-2xl font-bold tracking-tight text-balance text-marina-900 sm:text-3xl">
            {contactSection.title}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-ink-500">
            {contactSection.description}
          </p>
          <div className="mt-8 flex justify-center">
            <ButtonLink href="/contact" showArrow>
              문의 남기기
            </ButtonLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
