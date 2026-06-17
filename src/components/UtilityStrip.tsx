import { siteConfig } from '@/lib/data';

/**
 * Top utility strip — thin black bar above the nav.
 * Standard commercial site pattern: location + phone + member sign in.
 */
export default function UtilityStrip() {
  return (
    <div className="hidden md:block fixed top-0 left-0 right-0 z-[60] bg-[#070503] border-b border-[#1a1814]">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-14 h-9 flex items-center justify-between text-[11px] tracking-[0.06em] font-medium text-[color:var(--color-cream)]/72">
        <div className="flex items-center gap-6">
          <span className="inline-flex items-center gap-2">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#e41313]" aria-hidden />
            {siteConfig.city}, {siteConfig.region}
          </span>
          <a
            href={`tel:${siteConfig.phone.replace(/[^\d]/g, '')}`}
            className="btn-utility hidden lg:inline-flex"
          >
            {siteConfig.phone}
          </a>
        </div>
        <div className="flex items-center gap-6">
          <a href="#" className="btn-utility hidden lg:inline-flex">{siteConfig.instagram}</a>
          <a href="/#contact" className="btn-utility">Member Sign In</a>
        </div>
      </div>
    </div>
  );
}
