"use client";

import { useI18n } from "@/lib/i18n";
import { assetPath } from "@/lib/stations";

export default function HowItWorks() {
  const { t } = useI18n();

  return (
    <section id="how" className="relative border-b border-charcoal-border">
      <div className="pointer-events-none absolute inset-0 opacity-[0.12]" aria-hidden>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={assetPath("/images/meskel-square.jpg")}
          alt=""
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-charcoal/90" />
      </div>
      <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="mb-10 max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-wider text-ethio-green-bright">
            {t.how.eyebrow}
          </p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            {t.how.title}
          </h2>
        </div>
        <ol className="grid gap-4 sm:grid-cols-3">
          {t.how.steps.map((s) => (
            <li
              key={s.n}
              className="rounded-2xl border border-charcoal-border bg-charcoal-elevated/95 p-5 backdrop-blur sm:p-6"
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
