import { brand } from "@/content/lun-content";

export function HomeCompanyIntro() {
  return (
    <section
      id="about-lunda"
      aria-labelledby="about-lunda-title"
      className="relative flex min-h-[88svh] scroll-mt-24 items-center border-t border-white/60 bg-white/28 px-4 py-24 sm:px-6"
    >
      <div className="mx-auto w-full max-w-4xl">
        <p className="text-xs font-semibold tracking-[0.24em] text-marina-600 uppercase">
          About LUNDA
        </p>
        <h2
          id="about-lunda-title"
          className="mt-5 max-w-3xl text-3xl leading-tight font-bold tracking-tight text-balance text-marina-950 sm:text-5xl"
        >
          필요한 소리는 이어지고,
          <br />
          화면은 자연스럽게 뒤로 물러납니다.
        </h2>
        <p className="mt-7 max-w-2xl text-base leading-relaxed text-ink-500 sm:text-lg">
          {brand.description}
        </p>
      </div>
    </section>
  );
}
