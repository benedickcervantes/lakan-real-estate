import { ContactForm } from "@/components/ContactForm";
import { getProperty, properties, typeLabel } from "@/lib/properties";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return properties.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = getProperty(slug);
  return { title: p?.name ?? "Listing" };
}

export default async function ListingDetail({ params }: Props) {
  const { slug } = await params;
  const p = getProperty(slug);
  if (!p) notFound();

  const others = properties.filter((x) => x.slug !== p.slug).slice(0, 3);

  return (
    <div className="pt-24 pb-24">
      <div className="relative min-h-[62vh] overflow-hidden">
        <img src={p.image} alt={p.name} className="h-[62vh] w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-ink/30" />
        <div className="absolute right-0 bottom-0 left-0 mx-auto max-w-[1400px] px-5 pb-10 md:px-8">
          <p className="font-mono text-[11px] tracking-[0.28em] text-brass uppercase">
            {typeLabel[p.type]} · {p.status} · {p.year}
          </p>
          <h1 className="mt-3 font-serif text-5xl md:text-7xl">{p.name}</h1>
          <p className="mt-2 text-parchment/75">{p.location}</p>
        </div>
      </div>

      <div className="mx-auto grid max-w-[1400px] gap-12 px-5 py-16 md:grid-cols-12 md:px-8">
        <div className="md:col-span-7">
          <p className="text-lg leading-8 text-parchment/80">{p.description}</p>
          <ul className="mt-10 grid gap-3 sm:grid-cols-2">
            {p.highlights.map((h) => (
              <li key={h} className="border-l border-brass pl-4 text-sm leading-7 text-parchment/75">
                {h}
              </li>
            ))}
          </ul>
          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {p.gallery.slice(1).map((src) => (
              <img key={src} src={src} alt="" className="aspect-[16/11] w-full object-cover" />
            ))}
          </div>
        </div>
        <aside className="md:col-span-4 md:col-start-9">
          <div className="border border-parchment/15 bg-ink-2 p-6 md:sticky md:top-28">
            <p className="font-mono text-[10px] tracking-[0.28em] text-mute uppercase">
              From
            </p>
            <p className="mt-1 font-serif text-4xl text-brass">{p.priceFrom}</p>
            <dl className="mt-6 grid gap-3 font-mono text-[11px] tracking-[0.12em] text-parchment/70 uppercase">
              <div className="flex justify-between border-b border-parchment/10 pb-2">
                <dt>Size</dt>
                <dd className="text-parchment">{p.size}</dd>
              </div>
              <div className="flex justify-between border-b border-parchment/10 pb-2">
                <dt>Keys</dt>
                <dd className="text-parchment">{p.units}</dd>
              </div>
              <div className="flex justify-between border-b border-parchment/10 pb-2">
                <dt>Plan</dt>
                <dd className="text-parchment">{p.bedrooms}</dd>
              </div>
              <div className="flex justify-between">
                <dt>City</dt>
                <dd className="text-parchment">{p.city}</dd>
              </div>
            </dl>
            <p className="mt-8 font-mono text-[11px] tracking-[0.28em] text-brass uppercase">
              Inquire on this key
            </p>
            <div className="mt-4">
              <ContactForm compact />
            </div>
          </div>
        </aside>
      </div>

      <div className="mx-auto max-w-[1400px] px-5 md:px-8">
        <p className="flex items-center gap-3 font-mono text-[11px] tracking-[0.28em] text-mute uppercase">
          <span className="h-px w-8 bg-brass" aria-hidden />
          More listings
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {others.map((o) => (
            <Link key={o.slug} href={`/listings/${o.slug}`} className="group block" data-cursor>
              <div className="overflow-hidden">
                <img src={o.image} alt={o.name} className="image-zoom aspect-[16/10] w-full object-cover" />
              </div>
              <h3 className="mt-3 font-serif text-2xl">{o.name}</h3>
              <p className="text-sm text-parchment/60">{o.location}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
