import Image from 'next/image';
import { trainers } from '@/lib/data';

const coachPhoto: Record<string, string> = {
  'Maya Reid':  '/images/trainer.jpg',
  'Sofia Chen': '/images/yoga.jpg',
  'Dani Banks': '/images/boxing.jpg',
};

/**
 * Coaches — head coach left 60%, two others split right 40%.
 * Asymmetric. No three equal cards. No § eyebrow. No dashes.
 * Background: #100e0b
 */
export default function Trainers() {
  const [head, second, third] = trainers; // Maya, Sofia, Dani

  return (
    <section
      id="trainers"
      className="relative bg-[#100e0b] text-[color:var(--color-cream)] py-20 sm:py-28 lg:py-36 overflow-hidden"
    >
      {/* atmospheric off-canvas glow */}
      <div
        aria-hidden
        className="absolute -bottom-32 -left-20 w-[640px] h-[640px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle at center, rgba(228,19,19,0.20) 0%, transparent 65%)',
          filter: 'blur(80px)',
        }}
      />

      <div className="relative max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-14">

        {/* Section opener */}
        <div className="grid lg:grid-cols-[1.6fr_1fr] gap-10 lg:gap-16 items-end mb-12 sm:mb-16">
          <h2
            className="font-display tracking-[-0.022em] leading-[0.86] text-[color:var(--color-cream)]"
            style={{ fontSize: 'clamp(56px, 9vw, 144px)', fontWeight: 700 }}
          >
            THE COACHES
            <span className="text-[#e41313]">.</span>
          </h2>
          <p className="text-[color:var(--color-cream)]/70 text-[15px] sm:text-[16px] leading-[1.7] font-light lg:pb-3 max-w-md">
            Three residents on the floor. They remember your numbers, what you said you would come back for, and whether your form is where it should be.
          </p>
        </div>

        {/* 60/40 ASYMMETRIC GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6">

          {/* LEFT 60% — HEAD COACH */}
          <article className="lg:col-span-7 relative overflow-hidden min-h-[520px] lg:min-h-[720px]">
            <Image
              src={coachPhoto[head.name]}
              alt={`${head.name}, ${head.title}`}
              fill
              sizes="(min-width: 1024px) 58vw, 100vw"
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#100e0b] via-[#100e0b]/55 to-transparent" />

            {/* content overlaid bottom */}
            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-10 lg:p-12">
              {/* role in small caps */}
              <div className="text-[10px] tracking-[0.32em] uppercase text-[#e41313] font-semibold mb-4">
                {head.title}
              </div>

              {/* name in Oswald 700 */}
              <h3
                className="font-display text-[color:var(--color-cream)] leading-[0.86] tracking-[-0.018em]"
                style={{ fontSize: 'clamp(44px, 6.5vw, 96px)', fontWeight: 700 }}
              >
                {head.name.toUpperCase()}
                <span className="text-[#e41313]">.</span>
              </h3>

              {/* bio in Inter 300 */}
              <p
                className="mt-5 text-[color:var(--color-cream)]/75 text-[15px] sm:text-[16px] leading-[1.7] max-w-xl"
                style={{ fontWeight: 300 }}
              >
                {head.bio}
              </p>

              <div className="mt-6 pt-5 border-t border-[color:var(--color-cream)]/20 grid grid-cols-3 gap-4 text-[10px] tracking-[0.28em] uppercase font-medium">
                <div>
                  <div className="text-[color:var(--color-cream)]/45 mb-1">Teaches</div>
                  <div className="text-[color:var(--color-cream)]">{head.classes.join(' · ')}</div>
                </div>
                <div>
                  <div className="text-[color:var(--color-cream)]/45 mb-1">Floor</div>
                  <div className="text-[color:var(--color-cream)]">{head.teaches}</div>
                </div>
                <div>
                  <div className="text-[color:var(--color-cream)]/45 mb-1">Specialty</div>
                  <div className="text-[color:var(--color-cream)]">{head.specialty.split(' · ')[0]}</div>
                </div>
              </div>
            </div>
          </article>

          {/* RIGHT 40% — TWO COACHES STACKED */}
          <div className="lg:col-span-5 grid grid-cols-1 gap-5 sm:gap-6">

            {/* Sofia — top half of right column */}
            <article className="relative overflow-hidden min-h-[260px] lg:min-h-[345px]">
              <Image
                src={coachPhoto[second.name]}
                alt={`${second.name}, ${second.title}`}
                fill
                sizes="(min-width: 1024px) 38vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#100e0b] via-[#100e0b]/55 to-transparent" />

              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7">
                <div className="text-[10px] tracking-[0.32em] uppercase text-[#e41313] font-semibold mb-3">
                  {second.title}
                </div>
                <h3
                  className="font-display text-[color:var(--color-cream)] leading-[0.9] tracking-[-0.012em]"
                  style={{ fontSize: 'clamp(28px, 3.2vw, 42px)', fontWeight: 700 }}
                >
                  {second.name.toUpperCase()}
                </h3>
                <p
                  className="mt-2 text-[color:var(--color-cream)]/70 text-[13px] leading-[1.6]"
                  style={{ fontWeight: 300 }}
                >
                  {second.specialty}
                </p>
                <div className="mt-3 text-[10px] tracking-[0.24em] uppercase text-[color:var(--color-cream)]/55 font-medium">
                  Floor: {second.teaches}
                </div>
              </div>
            </article>

            {/* Dani — bottom half of right column */}
            <article className="relative overflow-hidden min-h-[260px] lg:min-h-[345px]">
              <Image
                src={coachPhoto[third.name]}
                alt={`${third.name}, ${third.title}`}
                fill
                sizes="(min-width: 1024px) 38vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#100e0b] via-[#100e0b]/55 to-transparent" />

              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7">
                <div className="text-[10px] tracking-[0.32em] uppercase text-[#e41313] font-semibold mb-3">
                  {third.title}
                </div>
                <h3
                  className="font-display text-[color:var(--color-cream)] leading-[0.9] tracking-[-0.012em]"
                  style={{ fontSize: 'clamp(28px, 3.2vw, 42px)', fontWeight: 700 }}
                >
                  {third.name.toUpperCase()}
                </h3>
                <p
                  className="mt-2 text-[color:var(--color-cream)]/70 text-[13px] leading-[1.6]"
                  style={{ fontWeight: 300 }}
                >
                  {third.specialty}
                </p>
                <div className="mt-3 text-[10px] tracking-[0.24em] uppercase text-[color:var(--color-cream)]/55 font-medium">
                  Floor: {third.teaches}
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
