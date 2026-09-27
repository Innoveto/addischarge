const steps = [
  {
    n: "01",
    title: "Discover",
    body: "Open the map or list view to find CCS2, Type2, and CHAdeMO ports near you — filtered by neighborhood, power, and live status.",
  },
  {
    n: "02",
    title: "Check occupancy",
    body: "See which bays are free, busy, or offline before you drive. Station detail shows connector mix and estimated wait.",
  },
  {
    n: "03",
    title: "Pay in-app",
    body: "Start a session and settle with Telebirr, card, or wallet — one receipt, roaming-ready for multiple operators.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how" className="border-b border-charcoal-border">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="mb-10 max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-wider text-ethio-green-bright">
            How it works
          </p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            Three steps from search to charge
          </h2>
        </div>
        <ol className="grid gap-4 sm:grid-cols-3">
          {steps.map((s) => (
            <li
              key={s.n}
              className="rounded-2xl border border-charcoal-border bg-charcoal-elevated p-5 sm:p-6"
            >
              <span className="font-mono text-xs font-semibold text-ethio-gold">
                {s.n}
              </span>
              <h3 className="mt-3 text-lg font-semibold text-white">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{s.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
