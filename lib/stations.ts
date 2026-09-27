export type Status = "available" | "busy" | "offline";

export type Station = {
  id: string;
  name: string;
  neighborhood: string;
  neighborhoodAm: string;
  status: Status;
  connectors: string[];
  powerKw: number;
  lat: number;
  lng: number;
  occupancy: string;
  occupancyAm: string;
  image?: string;
};

/** Demo charging stations across Addis Ababa (approximate coords). */
export const stations: Station[] = [
  {
    id: "bole",
    name: "Bole Atlas Hub",
    neighborhood: "Bole",
    neighborhoodAm: "ቦሌ",
    status: "available",
    connectors: ["CCS2", "Type2"],
    powerKw: 150,
    lat: 8.9975,
    lng: 38.7892,
    occupancy: "2 of 4 free",
    occupancyAm: "ከ4 ውስጥ 2 ነፃ",
    image: "/images/bole-road.jpg",
  },
  {
    id: "merkato",
    name: "Merkato Edge",
    neighborhood: "Merkato",
    neighborhoodAm: "መርካቶ",
    status: "offline",
    connectors: ["Type2"],
    powerKw: 22,
    lat: 9.0308,
    lng: 38.7415,
    occupancy: "Offline",
    occupancyAm: "ከመስመር ውጭ",
  },
  {
    id: "piassa",
    name: "Piassa Square AC",
    neighborhood: "Piassa",
    neighborhoodAm: "ፒያሳ",
    status: "available",
    connectors: ["Type2"],
    powerKw: 22,
    lat: 9.0352,
    lng: 38.7528,
    occupancy: "3 of 3 free",
    occupancyAm: "ከ3 ውስጥ 3 ነፃ",
  },
  {
    id: "mexico",
    name: "Mexico Roundabout",
    neighborhood: "Mexico",
    neighborhoodAm: "ሜክሲኮ",
    status: "busy",
    connectors: ["CCS2", "CHAdeMO"],
    powerKw: 50,
    lat: 9.0105,
    lng: 38.7452,
    occupancy: "0 of 2 free",
    occupancyAm: "ከ2 ውስጥ 0 ነፃ",
  },
  {
    id: "kazanchis",
    name: "Kazanchis Plaza",
    neighborhood: "Kazanchis",
    neighborhoodAm: "ካዛንቺስ",
    status: "busy",
    connectors: ["CCS2"],
    powerKw: 50,
    lat: 9.0158,
    lng: 38.7655,
    occupancy: "1 of 2 free",
    occupancyAm: "ከ2 ውስጥ 1 ነፃ",
    image: "/images/meskel-square.jpg",
  },
  {
    id: "cmc",
    name: "CMC Residential",
    neighborhood: "CMC",
    neighborhoodAm: "ሲኤምሲ",
    status: "available",
    connectors: ["Type2"],
    powerKw: 22,
    lat: 9.0215,
    lng: 38.8210,
    occupancy: "4 of 4 free",
    occupancyAm: "ከ4 ውስጥ 4 ነፃ",
  },
  {
    id: "megenagna",
    name: "Megenagna Hub",
    neighborhood: "Megenagna",
    neighborhoodAm: "መገናኛ",
    status: "available",
    connectors: ["CCS2", "Type2"],
    powerKw: 120,
    lat: 9.0202,
    lng: 38.8015,
    occupancy: "3 of 4 free",
    occupancyAm: "ከ4 ውስጥ 3 ነፃ",
  },
  {
    id: "airport",
    name: "Airport Corridor DCFC",
    neighborhood: "Airport corridor",
    neighborhoodAm: "የአውሮፕላን ማረፊያ መስመር",
    status: "available",
    connectors: ["CCS2", "CHAdeMO"],
    powerKw: 150,
    lat: 8.9845,
    lng: 38.7988,
    occupancy: "2 of 3 free",
    occupancyAm: "ከ3 ውስጥ 2 ነፃ",
    image: "/images/bole-street.jpg",
  },
];

export const ADDIS_CENTER: [number, number] = [9.03, 38.74];
export const ADDIS_ZOOM = 12;

export const statusColors: Record<Status, string> = {
  available: "#078930",
  busy: "#FCDD09",
  offline: "#6b7280",
};

export const statusBadge: Record<Status, string> = {
  available: "bg-ethio-green/15 text-ethio-green-bright",
  busy: "bg-ethio-gold/15 text-ethio-gold",
  offline: "bg-zinc-500/20 text-zinc-400",
};

/** Prefix public paths with Next.js basePath for GitHub Pages. */
export function assetPath(path: string): string {
  if (!path.startsWith("/")) return path;
  const base = "/addischarge";
  return `${base}${path}`;
}
