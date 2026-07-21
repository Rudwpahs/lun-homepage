import { problemSection } from "@/content/lun-content";
import { SectionHeading } from "@/components/ui/section-heading";
import { ContentIcon } from "@/components/ui/icon";
import { Reveal } from "@/components/ui/reveal";

/**
 * 문제 정의 섹션.
 * 분할선 그리드 레이아웃은 21st.dev "Grid Feature Cards"(id 2070)의
 * 구조를 참고해 LUN 디자인 시스템에 맞게 재구성한 것입니다.
 */
export function Problem() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
      <Reveal>
        <SectionHeading
          eyebrow="Problem"
          title={problemSection.title}
          description={problemSection.description}
        />
      </Reveal>

      <Reveal delay={100}>
        {/* gap-px + 배경색으로 셀 사이 1px 분할선을 만드는 그리드 */}
        <ul className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-(--radius-card) border border-line-100 bg-line-100 sm:grid-cols-2 lg:grid-cols-3">
          {problemSection.points.map((point) => (
            <li key={point.title} className="bg-surface p-6">
              <ContentIcon
                name={point.icon}
                className="size-6 text-marina-600"
              />
              <h3 className="mt-4 font-semibold text-marina-900">
                {point.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-500">
                {point.description}
              </p>
            </li>
          ))}
          <li className="flex items-center bg-marina-50 p-6">
            <p className="text-sm leading-relaxed font-medium text-marina-800">
              LUN은 이 지점을 &lsquo;공간 단위 오디오&rsquo;라는 관점에서
              실험과 검증으로 확인하려 합니다.
            </p>
          </li>
        </ul>
      </Reveal>
    </section>
  );
}
