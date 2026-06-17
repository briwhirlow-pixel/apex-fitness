import Image from 'next/image';
import { trainers } from '@/lib/data';

const photoFor: Record<string, string> = {
  'Maya Reid':  '/images/trainer.jpg',
  'Sofia Chen': '/images/yoga.jpg',
  'Dani Banks': '/images/boxing.jpg',
};

/**
 * Coaches — three resident coaches.
 * Featured coach gets a wider card (asymmetric 1.4fr / 1fr / 1fr).
 * Photo with bottom-overlay name + role + bio + classes taught.
 */
export default function Trainers() {
  const [head, second, third] = trainers;

  return (
    <section id="trainers" className="relative bg-[#100e0b] py-20 sm:py-28 lg:py-32">
      <div className="relative max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-14">

        {/* opener */}
        <div className="reveal-up grid lg:grid-cols-[1.4fr_1fr] gap-8 lg:gap-12 items-end mb-12 sm:mb-16">
          <div>
            <div className="font-display text-[12px] tracking-[0.32em] uppercase text-[#e41313] mb-4" style={{ fontWeight: 700 }}>
              Resident Coaches
            </div>
            <h2
              className="font-display text-[color:var(--color-cream)] leading-[0.88] tracking-[-0.015em]"
              style={{ fontSize: 'clamp(44px, 7vw, 112px)', fontWeight: 700 }}
            >
              ON THE FLOOR.
              <br />
              EVERY HOUR<span className="text-[#e41313]">.</span>
            </h2>
          </div>
          <p className="text-[color:var(--color-cream)]/72 text-[15px] sm:text-[16px] leading-[1.7] font-light max-w-md">
            Three residents who run the floor. They remember your numbers, your form, and what you said you would come back for.
          </p>
        </div>

        {/* GRID — featured 1.4fr / 1fr / 1fr */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr_1fr] gap-3 sm:gap-4">
          {[head, second, third].map((t, idx) => {
            const featured = idx === 0;
            return (
              <article
                key={t.name}
                className={`program-card reveal-up relative overflow-hidden bg-[#0c0a08] ${
                  idx === 0 ? '' : idx === 1 ? 'reveal-d1' : 'reveal-d2'
                } ${featured ? 'min-h-[460px] lg:min-h-[640px]' : 'min-h-[380px] lg:min-h-[640px]'}`}
              >
                <div className="program-img absolute inset-0">
                  <Image
                    src={photoFor[t.name]}
                    alt={`${t.name}, ${t.title}`}
                    fill
                    sizes={featured ? '(min-width: 1024px) 42vw, 100vw' : '(min-width: 1024px) 29vw, 100vw'}
                    className="object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c0a08] via-[#0c0a08]/55 to-transparent" />

                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 lg:p-8">
                  <div className="font-display text-[11px] tracking-[0.32em] uppercase text-[#e41313] mb-3" style={{ fontWeight: 700 }}>
                    {t.title}
                  </div>
                  <h3
                    className="font-display text-[color:var(--color-cream)] leading-[0.9] tracking-[-0.012em]"
                    style={{
                      fontSize: featured ? 'clamp(32px, 4vw, 56px)' : 'clamp(26px, 3vw, 38px)',
                      fontWeight: 700,
                    }}
                  >
                    {t.name.toUpperCase()}
                  </h3>
                  <p
                    className={`mt-3 text-[color:var(--color-cream)]/75 leading-[1.65] font-light ${
                      featured ? 'text-[14px] sm:text-[15px]' : 'text-[13px]'
                    }`}
                  >
                    {featured ? t.bio : t.specialty}
                  </p>
                  <div className="mt-5 pt-4 border-t border-[color:var(--color-cream)]/15 flex items-center justify-between">
                    <span className="text-[10px] tracking-[0.28em] uppercase text-[color:var(--color-cream)]/55 font-medium">
                      Teaches {t.classes.join(' · ')}
                    </span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
