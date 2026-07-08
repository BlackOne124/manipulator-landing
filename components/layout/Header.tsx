"use client";

import { useState } from "react";
import Link from "next/link";
import { navLinks, siteConfig } from "@/lib/site-config";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-[100] flex items-center justify-between gap-5 border-b border-white/8 bg-bg/75 px-5 py-[18px] backdrop-blur-xl md:px-12">
        <Link href="#top" className="flex items-center gap-2.5">
          <div className="flex h-[34px] w-[34px] shrink-0 items-center justify-center rounded-[9px] bg-gradient-to-br from-accent to-accent-light text-[16px] font-extrabold text-bg">
            М
          </div>
          <span className="whitespace-nowrap text-[17px] font-bold tracking-[-0.01em] text-fg">
            {siteConfig.name}
          </span>
        </Link>

        <div className="hidden min-w-0 items-center gap-6 lg:flex">
          <nav className="flex flex-nowrap items-center gap-5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="whitespace-nowrap text-sm font-medium text-fg/72 hover:text-fg"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <a
            href={siteConfig.phoneHref}
            className="shrink-0 whitespace-nowrap rounded-full bg-gradient-to-br from-accent to-accent-light px-5 py-3 text-sm font-bold text-bg"
          >
            {siteConfig.phone}
          </a>
        </div>

        <button
          type="button"
          aria-label="Открыть меню"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
          className="flex h-11 w-11 shrink-0 flex-col items-center justify-center gap-[5px] rounded-[10px] border border-white/14 lg:hidden"
        >
          <span className="block h-0.5 w-[18px] bg-fg" />
          <span className="block h-0.5 w-[18px] bg-fg" />
        </button>
      </header>

      {menuOpen && (
        <div className="fixed inset-0 z-[99] flex flex-col gap-1 bg-bg px-8 pt-[100px] pb-12 lg:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="border-b border-white/8 py-[18px] px-1 text-[22px] font-semibold text-fg"
            >
              {link.label}
            </Link>
          ))}
          <a
            href={siteConfig.phoneHref}
            className="mt-8 rounded-full bg-gradient-to-br from-accent to-accent-light py-[18px] text-center text-[17px] font-bold text-bg"
          >
            Позвонить: {siteConfig.phone}
          </a>
        </div>
      )}
    </>
  );
}
