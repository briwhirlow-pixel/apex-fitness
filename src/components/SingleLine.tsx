/**
 * Single line replacement for the killed stat banner.
 * Full-width Oswald, cream, dark bg. One sentence only.
 */
export default function SingleLine() {
  return (
    <section className="relative bg-[#0c0a08] py-14 sm:py-20 lg:py-24 overflow-hidden">
      <div className="relative max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-14">
        <p
          className="font-display text-[color:var(--color-cream)] leading-[1] tracking-[-0.005em] text-center sm:text-left"
          style={{ fontSize: 'clamp(28px, 4.4vw, 76px)', fontWeight: 800 }}
        >
          SIX DISCIPLINES <span className="text-[#e41313]">·</span> THREE COACHES <span className="text-[#e41313]">·</span> ONE STANDARD
          <span className="text-[#e41313]">.</span>
        </p>
      </div>
    </section>
  );
}
