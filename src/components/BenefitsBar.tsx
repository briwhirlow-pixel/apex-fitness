/**
 * BenefitsBar — single-line band with three benefit statements.
 * Replaces the old SingleLine. Big Oswald cream on dark, red bullet
 * separators (no decorative dashes).
 */
export default function BenefitsBar() {
  return (
    <section className="relative bg-[#0c0a08] border-y border-[#1a1814] py-12 sm:py-16">
      <div className="relative max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-14">
        <p
          className="reveal-up font-display text-[color:var(--color-cream)] leading-[1.1] tracking-[-0.005em] text-center"
          style={{ fontSize: 'clamp(20px, 2.8vw, 36px)', fontWeight: 700 }}
        >
          PROGRAMMED, NOT RANDOM
          <span className="inline-block mx-3 sm:mx-5 align-middle">
            <span className="inline-block w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#e41313]" aria-hidden />
          </span>
          COACHES THAT KNOW YOUR NAME
          <span className="inline-block mx-3 sm:mx-5 align-middle">
            <span className="inline-block w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#e41313]" aria-hidden />
          </span>
          NO JOIN FEE, NO CONTRACT
        </p>
      </div>
    </section>
  );
}
