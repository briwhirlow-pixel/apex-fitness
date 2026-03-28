export default function FinalCTA() {
  return (
    <section className="py-24 sm:py-32" style={{ background: '#06080F' }}>
      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12">

        <div className="relative rounded-3xl overflow-hidden p-10 sm:p-16 md:p-20 text-center"
          style={{ background: '#C8FF00' }}>

          {/* BG pattern */}
          <div className="absolute inset-0 opacity-[0.06] pointer-events-none"
            style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.8) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

          <div className="relative">
            <p className="text-[#06080F]/50 text-[11px] font-bold tracking-[0.2em] uppercase mb-5">Limited Spots</p>
            <h2 className="font-black leading-tight tracking-tighter text-[#06080F] mb-5" style={{ fontSize: 'clamp(40px, 7vw, 88px)' }}>
              YOUR FIRST CLASS<br />IS FREE.
            </h2>
            <p className="text-[#06080F]/60 text-[16px] sm:text-[18px] leading-relaxed mb-10 max-w-md mx-auto">
              Walk in. Try any class. Meet your coach. If you don't love it, you owe us nothing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-[#060B18] text-white font-black px-8 py-4 rounded-lg text-[15px] hover:bg-[#0C1228] transition-colors hover:scale-[1.03] active:scale-[0.97]">
                Claim My Free Class →
              </a>
              <a href="/classes"
                className="inline-flex items-center justify-center gap-2 text-[#06080F] font-bold px-8 py-4 rounded-lg border-2 border-[#06080F]/20 text-[15px] hover:border-[#06080F]/50 transition-colors">
                Browse Schedule
              </a>
            </div>
            <p className="text-[#06080F]/40 text-[13px] mt-6">No credit card required · Walk-ins welcome · Chicago, IL</p>
          </div>
        </div>
      </div>
    </section>
  );
}
