const links = [
  { href: "#map", label: "Map" },
  { href: "#app", label: "App" },
  { href: "#how", label: "How it works" },
  { href: "#ideas", label: "Ideas" },
  { href: "#capex", label: "Capex" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-charcoal-border/80 bg-charcoal/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
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
        <a
          href="#app"
          className="rounded-full bg-ethio-green px-3.5 py-1.5 text-xs font-semibold text-white shadow-sm transition hover:bg-ethio-green-bright sm:text-sm"
        >
          View demo
        </a>
      </div>
    </header>
  );
}
