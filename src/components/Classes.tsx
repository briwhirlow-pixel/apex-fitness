import Image from 'next/image';
import { classes } from '@/lib/data';

const intensityScale: Record<string, number> = {
  'Low': 1,
  'Low–Moderate': 2,
  'Moderate–High': 4,
  'High': 5,
};

// Pull the 6 in the visual-weight order we want to render them
const byId = (id: string) => classes.find((c) => c.id === id)!;
const hiit     = byId('hiit-forge');
const iron     = byId('iron-temple');
const flow     = byId('flow-state');
const velocity = byId('velocity-cycle');
const combat   = byId('combat-ready');
const recover  = byId('recover-reset');

const initials = (n: string) => n.split(' ').map((w) => w[0]).join('');

// Schedule slot — time in red, no day separator decoration
const Slot = ({ text, size = 'md' }: { text: string; size?: 'sm' | 'md' | 'lg' }) => {
  const cls =
    size === 'lg' ? 'text-[clamp(20px,2vw,28px)]' :
    size === 'sm' ? 'text-[13px]' :
    'text-[16px]';
  return (
    <span className={`font-display tracking-[0.02em] text-[#e41313] ${cls}`} style={{ fontWeight: 600 }}>
      {text}
    </span>
  );
};

// Tiny mono meta (category · duration) — no eyebrow above heading, sits inline
const Meta = ({ children }: { children: React.ReactNode }) => (
  <span className="text-[10px] tracking-[0.32em] uppercase text-[color:var(--color-cream)]/45 font-medium">
    {children}
  </span>
);

// Intensity bar — small horizontal segments, red filled
const IntensityBar = ({ level, label }: { level: number; label: string }) => (
  <div className="flex items-end gap-3">
    <div className="flex items-end gap-[3px] h-4">
      {[1, 2, 3, 4, 5].map((b) => (
        <span
          key={b}
          className="block w-[6px]"
          style={{
            height: `${30 + b * 14}%`,
            background: b <= level ? '#e41313' : 'rgba(244,236,224,0.14)',
          }}
        />
      ))}
    </div>
    <span className="text-[10px] tracking-[0.28em] uppercase text-[color:var(--color-cream)]/45 font-medium">
      {label}
    </span>
  </div>
);

