"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type Locale = "en" | "am";

const STORAGE_KEY = "addischarge-lang";

type Dict = typeof en;

const en = {
  nav: {
    map: "Map",
    app: "App",
    how: "How it works",
    ideas: "Ideas",
    capex: "Capex",
    viewDemo: "View demo",
  },
  hero: {
    badge: "Demo microsite · Addis Ababa e-mobility",
    titleBefore: "Find chargers.",
    titleHighlight: "See occupancy.",
    titleAfter: "Pay in-app.",
    body: "AddisCharge is a ChargeMap-style consolidator for EV drivers in Addis Ababa — discover public stations across Bole, Merkato, Piassa, and beyond, check real-time status, and settle with Telebirr, card, or wallet.",
    ctaMap: "Explore the map",
    ctaIdeas: "Adjacent ideas",
    statStations: "Stations (demo)",
    statConnectors: "Connectors",
    statPay: "Pay",
    liveSnapshot: "Live snapshot",
    availableCount: "{n} available",
  },
  status: {
    available: "Available",
    busy: "Busy",
    offline: "Offline",
  },
  map: {
    eyebrow: "Network map",
    title: "Live station map — Addis Ababa",
    body: "OpenStreetMap + dark tiles. Tap a marker to inspect connector types, power, and occupancy across key neighborhoods.",
    layerLabel: "Addis Ababa · demo layer",
    power: "Power",
    connectors: "Connectors",
    occupancy: "Occupancy",
    navigate: "Navigate · Pay in-app",
    attribution:
      "© OpenStreetMap contributors · © CARTO",
  },
  app: {
    eyebrow: "Product UI",
    title: "Phone mockups — list, detail, pay",
    body: "Three screens that tell the story: browse nearby stations, open a bay with live occupancy, and checkout with Telebirr, card, or wallet.",
    listTitle: "Map list",
    nearYou: "Near you · Bole / CMC",
    detailTitle: "Station detail",
    bayFree: "Free",
    bayCharging: "Charging",
    occupancyAgo: "Occupancy updated 42s ago",
    hours: "Open 06:00 – 23:00 · ETB / kWh",
    startSession: "Start session",
    payTitle: "In-app pay",
    checkout: "Checkout · Bay A",
    estimate: "Est. 28 kWh · ~ETB 420",
    telebirr: "Telebirr",
    telebirrSub: "Preferred",
    card: "Card",
    cardSub: "Visa / Mastercard",
    wallet: "Wallet",
    walletSub: "AddisCharge balance",
    confirmPay: "Confirm & pay",
    ofBusy: "1 of 2 busy",
  },
  how: {
    eyebrow: "How it works",
    title: "Three steps from search to charge",
    steps: [
      {
        n: "01",
        title: "Discover",
        body: "Open the map or list view to find CCS2, Type2, and CHAdeMO ports near you — filtered by neighborhood, power, and live status.",
      },
      {
        n: "02",
        title: "Check occupancy",
        body: "See which bays are free, busy, or offline before you drive. Station detail shows connector mix and estimated wait.",
      },
      {
        n: "03",
        title: "Pay in-app",
        body: "Start a session and settle with Telebirr, card, or wallet — one receipt, roaming-ready for multiple operators.",
      },
    ],
  },
  ideas: {
    eyebrow: "Adjacent Ethiopia e-mobility",
    title: "Ideas around the consolidator",
    body: "Sixteen concept cards spanning infra, fleets, software, and aftersales — a conversation starter for operators, investors, and city partners.",
    items: [
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
    ],
  },
  capex: {
    eyebrow: "Capex estimates",
    title: "Order-of-magnitude ranges",
    disclaimerStrong: "Illustrative only — not quotes.",
    disclaimer:
      "Figures are rough order-of-magnitude for discussion. Actual costs depend on land, grid capacity, FX, civil works, and procurement.",
    colItem: "Item",
    colLow: "Low",
    colHigh: "High",
    colNotes: "Notes",
    rows: [
      {
        item: "AC wallbox / AC public port",
        low: "$3.5k",
        high: "$15k",
        notes:
          "Per port installed; site works & panel upgrades vary widely",
      },
      {
        item: "DCFC 50–150 kW",
        low: "$50k",
        high: "$250k",
        notes:
          "Per port installed — hardware + civil + grid interconnection",
      },
      {
        item: "Illustrative multi-bay hub",
        low: "~$1.0m",
        high: "~$1.1m",
        notes:
          "~ETB 170m all-in narrative (e.g. Kotebe-style utility-backed station) — published-order magnitude only",
      },
      {
        item: "Software / app MVP",
        low: "Tens of $k",
        high: "Tens of $k",
        notes: "Demo / MVP band only — not a production quote",
      },
    ],
  },
  footer: {
    tagline: "Demo · Innoveto · not a live network",
    note: "Built as a product exploration microsite. Demo stations and payments are mocked. Map tiles © OpenStreetMap / CARTO.",
    photoCredit:
      "Photos: Wikimedia Commons — Simfan34 (skyline), A.Savin (Meskel Square), Radosław Botev (Bole Road), AtsiG (Bole street), PMO Ethiopia (night). See README for licenses.",
  },
};

