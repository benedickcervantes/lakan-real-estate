"use client";

import { featuredProjects, typeLabel } from "@/lib/properties";
import { useCallback, useEffect, useRef, useState } from "react";
import { Reveal } from "@/components/Reveal";

function Arrow({ dir }: { dir: "prev" | "next" }) {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden>
      {dir === "prev" ? (
        <path
          d="M15 5 L8 12 L15 19"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
        />
      ) : (
        <path
          d="M9 5 L16 12 L9 19"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
        />
      )}
    </svg>
  );
}

export function ProjectReel() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const dragRef = useRef({
    down: false,
    startX: 0,
    startScroll: 0,
    moved: false,
  });
  const [index, setIndex] = useState(0);
  const [hover, setHover] = useState<number | null>(null);
  const total = featuredProjects.length;
  const selected = hover ?? index;
  const atStart = index <= 0;
  const atEnd = index >= total - 1;

  const cardStep = useCallback(() => {
    const el = scrollerRef.current;
    if (!el) return 0;
    const card = el.querySelector<HTMLElement>("[data-card]");
    if (!card) return el.clientWidth * 0.8;
    const gap = parseFloat(getComputedStyle(el).gap) || 24;
    return card.offsetWidth + gap;
  }, []);

  const syncIndex = useCallback(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const step = cardStep();
    if (!step) return;
    const next = Math.round(el.scrollLeft / step);
    setIndex(Math.max(0, Math.min(total - 1, next)));
  }, [cardStep, total]);

  const goTo = useCallback(
    (i: number) => {
      const el = scrollerRef.current;
      if (!el) return;
      const clamped = Math.max(0, Math.min(total - 1, i));
      el.scrollTo({ left: clamped * cardStep(), behavior: "smooth" });
    },
    [cardStep, total],
  );

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const onWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) <= Math.abs(e.deltaX)) return;
      e.preventDefault();
      el.scrollLeft += e.deltaY;
    };
    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, []);

  return (
    <section className="pb-8">
      <div className="mx-auto flex max-w-[1400px] items-end justify-between gap-4 px-5 md:px-8">
        <Reveal>
          <p className="flex items-center gap-3 font-mono text-[11px] tracking-[0.32em] text-brass uppercase">
            <span className="h-px w-8 bg-brass" aria-hidden />
            Completed works
          </p>
          <h2 className="mt-3 font-serif text-4xl md:text-6xl">Eight projects</h2>
        </Reveal>
        <div className="flex items-center gap-3 pb-1">
          <span className="font-mono text-[11px] tracking-[0.2em] text-mute tabular-nums">
            {String(selected + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </span>
          <button
            type="button"
            aria-label="Previous project"
            disabled={atStart}
            onClick={() => goTo(index - 1)}
            className="flex h-11 w-11 items-center justify-center border border-brass text-brass transition disabled:border-parchment/20 disabled:text-parchment/25"
          >
            <Arrow dir="prev" />
          </button>
          <button
            type="button"
            aria-label="Next project"
            disabled={atEnd}
            onClick={() => goTo(index + 1)}
            className="flex h-11 w-11 items-center justify-center border border-brass text-brass transition disabled:border-parchment/20 disabled:text-parchment/25"
          >
            <Arrow dir="next" />
          </button>
        </div>
      </div>

      <div
        ref={scrollerRef}
        className="mt-10 flex cursor-grab snap-x snap-mandatory gap-0 overflow-x-auto px-0 pb-4 select-none hide-scrollbar active:cursor-grabbing md:gap-6 md:px-8"
        onScroll={syncIndex}
        onPointerDown={(e) => {
          if (e.pointerType === "touch") return;
          const el = scrollerRef.current;
          if (!el) return;
          dragRef.current = {
            down: true,
            startX: e.clientX,
            startScroll: el.scrollLeft,
            moved: false,
          };
          e.currentTarget.setPointerCapture(e.pointerId);
        }}
        onPointerMove={(e) => {
          if (!dragRef.current.down) return;
          const el = scrollerRef.current;
          if (!el) return;
          const dx = e.clientX - dragRef.current.startX;
          if (Math.abs(dx) > 8) dragRef.current.moved = true;
          el.scrollLeft = dragRef.current.startScroll - dx;
        }}
        onPointerUp={() => {
          const moved = dragRef.current.moved;
          dragRef.current.down = false;
          if (!moved) return;
          const el = scrollerRef.current;
          if (!el) return;
          const step = cardStep();
          if (!step) return;
          goTo(Math.round(el.scrollLeft / step));
        }}
      >
        {featuredProjects.map((p, i) => (
          <article
            key={p.slug}
            data-card
            data-cursor
            className={`group relative w-full min-w-full shrink-0 snap-start px-5 md:w-[38vw] md:min-w-0 md:px-0 lg:w-[28vw] ${
              i === selected ? "is-active" : ""
            }`}
            onMouseEnter={() => setHover(i)}
            onMouseLeave={() => setHover(null)}
          >
            <div className="relative aspect-[4/5] overflow-hidden md:aspect-[3/4]">
              <img
                src={p.image}
                alt={p.name}
                draggable={false}
                className="image-zoom h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/10 to-transparent" />
              <svg
                className="absolute inset-3 h-[calc(100%-1.5rem)] w-[calc(100%-1.5rem)]"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
              >
                <rect
                  className="frame-draw"
                  x="1"
                  y="1"
                  width="98"
                  height="98"
                  fill="none"
                  pathLength="100"
                  stroke="#c4a06a"
                  strokeWidth="0.7"
                  strokeLinecap="butt"
                />
              </svg>
              <span className="absolute top-[15px] left-[15px] z-10 bg-ink px-2 py-0.5 font-mono text-[11px] tracking-[0.28em] text-brass">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="absolute right-5 bottom-6 left-5">
                <p className="font-mono text-[10px] tracking-[0.24em] text-parchment/70 uppercase">
                  {typeLabel[p.type]} · {p.city} · {p.year}
                </p>
                <h3 className="mt-2 font-serif text-3xl text-parchment">{p.name}</h3>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="mx-auto mt-2 flex max-w-[1400px] items-center gap-2 px-5 md:px-8">
        <div className="h-px flex-1 bg-parchment/15">
          <div
            className="h-px bg-brass transition-[width] duration-300"
            style={{ width: `${((selected + 1) / total) * 100}%` }}
          />
        </div>
        <div className="flex gap-1.5">
          {featuredProjects.map((p, i) => (
            <button
              key={p.slug}
              type="button"
              aria-label={`Go to ${p.name}`}
              onClick={() => goTo(i)}
              className={`h-2 w-2 rounded-full transition ${
                i === selected ? "bg-brass" : "bg-parchment/25 hover:bg-parchment/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
