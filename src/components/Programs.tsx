import Image from 'next/image';
import { classes } from '@/lib/data';

const photoFor: Record<string, string> = {
  'hiit-forge':    '/images/training.jpg',
  'iron-temple':   '/images/training.jpg',
  'flow-state':    '/images/yoga.jpg',
  'velocity-cycle': '/images/cycling.jpg',
  'combat-ready':  '/images/boxing.jpg',
  'recover-reset': '/images/yoga.jpg',
};

/**
 * Programs — six disciplines as full-photo cards.
 * Photo dominates, title + meta overlay bottom-left, red label inline.
 * Hover lift + subtle photo zoom.
 */
export default function Programs() {
  return (
    <section id="programs" className="relative bg-[#0c0a08] py-20 sm:py-28 lg:py-32">
      <div className="relative max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-14">

        {/* opener — asymmetric */}
        <div className="reveal-up grid lg:grid-cols-[1.4fr_1fr] gap-8 lg:gap-12 items-end mb-12 sm:mb-16">
          <div>
            <div className="font-display text-[12px] tracking-[0.32em] uppercase text-[#e41313] mb-4" style={{ fontWeight: 700 }}>
              Programs
            </div>
            <h2
              className="font-display text-[color:var(--color-cream)] leading-[0.88] tracking-[-0.015em]"
              style={{ fontSize: 'clamp(44px, 7vw, 112px)', fontWeight: 700 }}
            >
              SIX WAYS TO BREAK
              <br />
              YOUR HOUR<span className="text-[#e41313]">.</span>
            </h2>
          </div>
          <p className="text-[color:var(--color-cream)]/72 text-[15px] sm:text-[16px] leading-[1.7] font-light max-w-md">
            Every program is periodized, every coach is on the floor. Pick a discipline, clock the hour, the coaches handle the rest.
          </p>
        </div>

        {/* CARD GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {classes.map((c, idx) => (
            <a
              key={c.id}
              href="/#freepass"
              className={`program-card reveal-up relative block overflow-hidden bg-[#0c0a08] min-h-[340px] sm:min-h-[400px] lg:min-h-[440px] ${
                idx % 3 === 0 ? '' : idx % 3 === 1 ? 'reveal-d1' : 'reveal-d2'
              }`}
            >
              <div className="program-img absolute inset-0">
                <Image
                  src={photoFor[c.id] || '/images/hero-gym.jpg'}
                  alt={c.name}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c0a08] via-[#0c0a08]/55 to-transparent" />

              {/* category top */}
              <div className="absolute top-5 left-5 right-5 flex items-center justify-between">
                <span
                  className="font-display text-[10px] tracking-[0.32em] uppercase text-[color:var(--color-cream)] bg-[#e41313] px-2.5 py-1"
                  style={{ fontWeight: 700 }}
                >
                  {c.category}
                </span>
                <span className="font-display text-[10px] tracking-[0.28em] uppercase text-[color:var(--color-cream)]/70" style={{ fontWeight: 600 }}>
                  {c.duration}
                </span>
              </div>

              {/* bottom content */}
              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                <h3
                  className="font-display text-[color:var(--color-cream)] leading-[0.92] tracking-[-0.012em] mb-2"
                  style={{ fontSize: 'clamp(28px, 3.4vw, 44px)', fontWeight: 700 }}
                >
                  {c.name.toUpperCase()}
                </h3>
                <p className="text-[color:var(--color-cream)]/75 text-[13px] leading-[1.55] font-light line-clamp-2 mb-4">
                  {c.description}
                </p>
                <div className="flex items-center justify-between pt-3 border-t border-[color:var(--color-cream)]/15">
                  <span className="text-[10px] tracking-[0.28em] uppercase text-[color:var(--color-cream)]/55 font-medium">
                    w/ {c.trainer}
                  </span>
                  <span className="font-display text-[11px] tracking-[0.22em] uppercase text-[#e41313]" style={{ fontWeight: 700 }}>
                    View schedule →
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
