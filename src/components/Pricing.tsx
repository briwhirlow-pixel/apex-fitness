import { pricingTiers } from '@/lib/data';

export default function Pricing() {
  return (
    <section id="memberships" className="py-16 sm:py-24 lg:py-28">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">

        <div className="reveal-up max-w-2xl mb-10 sm:mb-14">
          <h2
            className="font-display text-ink leading-[0.92] text-balance"
            style={{ fontSize: 'clamp(36px, 6vw, 72px)' }}
          >
            One price. No surprises.
          </h2>
          <p className="mt-4 text-ink-muted text-[16px] leading-[1.65] max-w-lg text-pretty">
            No joining fee. No contract. Cancel any month with two weeks notice.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1fr_1.5fr_1fr] gap-4 sm:gap-5 items-start">
          {pricingTiers.map((t, idx) => {
            const featured = t.highlighted;
            return (
              <article
                key={t.name}
                className={`reveal-up ${idx === 1 ? 'reveal-d1' : idx === 2 ? 'reveal-d2' : ''} p-6 sm:p-8 flex flex-col ${
                  featured
                    ? 'bg-ink text-white lg:-my-4 lg:py-12'
                    : 'bg-white border border-edge'
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-[13px] font-semibold tracking-[0.02em] ${
                    featured ? 'text-accent-subtle' : 'text-ink-muted'
                  }`}>
                    {t.name}
                  </span>
                  {featured && (
                    <span className="text-[11px] font-medium text-white/45">
                      Most chosen
                    </span>
                  )}
                </div>

                <div className="flex items-baseline gap-1 mb-1">
                  <span
                    className={`font-display leading-none tracking-[-0.02em] ${
                      featured ? 'text-white' : 'text-ink'
                    }`}
                    style={{ fontSize: featured ? 'clamp(52px, 6vw, 80px)' : 'clamp(44px, 5vw, 64px)' }}
                  >
                    {t.price}
                  </span>
                </div>
                <div className={`text-[13px] font-medium mb-5 ${
                  featured ? 'text-white/45' : 'text-ink-muted'
                }`}>
                  {t.period}
                </div>

                <p className={`text-[14px] leading-[1.6] mb-6 pb-6 border-b text-pretty ${
                  featured ? 'text-white/60 border-white/12' : 'text-ink-muted border-edge'
                }`}>
                  {t.description}
                </p>

                <ul className="flex flex-col gap-2.5 mb-8 flex-1">
                  {t.features.map((f) => (
                    <li key={f} className={`flex items-start gap-3 text-[14px] leading-[1.55] ${
                      featured ? 'text-white/75' : 'text-ink'
                    }`}>
                      <svg className={`w-4 h-4 mt-0.5 shrink-0 ${featured ? 'text-accent-subtle' : 'text-accent'}`} fill="none" viewBox="0 0 16 16" stroke="currentColor" strokeWidth="2">
                        <path d="M3 8.5l3.5 3.5 6.5-7" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>

                <a
                  href="/#freepass"
                  className={`inline-flex items-center justify-center px-5 py-4 text-[14px] font-semibold tracking-[0.01em] transition-colors ${
                    featured
                      ? 'bg-white text-ink hover:bg-white/90'
                      : 'border-[1.5px] border-edge text-ink hover:bg-ink hover:text-white hover:border-ink'
                  }`}
                >
                  {t.cta}
                </a>
              </article>
            );
          })}
        </div>

        <p className="reveal-up mt-10 text-center text-[13px] text-ink-muted">
          All access · Locker rooms · Recovery lounge · Trial hour on the house
        </p>
      </div>
    </section>
  );
}
