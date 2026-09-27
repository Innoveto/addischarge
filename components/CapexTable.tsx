const rows = [
  {
    item: "AC wallbox / AC public port",
    low: "$3.5k",
    high: "$15k",
    notes: "Per port installed; site works & panel upgrades vary widely",
  },
  {
    item: "DCFC 50–150 kW",
    low: "$50k",
    high: "$250k",
    notes: "Per port installed — hardware + civil + grid interconnection",
  },
  {
    item: "Illustrative multi-bay hub",
    low: "~$1.0m",
    high: "~$1.1m",
    notes:
      "~ETB 170m all-in narrative (e.g. Kotebe-style utility-backed station) — published-order magnitude only",
  },
  {
    item: "Software / app MVP",
    low: "Tens of $k",
    high: "Tens of $k",
    notes: "Demo / MVP band only — not a production quote",
  },
];

export default function CapexTable() {
  return (
    <section id="capex" className="border-b border-charcoal-border bg-charcoal-elevated/40">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="mb-8 max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-wider text-ethio-gold">
            Capex estimates
          </p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            Order-of-magnitude ranges
          </h2>
          <p className="mt-3 rounded-xl border border-ethio-gold/25 bg-ethio-gold/5 px-4 py-3 text-sm leading-relaxed text-muted">
            <strong className="font-semibold text-ethio-gold">
              Illustrative only — not quotes.
            </strong>{" "}
            Figures are rough order-of-magnitude for discussion. Actual costs
            depend on land, grid capacity, FX, civil works, and procurement.
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-charcoal-border">
          <table className="w-full min-w-[640px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-charcoal-border bg-charcoal-card">
                <th className="px-4 py-3 font-semibold text-white">Item</th>
                <th className="px-4 py-3 font-semibold text-white">Low</th>
                <th className="px-4 py-3 font-semibold text-white">High</th>
                <th className="px-4 py-3 font-semibold text-white">Notes</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr
                  key={r.item}
                  className={
                    i % 2 === 0
                      ? "bg-charcoal-elevated"
                      : "bg-charcoal-elevated/60"
                  }
                >
                  <td className="border-t border-charcoal-border px-4 py-3 font-medium text-white">
                    {r.item}
                  </td>
                  <td className="border-t border-charcoal-border px-4 py-3 font-mono text-ethio-green-bright">
                    {r.low}
                  </td>
                  <td className="border-t border-charcoal-border px-4 py-3 font-mono text-ethio-gold">
                    {r.high}
                  </td>
                  <td className="border-t border-charcoal-border px-4 py-3 text-muted">
                    {r.notes}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
