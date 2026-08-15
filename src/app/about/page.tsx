import { Reveal } from "@/components/Reveal";
import { site } from "@/lib/site";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <div className="pt-28 pb-24">
      <div className="mx-auto max-w-[1400px] px-5 md:px-8">
        <p className="flex items-center gap-3 font-mono text-[11px] tracking-[0.32em] text-brass uppercase">
          <span className="h-px w-8 bg-brass" aria-hidden />
          About
        </p>
        <h1 className="mt-3 max-w-4xl font-serif text-5xl leading-[0.95] md:text-7xl">
          Named for a steward.
          <span className="italic text-brass"> Built for the city.</span>
        </h1>
        <p className="mt-8 max-w-2xl text-lg leading-8 text-parchment/75">
          Lakan Real Estate opened in {site.established} in Bonifacio Global
          City. We develop a small number of buildings, then keep a listing
          desk for homes, condominiums, and commercial floors across the
          islands we actually work in.
        </p>
      </div>

      <div className="mt-16 grid md:grid-cols-2">
        <div className="relative min-h-[380px] bg-ink-2 md:min-h-[480px]">
          <img
            src="/images/about-studio.png"
            alt="Lakan studio in BGC"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
        <div className="flex flex-col justify-center bg-ink-2 px-8 py-16 md:px-16">
          <Reveal>
            <p className="flex items-center gap-3 font-mono text-[11px] tracking-[0.28em] text-brass uppercase">
              <span className="h-px w-8 bg-brass" aria-hidden />
              Studio
            </p>
            <p className="mt-4 text-base leading-8 text-parchment/75">
              The Taguig floor is a working room: site plans, stone samples,
              brass hardware, and a long table. Clients sit where the work
              sits. No glass conference theater.
            </p>
            <p className="mt-6 text-base leading-8 text-parchment/75">
              {site.address.line1}, {site.address.line2}, {site.address.city}.
              Walk-ins by appointment; the desk answers {site.hours}.
            </p>
          </Reveal>
        </div>
      </div>

      <div className="mx-auto grid max-w-[1400px] gap-10 px-5 py-20 md:grid-cols-3 md:px-8">
        {[
          {
            t: "Develop",
            d: "We take a lot from paper to keys. Eight completed projects since 2012 — condos, a courtyard of homes, a bay podium.",
          },
          {
            t: "List",
            d: "The ledger is the public floor: residences and commercial plates we know, priced in pesos, written without brochure English.",
          },
          {
            t: "Stay",
            d: "After handover, the same desk still answers. That is the old meaning of lakan — a steward, not a closing date.",
          },
        ].map((b, i) => (
          <Reveal key={b.t} delay={i * 90} className="border-t border-brass/40 pt-6">
            <h2 className="font-serif text-3xl">{b.t}</h2>
            <p className="mt-4 text-sm leading-7 text-parchment/70">{b.d}</p>
          </Reveal>
        ))}
      </div>

      <div className="mx-auto max-w-[1400px] px-5 md:px-8">
        <div className="grid overflow-hidden md:grid-cols-2">
          <img
            src="/images/interior-lobby.png"
            alt="A Lakan lobby"
            className="h-full min-h-[320px] w-full object-cover"
          />
          <div className="bg-tropic px-8 py-14 md:px-12">
            <h2 className="font-serif text-4xl">Bring a client here.</h2>
            <p className="mt-4 max-w-md text-sm leading-7 text-parchment/75">
              This website is a working sample of how Lakan can meet the
              market: a house with a point of view, not a template with a
              search bar.
            </p>
            <Link
              href="/contact"
              className="btn-brass mt-8 inline-block border border-brass px-7 py-3 font-mono text-[11px] tracking-[0.28em] text-brass uppercase"
            >
              Book the desk
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
