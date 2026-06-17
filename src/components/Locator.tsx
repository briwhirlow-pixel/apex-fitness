import { siteConfig } from '@/lib/data';

/**
 * Locator — Google Maps embed + address + hours + parking note.
 * Asymmetric: map dominant left (1.4fr), info stack right (1fr).
 */
export default function Locator() {
  const mapQuery = encodeURIComponent(`${siteConfig.city}, ${siteConfig.region}`);
  const mapEmbedSrc = `https://www.google.com/maps?q=${mapQuery}&output=embed`;

  return (
    <section id="contact" className="relative bg-[#100e0b] py-20 sm:py-28 lg:py-32">
      <div className="relative max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-14">

        {/* opener */}
        <div className="reveal-up grid lg:grid-cols-[1.4fr_1fr] gap-8 lg:gap-12 items-end mb-12 sm:mb-16">
          <div>
            <div className="font-display text-[12px] tracking-[0.32em] uppercase text-[#e41313] mb-4" style={{ fontWeight: 700 }}>
              Find the floor
            </div>
            <h2
              className="font-display text-[color:var(--color-cream)] leading-[0.88] tracking-[-0.015em]"
              style={{ fontSize: 'clamp(44px, 7vw, 112px)', fontWeight: 700 }}
            >
              {siteConfig.city.toUpperCase()}
              <span className="text-[#e41313]">.</span>
              <br />
              {siteConfig.region}
            </h2>
          </div>
          <p className="text-[color:var(--color-cream)]/72 text-[15px] sm:text-[16px] leading-[1.7] font-light max-w-md">
            One floor. Off Gay Street, two blocks from the courthouse. Free parking behind the studio. Walk in any morning before nine for a trial hour.
          </p>
        </div>

        {/* MAP + INFO — asymmetric split */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-3 sm:gap-5">

          {/* MAP — dominant */}
          <div className="reveal-up relative aspect-[5/4] lg:aspect-auto lg:min-h-[540px] overflow-hidden border border-[#1a1814]">
            <iframe
              src={mapEmbedSrc}
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'grayscale(0.3) contrast(1.1) brightness(0.85)' }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`Map of ${siteConfig.city}, ${siteConfig.region}`}
              className="absolute inset-0 w-full h-full"
            />
          </div>

          {/* INFO STACK */}
          <div className="reveal-up reveal-d1 grid grid-cols-1 gap-3 sm:gap-5">

            {/* hours block */}
            <div className="bg-[#0c0a08] border border-[#1a1814] p-6 sm:p-7">
              <div className="font-display text-[11px] tracking-[0.32em] uppercase text-[#e41313] mb-4" style={{ fontWeight: 700 }}>
                Hours
              </div>
              <ul className="space-y-2 text-[14px] sm:text-[15px] leading-[1.6] text-[color:var(--color-cream)]/85 font-light tabular-nums">
                <li className="flex justify-between gap-6"><span>Weekdays</span><span>{siteConfig.hours.weekday}</span></li>
                <li className="flex justify-between gap-6"><span>Saturday</span><span>{siteConfig.hours.saturday}</span></li>
                <li className="flex justify-between gap-6"><span>Sunday</span><span>{siteConfig.hours.sunday}</span></li>
              </ul>
            </div>

            {/* talk block */}
            <div className="bg-[#0c0a08] border border-[#1a1814] p-6 sm:p-7">
              <div className="font-display text-[11px] tracking-[0.32em] uppercase text-[#e41313] mb-4" style={{ fontWeight: 700 }}>
                Talk to a coach
              </div>
              <div className="flex flex-col gap-3">
                <a
                  href={`tel:${siteConfig.phone.replace(/[^\d]/g, '')}`}
                  className="font-display text-[color:var(--color-cream)] hover:text-[#e41313] transition-colors leading-none"
                  style={{ fontSize: 'clamp(22px, 2.6vw, 32px)', fontWeight: 700 }}
                >
                  {siteConfig.phone}
                </a>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-[14px] text-[color:var(--color-cream)]/80 hover:text-[#e41313] transition-colors break-all"
                >
                  {siteConfig.email}
                </a>
                <a href="#" className="text-[13px] text-[color:var(--color-cream)]/65 hover:text-[#e41313] transition-colors">
                  {siteConfig.instagram}
                </a>
              </div>
            </div>

            {/* CTA */}
            <a href="/#freepass" className="btn-solid-red w-full">
              Get Your Free Pass
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
