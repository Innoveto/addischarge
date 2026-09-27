"use client";

import { useI18n } from "@/lib/i18n";

export default function CapexTable() {
  const { t } = useI18n();

  return (
    <section
      id="capex"
      className="border-b border-charcoal-border bg-charcoal-elevated/40"
    >
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="mb-8 max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-wider text-ethio-gold">
            {t.capex.eyebrow}
          </p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            {t.capex.title}
          </h2>
          <p className="mt-3 rounded-xl border border-ethio-gold/25 bg-ethio-gold/5 px-4 py-3 text-sm leading-relaxed text-muted">
            <strong className="font-semibold text-ethio-gold">
              {t.capex.disclaimerStrong}
            </strong>{" "}
            {t.capex.disclaimer}
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-charcoal-border">
          <table className="w-full min-w-[640px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-charcoal-border bg-charcoal-card">
                <th className="px-4 py-3 font-semibold text-white">
                  {t.capex.colItem}
                </th>
                <th className="px-4 py-3 font-semibold text-white">
                  {t.capex.colLow}
                </th>
                <th className="px-4 py-3 font-semibold text-white">
                  {t.capex.colHigh}
                </th>
                <th className="px-4 py-3 font-semibold text-white">
                  {t.capex.colNotes}
                </th>
              </tr>
            </thead>
            <tbody>
              {t.capex.rows.map((r, i) => (
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
