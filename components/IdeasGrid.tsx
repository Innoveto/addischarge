const ideas = [
  {
    title: "City charging consolidator",
    blurb: "This product — one app across operators in Addis Ababa.",
    tag: "Core",
  },
  {
    title: "Highway corridor DCFC",
    blurb: "Fast-charge spine on Addis–Adama and Addis–Hawassa routes.",
    tag: "Infra",
  },
  {
    title: "Ride-hailing fleet depots",
    blurb: "Overnight / turnaround charging for Ride and Feres fleets.",
    tag: "Fleet",
  },
  {
    title: "2W / 3W battery swap hubs",
    blurb: "Bajaj and e-moto swap cabinets at high-traffic nodes.",
    tag: "2W/3W",
  },
  {
    title: "Battery-as-a-service for taxis",
    blurb: "Lease packs, lower upfront cost, managed health & replacement.",
    tag: "BaaS",
  },
  {
    title: "EV maintenance / HV network",
    blurb: "Certified high-voltage technicians and mobile service vans.",
    tag: "Ops",
  },
  {
    title: "Mall / hotel destination charging",
    blurb: "Destination AC/DC with F&B dwell-time monetization.",
    tag: "Retail",
  },
  {
    title: "Workplace / condo shared AC",
    blurb: "Load-managed wallboxes for offices and residential compounds.",
    tag: "AC",
  },
  {
    title: "Bus & last-mile logistics depots",
    blurb: "Depot charging for e-buses and delivery vans.",
    tag: "Logistics",
  },
  {
    title: "On-site solar + storage hubs",
    blurb: "Buffered hubs that soft-land peak demand on constrained feeders.",
    tag: "Energy",
  },
  {
    title: "Local EVSE assembly / fab",
    blurb: "Enclosure and assembly for AC/DC cabinets in-country.",
    tag: "Manufacturing",
  },
  {
    title: "Payment + roaming middleware",
    blurb: "Operator-facing roaming, settlement, and OCPI-style glue.",
    tag: "Software",
  },
  {
    title: "Accessory / home wallbox retail",
    blurb: "JJM-angle: home chargers, cables, adapters, install partners.",
    tag: "Retail",
  },
  {
    title: "Used EV import inspection",
    blurb: "Battery SOH checks, warranty wrap, and compliance for imports.",
    tag: "Aftersales",
  },
  {
    title: "Driver education + range planning",
    blurb: "In-app coaching, corridor planning, and cold-weather tips.",
    tag: "UX",
  },
  {
    title: "Grid / EEU interconnection advisory",
    blurb: "Capacity studies and interconnection support with utilities.",
    tag: "Grid",
  },
];

export default function IdeasGrid() {
  return (
    <section id="ideas" className="border-b border-charcoal-border">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="mb-10 max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-wider text-ethio-green-bright">
            Adjacent Ethiopia e-mobility
          </p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            Ideas around the consolidator
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
            Sixteen concept cards spanning infra, fleets, software, and
            aftersales — a conversation starter for operators, investors, and
            city partners.
          </p>
        </div>
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {ideas.map((idea) => (
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
