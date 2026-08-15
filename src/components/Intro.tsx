"use client";

import { useEffect, useState } from "react";

const WORD = "LAKAN";

function Floor({
  x,
  y,
  w,
  h,
  delay,
  windows = 3,
}: {
  x: number;
  y: number;
  w: number;
  h: number;
  delay: number;
  windows?: number;
}) {
  const gap = 3;
  const winW = (w - gap * (windows + 1)) / windows;
  return (
    <g className="intro-floor" style={{ animationDelay: `${delay}ms` }}>
      <rect x={x} y={y} width={w} height={h} />
      {Array.from({ length: windows }, (_, i) => (
        <rect
          key={i}
          className="intro-win"
          x={x + gap + i * (winW + gap)}
          y={y + 3}
          width={winW}
          height={h - 6}
          style={{ animationDelay: `${delay + 180}ms` }}
        />
      ))}
    </g>
  );
}

function IntroTower() {
  const mid = Array.from({ length: 7 }, (_, i) => i);
  const high = Array.from({ length: 11 }, (_, i) => i);

  return (
    <svg className="intro-tower" viewBox="0 0 200 360" aria-hidden>
      <line className="intro-ground" x1="6" y1="348" x2="194" y2="348" />
      <rect className="intro-found" x="18" y="336" width="164" height="12" />

      <g className="intro-podium" style={{ animationDelay: "160ms" }}>
        <rect x="28" y="292" width="144" height="44" />
        <rect className="intro-win" x="36" y="304" width="22" height="22" style={{ animationDelay: "320ms" }} />
        <rect className="intro-win" x="66" y="304" width="22" height="22" style={{ animationDelay: "360ms" }} />
        <rect className="intro-win" x="112" y="304" width="22" height="22" style={{ animationDelay: "400ms" }} />
        <rect className="intro-win" x="142" y="304" width="22" height="22" style={{ animationDelay: "440ms" }} />
      </g>

      {mid.map((i) => (
        <Floor
          key={`m-${i}`}
          x={40}
          y={292 - (i + 1) * 16}
          w={52}
          h={16}
          delay={420 + i * 85}
          windows={2}
        />
      ))}

      {high.map((i) => (
        <Floor
          key={`h-${i}`}
          x={102}
          y={292 - (i + 1) * 16}
          w={58}
          h={16}
          delay={480 + i * 80}
          windows={3}
        />
      ))}

      <rect
        className="intro-crown"
                  x={110}
                  y={292 - 11 * 16 - 10}
        width={42}
        height={10}
        style={{ animationDelay: `${480 + 11 * 80 + 80}ms` }}
      />
    </svg>
  );
}

export function Intro() {
  const [show, setShow] = useState(true);
  const [leave, setLeave] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const startLeave = reduced ? 400 : 3800;
    const hide = startLeave + 750;

    const t1 = window.setTimeout(() => setLeave(true), startLeave);
    const t2 = window.setTimeout(() => {
      setShow(false);
      document.body.style.overflow = "";
    }, hide);

    return () => {
      window.clearTimeout(t1);
      window.clearTimeout(t2);
      document.body.style.overflow = "";
    };
  }, []);

  if (!show) return null;

  return (
    <div
      className={`intro-screen ${leave ? "is-leaving" : ""}`}
      role="status"
      aria-label="Lakan Real Estate"
    >
      <IntroTower />

      <div className="relative z-10 flex max-w-full flex-col items-center px-5 text-center sm:px-8">
        <svg
          className="intro-sun mb-5 h-10 w-10 text-brass md:mb-8 md:h-14 md:w-14"
          viewBox="0 0 64 64"
          aria-hidden
        >
          <circle cx="32" cy="32" r="7" fill="none" stroke="currentColor" strokeWidth="1.6" />
          <g
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            transform="translate(32 32)"
          >
            <line x1="0" y1="-13" x2="0" y2="-24" />
            <line x1="0" y1="13" x2="0" y2="24" />
            <line x1="-13" y1="0" x2="-24" y2="0" />
            <line x1="13" y1="0" x2="24" y2="0" />
            <line x1="-9.2" y1="-9.2" x2="-17" y2="-17" />
            <line x1="9.2" y1="9.2" x2="17" y2="17" />
            <line x1="9.2" y1="-9.2" x2="17" y2="-17" />
            <line x1="-9.2" y1="9.2" x2="-17" y2="17" />
          </g>
        </svg>

        <h1 className="intro-word font-serif text-5xl leading-none tracking-[0.12em] text-parchment uppercase sm:text-7xl md:text-8xl md:tracking-[0.16em]">
          {WORD.split("").map((ch, i) => (
            <span key={ch + i} className="intro-glyph">
              <span className="intro-glyph-rise" style={{ animationDelay: `${480 + i * 260}ms` }}>
                {ch}
              </span>
            </span>
          ))}
        </h1>

        <p className="intro-tagline mt-5 font-mono text-[10px] tracking-[0.22em] text-brass uppercase sm:mt-7 sm:text-[11px] sm:tracking-[0.32em]">
          {["Land.", "Legacy.", "Life."].map((word, i) => (
            <span key={word} className="intro-glyph">
              <span
                className="intro-glyph-rise"
                style={{ animationDelay: `${1780 + i * 260}ms` }}
              >
                {word}
              </span>
            </span>
          ))}
        </p>
      </div>
    </div>
  );
}
