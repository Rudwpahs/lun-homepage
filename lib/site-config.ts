/**
 * 사이트의 절대 URL을 결정합니다 (sitemap, robots, Open Graph 메타데이터용).
 *
 * 우선순위:
 * 1. NEXT_PUBLIC_SITE_URL — 커스텀 도메인을 연결했을 때 직접 설정
 * 2. VERCEL_PROJECT_PRODUCTION_URL — Vercel이 배포 시 자동 주입하는 프로덕션
 *    도메인(프로토콜 없음). 덕분에 별도 설정 없이도 올바른 절대 URL이 생성됩니다.
 * 3. 로컬 개발 기본값
 */
function resolveSiteUrl(): string {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL;
  }
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  }
  return "http://localhost:3000";
}

/** 사이트 전역 설정. */
export const siteConfig = {
  name: "LUNDA",
  title: "LUNDA — 화면 의존을 줄이는 오디오 인터페이스 연구",
  description:
    "LUNDA는 스마트폰 화면에 대한 의존을 줄이고, 이동과 일상 속에서 더 자연스럽게 오디오를 이용할 수 있는 새로운 인터페이스를 연구·개발합니다.",
  url: resolveSiteUrl(),
} as const;

export interface NavItem {
  label: string;
  href: string;
}

export const navItems: NavItem[] = [
  { label: "연구 방향", href: "/research" },
  { label: "PR1", href: "/projects/pr1" },
  { label: "PR2", href: "/projects/pr2" },
];

export const ctaLinks = {
  research: { label: "연구 방향", href: "/research" },
} as const;
