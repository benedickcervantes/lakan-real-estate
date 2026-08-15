import { ContactForm } from "@/components/ContactForm";
import { ProjectReel } from "@/components/ProjectReel";
import { Reveal } from "@/components/Reveal";
import { SunMark } from "@/components/SunMark";
import { site } from "@/lib/site";
import Link from "next/link";

const cities = [
  "Taguig",
  "Makati",
  "Quezon City",
  "Pasig",
  "Alabang",
  "Pasay",
  "Cebu",
  "Davao",
];

export default function Home() {
  return (
    <>
      <section className="relative h-[100svh] min-h-[640px] overflow-hidden">
        <img
          src="/images/hero-bgc-dusk.png"
          alt="A Lakan tower at dusk in Bonifacio Global City"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/30 via-ink/25 to-ink" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#0c0b09_78%)] opacity-70" />

        <div className="relative z-10 mx-auto flex h-full max-w-[1400px] flex-col justify-end px-5 pb-10 md:px-8 md:pb-14">
          <div className="mb-8 flex items-center gap-4 text-brass">
            <SunMark className="h-12 w-12" />
            <span className="font-mono text-[11px] tracking-[0.4em] uppercase">
              Est. {site.established} · BGC
            </span>
          </div>
          <h1 className="max-w-5xl font-serif text-[18vw] leading-[0.78] tracking-[-0.04em] text-parchment uppercase md:text-[9.5vw]">
            Lakan
          </h1>
          <div className="mt-6 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <p className="max-w-xl text-base leading-8 text-parchment/80 md:text-lg">
              A property house for homes, condominiums, and commercial space —
              drawn like architecture, not like a catalogue. Eight completed
              works. One desk in Taguig.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/listings"
                className="btn-brass border border-brass px-7 py-3 font-mono text-[11px] tracking-[0.28em] text-brass uppercase"
              >
                Browse listings
              </Link>
              <Link
                href="/contact"
                className="border border-parchment/25 px-7 py-3 font-mono text-[11px] tracking-[0.28em] text-parchment uppercase hover:border-brass hover:text-brass"
              >
                Talk to us
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="overflow-hidden border-y border-parchment/10 bg-ink-2 py-3">
        <div className="marquee-track">
          {[0, 1].map((copy) => (
            <div key={copy} className="flex items-center">
              {cities.map((c) => (
                <span
                  key={`${copy}-${c}`}
                  className="flex items-center gap-6 px-6 font-mono text-[11px] tracking-[0.35em] text-brass uppercase"
                >
                  {c}
                  <span className="text-parchment/30">✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <section className="mx-auto grid max-w-[1400px] gap-10 px-5 py-20 md:grid-cols-12 md:px-8 md:py-28">
        <Reveal className="md:col-span-5">
          <p className="flex items-center gap-3 font-mono text-[11px] tracking-[0.32em] text-brass uppercase">
            <span className="h-px w-8 bg-brass" aria-hidden />
            The firm
          </p>
          <h2 className="mt-4 font-serif text-4xl leading-tight text-parchment md:text-6xl">
            More than property.
            <br />
            <span className="italic text-brass">Isang pamana.</span>
          </h2>
        </Reveal>
        <Reveal className="md:col-span-6 md:col-start-7" delay={120}>
          <p className="text-lg leading-8 text-parchment/75">
            Lakan is a Filipino-owned developer and listing desk named after the
            old title of a steward of land. We finish buildings you can point
            to — then we keep a ledger of homes, condos, and commercial floors
            for people who actually live in them.
          </p>
          <p className="mt-6 text-lg leading-8 text-parchment/75">
            This site is the house itself: eight completed projects, a live
            listing floor, and a door to the Taguig studio.
          </p>
          <Link
            href="/about"
            className="mt-8 inline-block font-mono text-[11px] tracking-[0.28em] text-brass uppercase"
          >
            About Lakan →
          </Link>
        </Reveal>
      </section>

      <ProjectReel />

      <section className="mx-auto grid max-w-[1400px] gap-4 px-5 py-16 md:grid-cols-4 md:px-8">
        {[
          ["08", "Completed projects"],
          ["1,240+", "Residences placed"],
          ["06", "Cities on the ledger"],
          ["14", "Years in the work"],
        ].map(([n, l], i) => (
          <Reveal key={l} delay={i * 80} className="border border-parchment/10 p-6">
            <p className="font-serif text-5xl text-brass">{n}</p>
            <p className="mt-2 font-mono text-[11px] tracking-[0.22em] text-mute uppercase">
              {l}
            </p>
          </Reveal>
        ))}
      </section>

      <section className="relative overflow-hidden">
        <div className="grid md:grid-cols-2">
          <div className="relative min-h-[380px] bg-ink-2 md:min-h-full">
            <img
              src="/images/interior-living.png"
              alt="A lived-in Lakan residence"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-center bg-tropic px-8 py-16 md:px-16">
            <Reveal>
              <p className="flex items-center gap-3 font-mono text-[11px] tracking-[0.32em] text-brass uppercase">
                <span className="h-px w-8 bg-brass" aria-hidden />
                Listings
              </p>
              <h2 className="mt-4 font-serif text-4xl leading-tight md:text-5xl">
                Homes. Condos. Floors that work.
              </h2>
              <p className="mt-6 max-w-md text-base leading-8 text-parchment/75">
                Browse the ledger the way a broker actually talks: by type, by
                city, by whether it is selling or leasing. No dream-home
                banners. Just the work.
              </p>
              <Link
                href="/listings"
                className="btn-brass mt-8 inline-block w-fit border border-brass px-7 py-3 font-mono text-[11px] tracking-[0.28em] text-brass uppercase"
              >
                Open listings
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1400px] gap-12 px-5 py-24 md:grid-cols-12 md:px-8">
        <div className="md:col-span-5">
          <p className="flex items-center gap-3 font-mono text-[11px] tracking-[0.32em] text-brass uppercase">
            <span className="h-px w-8 bg-brass" aria-hidden />
            Inquire
          </p>
          <h2 className="mt-4 font-serif text-4xl md:text-6xl">
            Write to Lakan.
          </h2>
          <p className="mt-6 text-base leading-8 text-parchment/70">
            {site.address.line1}
            <br />
            {site.address.line2}
            <br />
            {site.address.city}
          </p>
          <p className="mt-6 font-mono text-sm tracking-wide text-brass">
            {site.phone}
            <br />
            {site.email}
          </p>
        </div>
        <div className="md:col-span-6 md:col-start-7">
          <ContactForm />
        </div>
      </section>
    </>
  );
}
