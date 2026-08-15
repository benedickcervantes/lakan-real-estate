"use client";

import { properties, type PropertyType, typeLabel } from "@/lib/properties";
import Link from "next/link";
import { useMemo, useState } from "react";

const filters: Array<"all" | PropertyType> = ["all", "condo", "home", "commercial"];

export function ListingIndex() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("all");

  const rows = useMemo(
    () =>
      filter === "all" ? properties : properties.filter((p) => p.type === filter),
    [filter],
  );

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {filters.map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => setFilter(f)}
            className={`border px-4 py-2 font-mono text-[11px] tracking-[0.22em] uppercase transition-colors ${
              filter === f
                ? "border-brass bg-brass text-ink"
                : "border-parchment/20 text-parchment/70 hover:border-brass hover:text-brass"
            }`}
          >
            {f === "all" ? "All" : typeLabel[f]}
          </button>
        ))}
      </div>

      <div className="mt-10">
        {rows.map((p, i) => (
          <Link
            key={p.slug}
            href={`/listings/${p.slug}`}
            className="ledger-row group grid gap-4 border-t border-parchment/10 py-8 md:grid-cols-12 md:items-center"
            data-cursor
          >
            <span className="font-mono text-[11px] text-brass md:col-span-1">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div className="overflow-hidden md:col-span-3">
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={p.image}
                  alt={p.name}
                  className="image-zoom h-full w-full object-cover"
                />
              </div>
            </div>
            <div className="md:col-span-4">
              <h2 className="font-serif text-3xl text-parchment md:text-4xl">{p.name}</h2>
              <p className="mt-1 text-sm text-parchment/60">{p.location}</p>
            </div>
            <div className="font-mono text-[11px] tracking-[0.16em] text-mute uppercase md:col-span-2">
              {typeLabel[p.type]}
              <br />
              {p.year}
            </div>
            <div className="text-right font-serif text-2xl text-brass md:col-span-2">
              {p.priceFrom}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
