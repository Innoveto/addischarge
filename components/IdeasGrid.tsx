"use client";

import { useI18n } from "@/lib/i18n";

export default function IdeasGrid() {
  const { t } = useI18n();

  return (
    <section id="ideas" className="border-b border-charcoal-border">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="mb-10 max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-wider text-ethio-green-bright">
            {t.ideas.eyebrow}
          </p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            {t.ideas.title}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
            {t.ideas.body}
          </p>
        </div>
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {t.ideas.items.map((idea) => (
            <li
              key={idea.title}
              className="group flex flex-col rounded-2xl border border-charcoal-border bg-charcoal-elevated p-4 transition hover:border-ethio-green/40 hover:bg-charcoal-card"
            >
              <span className="w-fit rounded-full border border-charcoal-border bg-charcoal-card px-2 py-0.5 text-[10px] font-medium text-ethio-gold group-hover:border-ethio-gold/40">
                {idea.tag}
              </span>
              <h3 className="mt-3 text-sm font-semibold text-white">
                {idea.title}
              </h3>
              <p className="mt-1.5 flex-1 text-xs leading-relaxed text-muted">
                {idea.blurb}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
