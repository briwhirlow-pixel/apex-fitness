import { testimonials } from '@/lib/data';

/**
 * The Voice. One big quote from a real member.
 *
 * Layout: single dominant quote — Jasmine T. — taking ~70% of the section.
 * Two secondary quotes below in a 1.6fr / 1fr asymmetric split.
 * Background: warm cream (#f0ece4) for contrast with Trainers (dark) above.
 * Italic serif used here is a quoted block (a quotation), not a headline accent.
 */
export default function Testimonials() {
  const [feature, second, third] = testimonials;

  return (
    <section
      className="relative bg-[#f0ece4] text-[color:var(--color-ink)] py-24 sm:py-32 lg:py-40 overflow-hidden"
    >
      <div className="relative max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-14">

        {/* DOMINANT QUOTE BLOCK */}
        <div className="grid lg:grid-cols-[1.6fr_1fr] gap-10 lg:gap-16 items-start">

          {/* LEFT: massive serif italic quote — this italic is a QUOTATION, allowed */}
          <blockquote className="relative">
            <p
              className="font-serif-italic text-[color:var(--color-ink)] leading-[1.16] tracking-[-0.005em]"
              style={{ fontSize: 'clamp(34px, 5.4vw, 88px)', fontWeight: 400 }}
            >
              &ldquo;{feature.text.split('. ').slice(0, 2).join('. ')}.&rdquo;
            </p>

            <div className="mt-10 pt-6 border-t border-[color:var(--color-ink)]/20 flex items-center justify-between flex-wrap gap-4">
              <div>
                <div className="font-display text-[color:var(--color-ink)] text-[18px] sm:text-[20px] tracking-[0.04em]" style={{ fontWeight: 600 }}>
                  {feature.name}
                </div>
                <div className="mt-1 text-[11px] tracking-[0.28em] uppercase text-[color:var(--color-ink)]/55 font-medium">
                  {feature.class} · {feature.date}
                </div>
              </div>
              <div className="text-right">
                <div className="text-[10px] tracking-[0.32em] uppercase text-[#e41313] font-semibold mb-1">
                  The result
                </div>
                <div className="font-display text-[color:var(--color-ink)] text-[20px] sm:text-[24px] tracking-[-0.01em]" style={{ fontWeight: 600 }}>
                  {feature.highlight}
                </div>
              </div>
            </div>
          </blockquote>

          {/* RIGHT: meta column — one liner per coach pillar */}
          <aside className="lg:pl-10 lg:border-l lg:border-[color:var(--color-ink)]/15 flex flex-col gap-7 lg:pt-3">
            <p className="font-display text-[20px] sm:text-[22px] text-[color:var(--color-ink)] leading-[1.35] tracking-[-0.005em]" style={{ fontWeight: 500 }}>
              Four point nine stars. One thousand two hundred members.
            </p>
            <p className="text-[14px] sm:text-[15px] text-[color:var(--color-ink)]/65 leading-[1.7] font-light">
              The reviews are on Google. The hour is on us. Walk in any morning
              before nine and the coffee&apos;s on the house — Maya runs Tuesday strength
              at six.
            </p>
            <div className="pt-4 border-t border-[color:var(--color-ink)]/15">
              <a
                href="/contact"
                className="inline-flex items-center gap-3 text-[11px] sm:text-[12px] tracking-[0.28em] uppercase font-semibold text-[color:var(--color-ink)] hover:text-[#e41313] transition-colors"
              >
                Book the trial hour
                <span aria-hidden className="block w-8 h-px bg-current transition-all duration-300 hover:w-14" />
              </a>
            </div>
          </aside>
        </div>

        {/* SECONDARY QUOTES — asymmetric 1.6fr / 1fr (Ryan bigger than Priya) */}
        <div className="mt-20 sm:mt-28 pt-12 border-t border-[color:var(--color-ink)]/15 grid lg:grid-cols-[1.6fr_1fr] gap-10 lg:gap-16">

          {/* Ryan — bigger */}
          <article>
            <p
              className="font-serif-italic text-[color:var(--color-ink)]/90 leading-[1.32] tracking-[-0.005em]"
              style={{ fontSize: 'clamp(22px, 3vw, 36px)', fontWeight: 400 }}
            >
              &ldquo;{second.text.split('. ').slice(0, 2).join('. ')}.&rdquo;
            </p>
            <div className="mt-6 pt-5 border-t border-[color:var(--color-ink)]/15 flex items-center justify-between gap-4">
              <div>
                <div className="font-display text-[color:var(--color-ink)] text-[15px] tracking-[0.04em]" style={{ fontWeight: 600 }}>
                  {second.name}
                </div>
                <div className="mt-0.5 text-[10px] tracking-[0.28em] uppercase text-[color:var(--color-ink)]/55 font-medium">
                  {second.class}
                </div>
              </div>
              <div className="text-[10px] tracking-[0.28em] uppercase text-[#e41313] font-semibold text-right">
                {second.highlight}
              </div>
            </div>
          </article>

          {/* Priya — smaller */}
          <article>
            <p
              className="font-serif-italic text-[color:var(--color-ink)]/85 leading-[1.4] tracking-[-0.005em]"
              style={{ fontSize: 'clamp(18px, 2vw, 24px)', fontWeight: 400 }}
            >
              &ldquo;{third.text.split('. ').slice(0, 1).join('. ')}.&rdquo;
            </p>
            <div className="mt-5 pt-4 border-t border-[color:var(--color-ink)]/15 flex items-center justify-between gap-4">
              <div>
                <div className="font-display text-[color:var(--color-ink)] text-[14px] tracking-[0.04em]" style={{ fontWeight: 600 }}>
                  {third.name}
                </div>
                <div className="mt-0.5 text-[10px] tracking-[0.28em] uppercase text-[color:var(--color-ink)]/55 font-medium">
                  {third.class}
                </div>
              </div>
              <div className="text-[10px] tracking-[0.28em] uppercase text-[#e41313] font-semibold text-right">
                {third.highlight}
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
