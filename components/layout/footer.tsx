import Link from "next/link";
import { navItems } from "@/lib/site-config";
import { brand } from "@/content/lun-content";
import { Logo } from "@/components/layout/logo";

export function Footer() {
  return (
    <footer className="bg-marina-950 text-marina-100">
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
            LUN은 화면 의존을 줄이는 오디오 인터페이스를 연구·개발하고 있으며,
            아직 제품을 판매하지 않습니다. 이 사이트는 공개 가능한 회사 방향과
            연구 프로젝트를 설명합니다.
          </p>
          <p className="mt-2">© {new Date().getFullYear()} LUN. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
