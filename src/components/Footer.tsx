import Link from "next/link";
import { site } from "@/lib/site";
import { SunMark } from "@/components/SunMark";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-parchment/10 bg-ink">
      <div className="pointer-events-none absolute -right-16 -bottom-24 text-brass/15">
        <SunMark className="h-72 w-72" />
      </div>
      <div className="mx-auto grid max-w-[1400px] gap-12 px-5 py-16 md:grid-cols-12 md:px-8">
        <div className="md:col-span-5">
          <p className="font-mono text-[11px] tracking-[0.32em] text-brass uppercase">
            {site.tagline}
          </p>
          <h2 className="mt-3 font-serif text-5xl leading-none text-parchment md:text-6xl">
            Lakan
          </h2>
          <p className="mt-5 max-w-sm text-sm leading-7 text-parchment/70">
            A Filipino house for land, residences, and commercial space. Named
            after the old title of a steward — not a landlord.
          </p>
        </div>
        <div className="md:col-span-3">
          <p className="font-mono text-[11px] tracking-[0.28em] text-mute uppercase">
            Visit
          </p>
          <p className="mt-4 text-sm leading-7 text-parchment/80">
            {site.address.line1}
            <br />
            {site.address.line2}
            <br />
            {site.address.city}
          </p>
        </div>
        <div className="md:col-span-4">
          <p className="font-mono text-[11px] tracking-[0.28em] text-mute uppercase">
            Reach
          </p>
          <div className="mt-4 flex flex-col gap-2 text-sm text-parchment/80">
            <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="hover:text-brass">
              {site.phone}
            </a>
            <a href={`mailto:${site.email}`} className="hover:text-brass">
              {site.email}
            </a>
            <p>{site.hours}</p>
          </div>
          <div className="mt-8 flex gap-6">
            <Link href="/listings" className="font-mono text-[11px] tracking-[0.22em] text-brass uppercase">
              Listings
            </Link>
            <Link href="/contact" className="font-mono text-[11px] tracking-[0.22em] text-brass uppercase">
              Contact
            </Link>
          </div>
        </div>
      </div>
      <div className="mx-auto flex max-w-[1400px] flex-col gap-2 border-t border-parchment/10 px-5 py-5 font-mono text-[10px] tracking-[0.18em] text-mute uppercase md:flex-row md:justify-between md:px-8">
        <span>© {new Date().getFullYear()} Lakan Real Estate. All rights reserved.</span>
        <span>Taguig · Makati · Cebu · Davao</span>
      </div>
    </footer>
  );
}
