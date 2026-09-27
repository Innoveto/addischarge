"use client";

import { useI18n } from "@/lib/i18n";
import { assetPath, stations, statusColors } from "@/lib/stations";

export default function Hero() {
  const { t } = useI18n();
  const available = stations.filter((s) => s.status === "available").length;
  const snapshot = stations.slice(0, 4);

  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-charcoal-border"
    >
      {/* Background photo */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={assetPath("/images/addis-skyline.jpg")}
          alt=""
          className="h-full w-full object-cover opacity-25"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(18,20,22,0.55) 0%, rgba(18,20,22,0.85) 55%, rgba(18,20,22,1) 100%), radial-gradient(ellipse 80% 50% at 50% -20%, rgba(7,137,48,0.35), transparent), radial-gradient(ellipse 40% 30% at 90% 20%, rgba(252,221,9,0.1), transparent)",
          }}
        />
      </div>

      <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-12">
        <div>
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-charcoal-border bg-charcoal-elevated/90 px-3 py-1 text-xs font-medium text-muted backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-ethio-green" />
            {t.hero.badge}
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-[3.25rem] lg:leading-[1.1]">
            {t.hero.titleBefore}{" "}
            <span className="text-ethio-green-bright">
              {t.hero.titleHighlight}
            </span>{" "}
            {t.hero.titleAfter}
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            {t.hero.body}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#map"
              className="inline-flex items-center justify-center rounded-full bg-ethio-green px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-ethio-green-bright"
            >
              {t.hero.ctaMap}
            </a>
            <a
              href="#ideas"
              className="inline-flex items-center justify-center rounded-full border border-charcoal-border bg-charcoal-elevated/90 px-5 py-2.5 text-sm font-semibold text-foreground backdrop-blur transition hover:border-ethio-gold/40 hover:bg-charcoal-card"
            >
              {t.hero.ctaIdeas}
            </a>
          </div>
          <dl className="mt-10 grid grid-cols-3 gap-4 border-t border-charcoal-border pt-6 sm:max-w-md">
            {[
              { label: t.hero.statStations, value: "8+" },
              { label: t.hero.statConnectors, value: "CCS2 · T2" },
              { label: t.hero.statPay, value: "Telebirr" },
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
          <div className="rounded-2xl border border-charcoal-border bg-charcoal-elevated/95 p-4 shadow-2xl shadow-black/40 backdrop-blur">
            <div className="mb-3 flex items-center justify-between">
              <span className="text-xs font-medium text-muted">
                {t.hero.liveSnapshot}
              </span>
              <span className="rounded-full bg-ethio-green/15 px-2 py-0.5 text-[11px] font-medium text-ethio-green-bright">
                {t.hero.availableCount.replace("{n}", String(available))}
              </span>
            </div>
            <ul className="space-y-2">
              {snapshot.map((row) => (
                <li
                  key={row.id}
                  className="flex items-center justify-between rounded-xl border border-charcoal-border/80 bg-charcoal-card px-3 py-2.5"
                >
                  <div className="flex items-center gap-2.5">
                    <span
                      className="h-2 w-2 rounded-full"
                      style={{ background: statusColors[row.status] }}
                    />
                    <div>
                      <p className="text-sm font-medium text-white">
                        {row.name}
                      </p>
                      <p className="text-[11px] text-muted">
                        {t.status[row.status]}
                      </p>
                    </div>
                  </div>
                  <span className="font-mono text-xs text-ethio-gold">
                    {row.powerKw} kW
                  </span>
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
