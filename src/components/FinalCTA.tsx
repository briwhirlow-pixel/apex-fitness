import { siteConfig } from '@/lib/data';

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-[color:var(--color-ink)] text-[color:var(--color-bone)]">

      {/* Top hairline */}
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10">
        <div className="h-px bg-[color:var(--color-bone)]/20" />
      </div>

      {/* Top masthead */}
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 pt-10">
        <div className="grid grid-cols-12 gap-x-6 sm:gap-x-8 font-mono text-[10px] sm:text-[11px] tracking-[0.22em] uppercase text-[color:var(--color-bone)]/55">
          <span className="col-span-6 lg:col-span-3">End Note</span>
          <span className="hidden lg:block col-span-3">Issue Nº 06</span>
          <span className="hidden lg:block col-span-3">Apex / Chicago</span>
          <span className="col-span-6 lg:col-span-3 text-right text-[color:var(--color-ember)]">
            Trial hour — on the house
          </span>
        </div>
      </div>

      {/* MAIN — huge editorial sign-off */}
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 pt-16 sm:pt-24 pb-12 sm:pb-16">
        <div className="grid grid-cols-12 gap-x-6 sm:gap-x-8 gap-y-12 items-end">

          {/* The display word */}
          <div className="col-span-12 lg:col-span-8">
            <h2
              className="serif-display tracking-[-0.035em] leading-[0.86] text-[color:var(--color-bone)]"
              style={{ fontSize: 'clamp(96px, 18vw, 280px)', fontWeight: 500 }}
            >
              Begin<span className="text-[color:var(--color-ember)]">.</span>
            </h2>
            <p
              className="mt-6 sm:mt-8 serif-display text-[color:var(--color-bone)]/85 leading-[1.25] tracking-[-0.005em] max-w-[42ch]"
              style={{ fontSize: 'clamp(22px, 2.4vw, 32px)', fontWeight: 400 }}
            >
              Walk in. Take any hour. Meet the coach. If you leave unconvinced, you
              owe us nothing — and we&apos;ll have learned something either way.
            </p>
          </div>

          {/* Right column — coordinates + CTA */}
          <aside className="col-span-12 lg:col-span-4 lg:pl-10">
            <div className="grid grid-cols-12 gap-x-4 gap-y-6">

              <div className="col-span-6">
                <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-[color:var(--color-bone)]/45 mb-1">
                  Location
                </div>
                <div className="serif-display text-[color:var(--color-bone)] text-[17px] leading-[1.3]" style={{ fontWeight: 400 }}>
                  {siteConfig.address.split(',')[0]}
                  <br />
                  <span className="text-[color:var(--color-bone)]/55 text-[14px]">
                    {siteConfig.address.split(',').slice(1).join(',').trim()}
                  </span>
                </div>
              </div>

              <div className="col-span-6">
                <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-[color:var(--color-bone)]/45 mb-1">
                  Open
                </div>
                <div className="serif-display text-[color:var(--color-bone)] text-[17px] leading-[1.3]" style={{ fontWeight: 400 }}>
                  Mon — Fri
                  <br />
                  <span className="text-[color:var(--color-bone)]/55 text-[14px] font-mono">{siteConfig.hours.weekday}</span>
                </div>
              </div>

              <div className="col-span-12 pt-4 border-t border-[color:var(--color-bone)]/15">
                <a
                  href="/contact"
                  className="group inline-flex items-center gap-4 bg-[color:var(--color-bone)] text-[color:var(--color-ink)] px-7 py-5 font-mono text-[11px] tracking-[0.24em] uppercase hover:bg-[color:var(--color-ember)] hover:text-[color:var(--color-bone)] transition-colors duration-300"
                >
                  Claim Trial Hour
                  <span className="block w-6 h-px bg-current transition-all duration-300 group-hover:w-14" />
                </a>

                <div className="mt-5 font-mono text-[10px] tracking-[0.22em] uppercase text-[color:var(--color-bone)]/45 flex items-center gap-3">
                  <span>No card · No commit</span>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* Bottom credit strip */}
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 pb-10 sm:pb-14">
        <div className="h-px bg-[color:var(--color-bone)]/20 mb-6" />
        <div className="grid grid-cols-12 gap-x-6 sm:gap-x-8 font-mono text-[10px] tracking-[0.22em] uppercase text-[color:var(--color-bone)]/45">
          <span className="col-span-12 sm:col-span-4">— End of Issue —</span>
          <span className="hidden sm:block col-span-4 text-center">Apex Performance Studio</span>
          <span className="col-span-12 sm:col-span-4 text-right">Set in Fraunces &amp; Geist</span>
        </div>
      </div>
    </section>
  );
}
