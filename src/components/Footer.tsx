import { siteConfig } from '@/lib/data';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-black border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 py-16 sm:py-20">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-14">

          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-9 h-9 rounded flex items-center justify-center font-black text-[14px] text-[#0A0A0A]"
                style={{ background: '#C8FF00' }}>AX</div>
              <span className="text-white font-black text-[18px] tracking-tight uppercase">{siteConfig.name}</span>
            </div>
            <p className="text-white/35 text-[13px] leading-relaxed mb-6 max-w-[210px]">
              Chicago's premier performance studio. Built by athletes, for results.
            </p>
            <div className="flex gap-3">
              {[
                { label: 'Instagram', path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z' },
                { label: 'Facebook', path: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' },
              ].map((s) => (
                <a key={s.label} href="#" aria-label={s.label}
                  className="w-9 h-9 rounded border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white/30 transition-all">
                  <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d={s.path}/></svg>
                </a>
              ))}
            </div>
          </div>

          {/* Classes */}
          <div>
            <p className="text-white/25 text-[11px] font-bold tracking-[0.2em] uppercase mb-5">Classes</p>
            <ul className="space-y-3">
              {['HIIT Forge', 'Iron Temple', 'Flow State', 'Velocity Cycle', 'Combat Ready', 'Recover & Reset'].map((cls) => (
                <li key={cls}>
                  <a href="/classes" className="text-white/45 text-[13px] hover:text-white transition-colors">{cls}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Studio */}
          <div>
            <p className="text-white/25 text-[11px] font-bold tracking-[0.2em] uppercase mb-5">Studio</p>
            <ul className="space-y-3">
              {[
                { label: 'About APEX', href: '/#about' },
                { label: 'Coaches', href: '/#trainers' },
                { label: 'Membership', href: '/pricing' },
                { label: 'Free Trial Class', href: '/contact' },
                { label: 'Full Schedule', href: '/classes' },
              ].map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-white/45 text-[13px] hover:text-white transition-colors">{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Visit */}
          <div>
            <p className="text-white/25 text-[11px] font-bold tracking-[0.2em] uppercase mb-5">Visit Us</p>
            <div className="space-y-4">
              <p className="text-white/50 text-[13px] leading-relaxed">
                {siteConfig.address.split(',').slice(0,1)}<br/>
                {siteConfig.address.split(',').slice(1).join(',').trim()}
              </p>
              <div>
                <p className="text-white/25 text-[11px] uppercase tracking-widest mb-1 font-bold">Hours</p>
                <p className="text-white/45 text-[13px]">Mon–Fri: {siteConfig.hours.weekday}</p>
                <p className="text-white/45 text-[13px]">Sat: {siteConfig.hours.saturday} · Sun: {siteConfig.hours.sunday}</p>
              </div>
              <a href={`mailto:${siteConfig.email}`} className="text-white/45 text-[13px] hover:text-white transition-colors block">
                {siteConfig.email}
              </a>
              <a href="/contact" className="inline-flex items-center gap-2 text-[#C8FF00] text-[13px] font-bold hover:gap-3 transition-all">
                Book a Free Class →
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/[0.06] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/20 text-[12px]">© {year} APEX Performance Studio. All rights reserved.</p>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms', 'Waiver'].map((item) => (
              <a key={item} href="#" className="text-white/20 text-[12px] hover:text-white/50 transition-colors">{item}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
