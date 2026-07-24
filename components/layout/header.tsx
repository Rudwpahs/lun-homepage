"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { navItems } from "@/lib/site-config";
import { Logo } from "@/components/layout/logo";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const updateScrolled = () => setScrolled(window.scrollY > 8);
    updateScrolled();
    window.addEventListener("scroll", updateScrolled, { passive: true });
    return () => window.removeEventListener("scroll", updateScrolled);
  }, []);

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
    <header className="sticky top-3 z-50 px-3">
      <div
        className={cn(
          "liquid-nav mx-auto max-w-6xl",
          (scrolled || menuOpen) && "is-scrolled",
        )}
      >
        <div className="flex h-16 items-center justify-between gap-4 px-4 sm:px-6">
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
                      "nav-link inline-flex min-h-11 items-center rounded-full px-3 text-sm font-medium",
                      isActive(item.href)
                        ? "is-active text-marina-800 font-semibold"
                        : "text-ink-500 hover:text-marina-800",
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* 모바일 메뉴 버튼 (44px 터치 타깃) */}
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "메뉴 닫기" : "메뉴 열기"}
            className="liquid-icon-button inline-flex size-11 cursor-pointer items-center justify-center rounded-full text-marina-900 lg:hidden"
          >
            {menuOpen ? (
              <X className="size-6" aria-hidden />
            ) : (
              <Menu className="size-6" aria-hidden />
            )}
          </button>
        </div>

        {/* 모바일 메뉴 패널 — 헤더와 하나의 유리 레이어로 동작 */}
        <div
          id="mobile-menu"
          hidden={!menuOpen}
          className="border-t border-white/50 lg:hidden"
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
                      "flex min-h-12 items-center rounded-xl px-3 text-base font-medium transition-colors duration-200",
                      isActive(item.href)
                        ? "bg-white/60 text-marina-800 font-semibold"
                        : "text-ink-700 hover:bg-white/45",
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
