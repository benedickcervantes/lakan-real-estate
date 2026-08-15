export type PropertyType = "condo" | "home" | "commercial";

export type Property = {
  slug: string;
  name: string;
  location: string;
  city: string;
  type: PropertyType;
  status: "Completed" | "Selling" | "Leasing";
  year: number;
  priceFrom: string;
  size: string;
  units: string;
  bedrooms: string;
  featured: boolean;
  description: string;
  highlights: string[];
  image: string;
  gallery: string[];
};

export const typeLabel: Record<PropertyType, string> = {
  condo: "Condominium",
  home: "Home",
  commercial: "Commercial",
};

export const properties: Property[] = [
  {
    slug: "maynila-crest",
    name: "Maynila Crest",
    location: "Salcedo Village, Makati",
    city: "Makati",
    type: "condo",
    status: "Selling",
    year: 2023,
    priceFrom: "₱18.9M",
    size: "48–186 sqm",
    units: "312 residences",
    bedrooms: "1–3 BR",
    featured: true,
    description:
      "A slim tower in the old heart of Makati. Maynila Crest was planned for people who work in the CBD and still want evening light, not a sealed glass box. Residences open toward Salcedo’s quieter streets, with kitchens that can actually cook and balconies deep enough for a chair and a storm.",
    highlights: [
      "Sky lobby on the 16th floor",
      "Direct access to Salcedo Saturday market",
      "Dual-aspect corner suites",
      "On-site concierge until 10 PM",
    ],
    image: "/images/project-maynila-crest.png",
    gallery: [
      "/images/project-maynila-crest.png",
      "/images/interior-living.png",
      "/images/interior-lobby.png",
    ],
  },
  {
    slug: "anahaw-residences",
    name: "Anahaw Residences",
    location: "Eastwood City, Quezon City",
    city: "Quezon City",
    type: "condo",
    status: "Completed",
    year: 2022,
    priceFrom: "₱9.8M",
    size: "32–118 sqm",
    units: "428 residences",
    bedrooms: "Studio–2 BR",
    featured: true,
    description:
      "Named after the anahaw palm, this mid-rise uses deep vertical fins as shade — a Filipino answer to glass-box towers. It sits inside Eastwood’s live-work loop, built for first homes, pied-à-terres, and families who want parks without leaving the city.",
    highlights: [
      "Passive-shade facade, less glare",
      "Podium garden with native trees",
      "Co-working loft on the 3rd floor",
      "Walkable to Eastwood Mall and the river",
    ],
    image: "/images/project-anahaw.png",
    gallery: [
      "/images/project-anahaw.png",
      "/images/interior-living.png",
      "/images/interior-lobby.png",
    ],
  },
  {
    slug: "mactan-light",
    name: "Mactan Light",
    location: "Punta Engaño, Lapu-Lapu",
    city: "Cebu",
    type: "condo",
    status: "Selling",
    year: 2024,
    priceFrom: "₱12.4M",
    size: "41–164 sqm",
    units: "186 residences",
    bedrooms: "1–3 BR",
    featured: true,
    description:
      "A coastal condominium that faces the channel, not a postcard lagoon. Mactan Light is for island families, returning Cebuanos, and people who fly in on Friday and want salt air without a resort wristband. Materials were chosen to weather: pale lime wash, timber that greys, brass that tarnishes on purpose.",
    highlights: [
      "Sea-facing residences on two sides",
      "Arrival court shaded by talisay",
      "20 minutes to Mactan-Cebu Airport",
      "Private boat-club partnership nearby",
    ],
    image: "/images/project-mactan.png",
    gallery: [
      "/images/project-mactan.png",
      "/images/interior-living.png",
      "/images/interior-lobby.png",
    ],
  },
  {
    slug: "apo-ridge",
    name: "Apo Ridge",
    location: "Lanang, Davao City",
    city: "Davao",
    type: "condo",
    status: "Completed",
    year: 2022,
    priceFrom: "₱7.6M",
    size: "38–142 sqm",
    units: "164 residences",
    bedrooms: "1–3 BR",
    featured: true,
    description:
      "Terraced into a Lanang slope with Mt. Apo as a far neighbor. Apo Ridge is quieter than Manila stock — wider halls, real cross-ventilation, and a landscape that is allowed to grow a little wild. Built for Davaoeños who want height without losing the city’s unhurried pace.",
    highlights: [
      "Hillside stacking, every floor has a view",
      "Native stone from Davao del Sur",
      "Open-air gym that actually gets used",
      "15 minutes to Francisco Bangoy Airport",
    ],
    image: "/images/project-samal.png",
    gallery: [
      "/images/project-samal.png",
      "/images/interior-living.png",
      "/images/interior-lobby.png",
    ],
  },
  {
    slug: "ortigas-atelier",
    name: "Ortigas Atelier",
    location: "Ortigas Center, Pasig",
    city: "Pasig",
    type: "condo",
    status: "Selling",
    year: 2025,
    priceFrom: "₱14.2M",
    size: "44–128 sqm",
    units: "96 lofts",
    bedrooms: "Loft–2 BR",
    featured: true,
    description:
      "A boutique loft building for people who work in Ortigas and refuse another identical white box. Brick, steel, and warm glass; double-height living in selected stacks. Atelier was designed as a small edition — ninety-six keys, one lobby, no unused amenity floor.",
    highlights: [
      "Only 96 keys, no wasted amenities",
      "Double-height lofts on corners",
      "Ground-floor gallery for rotating art",
      "Walk to ADB Avenue and The Podium",
    ],
    image: "/images/project-ortigas.png",
    gallery: [
      "/images/project-ortigas.png",
      "/images/interior-living.png",
      "/images/interior-lobby.png",
    ],
  },
  {
    slug: "casa-lakan",
    name: "Casa Lakan",
    location: "Ayala Alabang, Muntinlupa",
    city: "Muntinlupa",
    type: "home",
    status: "Completed",
    year: 2021,
    priceFrom: "₱68M",
    size: "480–720 sqm lots",
    units: "11 houses",
    bedrooms: "4–5 BR",
    featured: true,
    description:
      "Eleven houses around a shared water court. Casa Lakan is our namesake compound: wide eaves, dark wood, and rooms that open to rain. It is not a subdivision product. Each house was drawn for a family that entertains, keeps a library, and wants the garden closer than the garage.",
    highlights: [
      "Shared water court, private gardens",
      "Staff quarters designed with dignity",
      "Gated village with Lakan concierge",
      "20 minutes to Alabang Town Center",
    ],
    image: "/images/project-lakan-house.png",
    gallery: [
      "/images/project-lakan-house.png",
      "/images/project-alabang.png",
      "/images/interior-living.png",
    ],
  },
  {
    slug: "alabang-courtyard",
    name: "Alabang Courtyard",
    location: "Filinvest City, Alabang",
    city: "Muntinlupa",
    type: "home",
    status: "Selling",
    year: 2021,
    priceFrom: "₱32M",
    size: "210–340 sqm",
    units: "24 townhomes",
    bedrooms: "3–4 BR",
    featured: true,
    description:
      "A tight court of townhomes for families who want a garden and a commute that does not eat the week. Alabang Courtyard uses gravel, timber, and deep shade instead of lawns that nobody walks. Interiors are honest: a proper kitchen, a loft for teenagers, a yard that survives the rainy season.",
    highlights: [
      "24 townhomes, one inner court",
      "Carport plus a real backyard",
      "Walkable to Festival and Spectrum",
      "Lakan after-sales on call",
    ],
    image: "/images/project-alabang.png",
    gallery: [
      "/images/project-alabang.png",
      "/images/project-quezon-house.png",
      "/images/interior-living.png",
    ],
  },
  {
    slug: "harbor-commons",
    name: "Harbor Commons",
    location: "Macapagal Boulevard, Pasay",
    city: "Pasay",
    type: "commercial",
    status: "Leasing",
    year: 2023,
    priceFrom: "₱1,850 /sqm",
    size: "42–1,200 sqm",
    units: "68 commercial keys",
    bedrooms: "Retail + office",
    featured: true,
    description:
      "A mixed-use podium on the bay side of Pasay. Harbor Commons was built for operators: restaurants that want wet streets after rain, offices that can open windows, and retail that does not disappear into a mall corridor. Ground floor is for the city; the upper floors are for work that lasts past six.",
    highlights: [
      "Bay-adjacent, near MOA and NAIA",
      "Flexible plates from 42 sqm",
      "Loading and grease traps already in",
      "After-rain lighting on the sidewalk",
    ],
    image: "/images/project-harbor.png",
    gallery: [
      "/images/project-harbor.png",
      "/images/project-makati-commercial.png",
      "/images/about-studio.png",
    ],
  },
  {
    slug: "diliman-house",
    name: "Diliman House",
    location: "Teachers Village, Quezon City",
    city: "Quezon City",
    type: "home",
    status: "Selling",
    year: 2024,
    priceFrom: "₱28.5M",
    size: "186 sqm floor / 240 sqm lot",
    units: "1 residence",
    bedrooms: "4 BR",
    featured: false,
    description:
      "A two-storey house for a family that still wants neighbors. Diliman House keeps the Filipino lot logic — capiz-screened light, a carport that is not the front door, and a kitchen that opens to a small, slightly imperfect lawn. Listed as a single residence, not a development.",
    highlights: [
      "Teachers Village, tree-lined block",
      "Four bedrooms, two living rooms",
      "Work loft under the roof",
      "Near UP Diliman and Maginhawa",
    ],
    image: "/images/project-quezon-house.png",
    gallery: [
      "/images/project-quezon-house.png",
      "/images/interior-living.png",
      "/images/project-alabang.png",
    ],
  },
  {
    slug: "salcedo-exchange",
    name: "Salcedo Exchange",
    location: "Legazpi Village, Makati",
    city: "Makati",
    type: "commercial",
    status: "Leasing",
    year: 2020,
    priceFrom: "₱2,400 /sqm",
    size: "28–640 sqm",
    units: "22 office suites",
    bedrooms: "Office",
    featured: false,
    description:
      "A five-storey work building for firms that outgrew a serviced office but do not want a 40-storey commute. Salcedo Exchange has a ground-floor cafe, a real loading bay, and suites that can be combined. It is for architects, clinics, and regional desks that still take walk-ins.",
    highlights: [
      "Boutique CBD address",
      "Combinable office suites",
      "Cafe and reception already running",
      "Five minutes to Ayala Avenue",
    ],
    image: "/images/project-makati-commercial.png",
    gallery: [
      "/images/project-makati-commercial.png",
      "/images/about-studio.png",
      "/images/interior-lobby.png",
    ],
  },
];

export const featuredProjects = properties.filter((p) => p.featured);

export function getProperty(slug: string) {
  return properties.find((p) => p.slug === slug);
}

export const cities = [...new Set(properties.map((p) => p.city))];
