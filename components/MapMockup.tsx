"use client";

import { useState } from "react";

type Status = "available" | "busy" | "offline";

type Station = {
  id: string;
  name: string;
  neighborhood: string;
  status: Status;
  connectors: string[];
  powerKw: number;
  x: number;
  y: number;
};

const stations: Station[] = [
  {
    id: "bole",
    name: "Bole Atlas Hub",
    neighborhood: "Bole",
    status: "available",
    connectors: ["CCS2", "Type2"],
    powerKw: 150,
    x: 72,
    y: 58,
  },
  {
    id: "merkato",
    name: "Merkato Edge",
    neighborhood: "Merkato",
    status: "offline",
    connectors: ["Type2"],
    powerKw: 22,
    x: 28,
    y: 48,
  },
  {
    id: "piassa",
    name: "Piassa Square AC",
    neighborhood: "Piassa",
    status: "available",
    connectors: ["Type2"],
    powerKw: 22,
    x: 38,
    y: 36,
  },
  {
    id: "mexico",
    name: "Mexico Roundabout",
    neighborhood: "Mexico",
    status: "busy",
    connectors: ["CCS2", "CHAdeMO"],
    powerKw: 50,
    x: 42,
    y: 62,
  },
  {
    id: "kazanchis",
    name: "Kazanchis Plaza",
    neighborhood: "Kazanchis",
    status: "busy",
    connectors: ["CCS2"],
    powerKw: 50,
    x: 52,
    y: 42,
  },
  {
    id: "cmc",
    name: "CMC Residential",
    neighborhood: "CMC",
    status: "available",
    connectors: ["Type2"],
    powerKw: 22,
    x: 78,
    y: 38,
  },
  {
    id: "megenagna",
    name: "Megenagna Hub",
    neighborhood: "Megenagna",
    status: "available",
    connectors: ["CCS2", "Type2"],
    powerKw: 120,
    x: 68,
    y: 32,
  },
  {
    id: "airport",
    name: "Airport Corridor DCFC",
    neighborhood: "Airport corridor",
    status: "available",
    connectors: ["CCS2", "CHAdeMO"],
    powerKw: 150,
    x: 86,
    y: 72,
  },
];

const statusStyles: Record<
  Status,
  { fill: string; ring: string; label: string; badge: string }
> = {
  available: {
    fill: "#078930",
    ring: "rgba(7,137,48,0.35)",
    label: "Available",
    badge: "bg-ethio-green/15 text-ethio-green-bright",
  },
  busy: {
    fill: "#FCDD09",
    ring: "rgba(252,221,9,0.3)",
    label: "Busy",
    badge: "bg-ethio-gold/15 text-ethio-gold",
  },
  offline: {
    fill: "#6b7280",
    ring: "rgba(107,114,128,0.35)",
    label: "Offline",
    badge: "bg-zinc-500/20 text-zinc-400",
  },
};

