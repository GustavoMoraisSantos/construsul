"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { business, navLinks } from "@/data/business";
import WhatsAppButton from "./WhatsAppButton";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-white/90 backdrop-blur">
      <div className="container-px flex h-16 items-center justify-between md:h-20">
        <Link
          href="#inicio"
          className="flex items-center"
          onClick={() => setOpen(false)}
          aria-label={business.name}
        >
          <Image
            src={business.logo}
            alt={`Logo da ${business.name}`}
            width={477}
            height={198}
            className="h-9 w-auto object-contain md:h-11"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-ink-soft transition-colors hover:text-brand"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <WhatsAppButton />
        </div>

        <button
          type="button"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen((prev) => !prev)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-line text-ink md:hidden"
        >
          <span className="sr-only">Menu</span>
          {open ? (
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M18 6L6 18" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          )}
        </button>
      </div>

      {open ? (
        <div className="border-t border-line bg-white md:hidden">
          <nav className="container-px flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-2 py-3 text-base font-medium text-ink-soft transition-colors hover:bg-cloud hover:text-brand"
              >
                {link.label}
              </a>
            ))}
            <div className="px-2 pt-2">
              <WhatsAppButton className="w-full" />
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
