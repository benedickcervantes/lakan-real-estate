import { ListingIndex } from "@/components/ListingIndex";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Listings",
};

export default function ListingsPage() {
  return (
    <div className="pt-28 pb-24">
      <div className="mx-auto max-w-[1400px] px-5 md:px-8">
        <p className="flex items-center gap-3 font-mono text-[11px] tracking-[0.32em] text-brass uppercase">
          <span className="h-px w-8 bg-brass" aria-hidden />
          Listings
        </p>
        <h1 className="mt-3 max-w-3xl font-serif text-5xl leading-tight md:text-7xl">
          Homes, condominiums, and commercial space.
        </h1>
        <p className="mt-6 max-w-xl text-base leading-8 text-parchment/70">
          Ten keys on the floor today — from a Diliman house to a Pasay podium.
          Filter by type. Open a page. Write the desk.
        </p>
        <div className="mt-12">
          <ListingIndex />
        </div>
      </div>
    </div>
  );
}