const am: Dict = {
  nav: {
    map: "ካርታ",
    app: "መተግበሪያ",
    how: "እንዴት እንደሚሰራ",
    ideas: "ሀሳቦች",
    capex: "ካፒታል ወጪ",
    viewDemo: "ዴሞ ይመልከቱ",
  },
  hero: {
    badge: "ዴሞ ማይክሮሳይት · የአዲስ አበባ ኢ-ሞቢሊቲ",
    titleBefore: "ቻርጀሮችን ያግኙ።",
    titleHighlight: "ሁኔታ ይመልከቱ።",
    titleAfter: "በመተግበሪያ ይክፈሉ።",
    body: "አዲስቻርጅ ለአዲስ አበባ የኤሌክትሪክ ተሽከርካሪ አሽከርካሪዎች የቻርጅ ካርታ ዘይቤ ማጠቃለያ ነው — በቦሌ፣ መርካቶ፣ ፒያሳ እና ሌሎች አካባቢዎች የህዝብ ጣቢያዎችን ያግኙ፣ ቀጥታ ሁኔታ ይመልከቱ፣ እና በቴሌብር፣ ካርድ ወይም ዋሌት ይክፈሉ።",
    ctaMap: "ካርታውን ያስሱ",
    ctaIdeas: "ተያያዥ ሀሳቦች",
    statStations: "ጣቢያዎች (ዴሞ)",
    statConnectors: "ማገናኛዎች",
    statPay: "ክፍያ",
    liveSnapshot: "ቀጥታ እይታ",
    availableCount: "{n} ዝግጁ",
  },
  status: {
    available: "ዝግጁ",
    busy: "ተይዟል",
    offline: "ከመስመር ውጭ",
  },
  map: {
    eyebrow: "የአውታረ መረብ ካርታ",
    title: "የቀጥታ ጣቢያ ካርታ — አዲስ አበባ",
    body: "OpenStreetMap + ጨለማ ሰቆች። የማገናኛ ዓይነቶችን፣ ኃይልን እና ስራ ላይ መሆንን ለማየት ማርከርን ይንኩ።",
    layerLabel: "አዲስ አበባ · ዴሞ ሽፋን",
    power: "ኃይል",
    connectors: "ማገናኛዎች",
    occupancy: "ስራ ላይ መሆን",
    navigate: "አቅጣጫ · በመተግበሪያ ይክፈሉ",
    attribution: "© OpenStreetMap አስተዋጽዖ አበርካቾች · © CARTO",
  },
  app: {
    eyebrow: "የምርት UI",
    title: "የስልክ ሞክ-አፕዎች — ዝርዝር፣ ዝርዝር መረጃ፣ ክፍያ",
    body: "ሦስት ስክሪኖች ታሪኩን ይናገራሉ፡ አቅራቢያ ጣቢያዎችን ያስሱ፣ ቀጥታ ሁኔታ ያለው ቤይ ይክፈቱ፣ እና በቴሌብር፣ ካርድ ወይም ዋሌት ይክፈሉ።",
    listTitle: "የካርታ ዝርዝር",
    nearYou: "አቅራቢያዎ · ቦሌ / ሲኤምሲ",
    detailTitle: "የጣቢያ ዝርዝር",
    bayFree: "ነፃ",
    bayCharging: "እየቻርጀ",
    occupancyAgo: "ሁኔታ ከ42 ሰከንድ በፊት ተዘምኗል",
    hours: "ክፍት 06:00 – 23:00 · ብር / ኪወሰ",
    startSession: "ክፍለ ጊዜ ጀምር",
    payTitle: "በመተግበሪያ ክፍያ",
    checkout: "ክፍያ · ቤይ A",
    estimate: "ግምት 28 ኪወሰ · ~ብር 420",
    telebirr: "ቴሌብር",
    telebirrSub: "ተመራጭ",
    card: "ካርድ",
    cardSub: "Visa / Mastercard",
    wallet: "ዋሌት",
    walletSub: "የአዲስቻርጅ ቀሪ ሂሳብ",
    confirmPay: "አረጋግጥ እና ክፈል",
    ofBusy: "ከ2 ውስጥ 1 ተይዟል",
  },
  how: {
    eyebrow: "እንዴት እንደሚሰራ",
    title: "ከፍለጋ እስከ ቻርጅ ሦስት እርምጃዎች",
    steps: [
      {
        n: "01",
        title: "ያግኙ",
        body: "አቅራቢያዎ ያሉ CCS2፣ Type2 እና CHAdeMO ወደቦችን ለማግኘት ካርታውን ወይም ዝርዝሩን ይክፈቱ — በአካባቢ፣ ኃይል እና ቀጥታ ሁኔታ ይጣራሉ።",
      },
      {
        n: "02",
        title: "ሁኔታ ይመልከቱ",
        body: "ከመንዳትዎ በፊት የትኞቹ ቤዮች ነፃ፣ ተይዘው ወይም ከመስመር ውጭ እንደሆኑ ይመልከቱ። የጣቢያ ዝርዝር የማገናኛ ድብልቅ እና ግምታዊ መጠበቂያ ያሳያል።",
      },
      {
        n: "03",
        title: "በመተግበሪያ ይክፈሉ",
        body: "ክፍለ ጊዜ ይጀምሩ እና በቴሌብር፣ ካርድ ወይም ዋሌት ይክፈሉ — አንድ ደረሰኝ፣ ለብዙ ኦፕሬተሮች ዝግጁ።",
      },
    ],
  },
  ideas: {
    eyebrow: "ተያያዥ የኢትዮጵያ ኢ-ሞቢሊቲ",
    title: "በማጠቃለያው ዙሪያ ያሉ ሀሳቦች",
    body: "መሠረተ ልማት፣ መርከቦች፣ ሶፍትዌር እና ከሽያጭ በኋላ ያሉ አስራ ስድስት የፅንሰ-ሀሳብ ካርዶች — ለኦፕሬተሮች፣ ባለሀብቶች እና የከተማ አጋሮች የውይይት መነሻ።",
    items: [
      {
        title: "የከተማ ቻርጅ ማጠቃለያ",
        blurb: "ይህ ምርት — በአዲስ አበባ ኦፕሬተሮች ላይ አንድ መተግበሪያ።",
        tag: "ዋና",
      },
      {
        title: "የመንገድ ኮሪደር DCFC",
        blurb: "በአዲስ–አዳማ እና አዲስ–ሐዋሳ መስመሮች ላይ ፈጣን ቻርጅ አጥንት።",
        tag: "መሠረተ ልማት",
      },
      {
        title: "የራይድ-ሃይሊንግ መርከብ ዴፖዎች",
        blurb: "ለራይድ እና ፈረስ መርከቦች የሌሊት / ዙር ቻርጅ።",
        tag: "መርከብ",
      },
      {
        title: "2W / 3W ባትሪ ልውውጥ ማዕከላት",
        blurb: "በከፍተኛ ትራፊክ ነጥቦች የባጃጅ እና ኢ-ሞቶ ልውውጥ ካቢኔቶች።",
        tag: "2W/3W",
      },
      {
        title: "ለታክሲዎች ባትሪ-እንደ-አገልግሎት",
        blurb: "ፓኮችን ይከራዩ፣ የቅድሚያ ወጪን ይቀንሱ፣ ጤና እና ምትክ ያስተዳድሩ።",
        tag: "BaaS",
      },
      {
        title: "የኢቪ ጥገና / HV አውታረ መረብ",
        blurb: "የተረጋገጡ ከፍተኛ-ቮልቴጅ ቴክኒሻኖች እና ተንቀሳቃሽ የአገልግሎት ቫኖች።",
        tag: "ክወና",
      },
      {
        title: "የሞል / ሆቴል መድረሻ ቻርጅ",
        blurb: "ከምግብ እና መጠጥ የመኖሪያ ጊዜ ገቢ ጋር የመድረሻ AC/DC።",
        tag: "ችርቻሮ",
      },
      {
        title: "የስራ ቦታ / ኮንዶ የጋራ AC",
        blurb: "ለቢሮዎች እና የመኖሪያ ውህዶች ጭነት-የሚያስተዳድሩ ዋልቦክሶች።",
        tag: "AC",
      },
      {
        title: "አውቶቡስ እና የመጨረሻ-ማይል ሎጂስቲክስ ዴፖዎች",
        blurb: "ለኢ-አውቶቡሶች እና የመላኪያ ቫኖች የዴፖ ቻርጅ።",
        tag: "ሎጂስቲክስ",
      },
      {
        title: "በቦታ ላይ የፀሐይ + ማከማቻ ማዕከላት",
        blurb: "በተገደቡ መጋቢዎች ላይ ከፍተኛ ፍላጎትን የሚያለሰልሱ የተጠበቁ ማዕከላት።",
        tag: "ኃይል",
      },
      {
        title: "የአገር ውስጥ EVSE ስብሰባ / ፋብሪካ",
        blurb: "በአገር ውስጥ ለAC/DC ካቢኔቶች ማቀፊያ እና ስብሰባ።",
        tag: "ማምረት",
      },
      {
        title: "የክፍያ + ሮሚንግ ሚድልዌር",
        blurb: "ለኦፕሬተር ያለ ሮሚንግ፣ ሰፈራ እና የOCPI ዘይቤ ማገናኛ።",
        tag: "ሶፍትዌር",
      },
      {
        title: "መለዋወጫ / ቤት ዋልቦክስ ችርቻሮ",
        blurb: "የቤት ቻርጀሮች፣ ገመዶች፣ አዳፕተሮች፣ የመጫኛ አጋሮች።",
        tag: "ችርቻሮ",
      },
      {
        title: "የተጠቀመ ኢቪ ማስመጫ ፍተሻ",
        blurb: "የባትሪ SOH ፍተሻዎች፣ የዋስትና ሽፋን እና ለማስመጫዎች ተገዢነት።",
        tag: "ከሽያጭ በኋላ",
      },
      {
        title: "የአሽከርካሪ ትምህርት + የክልል እቅድ",
        blurb: "በመተግበሪያ አስተምህሮ፣ የኮሪደር እቅድ እና የቀዝቃዛ የአየር ምክሮች።",
        tag: "UX",
      },
      {
        title: "ግሪድ / ኢኢዩ የግንኙነት ምክር",
        blurb: "የአቅም ጥናቶች እና ከመገልገያዎች ጋር የግንኙነት ድጋፍ።",
        tag: "ግሪድ",
      },
    ],
  },
  capex: {
    eyebrow: "የካፒታል ወጪ ግምቶች",
    title: "የትዕዛዝ-መጠን ክልሎች",
    disclaimerStrong: "ለምሳሌ ብቻ — ጥቅሶች አይደሉም።",
    disclaimer:
      "ቁጥሮች ለውይይት ሻካራ የትዕዛዝ-መጠን ናቸው። ትክክለኛ ወጪዎች በመሬት፣ የግሪድ አቅም፣ የውጭ ምንዛሬ፣ የሲቪል ስራዎች እና ግዢ ላይ ይመረኮዛሉ።",
    colItem: "ንጥል",
    colLow: "ዝቅተኛ",
    colHigh: "ከፍተኛ",
    colNotes: "ማስታወሻዎች",
    rows: [
      {
        item: "AC ዋልቦክስ / AC የህዝብ ወደብ",
        low: "$3.5k",
        high: "$15k",
        notes: "በተጫነ ወደብ፤ የቦታ ስራዎች እና የፓነል ማሻሻያዎች በሰፊ ይለያያሉ",
      },
      {
        item: "DCFC 50–150 ኪወ",
        low: "$50k",
        high: "$250k",
        notes: "በተጫነ ወደብ — ሃርድዌር + ሲቪል + የግሪድ ግንኙነት",
      },
      {
        item: "ምሳሌ ባለብዙ-ቤይ ማዕከል",
        low: "~$1.0m",
        high: "~$1.1m",
        notes:
          "~ብር 170 ሚሊዮን ሁሉንም ያካተተ ትረካ (ለምሳሌ የኮተቤ ዘይቤ የመገልገያ-የተደገፈ ጣቢያ) — የታተመ-ትዕዛዝ መጠን ብቻ",
      },
      {
        item: "ሶፍትዌር / መተግበሪያ MVP",
        low: "አስር ሺዎች $",
        high: "አስር ሺዎች $",
        notes: "ዴሞ / MVP ባንድ ብቻ — የምርት ጥቅስ አይደለም",
      },
    ],
  },
  footer: {
    tagline: "ዴሞ · ኢኖቬቶ · የቀጥታ አውታረ መረብ አይደለም",
    note: "እንደ የምርት ፍለጋ ማይክሮሳይት ተሰርቷል። የዴሞ ጣቢያዎች እና ክፍያዎች የተሳሉ ናቸው። የካርታ ሰቆች © OpenStreetMap / CARTO።",
    photoCredit:
      "ፎቶዎች፡ Wikimedia Commons — Simfan34 (ስካይላይን)፣ A.Savin (መስቀል አደባባይ)፣ Radosław Botev (ቦሌ መንገድ)፣ AtsiG (ቦሌ ጎዳና)፣ PMO Ethiopia (ሌሊት)። ለፈቃዶች README ይመልከቱ።",
  },
};

const dictionaries: Record<Locale, Dict> = { en, am };

type I18nContextValue = {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: Dict;
};

const I18nContext = createContext<I18nContextValue | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored === "am" || stored === "en") setLocaleState(stored);
    } catch {
      /* ignore */
    }
    setReady(true);
  }, []);

  const setLocale = useCallback((l: Locale) => {
    setLocaleState(l);
    try {
      localStorage.setItem(STORAGE_KEY, l);
    } catch {
      /* ignore */
    }
    if (typeof document !== "undefined") {
      document.documentElement.lang = l === "am" ? "am" : "en";
    }
  }, []);

  useEffect(() => {
    if (!ready) return;
    document.documentElement.lang = locale === "am" ? "am" : "en";
  }, [locale, ready]);

  const value = useMemo(
    () => ({ locale, setLocale, t: dictionaries[locale] }),
    [locale, setLocale],
  );

  return (
    <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
  );
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}
