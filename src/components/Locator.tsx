import { siteConfig } from '@/lib/data';

export default function Locator() {
  const mapQuery = encodeURIComponent(`${siteConfig.city}, ${siteConfig.region}`);
  const mapEmbedSrc = `https://www.google.com/maps?q=${mapQuery}&output=embed`;

  return (
    <section id="contact" className="py-16 sm:py-24 lg:py-28 bg-surface">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">

        <div className="reveal-up max-w-2xl mb-10 sm:mb-14">
          <h2
            className="font-display text-ink leading-[0.92] text-balance"
            style={{ fontSize: 'clamp(36px, 6vw, 72px)' }}
          >
            {siteConfig.city}, {siteConfig.region}.
          </h2>
          <p className="mt-4 text-ink-muted text-[16px] leading-[1.65] max-w-lg text-pretty">
            Off Gay Street, two blocks from the courthouse. Free parking behind the studio.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-4 sm:gap-5">
          <div className="reveal-up relative aspect-[4/3] lg:aspect-auto lg:min-h-[480px] overflow-hidden border border-edge">
            <iframe
              src={mapEmbedSrc}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`Map of ${siteConfig.city}, ${siteConfig.region}`}
              className="absolute inset-0 w-full h-full"
            />
          </div>

          <div className="reveal-up reveal-d1 grid grid-cols-1 gap-4 sm:gap-5">
            <div className="bg-white border border-edge p-5 sm:p-6">
              <div className="text-[12px] tracking-[0.04em] font-semibold text-accent mb-3">
                Hours
              </div>
              <ul className="space-y-2 text-[15px] leading-[1.6] text-ink tabular-nums">
                <li className="flex justify-between gap-4"><span>Weekdays</span><span>{siteConfig.hours.weekday}</span></li>
                <li className="flex justify-between gap-4"><span>Saturday</span><span>{siteConfig.hours.saturday}</span></li>
                <li className="flex justify-between gap-4"><span>Sunday</span><span>{siteConfig.hours.sunday}</span></li>
              </ul>
            </div>

            <div className="bg-white border border-edge p-5 sm:p-6">
              <div className="text-[12px] tracking-[0.04em] font-semibold text-accent mb-3">
                Get in touch
              </div>
              <div className="flex flex-col gap-2">
                <a
                  href={`tel:${siteConfig.phone.replace(/[^\d]/g, '')}`}
                  className="font-display text-ink hover:text-accent transition-colors leading-none"
                  style={{ fontSize: 'clamp(20px, 2.4vw, 28px)' }}
                >
                  {siteConfig.phone}
                </a>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-[14px] text-ink-muted hover:text-accent transition-colors break-all"
                >
                  {siteConfig.email}
                </a>
                <a href="#" className="text-[14px] text-ink-muted hover:text-accent transition-colors">
                  {siteConfig.instagram}
                </a>
              </div>
            </div>

            <a href="/#freepass" className="btn-primary w-full text-center">
              Get Your Free Pass
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
