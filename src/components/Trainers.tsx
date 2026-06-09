import { trainers } from '@/lib/data';

export default function Trainers() {
  return (
    <section id="trainers" className="relative py-28 sm:py-36 overflow-hidden bg-[color:var(--color-bone)]">

      <div className="relative max-w-[1400px] mx-auto px-6 sm:px-10">

        {/* Section masthead */}
        <div className="grid grid-cols-12 gap-x-6 sm:gap-x-8 items-end mb-16 sm:mb-20">
          <div className="col-span-12 lg:col-span-7">
            <div className="flex items-center gap-4 mb-5">
              <span className="font-mono text-[10px] sm:text-[11px] tracking-[0.22em] uppercase text-[color:var(--color-ember)]">
                § 04 — The Bench
              </span>
              <span className="h-px flex-1 bg-[color:var(--color-ink)]/20" />
            </div>
            <h2
              className="serif-display tracking-[-0.025em] leading-[0.95] text-[color:var(--color-ink)]"
              style={{ fontSize: 'clamp(46px, 7.5vw, 108px)', fontWeight: 500 }}
            >
              Three coaches.<br />
              <span className="serif-wonk">In residence</span>.
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-5 lg:pl-12 mt-4 lg:mt-0">
            <p className="font-sans text-[color:var(--color-ink-soft)] text-[15px] leading-[1.6] max-w-md">
              No revolving door of independent contractors. Resident coaches who own
              the floor, know the membership, and answer their email.
            </p>
            <div className="mt-5 font-mono text-[10px] tracking-[0.22em] uppercase text-[color:var(--color-ink)]/45 flex items-center gap-3">
              <span>Hiring closed</span>
              <span className="h-px w-6 bg-[color:var(--color-ink)]/25" />
              <span>Spring &apos;26</span>
            </div>
          </div>
        </div>

        {/* COACH SPREADS — full-bleed alternating editorial */}
        <div className="space-y-24 sm:space-y-32">
          {trainers.map((t, i) => {
            const flip = i % 2 === 1;
            return (
              <article key={t.name} className="grid grid-cols-12 gap-x-6 sm:gap-x-8 gap-y-8 items-start">

                {/* TYPOGRAPHIC PORTRAIT — huge serif initials in ember frame */}
                <div className={`col-span-12 sm:col-span-5 ${flip ? 'sm:order-2' : ''}`}>
                  <div className="relative aspect-[4/5] border border-[color:var(--color-ink)]/20 overflow-hidden flex items-center justify-center bg-[color:var(--color-bone-soft)]">
                    {/* paper grain inside frame */}
                    <div
                      className="absolute inset-0 opacity-50 mix-blend-multiply pointer-events-none"
                      style={{
                        backgroundImage:
                          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='320' height='320'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.2' numOctaves='2' seed='2'/%3E%3CfeColorMatrix values='0 0 0 0 0.06 0 0 0 0 0.055 0 0 0 0 0.04 0 0 0 0.5 0'/%3E%3C/filter%3E%3Crect width='320' height='320' filter='url(%23n)'/%3E%3C/svg%3E\")",
                        backgroundSize: '180px 180px',
                      }}
                    />

                    {/* faint background numeric */}
                    <span
                      className="absolute right-3 bottom-1 font-mono text-[color:var(--color-ink)]/8 leading-none select-none"
                      style={{ fontSize: 'clamp(120px, 22vw, 260px)' }}
                    >
                      0{i + 1}
                    </span>

                    {/* huge serif initials */}
                    <span
                      className="serif-display text-[color:var(--color-ink)] leading-none relative"
                      style={{
                        fontSize: 'clamp(160px, 28vw, 360px)',
                        fontWeight: 500,
                        letterSpacing: '-0.04em',
                      }}
                    >
                      {t.initials[0]}
                      <span className="serif-wonk text-[color:var(--color-ember)]">{t.initials[1]}</span>
                    </span>

                    {/* corner ember marks */}
                    <span className="absolute top-3 left-3 w-3.5 h-px bg-[color:var(--color-ember)]" />
                    <span className="absolute top-3 left-3 w-px h-3.5 bg-[color:var(--color-ember)]" />
                    <span className="absolute top-3 right-3 w-3.5 h-px bg-[color:var(--color-ember)]" />
                    <span className="absolute top-3 right-3 w-px h-3.5 bg-[color:var(--color-ember)]" />
                    <span className="absolute bottom-3 left-3 w-3.5 h-px bg-[color:var(--color-ember)]" />
                    <span className="absolute bottom-3 left-3 w-px h-3.5 bg-[color:var(--color-ember)]" />
                    <span className="absolute bottom-3 right-3 w-3.5 h-px bg-[color:var(--color-ember)]" />
                    <span className="absolute bottom-3 right-3 w-px h-3.5 bg-[color:var(--color-ember)]" />

                    {/* bottom caption strip */}
                    <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between px-5 py-3 border-t border-[color:var(--color-ink)]/15 bg-[color:var(--color-bone)]/85 backdrop-blur-sm">
                      <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-[color:var(--color-ink)]/65">
                        Portrait · {t.initials}
                      </span>
                      <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-[color:var(--color-ink)]/45">
                        Nº 0{i + 1}
                      </span>
                    </div>
                  </div>

                  {/* page caption */}
                  <div className="mt-3 flex items-center justify-between font-mono text-[10px] tracking-[0.22em] uppercase text-[color:var(--color-ink)]/45">
                    <span>{t.teaches}</span>
                    <span>Resident since &apos;22</span>
                  </div>
                </div>

                {/* COPY BLOCK */}
                <div className={`col-span-12 sm:col-span-7 sm:pl-8 lg:pl-14 ${flip ? 'sm:order-1 sm:pl-0 sm:pr-8 lg:pr-14' : ''}`}>
                  {/* small meta */}
                  <div className="font-mono text-[11px] tracking-[0.22em] uppercase text-[color:var(--color-ink)]/55 mb-4">
                    {t.title}
                  </div>

                  <h3
                    className="serif-display tracking-[-0.025em] leading-[0.92] text-[color:var(--color-ink)] mb-6"
                    style={{ fontSize: 'clamp(46px, 7.5vw, 104px)', fontWeight: 500 }}
                  >
                    {t.name.split(' ')[0]}
                    <br />
                    {t.name.split(' ').slice(1).join(' ')}
                    <span className="text-[color:var(--color-ember)]">.</span>
                  </h3>

                  <p
                    className="serif-display text-[color:var(--color-ink-soft)] leading-[1.4] tracking-[-0.005em] max-w-[48ch]"
                    style={{ fontSize: 'clamp(17px, 1.7vw, 21px)', fontWeight: 400 }}
                  >
                    {t.bio}
                  </p>

                  {/* Specs strip */}
                  <div className="mt-10 grid grid-cols-12 gap-x-4 gap-y-6 border-t border-[color:var(--color-ink)]/20 pt-7">
                    <div className="col-span-12 sm:col-span-5">
                      <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-[color:var(--color-ink)]/45 mb-2">
                        Discipline
                      </div>
                      <div className="font-sans text-[14px] text-[color:var(--color-ink)] leading-relaxed">
                        {t.specialty}
                      </div>
                    </div>
                    <div className="col-span-12 sm:col-span-7">
                      <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-[color:var(--color-ink)]/45 mb-2">
                        Credentials
                      </div>
                      <div className="flex flex-wrap gap-x-3 gap-y-1">
                        {t.certifications.map((c, idx) => (
                          <span key={c} className="font-mono text-[11px] text-[color:var(--color-ink)]/85 tracking-[0.06em]">
                            {c}{idx < t.certifications.length - 1 && <span className="text-[color:var(--color-ink)]/30 ml-3">·</span>}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="col-span-12 sm:col-span-12 mt-2 pt-6 border-t border-[color:var(--color-ink)]/10">
                      <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-[color:var(--color-ink)]/45 mb-3">
                        Leads
                      </div>
                      <div className="flex flex-wrap gap-x-6 gap-y-2">
                        {t.classes.map((cls) => (
                          <a
                            key={cls}
                            href="/classes"
                            className="group inline-flex items-baseline gap-2 serif-display text-[color:var(--color-ink)] text-[24px] sm:text-[28px] leading-none tracking-[-0.015em] hover:text-[color:var(--color-ember)] transition-colors"
                            style={{ fontWeight: 500 }}
                          >
                            {cls}
                            <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-[color:var(--color-ink)]/40 group-hover:text-[color:var(--color-ember)] transition-colors">
                              →
                            </span>
                          </a>
                        ))}
                      </div>
                    </div>
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
