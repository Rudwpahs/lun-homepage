import Link from "next/link";
import { navItems } from "@/lib/site-config";
import { Logo } from "@/components/layout/logo";

export function Footer() {
  return (
    <footer className="relative z-10 bg-marina-950 text-marina-100">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="flex flex-col justify-between gap-10 md:flex-row">
          <div className="max-w-sm">
            <Logo onDark />
            <p className="mt-4 text-sm leading-relaxed text-marina-100/80">
              화면은 멀리, 소리는 가까이.
            </p>
          </div>

          <nav aria-label="푸터 메뉴">
            <h2 className="text-sm font-semibold tracking-widest text-aqua-300 uppercase">
              메뉴
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
            PR1은 현재 개발 중이며, 아직 판매 제품이 아닙니다.
          </p>
          <p className="mt-2">© {new Date().getFullYear()} LUNDA. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
