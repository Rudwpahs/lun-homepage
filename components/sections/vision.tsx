import { brand } from "@/content/lun-content";
import { Reveal } from "@/components/ui/reveal";

export function Vision() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 sm:py-24">
      <Reveal>
        <p className="text-sm font-semibold tracking-widest text-marina-600 uppercase">
          Vision
        </p>
        <blockquote className="mt-6 text-xl leading-relaxed font-semibold text-balance text-marina-900 sm:text-2xl lg:text-3xl">
          &ldquo;{brand.vision}&rdquo;
        </blockquote>
        <ul className="mt-10 flex flex-wrap justify-center gap-2">
          {brand.values.map((value) => (
            <li
              key={value.key}
              className="rounded-full border border-line-300 px-4 py-1.5 text-sm font-medium text-ink-700"
              title={value.description}
            >
              {value.key}
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
