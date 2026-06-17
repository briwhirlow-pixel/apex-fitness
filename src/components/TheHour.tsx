'use client';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') gsap.registerPlugin(ScrollTrigger);

/**
 * THE HOUR — APEX's signature section.
 * Visualizes one APEX hour as a 5-phase intensity curve drawn on scroll.
 * Could not exist for any other studio: tied directly to the "an hour at the limit" tagline.
 */

const phases = [
  {
    n: '00:00 — 00:08',
    label: 'Warm-up',
    intensity: 35,
    note: 'Mobility flow + RPE 3 ramp',
    margin: 'set the tone',
  },
  {
    n: '00:08 — 00:20',
    label: 'Build',
    intensity: 62,
    note: 'Strength primer at RPE 6',
    margin: 'find the floor',
  },
  {
    n: '00:20 — 00:42',
    label: 'Main set',
    intensity: 96,
    note: 'The hour at the limit',
    margin: '↑ this is the work',
  },
  {
    n: '00:42 — 00:52',
    label: 'Finisher',
    intensity: 80,
    note: 'Conditioning sprint',
    margin: 'leave it on the floor',
  },
  {
    n: '00:52 — 01:00',
    label: 'Cool-down',
    intensity: 18,
    note: 'Breath + reset',
    margin: 'recover. log it.',
  },
];

// Coords on a 1000x320 viewBox — x evenly spaced, y inverted (320 = baseline)
const points = phases.map((p, i) => ({
  x: 60 + (i * (940 - 60)) / (phases.length - 1),
  y: 300 - (p.intensity / 100) * 260,
  ...p,
}));

