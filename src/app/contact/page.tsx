import { ContactForm } from "@/components/ContactForm";
import { site } from "@/lib/site";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <div className="pt-28 pb-24">
      <div className="mx-auto grid max-w-[1400px] gap-16 px-5 md:grid-cols-12 md:px-8">
        <div className="md:col-span-5">
          <p className="flex items-center gap-3 font-mono text-[11px] tracking-[0.32em] text-brass uppercase">
            <span className="h-px w-8 bg-brass" aria-hidden />
            Contact
          </p>
          <h1 className="mt-3 font-serif text-5xl leading-tight md:text-7xl">
            The desk is open.
          </h1>
          <p className="mt-6 text-base leading-8 text-parchment/70">
            Send the city, the budget, and the date you need keys. A Lakan
            advisor answers from Taguig within one business day.
          </p>

          <div className="mt-10 space-y-8">
            <div>
              <p className="font-mono text-[10px] tracking-[0.28em] text-mute uppercase">
                Studio
              </p>
              <p className="mt-2 text-sm leading-7">
                {site.address.line1}
                <br />
                {site.address.line2}
                <br />
                {site.address.city}
              </p>
            </div>
            <div>
              <p className="font-mono text-[10px] tracking-[0.28em] text-mute uppercase">
                Line
              </p>
              <p className="mt-2 text-sm leading-7">
                <a className="hover:text-brass" href={`tel:${site.phone.replace(/\s/g, "")}`}>
                  {site.phone}
                </a>
                <br />
                <a className="hover:text-brass" href={`tel:+639175550128`}>
                  {site.mobile}
                </a>
                <br />
                <a className="hover:text-brass" href={`mailto:${site.email}`}>
                  {site.email}
                </a>
              </p>
            </div>
            <div>
              <p className="font-mono text-[10px] tracking-[0.28em] text-mute uppercase">
                Hours
              </p>
              <p className="mt-2 text-sm">{site.hours}</p>
            </div>
          </div>
        </div>
        <div className="md:col-span-6 md:col-start-7">
          <div className="border border-parchment/15 bg-ink-2 p-6 md:p-10">
            <ContactForm />
          </div>
          <div className="relative mt-6 min-h-[240px] overflow-hidden">
            <img
              src="/images/about-studio.png"
              alt="Lakan studio table"
              className="h-60 w-full object-cover"
            />
            <div className="absolute inset-0 bg-ink/30" />
          </div>
        </div>
      </div>
    </div>
  );
}
