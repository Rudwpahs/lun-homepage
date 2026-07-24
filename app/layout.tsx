import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "@/lib/site-config";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { AuroraBackground } from "@/components/sections/aurora-background";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: "%s | LUNDA",
  },
  description: siteConfig.description,
  keywords: [
    "LUNDA",
    "오디오 인터페이스",
    "무선 오디오",
    "오픈이어",
    "골전도",
    "화면 의존",
    "오디오 연구개발",
  ],
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="h-full antialiased">
      <body className="flex min-h-full flex-col">
        {/* 키보드 사용자를 위한 본문 바로가기 링크 */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-100 focus:rounded-md focus:bg-marina-700 focus:px-4 focus:py-2 focus:text-white"
        >
          본문 바로가기
        </a>
        {/* 전역 오로라 배경 (z-0). 콘텐츠는 z-10 이상으로 올려 위에 얹는다. */}
        <AuroraBackground />
        <Header />
        <main id="main-content" className="relative z-10 flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
