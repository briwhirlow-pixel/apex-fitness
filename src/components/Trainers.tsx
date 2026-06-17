import Image from 'next/image';
import { trainers } from '@/lib/data';

const coachPhoto: Record<string, string> = {
  'Maya Reid':   '/images/trainer.jpg',
  'Sofia Chen':  '/images/yoga.jpg',
  'Dani Banks':  '/images/boxing.jpg',
};

/**
 * Coaches, not salespeople.
 *
 * Asymmetric: featured coach (Maya) takes 7/12 cols full-height,
 * other two stacked vertically in 5/12. Three different visual weights.
 * Background: warm near-black #0c0a08. No § eyebrow, no Nº labels,
 * no italic underline, no rounded cards, no drop shadows.
 */
export default function Trainers() {
  const [featured, secondary, tertiary] = trainers; // Maya, Sofia, Dani

  return (
    <section
      id="trainers"
      className="relative bg-[#0c0a08] text-[color:var(--color-cream)] py-24 sm:py-32 lg:py-40 overflow-hidden"
    >
      {/* single atmospheric red glow, off-canvas */}
      <div
        aria-hidden
        className="absolute -bottom-40 -left-32 w-[640px] h-[640px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle at center, rgba(228,19,19,0.28) 0%, transparent 65%)',
          filter: 'blur(80px)',
        }}
      />

      <div className="relative max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-14">

        {/* ASYMMETRIC HEAD */}
        <div className="grid lg:grid-cols-[1.6fr_1fr] gap-10 lg:gap-16 items-end mb-14 sm:mb-20">
          <h2
            className="font-display tracking-[-0.022em] leading-[0.86] text-[color:var(--color-cream)]"
            style={{ fontSize: 'clamp(56px, 9vw, 152px)', fontWeight: 700 }}
          >
            COACHES,
            <br />
            NOT SALESPEOPLE<span className="text-[#e41313]">.</span>
          </h2>
          <p className="text-[color:var(--color-cream)]/72 text-[15px] sm:text-[16px] leading-[1.7] font-light max-w-md lg:pb-3">
            Three residents on the floor. They remember your numbers, what you said
            you&apos;d come back for, and whether your form is finally where it should be.
          </p>
        </div>

        {/* MOSAIC — featured 7/12 (spans 2 rows on lg), other two stacked 5/12 */}
        <div className="grid grid-cols-12 grid-rows-1 lg:grid-rows-2 gap-4 sm:gap-5">

          {/* FEATURED — Maya Reid */}
          <article className="col-span-12 lg:col-span-7 lg:row-span-2 relative overflow-hidden min-h-[460px] lg:min-h-[760px] border border-[#1a1814] hover:border-[#e41313]/60 transition-colors duration-500">
            <Image
              src={coachPhoto[featured.name] || '/images/trainer.jpg'}
              alt={`${featured.name}, ${featured.title}`}
              fill
              sizes="(min-width: 1024px) 58vw, 100vw"
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0c0a08] via-[#0c0a08]/65 to-transparent" />

            <div className="absolute inset-x-0 bottom-0 z-10 p-6 sm:p-8 lg:p-12">
              <div className="text-[10px] tracking-[0.32em] uppercase text-[#e41313] font-semibold mb-4">
                {featured.title}
              </div>

              <h3
                className="font-display text-[color:var(--color-cream)] leading-[0.86] tracking-[-0.018em]"
                style={{ fontSize: 'clamp(40px, 5.6vw, 80px)', fontWeight: 700 }}
              >
                {featured.name}<span className="text-[#e41313]">.</span>
              </h3>

              <p className="mt-4 text-[color:var(--color-cream)]/72 text-[14px] sm:text-[15px] leading-[1.65] font-light max-w-xl">
                {featured.bio}
              </p>

              <div className="mt-7 pt-5 border-t border-[color:var(--color-cream)]/15 grid grid-cols-2 sm:grid-cols-3 gap-4 text-[10px] tracking-[0.24em] uppercase font-medium">
                <div>
                  <div className="text-[color:var(--color-cream)]/45 mb-1">Teaches</div>
                  <div className="text-[color:var(--color-cream)]">{featured.classes.join(' · ')}</div>
                </div>
                <div>
                  <div className="text-[color:var(--color-cream)]/45 mb-1">Floor</div>
                  <div className="text-[color:var(--color-cream)]">{featured.teaches}</div>
                </div>
                <div className="hidden sm:block">
                  <div className="text-[color:var(--color-cream)]/45 mb-1">Specialty</div>
                  <div className="text-[color:var(--color-cream)]">{featured.specialty.split(' · ')[0]}</div>
                </div>
              </div>
            </div>
          </article>

          {/* SECONDARY — Sofia */}
          <article className="col-span-12 sm:col-span-6 lg:col-span-5 relative overflow-hidden min-h-[340px] lg:min-h-[370px] border border-[#1a1814] hover:border-[#e41313]/60 transition-colors duration-500">
            <Image
              src={coachPhoto[secondary.name] || '/images/yoga.jpg'}
              alt={`${secondary.name}, ${secondary.title}`}
              fill
              sizes="(min-width: 1024px) 42vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0c0a08] via-[#0c0a08]/60 to-transparent" />

            <div className="absolute inset-x-0 bottom-0 z-10 p-6 sm:p-7">
              <div className="text-[10px] tracking-[0.32em] uppercase text-[#e41313] font-semibold mb-3">
                {secondary.title}
              </div>
              <h3
                className="font-display text-[color:var(--color-cream)] leading-[0.9] tracking-[-0.015em]"
                style={{ fontSize: 'clamp(30px, 3.2vw, 44px)', fontWeight: 700 }}
              >
                {secondary.name}
              </h3>
              <p className="mt-3 text-[color:var(--color-cream)]/70 text-[13px] leading-[1.6] font-light">
                {secondary.specialty}
              </p>
              <div className="mt-4 pt-3 border-t border-[color:var(--color-cream)]/15 text-[10px] tracking-[0.24em] uppercase text-[color:var(--color-cream)]/55 font-medium">
                {secondary.teaches}
              </div>
            </div>
          </article>

          {/* TERTIARY — Dani — text-led, no overlay-only photo treatment */}
          <article className="col-span-12 sm:col-span-6 lg:col-span-5 relative overflow-hidden min-h-[340px] lg:min-h-[370px] border border-[#1a1814] hover:border-[#e41313]/60 transition-colors duration-500 bg-[#100e0b]">
            <div className="absolute right-0 top-0 bottom-0 w-1/2 sm:w-2/5">
              <Image
                src={coachPhoto[tertiary.name] || '/images/boxing.jpg'}
                alt={`${tertiary.name}, ${tertiary.title}`}
                fill
                sizes="(min-width: 1024px) 22vw, 25vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#100e0b] via-[#100e0b]/60 to-transparent" />
            </div>

            <div className="relative z-10 h-full p-6 sm:p-7 flex flex-col justify-between max-w-[60%]">
              <div className="text-[10px] tracking-[0.32em] uppercase text-[#e41313] font-semibold">
                {tertiary.title}
              </div>

              <div>
                <h3
                  className="font-display text-[color:var(--color-cream)] leading-[0.9] tracking-[-0.015em]"
                  style={{ fontSize: 'clamp(30px, 3.2vw, 44px)', fontWeight: 700 }}
                >
                  {tertiary.name}
                </h3>
                <p className="mt-3 text-[color:var(--color-cream)]/70 text-[13px] leading-[1.6] font-light">
                  {tertiary.specialty}
                </p>
              </div>

              <div className="pt-3 border-t border-[color:var(--color-cream)]/15 text-[10px] tracking-[0.24em] uppercase text-[color:var(--color-cream)]/55 font-medium">
                {tertiary.teaches}
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
