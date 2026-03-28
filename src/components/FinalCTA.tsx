export default function FinalCTA() {
  return (
    <section className="py-0 overflow-hidden" style={{ background: '#C8FF00' }}>
      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 py-24 sm:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left */}
          <div>
            <p className="text-[#0A0A0A]/50 text-[11px] font-bold tracking-[0.25em] uppercase mb-6">Limited Spots Available</p>
            <h2 className="font-black uppercase leading-[0.88] text-[#0A0A0A] mb-8"
              style={{ fontSize: 'clamp(52px, 7vw, 100px)' }}>
              YOUR<br />FIRST CLASS<br />IS FREE.
            </h2>
            <p className="text-[#0A0A0A]/60 text-[13px] font-bold uppercase tracking-widest">
              No credit card · Walk-ins welcome · Chicago, IL
            </p>
          </div>

          {/* Right */}
          <div className="flex flex-col gap-5">
            <p className="text-[#0A0A0A]/65 text-[17px] leading-relaxed">
              Walk in. Try any class. Meet your coach. If you don't love it, you owe us nothing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-[#0A0A0A] text-white font-black px-8 py-4 rounded-lg text-[15px] uppercase tracking-wide hover:bg-[#222] transition-colors hover:scale-[1.02] active:scale-[0.98]">
                Claim My Free Class →
              </a>
              <a href="/classes"
                className="inline-flex items-center justify-center gap-2 text-[#0A0A0A] font-bold px-8 py-4 rounded-lg border-2 border-[#0A0A0A]/25 text-[15px] hover:border-[#0A0A0A]/60 transition-colors">
                Browse Schedule
              </a>
            </div>

            {/* Trust items */}
            <div className="flex flex-wrap gap-x-6 gap-y-2 pt-2">
              {['No commitment', '30-day guarantee', 'Cancel anytime'].map((item) => (
                <span key={item} className="text-[#0A0A0A]/50 text-[13px] font-semibold flex items-center gap-1.5">
                  <svg width="12" height="12" fill="none" stroke="#0A0A0A" strokeOpacity="0.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7"/>
                  </svg>
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
