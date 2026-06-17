/**
 * Ticker — "The Signal"
 * Dark band between sections. Scrolls the 6 disciplines + studio promises.
 * Pure CSS marquee, pauses on hover.
 */

const items = [
  'HIIT Forge',
  'Iron Temple',
  'Flow State',
  'Velocity Cycle',
  'Combat Ready',
  'Recover & Reset',
  'Walk in — clock in',
  'Trial hour on the house',
  'Haddon Township · NJ',
];

const Sep = () => (
  <span className="mx-8 sm:mx-12 text-[color:var(--color-red)] text-[10px] opacity-80" aria-hidden>✦</span>
);

export default function Ticker() {
  // Duplicate the items so the marquee loops seamlessly
  const row = [...items, ...items];

  return (
    <section
      aria-label="APEX services ticker"
      className="relative bg-[color:var(--color-ink-deep)] border-y border-[color:var(--color-border)] overflow-hidden"
    >
      <div className="marquee py-5 sm:py-6">
        {row.map((t, i) => (
          <div key={`${t}-${i}`} className="flex items-center shrink-0">
            <span className="text-[11px] sm:text-[12px] tracking-[0.32em] uppercase text-[color:var(--color-cream)]/65 font-light whitespace-nowrap">
              {t}
            </span>
            <Sep />
          </div>
        ))}
      </div>
    </section>
  );
}
