import Image from 'next/image';

export default function FinalCTA() {
  return (
    <section className="relative h-[420px] sm:h-[480px] overflow-hidden">
      <Image
        src="/images/boxing.jpg"
        alt="Training session at APEX"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <h2 className="font-[family-name:var(--font-heading)] text-white text-[clamp(28px,5vw,48px)] font-semibold uppercase tracking-[0.03em] leading-[1.15] max-w-2xl mb-5">
          Ready to Get Started?
        </h2>
        <p className="text-white/75 text-[16px] sm:text-[18px] leading-relaxed max-w-xl mb-8">
          Walk in, take any class, meet your coach. Your first hour is always free — no card required, no commitment.
        </p>
        <a
          href="/contact"
          className="bg-[#e41313] text-white rounded-full px-10 py-3.5 text-[15px] font-semibold hover:bg-[#c10e0e] transition-colors inline-block"
        >
          Claim Your Free Trial
        </a>
      </div>
    </section>
  );
}
