import Image from 'next/image';
import { trainers } from '@/lib/data';

const photoFor: Record<string, string> = {
  'Maya Reid':  '/images/trainer.jpg',
  'Sofia Chen': '/images/yoga.jpg',
  'Dani Banks': '/images/boxing.jpg',
};

export default function Trainers() {
  return (
    <section id="trainers" className="py-16 sm:py-24 lg:py-28 bg-surface">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">

        <div className="reveal-up max-w-2xl mb-12 sm:mb-16">
          <h2
            className="font-display text-ink leading-[0.92] text-balance"
            style={{ fontSize: 'clamp(36px, 6vw, 72px)' }}
          >
            On the floor. Every hour.
          </h2>
          <p className="mt-4 text-ink-muted text-[16px] leading-[1.65] max-w-lg text-pretty">
            Three residents who run the floor. They remember your numbers, your form, and what you said you would come back for.
          </p>
        </div>

        <div className="flex flex-col gap-5 sm:gap-6">
          {trainers.map((t, idx) => {
            const isReversed = idx % 2 === 1;
            return (
              <article
                key={t.name}
                className={`reveal-up ${idx === 1 ? 'reveal-d1' : idx === 2 ? 'reveal-d2' : ''} grid grid-cols-1 lg:grid-cols-2 gap-0 overflow-hidden bg-white`}
              >
                <div className={`relative min-h-[280px] sm:min-h-[340px] lg:min-h-[420px] ${isReversed ? 'lg:order-2' : ''}`}>
                  <Image
                    src={photoFor[t.name]}
                    alt={`${t.name}, ${t.title}`}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className={`p-6 sm:p-8 lg:p-12 flex flex-col justify-center ${isReversed ? 'lg:order-1' : ''}`}>
                  <div className="text-[12px] tracking-[0.04em] font-semibold text-accent mb-3">
                    {t.specialty}
                  </div>
                  <h3 className="font-display text-ink leading-[0.94]" style={{ fontSize: 'clamp(28px, 3.5vw, 44px)' }}>
                    {t.name}
                  </h3>
                  <div className="text-[14px] text-ink-muted font-medium mt-1 mb-4">
                    {t.title}
                  </div>
                  <p className="text-[15px] text-ink-muted leading-[1.65] text-pretty">
                    {t.bio}
                  </p>
                  <div className="mt-6 pt-5 border-t border-edge flex flex-wrap items-center gap-2">
                    {t.certifications.map((cert) => (
                      <span key={cert} className="text-[12px] tracking-[0.04em] font-semibold text-ink-muted px-2.5 py-1.5 border border-edge">
                        {cert}
                      </span>
                    ))}
                  </div>
                  <div className="mt-4 text-[13px] text-ink-muted">
                    Teaches {t.teaches}
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
