"use client";

import { useI18n, type Locale } from "@/lib/i18n";

export default function Header() {
  const { t, locale, setLocale } = useI18n();

  const links = [
    { href: "#map", label: t.nav.map },
    { href: "#app", label: t.nav.app },
    { href: "#how", label: t.nav.how },
    { href: "#ideas", label: t.nav.ideas },
    { href: "#capex", label: t.nav.capex },
  ];

  function toggle(l: Locale) {
    setLocale(l);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-charcoal-border/80 bg-charcoal/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
        <a href="#top" className="flex items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-ethio-green text-sm font-bold text-white shadow-[0_0_0_1px_rgba(7,137,48,0.4)]">
            AC
          </span>
          <span className="text-sm font-semibold tracking-tight sm:text-base">
            AddisCharge
          </span>
        </a>
        <nav className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-md px-3 py-1.5 text-sm text-muted transition hover:bg-charcoal-card hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <div
            role="group"
            aria-label="Language"
            className="flex items-center rounded-full border border-charcoal-border bg-charcoal-elevated p-0.5 text-xs font-semibold"
          >
            <button
              type="button"
              onClick={() => toggle("en")}
              className={`rounded-full px-2.5 py-1 transition ${
                locale === "en"
                  ? "bg-ethio-green text-white"
                  : "text-muted hover:text-foreground"
              }`}
              aria-pressed={locale === "en"}
            >
              EN
            </button>
            <button
              type="button"
              onClick={() => toggle("am")}
              className={`rounded-full px-2.5 py-1 transition ${
                locale === "am"
                  ? "bg-ethio-green text-white"
                  : "text-muted hover:text-foreground"
              }`}
              aria-pressed={locale === "am"}
            >
              አማ
            </button>
          </div>
          <a
            href="#app"
            className="rounded-full bg-ethio-green px-3.5 py-1.5 text-xs font-semibold text-white shadow-sm transition hover:bg-ethio-green-bright sm:text-sm"
          >
            {t.nav.viewDemo}
          </a>
        </div>
      </div>
    </header>
  );
}
