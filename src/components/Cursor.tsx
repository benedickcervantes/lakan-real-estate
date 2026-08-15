"use client";

import { useEffect, useRef } from "react";

type Mode = "idle" | "ui" | "lot";

function modeFromTarget(t: EventTarget | null): Mode {
  const el = t instanceof Element ? t : null;
  if (!el) return "idle";
  if (el.closest("[data-cursor]")) return "lot";
  if (el.closest("a, button, input, textarea, select, label")) return "ui";
  return "idle";
}

export function Cursor() {
  const rootRef = useRef<HTMLDivElement>(null);
  const ghostRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    const ghost = ghostRef.current;
    if (!root || !ghost) return;

    const mqHover = window.matchMedia("(hover: hover) and (pointer: fine)");
    const mqWide = window.matchMedia("(min-width: 768px)");
    const canUse = () => mqHover.matches && mqWide.matches;

    let tx = 0;
    let ty = 0;
    let x = 0;
    let y = 0;
    let gx = 0;
    let gy = 0;
    let raf = 0;

    const setEnabled = (on: boolean) => {
      root.dataset.on = on ? "1" : "0";
      document.documentElement.classList.toggle("has-custom-cursor", on);
    };

    setEnabled(canUse());

    const onChange = () => setEnabled(canUse());
    mqHover.addEventListener("change", onChange);
    mqWide.addEventListener("change", onChange);

    const tick = () => {
      x += (tx - x) * 0.28;
      y += (ty - y) * 0.28;
      gx += (tx - gx) * 0.09;
      gy += (ty - gy) * 0.09;
      root.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      ghost.style.transform = `translate3d(${gx}px, ${gy}px, 0)`;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    const onMove = (e: MouseEvent) => {
      if (!canUse()) return;
      tx = e.clientX;
      ty = e.clientY;
      root.dataset.visible = "1";
      ghost.dataset.visible = "1";
      const mode = modeFromTarget(e.target);
      root.dataset.mode = mode;
      ghost.dataset.mode = mode;
    };

    const onLeave = () => {
      root.dataset.visible = "0";
      ghost.dataset.visible = "0";
      root.dataset.mode = "idle";
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseleave", onLeave);

    return () => {
      cancelAnimationFrame(raf);
      mqHover.removeEventListener("change", onChange);
      mqWide.removeEventListener("change", onChange);
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      document.documentElement.classList.remove("has-custom-cursor");
    };
  }, []);

  return (
    <>
      <span ref={ghostRef} className="cursor-ghost" aria-hidden />
      <div ref={rootRef} className="custom-cursor" data-mode="idle" aria-hidden>
        <span className="cursor-cross" />
        <svg className="custom-cursor-sun" viewBox="0 0 64 64">
          <circle cx="32" cy="32" r="5" fill="#c4a06a" />
          <g
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            transform="translate(32 32)"
          >
            <line x1="0" y1="-11" x2="0" y2="-26" />
            <line x1="0" y1="11" x2="0" y2="26" />
            <line x1="-11" y1="0" x2="-26" y2="0" />
            <line x1="11" y1="0" x2="26" y2="0" />
            <line x1="-8" y1="-8" x2="-18.5" y2="-18.5" />
            <line x1="8" y1="8" x2="18.5" y2="18.5" />
            <line x1="8" y1="-8" x2="18.5" y2="-18.5" />
            <line x1="-8" y1="8" x2="-18.5" y2="18.5" />
          </g>
        </svg>
        <span className="cursor-plot" />
      </div>
    </>
  );
}
