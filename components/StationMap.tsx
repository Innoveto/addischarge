"use client";

import { useEffect, useRef, useState } from "react";
import "leaflet/dist/leaflet.css";
import { useI18n } from "@/lib/i18n";
import {
  ADDIS_CENTER,
  ADDIS_ZOOM,
  assetPath,
  stations,
  statusBadge,
  statusColors,
  type Station,
  type Status,
} from "@/lib/stations";

export default function StationMap() {
  const { t, locale } = useI18n();
  const [selected, setSelected] = useState<string>("megenagna");
  const mapEl = useRef<HTMLDivElement>(null);
  const mapRef = useRef<import("leaflet").Map | null>(null);
  const markersRef = useRef<Map<string, import("leaflet").CircleMarker>>(
    new Map(),
  );
  const active = stations.find((s) => s.id === selected) ?? stations[0];

  useEffect(() => {
    let cancelled = false;

    async function init() {
      const L = (await import("leaflet")).default;

      if (cancelled || !mapEl.current || mapRef.current) return;

      const map = L.map(mapEl.current, {
        center: ADDIS_CENTER,
        zoom: ADDIS_ZOOM,
        zoomControl: true,
        attributionControl: true,
      });

      L.tileLayer(
        "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png",
        {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>',
          subdomains: "abcd",
          maxZoom: 19,
        },
      ).addTo(map);

      mapRef.current = map;

      for (const s of stations) {
        const marker = L.circleMarker([s.lat, s.lng], {
          radius: 9,
          color: "#121416",
          weight: 2,
          fillColor: statusColors[s.status],
          fillOpacity: 0.95,
        });
        marker.bindPopup(
          `<strong>${s.name}</strong><br/><span style="opacity:.75">${s.neighborhood}</span>`,
        );
        marker.on("click", () => setSelected(s.id));
        marker.addTo(map);
        markersRef.current.set(s.id, marker);
      }

      // Invalidate size after layout for mobile / flex
      setTimeout(() => map.invalidateSize(), 100);
    }

    init();

    return () => {
      cancelled = true;
      // eslint-disable-next-line react-hooks/exhaustive-deps -- capture current map instance on unmount
      const map = mapRef.current;
      if (map) {
        map.remove();
        mapRef.current = null;
        markersRef.current.clear();
      }
    };
  }, []);

  // Highlight selected marker + pan
  useEffect(() => {
    const map = mapRef.current;
    if (!map) return;
    markersRef.current.forEach((marker, id) => {
      const s = stations.find((x) => x.id === id);
      if (!s) return;
      const isActive = id === selected;
      marker.setStyle({
        radius: isActive ? 12 : 9,
        fillColor: statusColors[s.status],
        weight: isActive ? 3 : 2,
        color: isActive ? "#FCDD09" : "#121416",
      });
      if (isActive) marker.bringToFront();
    });
    const s = stations.find((x) => x.id === selected);
    if (s) {
      map.panTo([s.lat, s.lng], { animate: true });
    }
  }, [selected]);

  function statusLabel(status: Status) {
    return t.status[status];
  }

  function neighborhood(s: Station) {
    return locale === "am" ? s.neighborhoodAm : s.neighborhood;
  }

  function occupancy(s: Station) {
    return locale === "am" ? s.occupancyAm : s.occupancy;
  }

  return (
    <section id="map" className="border-b border-charcoal-border">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="mb-8 max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-wider text-ethio-green-bright">
            {t.map.eyebrow}
          </p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            {t.map.title}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
            {t.map.body}
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.4fr_0.9fr]">
          <div className="relative overflow-hidden rounded-2xl border border-charcoal-border bg-charcoal-elevated">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-charcoal-border px-4 py-3">
              <span className="text-xs font-medium text-muted">
                {t.map.layerLabel}
              </span>
              <div className="flex items-center gap-3 text-[11px] text-muted">
                {(
                  [
                    ["available", t.status.available],
                    ["busy", t.status.busy],
                    ["offline", t.status.offline],
                  ] as const
                ).map(([key, label]) => (
                  <span key={key} className="flex items-center gap-1.5">
                    <span
                      className="h-2 w-2 rounded-full"
                      style={{ background: statusColors[key] }}
                    />
                    {label}
                  </span>
                ))}
              </div>
            </div>

            <div
              ref={mapEl}
              className="h-[280px] w-full sm:h-[380px] lg:h-[440px] [&_.leaflet-container]:h-full [&_.leaflet-container]:w-full [&_.leaflet-container]:bg-[#16191d] [&_.leaflet-control-attribution]:bg-black/60 [&_.leaflet-control-attribution]:text-[10px] [&_.leaflet-control-attribution]:text-zinc-400"
            />
          </div>

          <div className="flex flex-col gap-4">
            <div className="rounded-2xl border border-charcoal-border bg-charcoal-elevated p-5">
              {active.image && (
                <div className="mb-4 overflow-hidden rounded-xl">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={assetPath(active.image)}
                    alt={active.name}
                    className="h-28 w-full object-cover"
                  />
                </div>
              )}
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    {active.name}
                  </h3>
                  <p className="mt-0.5 text-sm text-muted">
                    {neighborhood(active)}
                  </p>
                </div>
                <span
                  className={`shrink-0 rounded-full px-2.5 py-1 text-[11px] font-medium ${statusBadge[active.status]}`}
                >
                  {statusLabel(active.status)}
                </span>
              </div>
              <dl className="mt-5 grid grid-cols-2 gap-4">
                <div>
                  <dt className="text-[11px] uppercase tracking-wide text-muted">
                    {t.map.power}
                  </dt>
                  <dd className="mt-1 font-mono text-sm font-semibold text-ethio-gold">
                    {active.powerKw} kW
                  </dd>
                </div>
                <div>
                  <dt className="text-[11px] uppercase tracking-wide text-muted">
                    {t.map.connectors}
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
                <div className="col-span-2">
                  <dt className="text-[11px] uppercase tracking-wide text-muted">
                    {t.map.occupancy}
                  </dt>
                  <dd className="mt-1 text-sm text-foreground">
                    {occupancy(active)}
                  </dd>
                </div>
              </dl>
              <button
                type="button"
                className="mt-6 w-full rounded-xl bg-ethio-green py-2.5 text-sm font-semibold text-white transition hover:bg-ethio-green-bright"
              >
                {t.map.navigate}
              </button>
            </div>

            <ul className="max-h-64 space-y-1.5 overflow-y-auto rounded-2xl border border-charcoal-border bg-charcoal-elevated p-2 sm:max-h-72">
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
                        style={{ background: statusColors[s.status] }}
                      />
                      <div>
                        <p className="text-sm font-medium text-white">
                          {s.name}
                        </p>
                        <p className="text-[11px] text-muted">
                          {neighborhood(s)}
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
