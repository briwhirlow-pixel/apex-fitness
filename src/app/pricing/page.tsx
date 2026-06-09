import Pricing from '@/components/Pricing';

const faqs = [
  {
    q: "Is there really a free first hour?",
    a: "Yes. Walk in, take any class on the schedule, meet your coach. If you don't love it, you owe us nothing and walk out with no obligation.",
  },
  {
    q: "Can I cancel my membership anytime?",
    a: "Monthly members can cancel any time with thirty days' notice — no penalty, no questions. Annual members can cancel with a prorated refund in the first thirty days.",
  },
  {
    q: "What's the 30-day floor?",
    a: "If you attend at least eight classes in your first thirty days and don't see measurable progress, we refund your full first month. We track every session so the case is made on numbers, not vibes.",
  },
  {
    q: "Are there joining fees?",
    a: "None. No initiation fees, no admin fees, no hidden costs. The price you see is what you pay.",
  },
  {
    q: "Can I pause my membership?",
    a: "Monthly members can pause for up to ninety days a year — useful for travel or injury. Just let the front desk know in advance.",
  },
  {
    q: "What does the free guest pass cover?",
    a: "Your guest gets access to any single class of their choice. A clean way to bring someone in without putting them on the spot.",
  },
];

export default function PricingPage() {
  return (
    <div className="bg-[color:var(--color-bone)] min-h-screen">

      {/* Header */}
      <section className="relative max-w-[1400px] mx-auto px-6 sm:px-10 pt-32 sm:pt-36 pb-12">
        <div className="h-px bg-[color:var(--color-ink)]/25" />
        <div className="grid grid-cols-2 md:grid-cols-12 gap-x-4 gap-y-1 py-3 font-mono text-[10px] tracking-[0.18em] uppercase text-[color:var(--color-ink)]/55">
          <span className="md:col-span-3">Apex / Chicago</span>
          <span className="md:col-span-3">Section III — Rate Card</span>
          <span className="hidden md:inline md:col-span-3">Valid through 12.31.26</span>
          <span className="md:col-span-3 text-right">No joining fee</span>
        </div>
        <div className="h-px bg-[color:var(--color-ink)]/25" />

        <div className="grid grid-cols-12 gap-x-6 sm:gap-x-8 mt-14">
          <div className="col-span-12 lg:col-span-8">
            <div className="font-mono text-[11px] tracking-[0.22em] uppercase text-[color:var(--color-ember)] mb-5">
              Membership
            </div>
            <h1
              className="serif-display tracking-[-0.028em] leading-[0.94] text-[color:var(--color-ink)]"
              style={{ fontSize: 'clamp(56px, 10vw, 152px)', fontWeight: 500 }}
            >
              Three rates.<br />
              <span className="serif-wonk">No surprises</span>.
            </h1>
          </div>
          <div className="col-span-12 lg:col-span-4 lg:pt-6 mt-6 lg:mt-0">
            <p className="font-sans text-[color:var(--color-ink-soft)] text-[15px] sm:text-[16px] leading-[1.6] max-w-sm">
              The drop-in is for the curious. The monthly is for the disciplined.
              The annual is for the converted. Cancel any month with notice.
            </p>
          </div>
        </div>
      </section>

      {/* Reuse the Pricing component as the rate-card body */}
      <Pricing />

      {/* FAQ */}
      <section className="max-w-[1400px] mx-auto px-6 sm:px-10 pb-24 sm:pb-32">

        <div className="grid grid-cols-12 gap-x-6 sm:gap-x-8 items-end mb-12 sm:mb-16">
          <div className="col-span-12 lg:col-span-8">
            <div className="flex items-center gap-4 mb-5">
              <span className="font-mono text-[10px] sm:text-[11px] tracking-[0.22em] uppercase text-[color:var(--color-ember)]">
                § 07 — Notes &amp; Footnotes
              </span>
              <span className="h-px flex-1 bg-[color:var(--color-ink)]/20" />
            </div>
            <h2
              className="serif-display tracking-[-0.025em] leading-[0.95] text-[color:var(--color-ink)]"
              style={{ fontSize: 'clamp(40px, 6vw, 80px)', fontWeight: 500 }}
            >
              The reasonable <span className="serif-wonk">questions</span>.
            </h2>
          </div>
        </div>

        <div className="h-px bg-[color:var(--color-ink)]/25" />
        {faqs.map((faq, i) => (
          <details
            key={faq.q}
            className="group border-b border-[color:var(--color-ink)]/15 py-6 sm:py-8"
          >
            <summary className="grid grid-cols-12 gap-x-6 sm:gap-x-8 items-baseline cursor-pointer list-none">
              <div className="col-span-2 sm:col-span-1 font-mono text-[11px] tracking-[0.22em] uppercase text-[color:var(--color-ink)]/45">
                0{i + 1}
              </div>
              <h3
                className="col-span-9 sm:col-span-10 serif-display leading-[1.18] tracking-[-0.015em] text-[color:var(--color-ink)] group-open:text-[color:var(--color-ember)] transition-colors"
                style={{ fontSize: 'clamp(20px, 2.4vw, 30px)', fontWeight: 500 }}
              >
                {faq.q}
              </h3>
              <div className="col-span-1 font-mono text-[14px] text-[color:var(--color-ink)]/55 group-open:rotate-45 transition-transform text-right">
                +
              </div>
            </summary>
            <div className="grid grid-cols-12 gap-x-6 sm:gap-x-8 mt-5">
              <div className="hidden sm:block col-span-1" />
              <p className="col-span-12 sm:col-span-10 font-sans text-[color:var(--color-ink-soft)] text-[15px] leading-[1.65] max-w-[58ch]">
                {faq.a}
              </p>
            </div>
          </details>
        ))}

        <div className="mt-16 grid grid-cols-12 gap-x-6 sm:gap-x-8 items-end pt-8 border-t border-[color:var(--color-ink)]/15">
          <div className="col-span-12 sm:col-span-8">
            <p
              className="serif-display text-[color:var(--color-ink)] leading-[1.2] tracking-[-0.012em]"
              style={{ fontSize: 'clamp(22px, 2.6vw, 32px)', fontWeight: 500 }}
            >
              Still have one we didn&apos;t answer? Ask the front desk in person.
            </p>
          </div>
          <div className="col-span-12 sm:col-span-4 mt-6 sm:mt-0 sm:text-right">
            <a
              href="/contact"
              className="group inline-flex items-center gap-3 font-mono text-[11px] tracking-[0.22em] uppercase text-[color:var(--color-ink)] hover:text-[color:var(--color-ember)] transition-colors"
            >
              Send a note
              <span className="block w-6 h-px bg-current transition-all duration-300 group-hover:w-12" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
