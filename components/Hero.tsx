export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-charcoal-border"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(7,137,48,0.28), transparent), radial-gradient(ellipse 40% 30% at 90% 20%, rgba(252,221,9,0.08), transparent)",
        }}
      />
      <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-12">
        <div>
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-charcoal-border bg-charcoal-elevated px-3 py-1 text-xs font-medium text-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-ethio-green" />
            Demo microsite · Addis Ababa e-mobility
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-[3.25rem] lg:leading-[1.1]">
            Find chargers.{" "}
            <span className="text-ethio-green-bright">See occupancy.</span>{" "}
            Pay in-app.
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            AddisCharge is a ChargeMap-style consolidator for EV drivers in Addis
            Ababa — discover public stations across Bole, Merkato, Piassa, and
            beyond, check real-time status, and settle with Telebirr, card, or
            wallet.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#map"
              className="inline-flex items-center justify-center rounded-full bg-ethio-green px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-ethio-green-bright"
            >
              Explore the map
            </a>
            <a
              href="#ideas"
              className="inline-flex items-center justify-center rounded-full border border-charcoal-border bg-charcoal-elevated px-5 py-2.5 text-sm font-semibold text-foreground transition hover:border-ethio-gold/40 hover:bg-charcoal-card"
            >
              Adjacent ideas
            </a>
          </div>
          <dl className="mt-10 grid grid-cols-3 gap-4 border-t border-charcoal-border pt-6 sm:max-w-md">
            {[
              { label: "Stations (demo)", value: "8+" },
              { label: "Connectors", value: "CCS2 · T2" },
              { label: "Pay", value: "Telebirr" },
            ].map((s) => (
              <div key={s.label}>
                <dt className="text-[11px] uppercase tracking-wide text-muted">
                  {s.label}
                </dt>
                <dd className="mt-1 text-sm font-semibold text-white sm:text-base">
                  {s.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
          <div className="rounded-2xl border border-charcoal-border bg-charcoal-elevated p-4 shadow-2xl shadow-black/40">
            <div className="mb-3 flex items-center justify-between">
              <span className="text-xs font-medium text-muted">Live snapshot</span>
              <span className="rounded-full bg-ethio-green/15 px-2 py-0.5 text-[11px] font-medium text-ethio-green-bright">
                5 available
              </span>
            </div>
            <ul className="space-y-2">
              {[
                { name: "Bole Atlas Hub", status: "available", kw: "150 kW", color: "bg-ethio-green" },
                { name: "Kazanchis Plaza", status: "busy", kw: "50 kW", color: "bg-ethio-gold" },
                { name: "Airport Corridor", status: "available", kw: "120 kW", color: "bg-ethio-green" },
                { name: "Merkato Edge", status: "offline", kw: "22 kW", color: "bg-zinc-500" },
              ].map((row) => (
                <li
                  key={row.name}
                  className="flex items-center justify-between rounded-xl border border-charcoal-border/80 bg-charcoal-card px-3 py-2.5"
                >
                  <div className="flex items-center gap-2.5">
                    <span className={`h-2 w-2 rounded-full ${row.color}`} />
                    <div>
                      <p className="text-sm font-medium text-white">{row.name}</p>
                      <p className="text-[11px] capitalize text-muted">{row.status}</p>
                    </div>
                  </div>
                  <span className="font-mono text-xs text-ethio-gold">{row.kw}</span>
                </li>
              ))}
            </ul>
          </div>
          <div
            aria-hidden
            className="absolute -right-3 -bottom-3 -z-10 h-full w-full rounded-2xl border border-ethio-gold/20 bg-ethio-gold/5"
          />
        </div>
      </div>
    </section>
  );
}
