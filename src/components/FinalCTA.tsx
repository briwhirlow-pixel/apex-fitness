import { siteConfig } from '@/lib/data';

export default function FinalCTA() {
  return (
    <section className="py-20 sm:py-28 bg-[#1a1a1a] text-white">
      <div className="max-w-[1170px] mx-auto px-5 sm:px-8 text-center">

        <h2 className="font-[family-name:var(--font-heading)] text-[clamp(32px,6vw,56px)] font-bold uppercase tracking-wide mb-5">
          Ready to <span className="text-[color:var(--color-ember)]">Begin</span>?
        </h2>

        <p className="text-white/65 text-[16px] sm:text-[18px] leading-relaxed max-w-2xl mx-auto mb-10">
          Walk in. Take any hour. Meet the coach. If you leave unconvinced, you
          owe us nothing — and we&apos;ll have learned something either way.
        </p>

        <a
          href="/contact"
          className="inline-block bg-[color:var(--color-ember)] text-white rounded-full px-10 py-4 text-[16px] font-semibold hover:bg-[color:var(--color-ember-deep)] transition-colors mb-12"
        >
          Claim Your Free Trial
        </a>

        {/* Info grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto text-center">
          <div>
            <h4 className="font-[family-name:var(--font-heading)] text-[16px] font-semibold uppercase tracking-wider text-white/50 mb-2">
              Location
            </h4>
            <p className="text-white/80 text-[15px] leading-relaxed">
              {siteConfig.address.split(',')[0]}<br />
              <span className="text-white/50">
                {siteConfig.address.split(',').slice(1).join(',').trim()}
              </span>
            </p>
          </div>

          <div>
            <h4 className="font-[family-name:var(--font-heading)] text-[16px] font-semibold uppercase tracking-wider text-white/50 mb-2">
              Hours
            </h4>
            <p className="text-white/80 text-[15px] leading-relaxed">
              Mon–Fri: {siteConfig.hours.weekday}<br />
              Sat: {siteConfig.hours.saturday}<br />
              Sun: {siteConfig.hours.sunday}
            </p>
          </div>

          <div>
            <h4 className="font-[family-name:var(--font-heading)] text-[16px] font-semibold uppercase tracking-wider text-white/50 mb-2">
              Contact
            </h4>
            <p className="text-white/80 text-[15px] leading-relaxed">
              <a href={`tel:${siteConfig.phone}`} className="hover:text-[color:var(--color-ember)] transition-colors">
                {siteConfig.phone}
              </a><br />
              <a href={`mailto:${siteConfig.email}`} className="hover:text-[color:var(--color-ember)] transition-colors">
                {siteConfig.email}
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
