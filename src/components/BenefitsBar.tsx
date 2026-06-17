export default function BenefitsBar() {
  const benefits = [
    'Programmed, not random',
    'Coaches that know your name',
    'No join fee, no contract',
  ];

  return (
    <section className="border-y border-edge py-8 sm:py-10">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="reveal-up grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-8">
          {benefits.map((b, i) => (
            <div key={i} className="flex items-center gap-3 sm:justify-center">
              <span className="block w-1.5 h-1.5 rounded-full bg-accent shrink-0" aria-hidden="true" />
              <span className="text-[15px] sm:text-[16px] font-medium text-ink">
                {b}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
