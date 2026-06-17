import Image from 'next/image';

export default function FreePassBlock() {
  return (
    <section id="freepass" className="relative min-h-[80vh] overflow-hidden flex items-center">
      <div className="absolute inset-0">
        <Image
          src="/images/boxing.jpg"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/50" />
      </div>

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 py-16 sm:py-24">
        <div className="grid lg:grid-cols-[1.3fr_1fr] gap-8 lg:gap-14 items-center">

          <div>
            <h2
              className="reveal-up font-display text-white leading-[0.9] text-balance"
              style={{ fontSize: 'clamp(40px, 8vw, 80px)' }}
            >
              Get your
              <br />
              free pass.
            </h2>
            <p className="reveal-up reveal-d1 mt-5 text-white/75 text-[16px] sm:text-[18px] leading-[1.6] max-w-md text-pretty">
              No paperwork, no sales pitch. Drop your name and email, pick a class, and walk in. We hold a spot for you on the floor.
            </p>
          </div>

          <div className="reveal-up reveal-d2 bg-white p-6 sm:p-8">
            <div className="text-[13px] font-semibold text-accent mb-5 tracking-[0.02em]">
              Claim your hour
            </div>

            <form className="flex flex-col gap-4" action="/api/freepass" method="post">
              <label className="block">
                <span className="block text-[12px] font-medium text-ink-muted mb-2">
                  First name
                </span>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full border border-edge px-4 py-3 text-[15px] text-ink placeholder:text-ink-muted/50 focus:outline-none focus:border-accent transition-colors"
                  placeholder="Your name"
                />
              </label>

              <label className="block">
                <span className="block text-[12px] font-medium text-ink-muted mb-2">
                  Email
                </span>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full border border-edge px-4 py-3 text-[15px] text-ink placeholder:text-ink-muted/50 focus:outline-none focus:border-accent transition-colors"
                  placeholder="you@example.com"
                />
              </label>

              <label className="block">
                <span className="block text-[12px] font-medium text-ink-muted mb-2">
                  Pick a class
                </span>
                <select
                  name="class"
                  required
                  defaultValue=""
                  className="w-full border border-edge px-4 py-3 text-[15px] text-ink focus:outline-none focus:border-accent transition-colors bg-white"
                >
                  <option value="" disabled>Choose a discipline</option>
                  <option value="hiit-forge">HIIT Forge</option>
                  <option value="iron-temple">Iron Temple</option>
                  <option value="flow-state">Flow State</option>
                  <option value="velocity-cycle">Velocity Cycle</option>
                  <option value="combat-ready">Combat Ready</option>
                  <option value="recover-reset">Recover &amp; Reset</option>
                </select>
              </label>

              <button type="submit" className="btn-primary w-full mt-1">
                Hold My Spot
              </button>

              <p className="mt-1 text-[12px] text-ink-muted">
                One pass per person. A coach will be in touch within the hour.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