export default function Classes() {
  const hiitIntensity = intensityScale[hiit.intensity] ?? 5;

  return (
    <section
      id="classes"
      className="relative bg-[#0c0a08] text-[color:var(--color-cream)] py-24 sm:py-32 lg:py-40 overflow-hidden"
    >
      {/* atmospheric red glow — single, off-canvas — gives the dark some life */}
      <div
        aria-hidden
        className="absolute -top-32 right-[-12%] w-[720px] h-[720px] pointer-events-none"
        style={{
          background:
            'radial-gradient(circle at center, rgba(228,19,19,0.32) 0%, rgba(228,19,19,0.08) 35%, transparent 65%)',
          filter: 'blur(80px)',
        }}
      />

      <div className="relative max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-14">

        {/* HEADLINE BLOCK — asymmetric, no eyebrow above */}
        <div className="flex items-end justify-between gap-8 lg:gap-12 mb-10 sm:mb-12">
          {/* huge bleeding headline left */}
          <h2
            data-cls-head
            className="font-display tracking-[-0.022em] leading-[0.85] text-[color:var(--color-cream)] whitespace-nowrap"
            style={{ fontSize: 'clamp(64px, 13vw, 224px)', fontWeight: 700 }}
          >
            PICK YOUR HOUR<span className="text-[#e41313]">.</span>
          </h2>

          {/* asymmetric meta stack right */}
          <div className="hidden lg:flex flex-col gap-1.5 pb-3 max-w-[280px] text-right shrink-0">
            <p data-cls-meta className="font-display text-[24px] leading-none text-[color:var(--color-cream)]" style={{ fontWeight: 600 }}>
              Six disciplines.
            </p>
            <p data-cls-meta className="font-display text-[24px] leading-none text-[color:var(--color-cream)]/65" style={{ fontWeight: 500 }}>
              Three coaches.
            </p>
            <p data-cls-meta className="text-[11px] tracking-[0.28em] uppercase text-[color:var(--color-cream)]/45 font-medium mt-3">
              One floor · Haddon Twp
            </p>
          </div>
        </div>

        {/* mobile meta — under the headline */}
        <div className="lg:hidden mb-8 text-[color:var(--color-cream)]/70 text-[14px] leading-[1.6] font-light max-w-md">
          Six disciplines. Three coaches. One floor in Haddon Township —
          every hour periodized and led by a coach who remembers your numbers.
        </div>

        {/* rule below headline (single hairline, red, scales in) */}
        <div data-cls-rule className="origin-left h-px bg-gradient-to-r from-[#e41313] via-[#e41313]/35 to-transparent mb-12 sm:mb-16" />

        {/* THE ASYMMETRIC GRID */}
        <div
          data-cls-grid
          className="grid grid-cols-12 grid-rows-[auto] gap-3 sm:gap-4"
        >

          {/* ═══════════════════════════════════════════════════════
              HIIT FORGE — DOMINANT. col 1-7, spans 2 rows.
              ═══════════════════════════════════════════════════ */}
          <article
            data-cls-hiit
            className="col-span-12 lg:col-span-7 lg:row-span-2 relative overflow-hidden min-h-[480px] sm:min-h-[600px] lg:min-h-[760px] border border-[#1a1814] hover:border-[#e41313]/60 transition-colors duration-500 group"
          >
            {/* parallaxing photo backdrop */}
            <div data-cls-hiit-img className="absolute inset-0 will-change-transform">
              <Image
                src="/images/training.jpg"
                alt="HIIT Forge training floor"
                fill
                sizes="(min-width: 1024px) 58vw, 100vw"
                className="object-cover opacity-55 transition-all duration-700 group-hover:opacity-75 group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c0a08] via-[#0c0a08]/72 to-[#0c0a08]/30" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#0c0a08]/35" />
            </div>

            {/* top-left meta strip */}
            <div className="absolute top-6 sm:top-8 left-6 sm:left-8 right-6 sm:right-8 z-10 flex items-center justify-between gap-3">
              <Meta>{hiit.category} · {hiit.duration}</Meta>
              <div className="text-[10px] tracking-[0.28em] uppercase text-[color:var(--color-cream)]/45 font-medium">
                w/ {hiit.trainer} · {hiit.spots} spots
              </div>
            </div>

            {/* bottom content */}
            <div className="absolute left-0 right-0 bottom-0 z-10 p-6 sm:p-8 lg:p-12">
              {/* massive bleeding title */}
              <h3
                className="font-display text-[color:var(--color-cream)] leading-[0.84] tracking-[-0.022em]"
                style={{ fontSize: 'clamp(56px, 9vw, 152px)', fontWeight: 700 }}
              >
                HIIT
                <br />
                FORGE<span className="text-[#e41313]">.</span>
              </h3>

              {/* description */}
              <p className="mt-6 sm:mt-7 text-[color:var(--color-cream)]/72 text-[14px] sm:text-[15px] leading-[1.65] font-light max-w-xl">
                {hiit.description}
              </p>

              {/* SCHEDULE — full 4 slots, all in red */}
              <div className="mt-7 sm:mt-8 grid grid-cols-2 sm:grid-cols-4 gap-x-4 gap-y-2 max-w-2xl">
                {hiit.schedule.map((s) => (
                  <Slot key={s} text={s} size="lg" />
                ))}
              </div>

              {/* footer — intensity + booking */}
              <div className="mt-7 sm:mt-9 pt-5 border-t border-[color:var(--color-cream)]/12 flex items-end justify-between flex-wrap gap-4">
                <IntensityBar level={hiitIntensity} label={`Intensity · ${hiit.intensity}`} />
                <a
                  href={`/classes#${hiit.id}`}
                  className="inline-flex items-center gap-3 text-[11px] sm:text-[12px] tracking-[0.28em] uppercase font-semibold text-[color:var(--color-cream)] hover:text-[#e41313] transition-colors"
                >
                  Book the hour
                  <span aria-hidden className="block w-8 h-px bg-current transition-all duration-300 group-hover:w-14" />
                </a>
              </div>
            </div>
          </article>

          {/* ═══════════════════════════════════════════════════════
              IRON TEMPLE — col 8-12, row 1. Photo + brief schedule.
              ═══════════════════════════════════════════════════ */}
          <article
            data-cls-card
            className="col-span-12 lg:col-span-5 relative overflow-hidden min-h-[330px] lg:min-h-[370px] border border-[#1a1814] hover:border-[#e41313]/60 transition-colors duration-500 group"
          >
            <div className="absolute inset-0">
              <Image
                src="/images/training.jpg"
                alt="Iron Temple"
                fill
                sizes="(min-width: 1024px) 42vw, 100vw"
                className="object-cover opacity-40 transition-all duration-700 group-hover:opacity-60 group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c0a08] via-[#0c0a08]/82 to-[#0c0a08]/50" />
            </div>

            <div className="relative z-10 h-full p-6 sm:p-7 flex flex-col justify-between">
              <div className="flex items-center justify-between gap-3">
                <Meta>{iron.category} · {iron.duration}</Meta>
                <span className="text-[10px] tracking-[0.28em] uppercase text-[color:var(--color-cream)]/45 font-medium">
                  w/ {initials(iron.trainer)}
                </span>
              </div>

              <div>
                <h3
                  className="font-display text-[color:var(--color-cream)] leading-[0.88] tracking-[-0.015em]"
                  style={{ fontSize: 'clamp(36px, 4.4vw, 60px)', fontWeight: 700 }}
                >
                  IRON TEMPLE<span className="text-[#e41313]">.</span>
                </h3>
                <p className="mt-3 text-[color:var(--color-cream)]/65 text-[13px] leading-[1.6] font-light max-w-sm">
                  Progressive strength on barbells, dumbbells, and functional patterns.
                </p>

                <div className="mt-5 flex items-end justify-between gap-4">
                  <div className="flex flex-wrap items-baseline gap-x-5 gap-y-1">
                    <Slot text={iron.schedule[0]} size="md" />
                    <Slot text={iron.schedule[1]} size="md" />
                    <span className="text-[11px] tracking-[0.22em] uppercase text-[color:var(--color-cream)]/40 font-medium">
                      +1 more
                    </span>
                  </div>
                  <IntensityBar level={intensityScale[iron.intensity] ?? 4} label="" />
                </div>
              </div>
            </div>
          </article>

          {/* ═══════════════════════════════════════════════════════
              FLOW STATE — col 8-12, row 2. NO PHOTO. Type+schedule led.
              ═══════════════════════════════════════════════════ */}
          <article
            data-cls-card
            className="col-span-12 lg:col-span-5 relative overflow-hidden min-h-[330px] lg:min-h-[370px] border border-[#1a1814] hover:border-[#e41313]/60 transition-colors duration-500 group bg-[#100e0b]"
          >
            <div className="relative z-10 h-full p-6 sm:p-7 flex flex-col justify-between">
              <div className="flex items-center justify-between gap-3">
                <Meta>{flow.category} · {flow.duration}</Meta>
                <span className="text-[10px] tracking-[0.28em] uppercase text-[color:var(--color-cream)]/45 font-medium">
                  w/ {initials(flow.trainer)}
                </span>
              </div>

              <h3
                className="font-display text-[color:var(--color-cream)] leading-[0.86] tracking-[-0.015em] mt-1"
                style={{ fontSize: 'clamp(40px, 5vw, 72px)', fontWeight: 700 }}
              >
                FLOW STATE<span className="text-[#e41313]">.</span>
              </h3>

              {/* schedule grid — the dominant element */}
              <ul className="flex flex-col gap-2 mt-5">
                {flow.schedule.map((s, idx) => (
                  <li key={s} className="flex items-baseline gap-4">
                    <span className="block w-6 h-px bg-[#e41313]/60 shrink-0 translate-y-[-4px]" />
                    <Slot text={s} size="md" />
                    {idx === 0 && (
                      <span className="ml-auto text-[10px] tracking-[0.22em] uppercase text-[color:var(--color-cream)]/35 font-medium">
                        next
                      </span>
                    )}
                  </li>
                ))}
              </ul>

              <div className="pt-4 mt-2 border-t border-[color:var(--color-cream)]/10 flex items-center justify-between">
                <IntensityBar level={intensityScale[flow.intensity] ?? 2} label={flow.intensity} />
                <a href={`/classes#${flow.id}`} className="text-[10px] tracking-[0.28em] uppercase font-semibold text-[#e41313] hover:underline">
                  Open →
                </a>
              </div>
            </div>
          </article>

          {/* ═══════════════════════════════════════════════════════
              ROW 3 — three uneven small cards:
              VELOCITY (4) · COMBAT (5, type-bleed) · RECOVER (3, tiny)
              ═══════════════════════════════════════════════════ */}

          {/* VELOCITY CYCLE — col 1-4, intensity-bar focused */}
          <article
            data-cls-card
            className="col-span-12 sm:col-span-6 lg:col-span-4 relative overflow-hidden min-h-[280px] border border-[#1a1814] hover:border-[#e41313]/60 transition-colors duration-500 group"
          >
            <div className="absolute inset-0">
              <Image
                src="/images/cycling.jpg"
                alt="Velocity Cycle"
                fill
                sizes="(min-width: 1024px) 33vw, 50vw"
                className="object-cover opacity-30 transition-all duration-700 group-hover:opacity-55"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c0a08] via-[#0c0a08]/85 to-[#0c0a08]/55" />
            </div>

            <div className="relative z-10 h-full p-5 sm:p-6 flex flex-col justify-between">
              <div className="flex items-center justify-between gap-2">
                <Meta>{velocity.category} · {velocity.duration}</Meta>
              </div>

              <div>
                <h3
                  className="font-display text-[color:var(--color-cream)] leading-[0.86] tracking-[-0.012em]"
                  style={{ fontSize: 'clamp(28px, 3.4vw, 44px)', fontWeight: 700 }}
                >
                  VELOCITY
                  <br />
                  CYCLE<span className="text-[#e41313]">.</span>
                </h3>

                <div className="mt-5 flex items-end justify-between">
                  <div>
                    <Slot text={velocity.schedule[0]} size="md" />
                    <div className="text-[10px] tracking-[0.22em] uppercase text-[color:var(--color-cream)]/40 mt-1 font-medium">
                      +3 more weekly
                    </div>
                  </div>
                  <IntensityBar level={intensityScale[velocity.intensity] ?? 5} label="" />
                </div>
              </div>
            </div>
          </article>

          {/* COMBAT READY — col 5-9, type-bleed treatment (no photo) */}
          <article
            data-cls-card
            className="col-span-12 sm:col-span-6 lg:col-span-5 relative overflow-hidden min-h-[280px] border border-[#1a1814] hover:border-[#e41313]/60 transition-colors duration-500 group bg-[#100e0b]"
          >
            {/* atmospheric red wash from top-right corner */}
            <div
              aria-hidden
              className="absolute top-0 right-0 w-1/2 h-1/2 pointer-events-none opacity-65 group-hover:opacity-90 transition-opacity duration-500"
              style={{
                background:
                  'radial-gradient(circle at top right, rgba(228,19,19,0.32) 0%, transparent 70%)',
              }}
            />

            <div className="relative z-10 h-full p-5 sm:p-6 flex flex-col justify-between">
              <Meta>{combat.category} · {combat.duration}</Meta>

              {/* type that bleeds slightly off the right edge */}
              <h3
                className="font-display text-[color:var(--color-cream)] leading-[0.86] tracking-[-0.018em] whitespace-nowrap"
                style={{
                  fontSize: 'clamp(42px, 5.6vw, 80px)',
                  fontWeight: 700,
                  transform: 'translateX(0)',
                }}
              >
                COMBAT
                <br />
                READY<span className="text-[#e41313]">.</span>
              </h3>

              <div className="flex items-end justify-between gap-4">
                <div className="flex flex-wrap items-baseline gap-x-5 gap-y-1">
                  {combat.schedule.map((s) => (
                    <Slot key={s} text={s} size="sm" />
                  ))}
                </div>
                <IntensityBar level={intensityScale[combat.intensity] ?? 5} label="" />
              </div>
            </div>
          </article>

          {/* RECOVER & RESET — col 10-12, tiniest, calm */}
          <article
            data-cls-card
            className="col-span-12 sm:col-span-12 lg:col-span-3 relative overflow-hidden min-h-[280px] border border-[#1a1814] hover:border-[#e41313]/60 transition-colors duration-500 group bg-[#0d0b09]"
          >
            <div className="relative z-10 h-full p-5 flex flex-col justify-between">
              <Meta>{recover.category} · {recover.duration}</Meta>

              <div>
                <h3
                  className="font-display text-[color:var(--color-cream)] leading-[0.9] tracking-[-0.01em]"
                  style={{ fontSize: 'clamp(22px, 2.4vw, 30px)', fontWeight: 600 }}
                >
                  Recover
                  <br />
                  &amp; Reset<span className="text-[#e41313]">.</span>
                </h3>
                <p className="mt-2 text-[color:var(--color-cream)]/55 text-[12px] leading-[1.6] font-light">
                  Mobility, foam, breath. Reset for the next hour.
                </p>
              </div>

              <div className="flex flex-col gap-1">
                <Slot text={recover.schedule[0]} size="sm" />
                <span className="text-[10px] tracking-[0.22em] uppercase text-[color:var(--color-cream)]/35 font-medium">
                  + 2 more · all level
                </span>
              </div>
            </div>
          </article>
        </div>

        {/* bottom rule — small footer note, no eyebrow */}
        <div className="mt-14 pt-7 border-t border-[color:var(--color-cream)]/10 flex items-center justify-between flex-wrap gap-4">
          <p className="text-[12px] sm:text-[13px] text-[color:var(--color-cream)]/55 leading-[1.5] font-light max-w-md">
            Schedule live · updated weekly. Walk in for the trial hour — no booking, no paperwork.
          </p>
          <a
            href="/classes"
            className="inline-flex items-center gap-3 text-[11px] tracking-[0.28em] uppercase font-semibold text-[color:var(--color-cream)] hover:text-[#e41313] transition-colors"
          >
            Full week schedule
            <span aria-hidden className="block w-8 h-px bg-current transition-all duration-300 hover:w-16" />
          </a>
        </div>
      </div>
    </section>
  );
}
