import { siteConfig } from '@/lib/data';

export default function Footer() {
  return (
    <footer className="relative bg-[#070503] text-[color:var(--color-cream)] border-t border-[#1a1814]">
      <div className="relative max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-14 pt-16 pb-10 sm:pt-20 sm:pb-12">

        {/* TOP — massive wordmark + CTA, asymmetric */}
        <div className="grid lg:grid-cols-[1.6fr_1fr] gap-10 lg:gap-16 items-end pb-12 sm:pb-16 border-b border-[color:var(--color-cream)]/12">
          <div>
            <a href="/" className="block">
              <span
                className="font-display text-[color:var(--color-cream)] leading-[0.88] tracking-[-0.022em]"
                style={{ fontSize: 'clamp(72px, 12vw, 168px)', fontWeight: 700 }}
              >
                APEX<span className="text-[#e41313]">.</span>
              </span>
            </a>
            <div className="mt-4 text-[11px] tracking-[0.32em] uppercase text-[color:var(--color-cream)]/45 font-medium">
              Performance Studio · West Chester · PA
            </div>
          </div>

          <div className="flex flex-col gap-3 lg:items-end">
            <a href="/#contact" className="btn-solid-red">
              <span>Claim Trial Pass</span>
            </a>
            <a
              href={`tel:${siteConfig.phone.replace(/[^\d]/g, '')}`}
              className="text-[14px] tracking-[0.14em] uppercase text-[color:var(--color-cream)]/65 hover:text-[#e41313] transition-colors font-medium"
            >
              {siteConfig.phone}
            </a>
          </div>
        </div>

        {/* INFO COLUMNS — asymmetric 5 / 4 / 3, not four equal */}
        <div className="grid grid-cols-12 gap-8 sm:gap-12 mt-12 sm:mt-16">

          {/* WHERE */}
          <div className="col-span-12 sm:col-span-6 lg:col-span-5">
            <div className="text-[10px] tracking-[0.32em] uppercase text-[#e41313] font-semibold mb-4">
              Where
            </div>
            <p className="text-[15px] leading-[1.7] text-[color:var(--color-cream)]/75 font-light">
              West Chester, Pennsylvania
            </p>
            <p className="mt-2 text-[13px] leading-[1.65] text-[color:var(--color-cream)]/55 font-light max-w-sm">
              Off Gay Street, two blocks from the courthouse. Free parking behind the studio.
            </p>
          </div>

          {/* HOURS */}
          <div className="col-span-12 sm:col-span-6 lg:col-span-4">
            <div className="text-[10px] tracking-[0.32em] uppercase text-[#e41313] font-semibold mb-4">
              Hours
            </div>
            <ul className="space-y-1.5 text-[14px] leading-[1.5] text-[color:var(--color-cream)]/75 font-light tabular-nums">
              <li className="flex justify-between"><span>Weekdays</span><span>{siteConfig.hours.weekday}</span></li>
              <li className="flex justify-between"><span>Saturday</span><span>{siteConfig.hours.saturday}</span></li>
              <li className="flex justify-between"><span>Sunday</span><span>{siteConfig.hours.sunday}</span></li>
            </ul>
          </div>

          {/* TALK */}
          <div className="col-span-12 lg:col-span-3">
            <div className="text-[10px] tracking-[0.32em] uppercase text-[#e41313] font-semibold mb-4">
              Talk
            </div>
            <ul className="space-y-2 text-[14px] text-[color:var(--color-cream)]/75 font-light">
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

        {/* COLOPHON */}
        <div className="mt-14 sm:mt-16 pt-6 border-t border-[color:var(--color-cream)]/12 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-[10px] tracking-[0.28em] uppercase text-[color:var(--color-cream)]/40 font-medium">
          <span>© {new Date().getFullYear()} APEX Performance Studio · All rights reserved</span>
          <a href="#top" className="hover:text-[#e41313] transition-colors">
            Top of page
          </a>
        </div>
      </div>
    </footer>
  );
}