// Smooth Catmull-Rom-ish path through the points
function buildPath(pts: { x: number; y: number }[]) {
  if (pts.length === 0) return '';
  let d = `M ${pts[0].x} ${pts[0].y}`;
  for (let i = 0; i < pts.length - 1; i++) {
    const p0 = pts[Math.max(0, i - 1)];
    const p1 = pts[i];
    const p2 = pts[i + 1];
    const p3 = pts[Math.min(pts.length - 1, i + 2)];
    const cp1x = p1.x + (p2.x - p0.x) / 6;
    const cp1y = p1.y + (p2.y - p0.y) / 6;
    const cp2x = p2.x - (p3.x - p1.x) / 6;
    const cp2y = p2.y - (p3.y - p1.y) / 6;
    d += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${p2.x} ${p2.y}`;
  }
  return d;
}

export default function TheHour() {
  const root = useRef<HTMLElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const fillRef = useRef<SVGPathElement>(null);
  const path = buildPath(points);
  const fillPath = `${path} L ${points[points.length - 1].x} 320 L ${points[0].x} 320 Z`;

  useEffect(() => {
    const ctx = gsap.context(() => {
      const trig = root.current;
      if (!trig) return;

      // Header / intro reveal
      gsap.fromTo(
        '[data-hour-up]',
        { y: 38, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.85,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: { trigger: trig, start: 'top 75%', once: true },
        }
      );

      // SVG line — set dash length then animate dashoffset on scroll
      const line = pathRef.current;
      if (line) {
        const length = line.getTotalLength();
        line.style.strokeDasharray = `${length}`;
        line.style.strokeDashoffset = `${length}`;
        gsap.to(line, {
          strokeDashoffset: 0,
          ease: 'none',
          scrollTrigger: {
            trigger: trig,
            start: 'top 60%',
            end: 'bottom 70%',
            scrub: 0.5,
          },
        });
      }

      // Fill ribbon fades in
      gsap.fromTo(
        fillRef.current,
        { opacity: 0 },
        {
          opacity: 0.18,
          duration: 1.2,
          scrollTrigger: { trigger: trig, start: 'top 55%', once: true },
        }
      );

      // Phase markers stagger in
      gsap.fromTo(
        '[data-hour-phase]',
        { y: 24, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: { trigger: trig, start: 'top 50%', once: true },
        }
      );

      // Margin notes — fade + slight rotation
      gsap.fromTo(
        '[data-hour-margin]',
        { opacity: 0, x: -12, rotate: -4 },
        {
          opacity: 1,
          x: 0,
          rotate: -3,
          duration: 0.9,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: { trigger: trig, start: 'top 45%', once: true },
        }
      );
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={root}
      id="the-hour"
      className="relative bg-[color:var(--color-ink)] text-[color:var(--color-cream)] py-28 sm:py-40 overflow-hidden"
    >
      {/* atmospheric red glow */}
      <div aria-hidden className="glow-red absolute top-1/3 left-1/2 -translate-x-1/2 w-[900px] h-[900px] opacity-40" />

      <div className="relative max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-14">

        {/* eyebrow */}
        <div data-hour-up className="flex items-center gap-4 mb-10">
          <span className="block w-8 h-px bg-[color:var(--color-red)]" />
          <span className="text-[10px] sm:text-[11px] tracking-[0.32em] uppercase text-[color:var(--color-red)] font-semibold">
            § 04 — The Signature
          </span>
          <span className="block h-px flex-1 bg-[color:var(--color-border-cream)]" />
          <span className="text-[10px] sm:text-[11px] tracking-[0.28em] uppercase text-[color:var(--color-cream)]/35">
            Only at APEX
          </span>
        </div>

        {/* headline + intro */}
        <div className="grid lg:grid-cols-[1.6fr_1fr] gap-10 lg:gap-16 items-end mb-14 sm:mb-20">
          <h2
            data-hour-up
            className="font-display tracking-[-0.018em] leading-[0.9] text-[color:var(--color-cream)]"
            style={{ fontSize: 'clamp(48px, 8.5vw, 144px)', fontWeight: 700 }}
          >
            ONE HOUR.
            <br />
            <span className="font-serif-italic text-[color:var(--color-red)]" style={{ fontWeight: 400 }}>
              periodized
            </span>{' '}
            <span className="text-[color:var(--color-cream)]/85">DOWN TO THE MINUTE.</span>
          </h2>
          <div data-hour-up className="space-y-5 lg:pb-3">
            <p className="text-[color:var(--color-cream)]/72 text-[15px] sm:text-[16px] leading-[1.7] font-light">
              Every APEX session is built around one curve — warm-up to limit to reset.
              Below is the shape of the hour. Scroll to draw it.
            </p>
            <p className="text-[color:var(--color-cream)]/45 text-[12px] tracking-[0.18em] uppercase font-medium">
              Filed under: programming, not workouts
            </p>
          </div>
        </div>

        {/* SVG CURVE */}
        <div data-hour-up className="relative border-y border-[color:var(--color-border)] py-8 sm:py-12">
          {/* y-axis labels */}
          <div className="absolute left-0 top-8 sm:top-12 bottom-8 sm:bottom-12 hidden sm:flex flex-col justify-between text-[9px] tracking-[0.28em] uppercase text-[color:var(--color-cream)]/35 font-medium pr-3">
            <span>RPE 10</span>
            <span>RPE 8</span>
            <span>RPE 5</span>
            <span>RPE 2</span>
          </div>

          <svg
            viewBox="0 0 1000 360"
            className="block w-full h-auto sm:pl-14"
            preserveAspectRatio="none"
            aria-label="APEX hour intensity curve"
          >
            {/* horizontal RPE grid lines */}
            {[60, 130, 200, 270, 320].map((y) => (
              <line
                key={y}
                x1="40"
                x2="960"
                y1={y}
                y2={y}
                stroke="rgba(244,236,224,0.08)"
                strokeWidth="1"
                strokeDasharray="2 6"
              />
            ))}

            {/* baseline */}
            <line x1="40" x2="960" y1="320" y2="320" stroke="rgba(244,236,224,0.25)" strokeWidth="1" />

            {/* filled area under curve — animates from 0 */}
            <path
              ref={fillRef}
              d={fillPath}
              fill="url(#hour-fill)"
              opacity="0"
            />

            {/* the curve — scroll-drawn */}
            <path
              ref={pathRef}
              d={path}
              fill="none"
              stroke="var(--color-red)"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              vectorEffect="non-scaling-stroke"
            />

            {/* phase dots + labels */}
            {points.map((p, i) => (
              <g key={p.label} data-hour-phase>
                <circle cx={p.x} cy={p.y} r="6" fill="var(--color-red)" />
                <circle cx={p.x} cy={p.y} r="11" fill="none" stroke="var(--color-red)" strokeOpacity="0.4" strokeWidth="1.5" />
                {/* time label above */}
                <text
                  x={p.x}
                  y={p.y - 24}
                  fill="var(--color-cream)"
                  fillOpacity="0.6"
                  fontSize="11"
                  fontFamily="var(--font-inter)"
                  textAnchor={i === 0 ? 'start' : i === points.length - 1 ? 'end' : 'middle'}
                  letterSpacing="1"
                  className="hidden sm:block"
                >
                  {p.label.toUpperCase()}
                </text>
              </g>
            ))}

            <defs>
              <linearGradient id="hour-fill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="var(--color-red)" stopOpacity="0.55" />
                <stop offset="100%" stopColor="var(--color-red)" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>

          {/* x-axis labels */}
          <div className="mt-4 sm:pl-14 grid grid-cols-5 gap-1 text-[9px] sm:text-[10px] tracking-[0.22em] uppercase text-[color:var(--color-cream)]/45 font-medium">
            {phases.map((p, i) => (
              <div
                key={p.label}
                className={`${i === 0 ? 'text-left' : i === phases.length - 1 ? 'text-right' : 'text-center'}`}
              >
                {p.n}
              </div>
            ))}
          </div>
        </div>

        {/* PHASE BREAKDOWN — under the curve */}
        <div className="mt-14 sm:mt-20 grid sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8">
          {phases.map((p, i) => (
            <div data-hour-phase key={p.label} className="relative flex flex-col gap-3">
              <div className="flex items-center gap-2 text-[10px] tracking-[0.28em] uppercase text-[color:var(--color-red)] font-semibold">
                <span className="block w-4 h-px bg-[color:var(--color-red)]" />
                Phase 0{i + 1}
              </div>
              <h3
                className="font-display text-[color:var(--color-cream)] leading-none tracking-[-0.01em]"
                style={{ fontSize: 'clamp(26px, 2.6vw, 36px)', fontWeight: 600 }}
              >
                {p.label}
              </h3>
              <div className="text-[11px] tracking-[0.22em] uppercase text-[color:var(--color-cream)]/45 font-medium tabular-nums">
                {p.n}
              </div>
              <p className="text-[13px] text-[color:var(--color-cream)]/70 leading-[1.65] font-light">
                {p.note}
              </p>

              {/* handwritten margin note */}
              <div
                data-hour-margin
                className="font-serif-italic text-[color:var(--color-red)] text-[18px] leading-none pt-3 mt-1 border-t border-[color:var(--color-border)]"
              >
                {p.margin}
              </div>
            </div>
          ))}
        </div>

        {/* bottom strip — signed by the coaches */}
        <div data-hour-up className="mt-16 sm:mt-20 pt-7 border-t border-[color:var(--color-border-cream)] flex items-center justify-between flex-wrap gap-4 text-[10px] tracking-[0.28em] uppercase font-medium">
          <span className="text-[color:var(--color-cream)]/45">
            Signed off by the resident coaches · revised weekly
          </span>
          <a href="/contact" className="text-[color:var(--color-cream)] hover:text-[color:var(--color-red)] transition-colors inline-flex items-center gap-3">
            Book the hour
            <span aria-hidden className="block w-8 h-px bg-current transition-all hover:w-14" />
          </a>
        </div>
      </div>
    </section>
  );
}
