import { siteConfig, classes } from '@/lib/data';

export default function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 pt-14 sm:pt-16 pb-10 sm:pb-12">

        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 pb-10 sm:pb-12 border-b border-white/12">
          <a href="/" className="block">
            <span className="font-display text-white leading-none" style={{ fontSize: 'clamp(48px, 8vw, 96px)' }}>
              APEX
            </span>
            <div className="mt-2 text-[12px] tracking-[0.06em] font-medium text-white/40">
              Performance Studio · {siteConfig.city}, {siteConfig.region}
            </div>
          </a>
          <div className="flex flex-col sm:items-end gap-2">
            <a href="/#freepass" className="btn-primary-light inline-flex">
              Get Your Free Pass
            </a>
            <a
              href={`tel:${siteConfig.phone.replace(/[^\d]/g, '')}`}
              className="text-[13px] font-medium text-white/50 hover:text-white transition-colors py-2 -my-2 block"
            >
              {siteConfig.phone}
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-10 sm:mt-12">
          <div>
            <div className="text-[12px] tracking-[0.04em] font-semibold text-white/35 mb-4">Studio</div>
            <ul className="space-y-1 text-[14px] text-white/60">
              <li><a href="/#trainers" className="hover:text-white transition-colors py-2 block">Coaches</a></li>
              <li><a href="/#contact" className="hover:text-white transition-colors py-2 block">Visit</a></li>
              <li><a href="/#freepass" className="hover:text-white transition-colors py-2 block">Trial pass</a></li>
            </ul>
          </div>
          <div>
            <div className="text-[12px] tracking-[0.04em] font-semibold text-white/35 mb-4">Programs</div>
            <ul className="space-y-1 text-[14px] text-white/60">
              {classes.slice(0, 4).map((c) => (
                <li key={c.id}>
                  <a href="/#programs" className="hover:text-white transition-colors py-2 block">{c.name}</a>
                </li>
              ))}
              <li><a href="/#programs" className="hover:text-white transition-colors font-medium py-2 block">All programs</a></li>
            </ul>
          </div>
          <div>
            <div className="text-[12px] tracking-[0.04em] font-semibold text-white/35 mb-4">Membership</div>
            <ul className="space-y-1 text-[14px] text-white/60">
              <li><a href="/#memberships" className="hover:text-white transition-colors py-2 block">Drop-In</a></li>
              <li><a href="/#memberships" className="hover:text-white transition-colors py-2 block">Monthly</a></li>
              <li><a href="/#memberships" className="hover:text-white transition-colors py-2 block">Annual</a></li>
            </ul>
          </div>
          <div>
            <div className="text-[12px] tracking-[0.04em] font-semibold text-white/35 mb-4">Connect</div>
            <ul className="space-y-1 text-[14px] text-white/60">
              <li>
                <a href={`tel:${siteConfig.phone.replace(/[^\d]/g, '')}`} className="hover:text-white transition-colors py-2 block">
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${siteConfig.email}`} className="hover:text-white transition-colors break-all py-2 block">
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors py-2 block">{siteConfig.instagram}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 py-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-[12px] text-white/30 font-medium">
          <span>&copy; {new Date().getFullYear()} APEX Performance Studio</span>
          <div className="flex items-center gap-3">
            <a href="#" className="hover:text-white transition-colors py-2 px-1">Privacy</a>
            <a href="#" className="hover:text-white transition-colors py-2 px-1">Terms</a>
            <a href="#top" className="hover:text-white transition-colors py-2 px-1">Back to top</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
