import Link from "next/link";
import { navItems } from "@/lib/site-config";
import { brand } from "@/content/lun-content";
import { Logo } from "@/components/layout/logo";

export function Footer() {
  return (
    <footer className="relative z-10 bg-marina-950 text-marina-100">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="flex flex-col justify-between gap-10 md:flex-row">
          <div className="max-w-sm">
            <Logo onDark />
            <p className="mt-4 text-sm leading-relaxed text-marina-100/80">
              {brand.description}
            </p>
          </div>

          <nav aria-label="푸터 메뉴">
            <h2 className="text-sm font-semibold tracking-widest text-aqua-300 uppercase">
              Menu
            </h2>
            <ul className="mt-4 grid grid-cols-2 gap-x-10 gap-y-1">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="inline-flex min-h-10 items-center text-sm text-marina-100/80 hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-xs leading-relaxed text-marina-100/60">
          <p>
            LUN은 현재 기술 검증 단계의 프로젝트 브랜드이며, 아직 제품을
            판매하지 않습니다. 사이트의 내용은 진행 중인 연구와 개발 방향을
            설명합니다.
          </p>
          <p className="mt-2">© {new Date().getFullYear()} LUN. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
