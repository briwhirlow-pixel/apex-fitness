/**
 * Ticker — static row of services + promises.
 * No animation, no marquee. Bullet separators (•) in red, no dashes.
 */

const items = [
  'RECOVER & RESET',
  'WALK IN, CLOCK IN',
  'TRIAL HOUR ON THE HOUSE',
  'WEST CHESTER PA',
  'HIIT FORGE',
  'IRON TEMPLE',
  'FLOW STATE',
  'COMBAT READY',
];

export default function Ticker() {
  return (
    <section
      aria-label="APEX services"
      className="relative bg-[#070503] border-y border-[#1a1814] py-5 sm:py-6 overflow-hidden"
    >
      <div className="relative max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-14">
        <div className="flex flex-wrap items-center justify-center sm:justify-between gap-x-6 gap-y-3 text-[10px] sm:text-[11px] tracking-[0.32em] uppercase text-[color:var(--color-cream)]/72 font-medium">
          {items.map((t, i) => (
            <span key={t} className="inline-flex items-center gap-3 sm:gap-5">
              <span className="whitespace-nowrap">{t}</span>
              {i < items.length - 1 && (
                <span
                  className="inline-block w-1.5 h-1.5 rounded-full bg-[#e41313] shrink-0"
                  aria-hidden
                />
              )}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
