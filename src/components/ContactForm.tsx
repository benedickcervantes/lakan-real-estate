"use client";

import { FormEvent, useState } from "react";

const interests = [
  "A condominium",
  "A house or townhome",
  "Commercial space",
  "Selling a property",
  "A partnership / media inquiry",
];

export function ContactForm({ compact = false }: { compact?: boolean }) {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    window.setTimeout(() => {
      setLoading(false);
      setSent(true);
    }, 700);
  }

  if (sent) {
    return (
      <div className="border border-brass/40 bg-tropic/40 p-8">
        <p className="font-mono text-[11px] tracking-[0.32em] text-brass uppercase">
          Natanggap na
        </p>
        <h3 className="mt-3 font-serif text-4xl text-parchment">
          A Lakan advisor will write you within one business day.
        </h3>
        <p className="mt-4 max-w-md text-sm leading-7 text-parchment/70">
          Salamat. Your note is with the Taguig desk. If it is urgent, call
          +63 917 555 0128.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-6">
      <div className={`grid gap-6 ${compact ? "" : "md:grid-cols-2"}`}>
        <label className="block">
          <span className="font-mono text-[10px] tracking-[0.28em] text-mute uppercase">
            Name
          </span>
          <input className="field" name="name" required placeholder="Your full name" />
        </label>
        <label className="block">
          <span className="font-mono text-[10px] tracking-[0.28em] text-mute uppercase">
            Email
          </span>
          <input
            className="field"
            name="email"
            type="email"
            required
            placeholder="you@company.com"
          />
        </label>
      </div>
      <div className={`grid gap-6 ${compact ? "" : "md:grid-cols-2"}`}>
        <label className="block">
          <span className="font-mono text-[10px] tracking-[0.28em] text-mute uppercase">
            Mobile
          </span>
          <input
            className="field"
            name="phone"
            required
            placeholder="+63 9xx xxx xxxx"
          />
        </label>
        <label className="block">
          <span className="font-mono text-[10px] tracking-[0.28em] text-mute uppercase">
            Interest
          </span>
          <select className="field" name="interest" defaultValue={interests[0]}>
            {interests.map((i) => (
              <option key={i}>{i}</option>
            ))}
          </select>
        </label>
      </div>
      <label className="block">
        <span className="font-mono text-[10px] tracking-[0.28em] text-mute uppercase">
          Message
        </span>
        <textarea
          className="field min-h-28 resize-y"
          name="message"
          required
          placeholder="Tell us the city, budget, and when you need to move."
        />
      </label>
      <button
        type="submit"
        disabled={loading}
        className="btn-brass mt-2 w-full border border-brass py-4 font-mono text-[11px] tracking-[0.32em] text-brass uppercase md:w-auto md:px-12"
      >
        {loading ? "Sending…" : "Send to Lakan"}
      </button>
    </form>
  );
}
