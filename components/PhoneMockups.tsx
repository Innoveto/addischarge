"use client";

import { useI18n } from "@/lib/i18n";

function PhoneShell({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto w-full max-w-[260px]">
      <p className="mb-3 text-center text-xs font-medium uppercase tracking-wider text-muted">
        {title}
      </p>
      <div className="relative rounded-[2rem] border border-charcoal-border bg-black p-2 shadow-2xl shadow-black/50">
        <div className="absolute top-0 left-1/2 z-10 h-5 w-24 -translate-x-1/2 rounded-b-xl bg-black" />
        <div className="overflow-hidden rounded-[1.6rem] bg-charcoal-elevated">
          <div className="flex items-center justify-between px-4 pt-7 pb-2">
            <span className="text-[10px] font-semibold text-white">
              AddisCharge
            </span>
            <span className="text-[9px] text-muted">9:41</span>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}

export default function PhoneMockups() {
  const { t } = useI18n();

  return (
    <section
      id="app"
      className="border-b border-charcoal-border bg-charcoal-elevated/40"
    >
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="mb-12 max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-wider text-ethio-green-bright">
            {t.app.eyebrow}
          </p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            {t.app.title}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
            {t.app.body}
          </p>
        </div>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          <PhoneShell title={t.app.listTitle}>
            <div className="space-y-2 px-3 pb-5">
              <div className="rounded-lg bg-charcoal-card px-2.5 py-2 text-[10px] text-muted">
                {t.app.nearYou}
              </div>
              {[
                {
                  n: "Megenagna Hub",
                  s: t.status.available,
                  kw: "120 kW",
                  ok: true,
                },
                {
                  n: "Bole Atlas",
                  s: t.status.available,
                  kw: "150 kW",
                  ok: true,
                },
                {
                  n: "Kazanchis Plaza",
                  s: t.app.ofBusy,
                  kw: "50 kW",
                  ok: false,
                },
                {
                  n: "CMC Residential",
                  s: t.status.available,
                  kw: "22 kW",
                  ok: true,
                },
              ].map((r) => (
                <div
                  key={r.n}
                  className="flex items-center justify-between rounded-xl border border-charcoal-border/70 bg-charcoal-card px-2.5 py-2"
                >
                  <div>
                    <p className="text-[11px] font-semibold text-white">
                      {r.n}
                    </p>
                    <p
                      className={`text-[9px] ${r.ok ? "text-ethio-green-bright" : "text-ethio-gold"}`}
                    >
                      {r.s}
                    </p>
                  </div>
                  <span className="font-mono text-[9px] text-muted">
                    {r.kw}
                  </span>
                </div>
              ))}
            </div>
          </PhoneShell>

          <PhoneShell title={t.app.detailTitle}>
            <div className="px-3 pb-5">
              <div className="rounded-xl bg-gradient-to-br from-ethio-green/30 to-charcoal-card p-3">
                <p className="text-[11px] font-semibold text-white">
                  Megenagna Hub
                </p>
                <p className="mt-0.5 text-[9px] text-muted">
                  CCS2 · Type2 · 120 kW
                </p>
                <div className="mt-3 flex gap-2">
                  {[
                    { bay: "Bay A", state: t.app.bayFree, free: true },
                    { bay: "Bay B", state: t.app.bayCharging, free: false },
                    { bay: "Bay C", state: t.app.bayFree, free: true },
                  ].map((b) => (
                    <div
                      key={b.bay}
                      className="flex-1 rounded-lg bg-black/30 px-1.5 py-2 text-center"
                    >
                      <p className="text-[9px] text-muted">{b.bay}</p>
                      <p
                        className={`mt-0.5 text-[10px] font-semibold ${
                          b.free
                            ? "text-ethio-green-bright"
                            : "text-ethio-gold"
                        }`}
                      >
                        {b.state}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-3 space-y-1.5 text-[10px] text-muted">
                <p>{t.app.occupancyAgo}</p>
                <p>{t.app.hours}</p>
              </div>
              <button
                type="button"
                className="mt-4 w-full rounded-lg bg-ethio-green py-2 text-[11px] font-semibold text-white"
              >
                {t.app.startSession}
              </button>
            </div>
          </PhoneShell>

          <PhoneShell title={t.app.payTitle}>
            <div className="px-3 pb-5">
              <p className="text-[11px] font-semibold text-white">
                {t.app.checkout}
              </p>
              <p className="mt-1 text-[9px] text-muted">{t.app.estimate}</p>
              <div className="mt-3 space-y-2">
                {[
                  {
                    id: "telebirr",
                    label: t.app.telebirr,
                    sub: t.app.telebirrSub,
                    on: true,
                  },
                  {
                    id: "card",
                    label: t.app.card,
                    sub: t.app.cardSub,
                    on: false,
                  },
                  {
                    id: "wallet",
                    label: t.app.wallet,
                    sub: t.app.walletSub,
                    on: false,
                  },
                ].map((p) => (
                  <div
                    key={p.id}
                    className={`flex items-center justify-between rounded-xl border px-2.5 py-2 ${
                      p.on
                        ? "border-ethio-green/50 bg-ethio-green/10"
                        : "border-charcoal-border bg-charcoal-card"
                    }`}
                  >
                    <div>
                      <p className="text-[11px] font-medium text-white">
                        {p.label}
                      </p>
                      <p className="text-[9px] text-muted">{p.sub}</p>
                    </div>
                    <span
                      className={`h-3 w-3 rounded-full border-2 ${
                        p.on
                          ? "border-ethio-green bg-ethio-green"
                          : "border-zinc-500"
                      }`}
                    />
                  </div>
                ))}
              </div>
              <button
                type="button"
                className="mt-4 w-full rounded-lg bg-ethio-gold py-2 text-[11px] font-bold text-charcoal"
              >
                {t.app.confirmPay}
              </button>
            </div>
          </PhoneShell>
        </div>
      </div>
    </section>
  );
}
