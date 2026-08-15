import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[80vh] flex-col items-center justify-center px-6 pt-24 text-center">
      <p className="font-mono text-[11px] tracking-[0.32em] text-brass uppercase">
        404
      </p>
      <h1 className="mt-4 font-serif text-5xl md:text-7xl">This lot is empty.</h1>
      <p className="mt-4 max-w-md text-parchment/70">
        The page is not on the ledger. Return to the house or open listings.
      </p>
      <div className="mt-8 flex gap-4">
        <Link
          href="/"
          className="btn-brass border border-brass px-6 py-3 font-mono text-[11px] tracking-[0.28em] text-brass uppercase"
        >
          Home
        </Link>
        <Link
          href="/listings"
          className="border border-parchment/25 px-6 py-3 font-mono text-[11px] tracking-[0.28em] uppercase"
        >
          Listings
        </Link>
      </div>
    </div>
  );
}
