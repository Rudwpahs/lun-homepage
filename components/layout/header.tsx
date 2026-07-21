"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { ctaLinks, navItems } from "@/lib/site-config";
import { Logo } from "@/components/layout/logo";
import { ButtonLink } from "@/components/ui/button-link";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  // 메뉴 열림 중 배경 스크롤 잠금
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 border-b border-line-100 bg-paper/90 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Logo />

        {/* 데스크톱 내비게이션 */}
        <nav aria-label="주 메뉴" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={cn(
                    "inline-flex min-h-11 items-center rounded-md px-3 text-sm font-medium transition-colors",
                    isActive(item.href)
                      ? "text-marina-700 font-semibold"
                      : "text-ink-500 hover:text-marina-800",
                  )}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <ButtonLink href={ctaLinks.followDev.href} variant="ghost">
            {ctaLinks.followDev.label}
          </ButtonLink>
          <ButtonLink href={ctaLinks.viewPr1.href} variant="primary">
            {ctaLinks.viewPr1.label}
          </ButtonLink>
        </div>

        {/* 모바일 메뉴 버튼 (44px 터치 타깃) */}
        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "메뉴 닫기" : "메뉴 열기"}
          className="inline-flex size-11 cursor-pointer items-center justify-center rounded-md text-marina-900 hover:bg-marina-50 lg:hidden"
        >
          {menuOpen ? (
            <X className="size-6" aria-hidden />
          ) : (
            <Menu className="size-6" aria-hidden />
          )}
        </button>
      </div>

      {/* 모바일 메뉴 패널 */}
      <div
        id="mobile-menu"
        hidden={!menuOpen}
        className="border-t border-line-100 bg-paper lg:hidden"
        // 메뉴 내 링크를 클릭하면 (라우트 이동과 함께) 메뉴를 닫는다
        onClick={(event) => {
          if ((event.target as HTMLElement).closest("a")) {
            setMenuOpen(false);
          }
        }}
      >
        <nav aria-label="모바일 메뉴" className="mx-auto max-w-6xl px-4 py-4">
          <ul className="flex flex-col">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={cn(
                    "flex min-h-12 items-center rounded-md px-3 text-base font-medium",
                    isActive(item.href)
                      ? "bg-marina-50 text-marina-800 font-semibold"
                      : "text-ink-700 hover:bg-marina-50",
                  )}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex flex-col gap-2 border-t border-line-100 pt-4">
            <ButtonLink href={ctaLinks.viewPr1.href} variant="primary">
              {ctaLinks.viewPr1.label}
            </ButtonLink>
            <ButtonLink href={ctaLinks.followDev.href} variant="secondary">
              {ctaLinks.followDev.label}
            </ButtonLink>
          </div>
        </nav>
      </div>
    </header>
  );
}
