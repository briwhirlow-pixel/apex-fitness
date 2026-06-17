import { siteConfig } from '@/lib/data';

export default function Footer() {
  return (
    <footer className="relative bg-[color:var(--color-ink-deep)] text-[color:var(--color-cream)] border-t border-[color:var(--color-border)]">
      <div className="relative max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-14 pt-20 pb-10 sm:pt-24 sm:pb-12">

        {/* TOP — massive wordmark */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 pb-14 sm:pb-16 border-b border-[color:var(--color-border-cream)]">
          <div>
            <div className="flex items-center gap-4 mb-5">
              <span className="block w-8 h-px bg-[color:var(--color-red)]" />
              <span className="text-[10px] sm:text-[11px] tracking-[0.32em] uppercase text-[color:var(--color-red)] font-semibold">
                The sign-off
              </span>
            </div>
            <a href="/" className="block">
              <span
                className="font-display text-[color:var(--color-cream)] leading-[0.9] tracking-[-0.02em]"
                style={{ fontSize: 'clamp(80px, 14vw, 200px)', fontWeight: 700 }}
              >
                APEX
                <span className="font-serif-italic text-[color:var(--color-red)] ml-2" style={{ fontWeight: 400 }}>.</span>
              </span>
            </a>
            <div className="mt-4 text-[10px] tracking-[0.32em] uppercase text-[color:var(--color-cream)]/45 font-medium">
              Performance Studio · Haddon Township NJ
            </div>
          </div>

          {/* CTA stack */}
          <div className="flex flex-col gap-3 lg:items-end">
            <a href="/contact" className="btn-solid-red">
              <span>Claim Trial Pass</span>
              <span aria-hidden className="block w-6 h-px bg-current" />
            </a>
            <a href={`tel:${siteConfig.phone.replace(/[^\d]/g, '')}`} className="text-[14px] tracking-[0.14em] uppercase text-[color:var(--color-cream)]/65 hover:text-[color:var(--color-red)] transition-colors font-medium">
              {siteConfig.phone}
            </a>
          </div>
        </div>

        {/* INFO GRID */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mt-14 sm:mt-16">

          {/* Visit */}
          <div>
            <div className="text-[10px] tracking-[0.32em] uppercase text-[color:var(--color-red)] font-semibold mb-4">
              Where
            </div>
            <p className="text-[14px] leading-[1.7] text-[color:var(--color-cream)]/75 font-light">
              Haddon Township<br />
              New Jersey
            </p>
            <a
              href="/contact"
              className="mt-4 inline-flex items-center gap-2 text-[10px] tracking-[0.28em] uppercase text-[color:var(--color-cream)]/60 hover:text-[color:var(--color-red)] transition-colors font-medium"
            >
              Book a visit
              <span aria-hidden className="block w-5 h-px bg-current" />
            </a>
          </div>

          {/* Hours */}
          <div>
            <div className="text-[10px] tracking-[0.32em] uppercase text-[color:var(--color-red)] font-semibold mb-4">
              Hours
            </div>
            <ul className="space-y-1.5 text-[14px] leading-[1.5] text-[color:var(--color-cream)]/75 font-light tabular-nums">
              <li className="flex justify-between"><span>Mon–Fri</span><span>{siteConfig.hours.weekday}</span></li>
              <li className="flex justify-between"><span>Saturday</span><span>{siteConfig.hours.saturday}</span></li>
              <li className="flex justify-between"><span>Sunday</span><span>{siteConfig.hours.sunday}</span></li>
            </ul>
            <div className="mt-4 flex items-center gap-2 text-[10px] tracking-[0.28em] uppercase text-[color:var(--color-cream)]/60 font-medium">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-[color:var(--color-red)] pulse-dot" />
              Open now
            </div>
          </div>

          {/* The Slate */}
          <div>
            <div className="text-[10px] tracking-[0.32em] uppercase text-[color:var(--color-red)] font-semibold mb-4">
              The Slate
            </div>
            <ul className="space-y-2 text-[14px] text-[color:var(--color-cream)]/75 font-light">
              <li><a href="/classes" className="hover:text-[color:var(--color-red)] transition-colors">Disciplines</a></li>
              <li><a href="/#trainers" className="hover:text-[color:var(--color-red)] transition-colors">Coaches</a></li>
              <li><a href="/pricing" className="hover:text-[color:var(--color-red)] transition-colors">Pricing</a></li>
              <li><a href="/contact" className="hover:text-[color:var(--color-red)] transition-colors">Visit</a></li>
            </ul>
          </div>

          {/* Talk */}
          <div>
            <div className="text-[10px] tracking-[0.32em] uppercase text-[color:var(--color-red)] font-semibold mb-4">
              Talk to us
            </div>
            <ul className="space-y-2 text-[14px] text-[color:var(--color-cream)]/75 font-light">
              <li>
                <a href={`mailto:${siteConfig.email}`} className="hover:text-[color:var(--color-red)] transition-colors break-all">
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <a href={`tel:${siteConfig.phone.replace(/[^\d]/g, '')}`} className="hover:text-[color:var(--color-red)] transition-colors">
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[color:var(--color-red)] transition-colors">
                  {siteConfig.instagram}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* COLOPHON */}
        <div className="mt-16 sm:mt-20 pt-7 border-t border-[color:var(--color-border-cream)] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-[10px] tracking-[0.28em] uppercase text-[color:var(--color-cream)]/40 font-medium">
          <span>© {new Date().getFullYear()} APEX Performance Studio · All rights reserved</span>
          <span className="hidden sm:inline">Set in Oswald + Inter + Instrument Serif</span>
          <a href="#top" className="hover:text-[color:var(--color-red)] transition-colors inline-flex items-center gap-2">
            <span aria-hidden>↑</span>
            Top
          </a>
        </div>
      </div>
    </footer>
  );
}
