/** 조건부 클래스 결합 유틸 (외부 의존성 없이 clsx의 최소 기능만 제공) */
export function cn(
  ...inputs: Array<string | false | null | undefined>
): string {
  return inputs.filter(Boolean).join(" ");
}
