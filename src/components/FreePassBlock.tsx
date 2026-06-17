import Image from 'next/image';

/**
 * Free Pass Block — full-bleed photo, massive headline, email capture form.
 * Final conversion-driven CTA before the footer.
 */
export default function FreePassBlock() {
  return (
    <section id="freepass" className="relative min-h-[80vh] sm:min-h-[90vh] bg-[#0c0a08] overflow-hidden flex items-center">

      {/* background photo with ken burns */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-gym.jpg"
          alt=""
          fill
          className="object-cover opacity-40"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0c0a08] via-[#0c0a08]/85 to-[#0c0a08]/55" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(228,19,19,0.25),transparent_60%)]" />
      </div>

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-14 py-20 sm:py-28">

        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-10 lg:gap-16 items-center">

          {/* LEFT — headline + sub */}
          <div>
            <div className="reveal-up font-display text-[12px] tracking-[0.32em] uppercase text-[#e41313] mb-5" style={{ fontWeight: 700 }}>
              First hour on the house
            </div>
            <h2
              className="reveal-up reveal-d1 font-display text-[color:var(--color-cream)] leading-[0.86] tracking-[-0.018em]"
              style={{ fontSize: 'clamp(56px, 11vw, 168px)', fontWeight: 700 }}
            >
              GET YOUR
              <br />
              FREE PASS<span className="text-[#e41313]">.</span>
            </h2>
            <p className="reveal-up reveal-d2 mt-7 text-[color:var(--color-cream)]/82 text-[16px] sm:text-[19px] leading-[1.55] font-light max-w-xl">
              No paperwork, no sales pitch. Drop your email, pick a class, walk in. We will hold a spot for you on the floor.
            </p>
          </div>

          {/* RIGHT — form */}
          <div className="reveal-up reveal-d3 bg-[#0c0a08] border border-[#1a1814] p-7 sm:p-8 lg:p-10">
            <div className="font-display text-[11px] tracking-[0.32em] uppercase text-[#e41313] mb-5" style={{ fontWeight: 700 }}>
              Claim your hour
            </div>

            <form className="flex flex-col gap-4" action="/api/freepass" method="post">
              <label className="block">
                <span className="block font-display text-[10px] tracking-[0.28em] uppercase text-[color:var(--color-cream)]/55 mb-2" style={{ fontWeight: 600 }}>
                  First name
                </span>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full bg-transparent border border-[color:var(--color-cream)]/25 px-4 py-3.5 text-[15px] text-[color:var(--color-cream)] placeholder:text-[color:var(--color-cream)]/30 focus:outline-none focus:border-[#e41313]"
                  placeholder="Your name"
                />
              </label>

              <label className="block">
                <span className="block font-display text-[10px] tracking-[0.28em] uppercase text-[color:var(--color-cream)]/55 mb-2" style={{ fontWeight: 600 }}>
                  Email
                </span>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full bg-transparent border border-[color:var(--color-cream)]/25 px-4 py-3.5 text-[15px] text-[color:var(--color-cream)] placeholder:text-[color:var(--color-cream)]/30 focus:outline-none focus:border-[#e41313]"
                  placeholder="you@example.com"
                />
              </label>

              <label className="block">
                <span className="block font-display text-[10px] tracking-[0.28em] uppercase text-[color:var(--color-cream)]/55 mb-2" style={{ fontWeight: 600 }}>
                  Pick a class
                </span>
                <select
                  name="class"
                  required
                  defaultValue=""
                  className="w-full bg-transparent border border-[color:var(--color-cream)]/25 px-4 py-3.5 text-[15px] text-[color:var(--color-cream)] focus:outline-none focus:border-[#e41313]"
                >
                  <option value="" disabled>Choose a discipline</option>
                  <option value="hiit-forge" className="bg-[#0c0a08]">HIIT Forge</option>
                  <option value="iron-temple" className="bg-[#0c0a08]">Iron Temple</option>
                  <option value="flow-state" className="bg-[#0c0a08]">Flow State</option>
                  <option value="velocity-cycle" className="bg-[#0c0a08]">Velocity Cycle</option>
                  <option value="combat-ready" className="bg-[#0c0a08]">Combat Ready</option>
                  <option value="recover-reset" className="bg-[#0c0a08]">Recover & Reset</option>
                </select>
              </label>

              <button type="submit" className="btn-solid-red w-full mt-2">
                Hold My Spot
              </button>

              <p className="mt-2 text-[11px] text-[color:var(--color-cream)]/45 leading-relaxed">
                One pass per person. You will hear back from a coach within the hour.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