export default function MapMockup() {
  const [selected, setSelected] = useState<string>("megenagna");
  const active = stations.find((s) => s.id === selected) ?? stations[0];

  return (
    <section id="map" className="border-b border-charcoal-border">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="mb-8 max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-wider text-ethio-green-bright">
            Network map
          </p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            Interactive-looking station map
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
            SVG mockup of Addis Ababa — not a live map API. Tap a pin to inspect
            connector types, power, and occupancy status across key
            neighborhoods.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.4fr_0.9fr]">
          <div className="relative overflow-hidden rounded-2xl border border-charcoal-border bg-charcoal-elevated">
            <div className="flex items-center justify-between border-b border-charcoal-border px-4 py-3">
              <span className="text-xs font-medium text-muted">
                Addis Ababa · demo layer
              </span>
              <div className="flex items-center gap-3 text-[11px] text-muted">
                {(
                  [
                    ["available", "Available"],
                    ["busy", "Busy"],
                    ["offline", "Offline"],
                  ] as const
                ).map(([key, label]) => (
                  <span key={key} className="flex items-center gap-1.5">
                    <span
                      className="h-2 w-2 rounded-full"
                      style={{ background: statusStyles[key].fill }}
                    />
                    {label}
                  </span>
                ))}
              </div>
            </div>

            <svg
              viewBox="0 0 100 100"
              className="h-auto w-full bg-[#16191d]"
              role="img"
              aria-label="Mock map of Addis Ababa charging stations"
            >
              <defs>
                <pattern
                  id="grid"
                  width="10"
                  height="10"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M 10 0 L 0 0 0 10"
                    fill="none"
                    stroke="#2a3038"
                    strokeWidth="0.3"
                  />
                </pattern>
              </defs>
              <rect width="100" height="100" fill="url(#grid)" />

              {/* Simplified road skeleton */}
              <path
                d="M8 70 Q35 55 55 40 T92 28"
                fill="none"
                stroke="#3a424c"
                strokeWidth="1.4"
                strokeLinecap="round"
              />
              <path
                d="M15 20 Q40 45 50 70 T75 92"
                fill="none"
                stroke="#3a424c"
                strokeWidth="1.2"
                strokeLinecap="round"
              />
              <path
                d="M5 48 H95"
                fill="none"
                stroke="#323940"
                strokeWidth="0.9"
              />
              <path
                d="M48 8 V92"
                fill="none"
                stroke="#323940"
                strokeWidth="0.9"
              />
              <circle
                cx="50"
                cy="50"
                r="18"
                fill="none"
                stroke="#2e343b"
                strokeWidth="0.6"
                strokeDasharray="1.5 1.5"
              />
              <text
                x="50"
                y="12"
                textAnchor="middle"
                fill="#6b7280"
                fontSize="2.8"
                fontFamily="system-ui"
              >
                ADD · mock
              </text>

              {stations.map((s) => {
                const st = statusStyles[s.status];
                const isActive = s.id === selected;
                return (
                  <g
                    key={s.id}
                    role="button"
                    tabIndex={0}
                    style={{ cursor: "pointer" }}
                    onClick={() => setSelected(s.id)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") setSelected(s.id);
                    }}
                  >
                    {isActive && (
                      <circle
                        cx={s.x}
                        cy={s.y}
                        r="5.5"
                        fill={st.ring}
                        className="animate-pulse"
                      />
                    )}
                    <circle
                      cx={s.x}
                      cy={s.y}
                      r={isActive ? 3.2 : 2.6}
                      fill={st.fill}
                      stroke="#121416"
                      strokeWidth="0.6"
                    />
                    <text
                      x={s.x}
                      y={s.y - 4.5}
                      textAnchor="middle"
                      fill="#c8d0d8"
                      fontSize="2.2"
                      fontFamily="system-ui"
                      fontWeight={isActive ? 600 : 400}
                    >
                      {s.neighborhood}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>

          <div className="flex flex-col gap-4">
            <div className="rounded-2xl border border-charcoal-border bg-charcoal-elevated p-5">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    {active.name}
                  </h3>
                  <p className="mt-0.5 text-sm text-muted">
                    {active.neighborhood}
                  </p>
                </div>
                <span
                  className={`shrink-0 rounded-full px-2.5 py-1 text-[11px] font-medium ${statusStyles[active.status].badge}`}
                >
                  {statusStyles[active.status].label}
                </span>
              </div>
              <dl className="mt-5 grid grid-cols-2 gap-4">
                <div>
                  <dt className="text-[11px] uppercase tracking-wide text-muted">
                    Power
                  </dt>
                  <dd className="mt-1 font-mono text-sm font-semibold text-ethio-gold">
                    {active.powerKw} kW
                  </dd>
                </div>
                <div>
                  <dt className="text-[11px] uppercase tracking-wide text-muted">
                    Connectors
                  </dt>
                  <dd className="mt-1 flex flex-wrap gap-1.5">
                    {active.connectors.map((c) => (
                      <span
                        key={c}
                        className="rounded-md border border-charcoal-border bg-charcoal-card px-1.5 py-0.5 text-[11px] font-medium text-foreground"
                      >
                        {c}
                      </span>
                    ))}
                  </dd>
                </div>
              </dl>
              <button
                type="button"
                className="mt-6 w-full rounded-xl bg-ethio-green py-2.5 text-sm font-semibold text-white transition hover:bg-ethio-green-bright"
              >
                Navigate · Pay in-app
              </button>
            </div>

            <ul className="max-h-64 space-y-1.5 overflow-y-auto rounded-2xl border border-charcoal-border bg-charcoal-elevated p-2 sm:max-h-none">
              {stations.map((s) => (
                <li key={s.id}>
                  <button
                    type="button"
                    onClick={() => setSelected(s.id)}
                    className={`flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-left transition ${
                      s.id === selected
                        ? "bg-charcoal-card ring-1 ring-ethio-green/40"
                        : "hover:bg-charcoal-card/60"
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <span
                        className="h-2 w-2 rounded-full"
                        style={{ background: statusStyles[s.status].fill }}
                      />
                      <div>
                        <p className="text-sm font-medium text-white">
                          {s.name}
                        </p>
                        <p className="text-[11px] text-muted">
                          {s.neighborhood}
                        </p>
                      </div>
                    </div>
                    <span className="font-mono text-xs text-muted">
                      {s.powerKw} kW
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
