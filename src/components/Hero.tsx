'use client';
import { useEffect, useState } from 'react';
import { classes, testimonials } from '@/lib/data';

const feature = testimonials[0];
const indexRows = classes.slice(0, 5);

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const id = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <section className="relative overflow-hidden bg-[color:var(--color-bone)]">
      {/* paper grain — scoped to hero so it doesn't leak globally yet */}
      <div className="paper-grain absolute" style={{ position: 'absolute', zIndex: 1 }} />

      {/* faint vertical 12-col rule, only past md */}
      <div
        className="hidden md:block absolute inset-x-0 top-0 bottom-0 max-w-[1400px] mx-auto px-6 sm:px-10 opacity-60 pointer-events-none"
        aria-hidden
      >
        <div className="relative h-full">
          {[...Array(11)].map((_, i) => (
            <div
              key={i}
              className="absolute top-0 bottom-0 w-px bg-[color:var(--color-ink)]/[0.05]"
              style={{ left: `${((i + 1) / 12) * 100}%` }}
            />
          ))}
        </div>
      </div>

      {/* MAIN CONTAINER */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 sm:px-10">

        {/* TOP METADATA STRIP — magazine masthead */}
        <div className="pt-28 sm:pt-32">
          <div
            className="h-px bg-[color:var(--color-ink)]/25 origin-left"
            style={{
              animation: mounted ? 'apex-rule 700ms cubic-bezier(0.7,0,0.2,1) 0ms forwards' : 'none',
              transform: mounted ? undefined : 'scaleX(0)',
            }}
          />
          <div
            className="grid grid-cols-2 md:grid-cols-12 gap-x-4 gap-y-1 py-3 font-mono text-[10px] sm:text-[11px] tracking-[0.18em] uppercase text-[color:var(--color-ink)]/55"
            style={{
              animation: mounted ? 'apex-fade 500ms ease-out 250ms both' : 'none',
              opacity: mounted ? undefined : 0,
            }}
          >
            <span className="md:col-span-3">Apex / Chicago</span>
            <span className="md:col-span-3">Issue Nº 06 — Spring ’26</span>
            <span className="hidden md:inline md:col-span-3">41.93°N · 87.64°W</span>
            <span className="text-right md:col-span-3">Open 05:00 — 22:00 CT</span>
          </div>
          <div
            className="h-px bg-[color:var(--color-ink)]/25 origin-left"
            style={{
              animation: mounted ? 'apex-rule 700ms cubic-bezier(0.7,0,0.2,1) 120ms forwards' : 'none',
              transform: mounted ? undefined : 'scaleX(0)',
            }}
          />
        </div>

        {/* EDITORIAL GRID */}
        <div className="grid grid-cols-12 gap-x-6 sm:gap-x-8 gap-y-10 mt-12 sm:mt-16 lg:mt-20">

          {/* LEFT — cover headline */}
          <div className="col-span-12 lg:col-span-8 xl:col-span-8 relative">
            {/* eyebrow row */}
            <div
              className="flex items-center gap-4 mb-7"
              style={{
                animation: mounted ? 'apex-fade 600ms ease-out 350ms both' : 'none',
                opacity: mounted ? undefined : 0,
              }}
            >
              <span className="font-mono text-[10px] sm:text-[11px] tracking-[0.22em] uppercase text-[color:var(--color-ember)]">
                Cover · Performance
              </span>
              <span className="h-px flex-1 bg-[color:var(--color-ink)]/20" />
              <span className="font-mono text-[10px] sm:text-[11px] tracking-[0.22em] uppercase text-[color:var(--color-ink)]/45">
                Nº 01 / 06
              </span>
            </div>

            {/* THE HEADLINE — editorial serif, ragged left, three lines, with wonky italic accent */}
            <h1
              className="serif-display text-[color:var(--color-ink)] leading-[0.92] tracking-[-0.028em] font-medium"
              style={{
                fontSize: 'clamp(64px, 12vw, 184px)',
              }}
            >
              <span className="block overflow-hidden">
                <span
                  className="block"
                  style={{
                    animation: mounted ? 'apex-rise 900ms cubic-bezier(0.2,0.7,0.2,1) 400ms both' : 'none',
                    opacity: mounted ? undefined : 0,
                  }}
                >
                  An hour
                </span>
              </span>
              <span className="block overflow-hidden">
                <span
                  className="block"
                  style={{
                    animation: mounted ? 'apex-rise 900ms cubic-bezier(0.2,0.7,0.2,1) 520ms both' : 'none',
                    opacity: mounted ? undefined : 0,
                  }}
                >
                  at the{' '}
                  <span className="relative inline-block align-baseline">
                    <span className="serif-wonk text-[color:var(--color-ink)]" style={{ fontWeight: 500 }}>
                      limit
                    </span>
                    <svg
                      className="absolute left-0 -bottom-1 w-full"
                      style={{
                        height: '0.22em',
                        transformOrigin: 'left',
                        animation: mounted ? 'apex-ember 1400ms cubic-bezier(0.65,0,0.35,1) 1100ms both' : 'none',
                        transform: mounted ? undefined : 'scaleX(0)',
                      }}
                      viewBox="0 0 200 14"
                      preserveAspectRatio="none"
                      aria-hidden
                    >
                      <path
                        d="M2 9 C 40 3, 90 12, 140 6 S 195 7, 198 10"
                        fill="none"
                        stroke="var(--color-ember)"
                        strokeWidth="3.2"
                        strokeLinecap="round"
                      />
                    </svg>
                    .
                  </span>
                </span>
              </span>
            </h1>

            {/* sub-copy + CTAs */}
            <div className="mt-10 sm:mt-12 grid grid-cols-12 gap-6">
              <p
                className="col-span-12 sm:col-span-7 text-[color:var(--color-ink-soft)] text-[15px] sm:text-[17px] leading-[1.55] font-sans"
                style={{
                  animation: mounted ? 'apex-fade 700ms ease-out 950ms both' : 'none',
                  opacity: mounted ? undefined : 0,
                }}
              >
                A performance studio in Lincoln Park.
                Six disciplines. Three coaches. One
                uncompromising standard. Trial hour is on
                the house — walk in, clock in.
              </p>

              <div
                className="col-span-12 sm:col-span-5 flex sm:flex-col sm:items-end justify-between sm:justify-end gap-4 sm:gap-3"
                style={{
                  animation: mounted ? 'apex-fade 700ms ease-out 1100ms both' : 'none',
                  opacity: mounted ? undefined : 0,
                }}
              >
                <a
                  href="/contact"
                  className="group inline-flex items-center gap-3 bg-[color:var(--color-ink)] text-[color:var(--color-bone)] font-sans font-medium tracking-[0.16em] uppercase text-[11px] px-6 py-4 rounded-none border border-[color:var(--color-ink)] hover:bg-[color:var(--color-ember)] hover:border-[color:var(--color-ember)] transition-colors duration-300"
                >
                  Claim trial pass
                  <span className="block w-4 h-px bg-current transition-all duration-300 group-hover:w-8" />
                </a>
                <a
                  href="/classes"
                  className="group inline-flex items-center gap-3 text-[color:var(--color-ink)]/70 hover:text-[color:var(--color-ink)] font-mono text-[11px] tracking-[0.22em] uppercase transition-colors"
                >
                  <span className="block w-6 h-px bg-current" />
                  View Schedule
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT — featured pull-quote / inset ink panel */}
          <aside
            className="col-span-12 lg:col-span-4 xl:col-span-4 lg:mt-2"
            style={{
              animation: mounted ? 'apex-rise 900ms cubic-bezier(0.2,0.7,0.2,1) 700ms both' : 'none',
              opacity: mounted ? undefined : 0,
            }}
          >
            <div className="relative bg-[color:var(--color-ink)] text-[color:var(--color-bone)] px-7 py-8 sm:px-8 sm:py-9 crop-marks">
              {/* the 3 remaining corner marks */}
              <span className="absolute top-2 right-2 w-3.5 h-px bg-[color:var(--color-ember)]" />
              <span className="absolute top-2 right-2 w-px h-3.5 bg-[color:var(--color-ember)]" />
              <span className="absolute bottom-2 left-2 w-3.5 h-px bg-[color:var(--color-ember)]" />
              <span className="absolute bottom-2 left-2 w-px h-3.5 bg-[color:var(--color-ember)]" />
              <span className="absolute bottom-2 right-2 w-3.5 h-px bg-[color:var(--color-ember)]" />
              <span className="absolute bottom-2 right-2 w-px h-3.5 bg-[color:var(--color-ember)]" />

              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-[10px] tracking-[0.24em] uppercase text-[color:var(--color-bone)]/45">
                  Member Dispatch
                </span>
                <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-[color:var(--color-ember)]">
                  ★ ★ ★ ★ ★
                </span>
              </div>

              {/* the giant editorial quote mark */}
              <div className="serif-display text-[color:var(--color-ember)] leading-none mb-1" style={{ fontSize: '72px' }}>
                “
              </div>

              <p className="serif-display text-[color:var(--color-bone)] text-[19px] sm:text-[20px] leading-[1.32] tracking-[-0.005em] -mt-4">
                {feature.text.split('. ').slice(0, 2).join('. ')}.
              </p>

              <div className="mt-7 pt-5 border-t border-[color:var(--color-bone)]/15 flex items-center justify-between">
                <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-[color:var(--color-bone)]/65">
                  — {feature.name} · {feature.class}
                </div>
                <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-[color:var(--color-bone)]/40">
                  {feature.date.split(' ')[1]}
                </div>
              </div>
            </div>

            {/* page-corner indicator under the panel */}
            <div className="mt-3 flex items-center justify-between font-mono text-[10px] tracking-[0.22em] uppercase text-[color:var(--color-ink)]/45">
              <span>Page 03</span>
              <span>cont. inside →</span>
            </div>
          </aside>
        </div>

        {/* DISCIPLINE INDEX — magazine table of contents */}
        <div
          className="mt-20 sm:mt-28 pb-16 sm:pb-20"
          style={{
            animation: mounted ? 'apex-fade 800ms ease-out 1300ms both' : 'none',
            opacity: mounted ? undefined : 0,
          }}
        >
          <div className="flex items-end justify-between mb-4">
            <span className="font-mono text-[10px] sm:text-[11px] tracking-[0.22em] uppercase text-[color:var(--color-ink)]/55">
              In this Issue — The Six Disciplines
            </span>
            <span className="font-mono text-[10px] sm:text-[11px] tracking-[0.22em] uppercase text-[color:var(--color-ink)]/35 hidden sm:inline">
              Schedule live · updated weekly
            </span>
          </div>

          <div className="h-px bg-[color:var(--color-ink)]/30" />

          {/* table header */}
          <div className="hidden sm:grid grid-cols-12 gap-4 py-3 font-mono text-[10px] tracking-[0.22em] uppercase text-[color:var(--color-ink)]/45 border-b border-[color:var(--color-ink)]/10">
            <span className="col-span-1">Nº</span>
            <span className="col-span-4">Discipline</span>
            <span className="col-span-2">Category</span>
            <span className="col-span-2">Duration</span>
            <span className="col-span-3 text-right">Intensity</span>
          </div>

          {/* rows */}
          {indexRows.map((c, i) => (
            <a
              key={c.id}
              href={`/classes#${c.id}`}
              className="group block border-b border-[color:var(--color-ink)]/10 hover:bg-[color:var(--color-bone-soft)]/60 transition-colors"
            >
              <div className="grid grid-cols-12 gap-4 items-center py-4 sm:py-5">
                <span className="col-span-1 font-mono text-[11px] tracking-[0.18em] text-[color:var(--color-ink)]/45">
                  0{i + 1}
                </span>
                <span className="col-span-7 sm:col-span-4 serif-display text-[20px] sm:text-[26px] leading-none tracking-[-0.01em] text-[color:var(--color-ink)] flex items-baseline gap-3">
                  {c.name}
                  <span className="hidden sm:inline-block h-px flex-1 bg-[color:var(--color-ink)]/15 translate-y-[-6px] transition-all group-hover:bg-[color:var(--color-ember)]" />
                </span>
                <span className="hidden sm:block col-span-2 font-mono text-[11px] tracking-[0.2em] uppercase text-[color:var(--color-ink)]/55">
                  {c.category}
                </span>
                <span className="hidden sm:block col-span-2 font-mono text-[11px] tracking-[0.2em] uppercase text-[color:var(--color-ink)]/55">
                  {c.duration}
                </span>
                <span className="col-span-4 sm:col-span-3 font-mono text-[11px] tracking-[0.2em] uppercase text-right">
                  <span className="text-[color:var(--color-ember)]">{c.intensity}</span>
                  <span className="text-[color:var(--color-ink)]/30 ml-2 group-hover:text-[color:var(--color-ember)] transition-colors">→</span>
                </span>
              </div>
            </a>
          ))}

          {/* "see all" footnote */}
          <div className="flex items-center justify-between pt-4">
            <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-[color:var(--color-ink)]/40">
              + 1 more — see the full slate
            </span>
            <a
              href="/classes"
              className="font-mono text-[11px] tracking-[0.22em] uppercase text-[color:var(--color-ink)] hover:text-[color:var(--color-ember)] transition-colors inline-flex items-center gap-2"
            >
              Full Index
              <span className="block w-6 h-px bg-current" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
