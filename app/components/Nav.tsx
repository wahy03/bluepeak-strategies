"use client";

import { useState } from "react";
import Link from "next/link";

const LINKS = [
  { href: "/about", label: "About" },
  { href: "/strategy", label: "Strategy" },
  { href: "/performance", label: "Performance" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#141b2c]/85 backdrop-blur-md border-b border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-6 md:px-8 flex items-center justify-between h-20">
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <img
            src="/logo/bluepeak-logo.png"
            alt="BluePeak Strategies"
            className="h-9 w-auto object-contain brightness-0 invert opacity-95"
          />
          <span className="font-serif text-lg tracking-tight text-[#f3f1ea] hidden sm:block">
            BluePeak
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-10 font-data text-[0.9rem] tracking-[0.12em] uppercase text-[#9099a4]">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-[#c6a15b] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
          className="md:hidden flex flex-col justify-center gap-1.5 w-8 h-8"
        >
          <span
            className={`block h-px bg-[#f3f1ea] transition-transform ${
              open ? "translate-y-[3px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-px bg-[#f3f1ea] transition-transform ${
              open ? "-translate-y-[3px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/[0.08] bg-[#141b2c] px-6 py-6 flex flex-col gap-5 font-data text-sm tracking-[0.12em] uppercase text-[#9099a4]">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="hover:text-[#c6a15b] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
