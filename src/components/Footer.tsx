import { siteConfig } from '@/lib/data';

const slate = ['HIIT Forge', 'Iron Temple', 'Flow State', 'Velocity Cycle', 'Combat Ready', 'Recover & Reset'];
const studio = [
  { label: 'House Doctrine', href: '/#about' },
  { label: 'Resident Coaches', href: '/#trainers' },
  { label: 'Rate Card', href: '/pricing' },
  { label: 'Trial Hour', href: '/contact' },
  { label: 'Full Schedule', href: '/classes' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-[color:var(--color-bone)] border-t border-[color:var(--color-ink)]/15">

      <div className="relative max-w-[1400px] mx-auto px-6 sm:px-10 pt-16 sm:pt-20 pb-10">

        {/* Colophon header */}
        <div className="grid grid-cols-12 gap-x-6 sm:gap-x-8 mb-12 sm:mb-16">
          <div className="col-span-12 lg:col-span-5">
            {/* Big wordmark */}
            <div className="flex items-baseline gap-3 mb-5">
              <span
                className="serif-display text-[color:var(--color-ink)] leading-none tracking-[-0.04em]"
                style={{ fontSize: 'clamp(56px, 8vw, 96px)', fontWeight: 500 }}
              >
                APEX<span className="serif-wonk text-[color:var(--color-ember)]">.</span>
              </span>
            </div>
            <p className="font-mono text-[10px] tracking-[0.22em] uppercase text-[color:var(--color-ink)]/55">
              Performance Studio — Lincoln Park, Chicago
            </p>
            <p className="mt-5 font-sans text-[14px] text-[color:var(--color-ink-soft)] leading-[1.6] max-w-sm">
              A small studio with high standards. Six disciplines, three coaches, an
              hour we hope you remember.
            </p>
          </div>

          <div className="col-span-12 lg:col-span-7 lg:pl-10 mt-10 lg:mt-0">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-10">

              {/* The slate */}
              <div>
                <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-[color:var(--color-ink)]/45 mb-4 pb-2 border-b border-[color:var(--color-ink)]/15">
                  The Slate
                </div>
                <ul className="space-y-2">
                  {slate.map((label) => (
                    <li key={label}>
                      <a
                        href="/classes"
                        className="serif-display text-[color:var(--color-ink)] text-[17px] leading-none hover:text-[color:var(--color-ember)] transition-colors"
                        style={{ fontWeight: 400 }}
                      >
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Studio */}
              <div>
                <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-[color:var(--color-ink)]/45 mb-4 pb-2 border-b border-[color:var(--color-ink)]/15">
                  The Studio
                </div>
                <ul className="space-y-2">
                  {studio.map((l) => (
                    <li key={l.label}>
                      <a
                        href={l.href}
                        className="serif-display text-[color:var(--color-ink)] text-[17px] leading-none hover:text-[color:var(--color-ember)] transition-colors"
                        style={{ fontWeight: 400 }}
                      >
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Visit */}
              <div className="col-span-2 md:col-span-1">
                <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-[color:var(--color-ink)]/45 mb-4 pb-2 border-b border-[color:var(--color-ink)]/15">
                  Visit
                </div>
                <div className="space-y-4">
                  <div>
                    <p className="font-sans text-[14px] text-[color:var(--color-ink)] leading-[1.5]">
                      {siteConfig.address.split(',')[0]}
                    </p>
                    <p className="font-sans text-[14px] text-[color:var(--color-ink)]/60 leading-[1.5]">
                      {siteConfig.address.split(',').slice(1).join(',').trim()}
                    </p>
                  </div>
                  <div className="font-mono text-[11px] text-[color:var(--color-ink)]/70 space-y-0.5">
                    <p>M—F · {siteConfig.hours.weekday}</p>
                    <p>Sat · {siteConfig.hours.saturday}</p>
                    <p>Sun · {siteConfig.hours.sunday}</p>
                  </div>
                  <div className="space-y-1">
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="block font-sans text-[14px] text-[color:var(--color-ink)] hover:text-[color:var(--color-ember)] transition-colors"
                    >
                      {siteConfig.email}
                    </a>
                    <a
                      href={`tel:${siteConfig.phone}`}
                      className="block font-sans text-[14px] text-[color:var(--color-ink)]/65 hover:text-[color:var(--color-ember)] transition-colors"
                    >
                      {siteConfig.phone}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Big wordmark divider */}
        <div className="relative my-10 sm:my-14">
          <div className="h-px bg-[color:var(--color-ink)]/25" />
        </div>

        {/* Colophon footer */}
        <div className="grid grid-cols-12 gap-x-6 sm:gap-x-8 gap-y-4 font-mono text-[10px] tracking-[0.22em] uppercase text-[color:var(--color-ink)]/50">
          <div className="col-span-12 sm:col-span-5">
            © {year} Apex Performance Studio
            <br />
            <span className="text-[color:var(--color-ink)]/35">All hours reserved.</span>
          </div>

          <div className="col-span-12 sm:col-span-4">
            <div className="text-[color:var(--color-ink)]/35 mb-1">Set in</div>
            Fraunces · Geist · JetBrains Mono
          </div>

          <div className="col-span-12 sm:col-span-3 sm:text-right">
            <div className="text-[color:var(--color-ink)]/35 mb-1">Issue</div>
            Nº 06 — Spring &apos;26
          </div>

          <div className="col-span-12 pt-4 mt-2 border-t border-[color:var(--color-ink)]/10 flex flex-wrap gap-x-6 gap-y-2">
            <a href="#" className="hover:text-[color:var(--color-ember)] transition-colors">Privacy</a>
            <a href="#" className="hover:text-[color:var(--color-ember)] transition-colors">Terms</a>
            <a href="#" className="hover:text-[color:var(--color-ember)] transition-colors">Member Waiver</a>
            <a href="#" className="hover:text-[color:var(--color-ember)] transition-colors">Instagram</a>
            <a href="#" className="hover:text-[color:var(--color-ember)] transition-colors">Google</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
