"use client";

import { useState } from "react";
import { Logo } from "./Logo";

const NAV_LINKS = [
  { href: "#how-it-works", label: "How It Works" },
  { href: "#benefits", label: "Benefits" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#faq", label: "FAQ" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/85 backdrop-blur-md">
      <div className="mx-auto flex h-[72px] max-w-[1120px] items-center justify-between px-6 sm:px-10">
        <a href="#top" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <Logo />
          <span className="text-lg font-semibold tracking-tight text-ink">ReviewCraft</span>
        </a>

        <nav className="hidden items-center gap-10 md:flex">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="text-sm text-body hover:text-ink">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#signup"
            className="hidden rounded-lg bg-blue px-[18px] py-[9px] text-[13.5px] font-semibold whitespace-nowrap text-white md:inline-block"
          >
            Sign Up Free
          </a>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center rounded-lg md:hidden"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              {open ? (
                <path
                  d="M4 4L16 16M16 4L4 16"
                  stroke="#1D1D1F"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              ) : (
                <path
                  d="M2.5 5.5H17.5M2.5 10H17.5M2.5 14.5H17.5"
                  stroke="#1D1D1F"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-border bg-white px-6 py-4 md:hidden">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-md px-2 py-2.5 text-[15px] text-body hover:bg-tint hover:text-ink"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#signup"
            onClick={() => setOpen(false)}
            className="mt-2 rounded-lg bg-blue px-4 py-2.5 text-center text-[15px] font-semibold text-white"
          >
            Sign Up Free
          </a>
        </nav>
      )}
    </header>
  );
}
