import Image from 'next/image';
import { classes } from '@/lib/data';

const photoFor: Record<string, string> = {
  'hiit-forge':     '/images/training.jpg',
  'iron-temple':    '/images/training.jpg',
  'flow-state':     '/images/yoga.jpg',
  'velocity-cycle': '/images/cycling.jpg',
  'combat-ready':   '/images/boxing.jpg',
  'recover-reset':  '/images/yoga.jpg',
};

export default function Programs() {
  const featured = classes.slice(0, 2);
  const rest = classes.slice(2);

  return (
    <section id="programs" className="py-16 sm:py-24 lg:py-28">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">

        <div className="reveal-up max-w-2xl mb-10 sm:mb-14">
          <h2
            className="font-display text-ink leading-[0.92] text-balance"
            style={{ fontSize: 'clamp(36px, 6vw, 72px)' }}
          >
            Six ways to break your hour.
          </h2>
          <p className="mt-4 text-ink-muted text-[16px] leading-[1.65] max-w-lg text-pretty">
            Every program is periodized, every coach is on the floor. Pick a discipline, clock the hour.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-3 mb-3">
          {featured.map((c, idx) => (
            <div
              key={c.id}
              className={`program-card reveal-up ${idx === 1 ? 'reveal-d1' : ''} relative overflow-hidden min-h-[340px] sm:min-h-[440px]`}
            >
              <div className="program-img absolute inset-0">
                <Image
                  src={photoFor[c.id]}
                  alt={c.name}
                  fill
                  sizes="(min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7">
                <div className="text-[11px] tracking-[0.04em] font-medium text-white/55 mb-2">
                  {c.category} · {c.duration} · {c.spots} spots
                </div>
                <h3 className="font-display text-white leading-[0.94] text-balance" style={{ fontSize: 'clamp(28px, 3.5vw, 42px)' }}>
                  {c.name}
                </h3>
                <p className="mt-2 text-white/65 text-[14px] leading-[1.55] line-clamp-2 text-pretty">
                  {c.description}
                </p>
                <div className="mt-3 text-[12px] text-white/45 font-medium">
                  w/ {c.trainer} · {c.schedule[0]}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {rest.map((c, idx) => (
            <div
              key={c.id}
              className={`program-card reveal-up ${
                idx === 1 ? 'reveal-d1' : idx === 2 ? 'reveal-d2' : idx === 3 ? 'reveal-d3' : ''
              } relative overflow-hidden min-h-[240px] sm:min-h-[300px]`}
            >
              <div className="program-img absolute inset-0">
                <Image
                  src={photoFor[c.id]}
                  alt={c.name}
                  fill
                  sizes="(min-width: 1024px) 25vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
                <div className="text-[10px] tracking-[0.04em] font-medium text-white/50 mb-1.5">
                  {c.category} · {c.duration}
                </div>
                <h3 className="font-display text-white leading-[0.94]" style={{ fontSize: 'clamp(20px, 2.5vw, 28px)' }}>
                  {c.name}
                </h3>
                <div className="mt-2 text-[11px] text-white/40 font-medium">
                  w/ {c.trainer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
