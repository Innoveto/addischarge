# AddisCharge

Demo microsite for an **Addis Ababa EV charging consolidator** — ChargeMap / Swisscharge–style product exploration by [Innoveto](https://github.com/Innoveto).

**Live:** [https://innoveto.github.io/addischarge/](https://innoveto.github.io/addischarge/)

Find chargers across neighborhoods (Bole, Merkato, Piassa, Mexico, Kazanchis, CMC, Megenagna, Airport corridor), see occupancy, and pay in-app (Telebirr / card / wallet). **Not a live network** — demo data only.

## Features

- **EN | አማ** language toggle (client i18n, persisted in `localStorage`)
- **Interactive map** — Leaflet + CARTO Dark Matter / OpenStreetMap tiles (no API key)
- **8 demo stations** with markers, popups, and detail panel
- Hero / section photography from Wikimedia Commons (downloaded locally)

## Stack

- Next.js 15 (App Router) · static export (`output: 'export'`) · `basePath: /addischarge`
- TypeScript · Tailwind CSS v4 · Leaflet
- GitHub Pages via Actions

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000/addischarge/](http://localhost:3000/addischarge/).

```bash
npm run build   # writes static site to out/
```

## Photo attribution (Wikimedia Commons)

| File | Subject | Author | License |
|------|---------|--------|---------|
| `public/images/addis-skyline.jpg` | Addis Ababa skyline | [Simfan34](https://commons.wikimedia.org/wiki/File:Addis_Ababa_skyline.jpg) | CC BY-SA (see file page) |
| `public/images/meskel-square.jpg` | Meskel Square | [A.Savin](https://commons.wikimedia.org/wiki/File:ET_Addis_asv2018-01_img01_Meskel_Square.jpg) | Free Art License / see file page |
| `public/images/bole-road.jpg` | Bole Road | [Radosław Botev](https://commons.wikimedia.org/wiki/File:Bole_Road,_Addis_Ababa_(1).jpg) | CC BY 3.0 PL |
| `public/images/bole-street.jpg` | Bole street | [AtsiG](https://commons.wikimedia.org/wiki/File:Ethiopia,addis_ababa_bole_street.jpg) | CC BY-SA 4.0 |
| `public/images/addis-night.jpg` | Addis at night | [PMO Ethiopia](https://commons.wikimedia.org/wiki/File:Addis_Ababa_at_the_night_time.jpg) | See file page |

Map tiles: © [OpenStreetMap](https://www.openstreetmap.org/copyright) contributors · © [CARTO](https://carto.com/attributions).

## Sections

1. Landing hero (photo overlay)
2. Interactive Leaflet station map
3. Phone mockups (list / detail / pay)
4. How it works (3 steps)
5. Adjacent Ethiopia e-mobility ideas (16 cards)
6. Capex estimates (illustrative)
7. Footer with demo disclaimer + photo credit

## License

Private / demo — Innoveto. Third-party photos and map tiles remain under their respective licenses.
