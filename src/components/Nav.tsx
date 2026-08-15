"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useState } from "react";
import { SunMark } from "@/components/SunMark";
import { site } from "@/lib/site";

const desktopLinks = [
  { href: "/listings", label: "Listings" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const menuLinks = [
  { href: "/", label: "Home", note: "The house" },
  { href: "/listings", label: "Listings", note: "Homes, condos, floors" },
  { href: "/about", label: "About", note: "How Lakan works" },
  { href: "/contact", label: "Contact", note: "Write the desk" },
];

export function Nav() {
  const pathname = usePathname();
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);
  const menuId = useId();

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed top-0 right-0 left-0 z-50 transition-colors duration-500 ${
          solid || open ? "bg-ink/95 backdrop-blur-md" : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-5 py-4 md:px-8">
          <Link
            href="/"
            className="group relative z-[60] flex items-center gap-3 text-brass"
            onClick={() => setOpen(false)}
          >
            <SunMark className="h-9 w-9" />
            <span className="flex flex-col leading-none">
              <span className="font-serif text-[1.45rem] tracking-[0.28em] text-parchment uppercase">
                {site.short}
              </span>
              <span className="font-mono text-[9px] tracking-[0.42em] text-mute uppercase">
                Real Estate · {site.established}
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-10 md:flex">
            {desktopLinks.map((l) => {
              const active = pathname === l.href || pathname.startsWith(`${l.href}/`);
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className={`font-mono text-[11px] tracking-[0.28em] uppercase transition-colors ${
                    active ? "text-brass" : "text-parchment/80 hover:text-brass"
                  }`}
                >
                  {l.label}
                </Link>
              );
            })}
            <Link
              href="/contact"
              className="btn-brass border border-brass px-5 py-2 font-mono text-[11px] tracking-[0.28em] text-brass uppercase"
            >
              Inquire
            </Link>
          </nav>

          <button
            type="button"
            className="relative z-[60] flex h-12 w-12 items-center justify-center md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls={menuId}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="relative block h-3.5 w-6">
              <span
                className={`absolute left-0 h-[1.5px] w-full origin-center bg-parchment transition-all duration-300 ease-out ${
                  open ? "top-1/2 -translate-y-1/2 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute top-1/2 left-0 h-[1.5px] w-full -translate-y-1/2 bg-parchment transition-all duration-300 ease-out ${
                  open ? "scale-x-0 opacity-0" : "scale-x-100 opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 h-[1.5px] w-full origin-center bg-parchment transition-all duration-300 ease-out ${
                  open ? "top-1/2 -translate-y-1/2 -rotate-45" : "top-full -translate-y-full"
                }`}
              />
            </span>
          </button>
        </div>
      </header>

      <div
        id={menuId}
        className={`mobile-menu md:hidden ${open ? "is-open" : ""}`}
        aria-hidden={!open}
      >
        <div className="pointer-events-none absolute -right-10 -bottom-16 text-brass/15">
          <SunMark className="h-64 w-64" />
        </div>

        <nav className="relative flex min-h-full flex-col justify-between px-6 pt-[calc(5.5rem+env(safe-area-inset-top))] pb-[calc(1.5rem+env(safe-area-inset-bottom))]">
          <ul className="flex flex-col">
            {menuLinks.map((l, i) => {
              const active =
                l.href === "/"
                  ? pathname === "/"
                  : pathname === l.href || pathname.startsWith(`${l.href}/`);
              return (
                <li
                  key={l.href}
                  className="menu-link border-b border-parchment/10"
                  style={{ transitionDelay: open ? `${120 + i * 70}ms` : "0ms" }}
                >
                  <Link
                    href={l.href}
                    tabIndex={open ? 0 : -1}
                    onClick={() => setOpen(false)}
                    className="flex min-h-16 items-center justify-between gap-4 py-4"
                  >
                    <span className="flex items-center gap-4">
                      <SunMark
                        spin={active}
                        className={`h-7 w-7 shrink-0 transition-colors duration-300 ${
                          active ? "text-brass" : "text-parchment/35"
                        }`}
                      />
                      <span
                        className={`font-serif text-4xl leading-none sm:text-5xl ${
                          active ? "text-brass italic" : "text-parchment"
                        }`}
                      >
                        {l.label}
                      </span>
                    </span>
                    <span className="hidden font-mono text-[10px] tracking-[0.18em] text-mute uppercase sm:block">
                      {l.note}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>

          <div
            className="menu-link mt-8 space-y-5"
            style={{ transitionDelay: open ? "420ms" : "0ms" }}
          >
            <Link
              href="/contact"
              tabIndex={open ? 0 : -1}
              onClick={() => setOpen(false)}
              className="btn-brass inline-flex w-full items-center justify-center border border-brass py-4 font-mono text-[11px] tracking-[0.32em] text-brass uppercase"
            >
              Inquire
            </Link>
            <div className="flex flex-col gap-1 font-mono text-[11px] tracking-[0.12em] text-mute">
              <a href={`tel:${site.phone.replace(/\s/g, "")}`} tabIndex={open ? 0 : -1}>
                {site.phone}
              </a>
              <a href={`mailto:${site.email}`} tabIndex={open ? 0 : -1}>
                {site.email}
              </a>
              <p className="pt-2 uppercase tracking-[0.18em]">BGC, Taguig</p>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
