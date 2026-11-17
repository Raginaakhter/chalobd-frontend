export type Variant =
  | "panoramic"
  | "split-window"
  | "beach-showcase"
  | "timeline"
  | "dashboard"
  | "bigtype"
  | "modern-cards"
  | "family-compact";

export type Operator = {
  name: string;
  type: "AC Deluxe" | "Sleeper" | "Non-AC" | "Biz Class";
  depart: string;
  arrive: string;
  price: number;
  rating: number;
  seats: number;
};

export type RouteInfo = {
  slug: string;
  from: string;
  to: string;
  tagline: string;
  description: string;
  price: number;
  hours: string;
  km: number;
  rating: number;
  busesPerDay: number;
  type: "AC Deluxe" | "Sleeper" | "Non-AC" | "Biz Class";
  img: string;
  variant: Variant;
  accent: "green" | "yellow" | "mint";
  highlights: string[];
  stops: string[];
  operators: Operator[];
};

export const routes: RouteInfo[] = [
  {
    slug: "dhaka-chattogram",
    from: "Dhaka",
    to: "Chattogram",
    tagline: "Port city escape via the Dhaka–Chattogram highway",
    description:
      "Travel comfortably from the capital to the bustling port city of Chattogram with premium AC coaches and multiple daily departures.",
    price: 850,
    hours: "6h 30m",
    km: 240,
    rating: 4.8,
    busesPerDay: 42,
    type: "AC Deluxe",
    img: "/images/route-chattogram.jpg",
    variant: "panoramic",
    accent: "green",
    highlights: ["Non-stop express", "WiFi + USB", "Complimentary snacks"],
    stops: ["Dhaka Gabtoli", "Cumilla", "Feni", "Mirsharai", "Chattogram"],
    operators: [
      { name: "GreenLine Paribahan", type: "AC Deluxe", depart: "08:00 AM", arrive: "02:30 PM", price: 950, rating: 4.9, seats: 14 },
      { name: "Shyamoli NR Travels", type: "AC Deluxe", depart: "10:30 PM", arrive: "05:00 AM", price: 850, rating: 4.7, seats: 8 },
      { name: "Hanif Enterprise", type: "Non-AC", depart: "11:00 PM", arrive: "05:30 AM", price: 650, rating: 4.5, seats: 22 },
    ],
  },
  {
    slug: "dhaka-sylhet",
    from: "Dhaka",
    to: "Sylhet",
    tagline: "Tea gardens and misty hills await",
    description:
      "Enjoy a scenic ride through green hills to the spiritual city of Sylhet. Perfect for weekend getaways.",
    price: 750,
    hours: "5h 15m",
    km: 220,
    rating: 4.7,
    busesPerDay: 36,
    type: "AC Deluxe",
    img: "/images/route-sylhet.jpg",
    variant: "split-window",
    accent: "mint",
    highlights: ["Tea garden views", "Family-friendly", "Mountain stops"],
    stops: ["Dhaka Mohakhali", "Narsingdi", "Brahmanbaria", "Habiganj", "Sylhet"],
    operators: [
      { name: "GreenLine Paribahan", type: "AC Deluxe", depart: "07:30 AM", arrive: "12:45 PM", price: 850, rating: 4.8, seats: 10 },
      { name: "Ena Transport", type: "AC Deluxe", depart: "09:00 PM", arrive: "02:15 AM", price: 750, rating: 4.6, seats: 16 },
      { name: "London Express", type: "Biz Class", depart: "11:30 PM", arrive: "04:45 AM", price: 1100, rating: 4.9, seats: 4 },
    ],
  },
  {
    slug: "dhaka-coxs-bazar",
    from: "Dhaka",
    to: "Cox's Bazar",
    tagline: "World's longest natural sea beach",
    description:
      "Rest overnight in a comfortable sleeper coach and wake up to the sound of the Bay of Bengal.",
    price: 1100,
    hours: "10h",
    km: 414,
    rating: 4.9,
    busesPerDay: 28,
    type: "Sleeper",
    img: "/images/route-coxbazar.jpg",
    variant: "beach-showcase",
    accent: "yellow",
    highlights: ["Overnight sleeper", "Sea-side arrival", "Free water & snacks"],
    stops: ["Dhaka Arambag", "Cumilla", "Chattogram", "Chakaria", "Cox's Bazar"],
    operators: [
      { name: "GreenLine Sleeper", type: "Sleeper", depart: "08:30 PM", arrive: "06:30 AM", price: 1600, rating: 4.9, seats: 6 },
      { name: "Soudia Coach", type: "AC Deluxe", depart: "09:00 PM", arrive: "07:00 AM", price: 1100, rating: 4.7, seats: 12 },
      { name: "S. Alam Service", type: "Non-AC", depart: "10:00 PM", arrive: "08:00 AM", price: 850, rating: 4.4, seats: 20 },
    ],
  },
  {
    slug: "dhaka-khulna",
    from: "Dhaka",
    to: "Khulna",
    tagline: "Gateway to the Sundarbans mangroves",
    description:
      "A smooth journey across the Padma Bridge to Khulna — doorstep to the world's largest mangrove forest.",
    price: 650,
    hours: "7h",
    km: 276,
    rating: 4.6,
    busesPerDay: 24,
    type: "Non-AC",
    img: "/images/route-khulna.jpg",
    variant: "timeline",
    accent: "green",
    highlights: ["Padma Bridge view", "River crossing", "Low fares"],
    stops: ["Dhaka Sayedabad", "Padma Bridge", "Faridpur", "Jessore", "Khulna"],
    operators: [
      { name: "Eagle Paribahan", type: "AC Deluxe", depart: "07:00 AM", arrive: "02:00 PM", price: 800, rating: 4.7, seats: 9 },
      { name: "Hanif Enterprise", type: "Non-AC", depart: "10:30 PM", arrive: "05:30 AM", price: 650, rating: 4.5, seats: 18 },
      { name: "Sohag Paribahan", type: "AC Deluxe", depart: "11:30 PM", arrive: "06:30 AM", price: 850, rating: 4.6, seats: 12 },
    ],
  },
  {
    slug: "dhaka-rajshahi",
    from: "Dhaka",
    to: "Rajshahi",
    tagline: "Silk, mangoes and heritage of the north-west",
    description:
      "A smooth northbound ride to the silk city of Rajshahi — home of the sweetest mangoes and the Padma river banks.",
    price: 700,
    hours: "6h",
    km: 256,
    rating: 4.7,
    busesPerDay: 30,
    type: "AC Deluxe",
    img: "/images/route-rajshahi.jpg",
    variant: "dashboard",
    accent: "mint",
    highlights: ["Silk city tour", "Padma river views", "On-time arrivals"],
    stops: ["Dhaka Gabtoli", "Jamuna Bridge", "Sirajganj", "Natore", "Rajshahi"],
    operators: [
      { name: "National Travels", type: "AC Deluxe", depart: "08:00 AM", arrive: "02:00 PM", price: 850, rating: 4.8, seats: 10 },
      { name: "Desh Travels", type: "Non-AC", depart: "10:00 PM", arrive: "04:00 AM", price: 700, rating: 4.6, seats: 16 },
      { name: "Hanif Enterprise", type: "AC Deluxe", depart: "11:30 PM", arrive: "05:30 AM", price: 900, rating: 4.7, seats: 8 },
    ],
  },
  {
    slug: "dhaka-barishal",
    from: "Dhaka",
    to: "Barishal",
    tagline: "The Venice of Bengal, by road",
    description:
      "Barishal's river-city charm is now a short highway ride away thanks to the Padma Bridge.",
    price: 600,
    hours: "6h 30m",
    km: 182,
    rating: 4.6,
    busesPerDay: 22,
    type: "Non-AC",
    img: "/images/route-barishal.jpg",
    variant: "bigtype",
    accent: "green",
    highlights: ["Padma Bridge route", "Budget friendly", "Family coaches"],
    stops: ["Dhaka Gulistan", "Padma Bridge", "Bhanga", "Gournadi", "Barishal"],
    operators: [
      { name: "Sakura Paribahan", type: "AC Deluxe", depart: "07:30 AM", arrive: "02:00 PM", price: 800, rating: 4.7, seats: 14 },
      { name: "Eagle Paribahan", type: "Non-AC", depart: "09:00 PM", arrive: "03:30 AM", price: 600, rating: 4.5, seats: 20 },
      { name: "Bepari Paribahan", type: "Non-AC", depart: "11:00 PM", arrive: "05:30 AM", price: 550, rating: 4.3, seats: 24 },
    ],
  },
  {
    slug: "dhaka-rangpur",
    from: "Dhaka",
    to: "Rangpur",
    tagline: "Northern plains, Rangpur palace route",
    description:
      "Head north on business class coaches with full reclining seats. Great for overnight travel.",
    price: 820,
    hours: "8h",
    km: 307,
    rating: 4.5,
    busesPerDay: 18,
    type: "Biz Class",
    img: "/images/route-rangpur.jpg",
    variant: "modern-cards",
    accent: "yellow",
    highlights: ["Biz class recliners", "Full charging ports", "Night rides"],
    stops: ["Dhaka Mohakhali", "Jamuna Bridge", "Bogura", "Gaibandha", "Rangpur"],
    operators: [
      { name: "Nabil Paribahan", type: "Biz Class", depart: "08:00 PM", arrive: "04:00 AM", price: 1200, rating: 4.8, seats: 6 },
      { name: "Hanif Enterprise", type: "AC Deluxe", depart: "09:30 PM", arrive: "05:30 AM", price: 900, rating: 4.6, seats: 10 },
      { name: "SR Travels", type: "Non-AC", depart: "10:30 PM", arrive: "06:30 AM", price: 700, rating: 4.3, seats: 22 },
    ],
  },
  {
    slug: "dhaka-mymensingh",
    from: "Dhaka",
    to: "Mymensingh",
    tagline: "A quick hop to the Brahmaputra city",
    description:
      "Short, convenient rides to Mymensingh — perfect for daily commuters and weekend visitors.",
    price: 400,
    hours: "3h 30m",
    km: 120,
    rating: 4.7,
    busesPerDay: 48,
    type: "Non-AC",
    img: "/images/route-mymensingh.jpg",
    variant: "family-compact",
    accent: "mint",
    highlights: ["Frequent buses", "Short ride", "Low fares"],
    stops: ["Dhaka Mohakhali", "Gazipur", "Sreepur", "Bhaluka", "Mymensingh"],
    operators: [
      { name: "Shourav Paribahan", type: "Non-AC", depart: "06:00 AM", arrive: "09:30 AM", price: 350, rating: 4.6, seats: 22 },
      { name: "Alam Asia", type: "AC Deluxe", depart: "08:00 AM", arrive: "11:30 AM", price: 550, rating: 4.7, seats: 14 },
      { name: "Enayet Paribahan", type: "Non-AC", depart: "02:00 PM", arrive: "05:30 PM", price: 400, rating: 4.5, seats: 18 },
    ],
  },
];

export const getRouteBySlug = (slug: string) =>
  routes.find((r) => r.slug === slug);

export const getAllSlugs = () => routes.map((r) => r.slug);
