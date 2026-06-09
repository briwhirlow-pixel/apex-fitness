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
    <div className="bg-white min-h-screen">

      {/* Page header */}
      <section className="bg-gradient-to-br from-[#1a1a1a] to-[#2d2d2d] text-white pt-32 sm:pt-36 pb-16">
        <div className="max-w-[1170px] mx-auto px-5 sm:px-8 text-center">
          <h1 className="font-[family-name:var(--font-heading)] text-[clamp(40px,8vw,64px)] font-bold uppercase tracking-wide mb-4">
            Membership Pricing
          </h1>
          <p className="text-white/65 text-[16px] sm:text-[18px] leading-relaxed max-w-2xl mx-auto">
            No joining fee. No contracts. No hidden costs. Cancel anytime with 30 days notice.
          </p>
        </div>
      </section>

      {/* Pricing component */}
      <Pricing />

      {/* FAQ */}
      <section className="py-16 sm:py-24 bg-[color:var(--color-bone-soft)]">
        <div className="max-w-[800px] mx-auto px-5 sm:px-8">

          <div className="text-center mb-12">
            <h2 className="font-[family-name:var(--font-heading)] text-[clamp(28px,4vw,40px)] font-bold uppercase tracking-wide text-[color:var(--color-ink)] mb-4">
              Frequently Asked Questions
            </h2>
            <div className="w-16 h-1 bg-[color:var(--color-ember)] mx-auto rounded-full" />
          </div>

          <div className="space-y-0">
            {faqs.map((faq) => (
              <details
                key={faq.q}
                className="group border-b border-gray-200 bg-white first:rounded-t-xl last:rounded-b-xl"
              >
                <summary className="flex items-center justify-between cursor-pointer list-none px-6 py-5 hover:bg-gray-50 transition-colors">
                  <h3 className="text-[color:var(--color-ink)] text-[16px] font-semibold pr-4">
                    {faq.q}
                  </h3>
                  <span className="text-[color:var(--color-ember)] text-[20px] font-light shrink-0 group-open:rotate-45 transition-transform">
                    +
                  </span>
                </summary>
                <div className="px-6 pb-5">
                  <p className="text-[color:var(--color-stone)] text-[15px] leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </details>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-[color:var(--color-stone)] text-[15px] mb-4">
              Still have questions?
            </p>
            <a
              href="/contact"
              className="inline-block bg-[color:var(--color-ember)] text-white rounded-full px-8 py-3.5 text-[15px] font-semibold hover:bg-[color:var(--color-ember-deep)] transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
