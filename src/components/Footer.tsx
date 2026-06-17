import { siteConfig, classes } from '@/lib/data';

export default function Footer() {
  return (
    <footer className="relative bg-[#070503] text-[color:var(--color-cream)] border-t border-[#1a1814]">

      {/* TOP WORDMARK BAND */}
      <div className="relative max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-14 pt-16 sm:pt-20 pb-12 sm:pb-16">
        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-10 items-end pb-12 sm:pb-16 border-b border-[color:var(--color-cream)]/12">
          <a href="/" className="block">
            <span
              className="font-display text-[color:var(--color-cream)] leading-[0.86] tracking-[-0.018em]"
              style={{ fontSize: 'clamp(72px, 12vw, 168px)', fontWeight: 700 }}
            >
              APEX<span className="text-[#e41313]">.</span>
            </span>
            <div className="mt-4 font-display text-[11px] tracking-[0.32em] uppercase text-[color:var(--color-cream)]/55" style={{ fontWeight: 700 }}>
              Performance Studio · {siteConfig.city} · {siteConfig.region}
            </div>
          </a>

          <div className="flex flex-col items-start lg:items-end gap-3">
            <a href="/#freepass" className="btn-solid-red">
              Get Your Free Pass
            </a>
            <a
              href={`tel:${siteConfig.phone.replace(/[^\d]/g, '')}`}
              className="font-display text-[14px] tracking-[0.14em] uppercase text-[color:var(--color-cream)]/70 hover:text-[#e41313] transition-colors"
              style={{ fontWeight: 600 }}
            >
              {siteConfig.phone}
            </a>
          </div>
        </div>

        {/* COLUMN LINKS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 mt-12">

          {/* STUDIO */}
          <div>
            <div className="font-display text-[11px] tracking-[0.32em] uppercase text-[#e41313] mb-5" style={{ fontWeight: 700 }}>
              Studio
            </div>
            <ul className="space-y-2.5 text-[14px] text-[color:var(--color-cream)]/72 font-light">
              <li><a href="/#trainers" className="hover:text-[#e41313] transition-colors">Coaches</a></li>
              <li><a href="/#contact" className="hover:text-[#e41313] transition-colors">Visit the floor</a></li>
              <li><a href="/#freepass" className="hover:text-[#e41313] transition-colors">Trial pass</a></li>
              <li><a href="#" className="hover:text-[#e41313] transition-colors">About</a></li>
            </ul>
          </div>

          {/* PROGRAMS */}
          <div>
            <div className="font-display text-[11px] tracking-[0.32em] uppercase text-[#e41313] mb-5" style={{ fontWeight: 700 }}>
              Programs
            </div>
            <ul className="space-y-2.5 text-[14px] text-[color:var(--color-cream)]/72 font-light">
              {classes.slice(0, 5).map((c) => (
                <li key={c.id}>
                  <a href="/#programs" className="hover:text-[#e41313] transition-colors">{c.name}</a>
                </li>
              ))}
              <li>
                <a href="/#programs" className="hover:text-[#e41313] transition-colors font-medium">
                  All programs →
                </a>
              </li>
            </ul>
          </div>

          {/* MEMBERSHIP */}
          <div>
            <div className="font-display text-[11px] tracking-[0.32em] uppercase text-[#e41313] mb-5" style={{ fontWeight: 700 }}>
              Membership
            </div>
            <ul className="space-y-2.5 text-[14px] text-[color:var(--color-cream)]/72 font-light">
              <li><a href="/#memberships" className="hover:text-[#e41313] transition-colors">Drop-In</a></li>
              <li><a href="/#memberships" className="hover:text-[#e41313] transition-colors">Monthly</a></li>
              <li><a href="/#memberships" className="hover:text-[#e41313] transition-colors">Annual</a></li>
              <li><a href="/#contact" className="hover:text-[#e41313] transition-colors">Sign in</a></li>
            </ul>
          </div>

          {/* CONNECT */}
          <div>
            <div className="font-display text-[11px] tracking-[0.32em] uppercase text-[#e41313] mb-5" style={{ fontWeight: 700 }}>
              Connect
            </div>
            <ul className="space-y-2.5 text-[14px] text-[color:var(--color-cream)]/72 font-light">
              <li>
                <a href={`tel:${siteConfig.phone.replace(/[^\d]/g, '')}`} className="hover:text-[#e41313] transition-colors">
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${siteConfig.email}`} className="hover:text-[#e41313] transition-colors break-all">
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#e41313] transition-colors">
                  {siteConfig.instagram}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-[color:var(--color-cream)]/12">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-14 py-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-[11px] tracking-[0.18em] uppercase text-[color:var(--color-cream)]/40 font-medium">
          <span>© {new Date().getFullYear()} APEX Performance Studio · All rights reserved</span>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-[#e41313] transition-colors">Privacy</a>
            <a href="#" className="hover:text-[#e41313] transition-colors">Terms</a>
            <a href="#top" className="hover:text-[#e41313] transition-colors">Top ↑</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
