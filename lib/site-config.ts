/**
 * 사이트 전역 설정.
 * 배포 시 NEXT_PUBLIC_SITE_URL 환경변수를 실제 도메인으로 설정하세요.
 */
export const siteConfig = {
  name: "LUN",
  title: "LUN — 화면 의존을 줄이는 오디오 인터페이스 연구",
  description:
    "LUN은 스마트폰 화면에 대한 의존을 줄이고, 이동과 일상 속에서 더 자연스럽게 오디오를 이용할 수 있는 새로운 인터페이스를 연구하는 기술 프로젝트 브랜드입니다.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
} as const;

export interface NavItem {
  label: string;
  href: string;
}

export const navItems: NavItem[] = [
  { label: "Vision", href: "/about" },
  { label: "PR1", href: "/projects/pr1" },
  { label: "PR2", href: "/projects/pr2" },
  { label: "Development", href: "/development" },
  { label: "Research", href: "/research" },
  { label: "Contact", href: "/contact" },
];

export const ctaLinks = {
  viewPr1: { label: "View PR1", href: "/projects/pr1" },
  followDev: { label: "Follow Development", href: "/development" },
} as const;
