import { testimonials } from '@/lib/data';

export default function Testimonials() {
  const lead = testimonials[0];
  const rest = testimonials.slice(1);

  return (
    <section className="relative py-28 sm:py-36 overflow-hidden bg-[color:var(--color-bone-soft)]">

      <div className="relative max-w-[1400px] mx-auto px-6 sm:px-10">

        {/* Section masthead */}
        <div className="grid grid-cols-12 gap-x-6 sm:gap-x-8 items-end mb-14 sm:mb-20">
          <div className="col-span-12 lg:col-span-8">
            <div className="flex items-center gap-4 mb-5">
              <span className="font-mono text-[10px] sm:text-[11px] tracking-[0.22em] uppercase text-[color:var(--color-ember)]">
                § 05 — From the Floor
              </span>
              <span className="h-px flex-1 bg-[color:var(--color-ink)]/20" />
            </div>
            <h2
              className="serif-display tracking-[-0.025em] leading-[0.95] text-[color:var(--color-ink)]"
              style={{ fontSize: 'clamp(42px, 6.8vw, 96px)', fontWeight: 500 }}
            >
              Word from the <span className="serif-wonk">membership</span>.
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-4 mt-4 lg:mt-0">
            <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-[color:var(--color-ink)]/55 mb-2">
              Aggregate · Google Reviews
            </div>
            <div className="flex items-baseline gap-3">
              <span
                className="serif-display text-[color:var(--color-ink)] leading-none"
                style={{ fontSize: 'clamp(48px, 6vw, 80px)', fontWeight: 500 }}
              >
                4.9
              </span>
              <span className="font-mono text-[11px] tracking-[0.18em] text-[color:var(--color-ink)]/55">
                / 5.0 · n = 412
              </span>
            </div>
          </div>
        </div>

        {/* TOP RULE */}
        <div className="h-px bg-[color:var(--color-ink)]/25" />

        {/* LEAD QUOTE — full editorial spread */}
        <article className="grid grid-cols-12 gap-x-6 sm:gap-x-8 py-14 sm:py-20 border-b border-[color:var(--color-ink)]/15">

          {/* Drop-letter column */}
          <div className="col-span-12 sm:col-span-3 lg:col-span-2">
            <div className="flex flex-col">
              <span
                className="serif-display text-[color:var(--color-ember)] leading-[0.78]"
                style={{ fontSize: 'clamp(120px, 16vw, 220px)', fontWeight: 500 }}
              >
                &ldquo;
              </span>
              <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-[color:var(--color-ink)]/45 mt-4">
                Lead Letter
              </div>
              <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-[color:var(--color-ink)]/35">
                Pg. {String(testimonials.length + 1).padStart(2, '0')}
              </div>
            </div>
          </div>

          {/* Body of the quote */}
          <div className="col-span-12 sm:col-span-9 lg:col-span-7">
            <p
              className="serif-display text-[color:var(--color-ink)] leading-[1.18] tracking-[-0.013em]"
              style={{ fontSize: 'clamp(28px, 3.4vw, 46px)', fontWeight: 500 }}
            >
              {lead.text}
            </p>

            <div className="mt-10 pt-5 border-t border-[color:var(--color-ink)]/20 flex flex-wrap items-end justify-between gap-y-3">
              <div className="flex items-baseline gap-3 font-mono text-[11px] tracking-[0.22em] uppercase">
                <span className="text-[color:var(--color-ink)]">— {lead.name}</span>
                <span className="text-[color:var(--color-ink)]/35">·</span>
                <span className="text-[color:var(--color-ink)]/65">{lead.class}</span>
              </div>
              <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-[color:var(--color-ink)]/45">
                {lead.date}
              </div>
            </div>
          </div>

          {/* Right side meta */}
          <aside className="col-span-12 lg:col-span-3 lg:pl-8 mt-10 lg:mt-0">
            <div className="border-l-2 border-[color:var(--color-ember)] pl-5 py-1">
              <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-[color:var(--color-ink)]/55 mb-2">
                The Result
              </div>
              <div
                className="serif-display text-[color:var(--color-ink)] leading-[1.05] tracking-[-0.01em]"
                style={{ fontSize: 'clamp(22px, 2.3vw, 30px)', fontWeight: 500 }}
              >
                {lead.highlight}<span className="text-[color:var(--color-ember)]">.</span>
              </div>
            </div>

            <div className="mt-8 font-mono text-[10px] tracking-[0.22em] uppercase text-[color:var(--color-ink)]/45 flex items-center gap-3">
              <span>Verified</span>
              <span className="h-px w-5 bg-[color:var(--color-ink)]/30" />
              <span>Member</span>
            </div>
          </aside>
        </article>

        {/* TWO-COL FOLLOW-UP LETTERS */}
        <div className="grid grid-cols-12 gap-x-6 sm:gap-x-8 gap-y-14 py-14 sm:py-20">
          {rest.map((t, i) => (
            <article key={t.name} className="col-span-12 lg:col-span-6">
              <div className="flex items-baseline justify-between mb-5">
                <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-[color:var(--color-ember)]">
                  Letter Nº 0{i + 2}
                </span>
                <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-[color:var(--color-ink)]/40">
                  {t.date}
                </span>
              </div>

              <p
                className="serif-display text-[color:var(--color-ink)] leading-[1.3] tracking-[-0.008em]"
                style={{ fontSize: 'clamp(19px, 1.9vw, 24px)', fontWeight: 400 }}
              >
                <span className="serif-wonk text-[color:var(--color-ember)] mr-1">&ldquo;</span>
                {t.text}
                <span className="serif-wonk text-[color:var(--color-ember)] ml-1">&rdquo;</span>
              </p>

              <div className="mt-7 pt-4 border-t border-[color:var(--color-ink)]/15 grid grid-cols-12 gap-3 items-baseline">
                <div className="col-span-7 font-mono text-[11px] tracking-[0.22em] uppercase text-[color:var(--color-ink)]/85">
                  — {t.name}
                </div>
                <div className="col-span-5 text-right font-mono text-[10px] tracking-[0.22em] uppercase text-[color:var(--color-ember)]">
                  {t.highlight}
                </div>
                <div className="col-span-12 font-mono text-[10px] tracking-[0.22em] uppercase text-[color:var(--color-ink)]/45">
                  Re: {t.class}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* BOTTOM RULE */}
        <div className="h-px bg-[color:var(--color-ink)]/25" />

        {/* Footer line */}
        <div className="pt-6 flex items-center justify-between font-mono text-[10px] tracking-[0.22em] uppercase text-[color:var(--color-ink)]/45">
          <span>Letters lightly edited for length</span>
          <a
            href="https://www.google.com/search?q=apex+performance+studio+chicago"
            className="text-[color:var(--color-ink)] hover:text-[color:var(--color-ember)] transition-colors inline-flex items-center gap-2"
          >
            Read more on Google
            <span className="block w-6 h-px bg-current" />
          </a>
        </div>
      </div>
    </section>
  );
}
