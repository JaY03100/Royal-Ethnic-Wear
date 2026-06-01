export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  description: string;
  material: string;
  occasion: string;
  image: string;
  tag?: string;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Royal Navy Jodhpuri Suit",
    category: "Jodhpuri Suit",
    price: 28500,
    originalPrice: 34000,
    description: "A masterpiece of regal tailoring, this Navy Jodhpuri Suit combines the grandeur of traditional Rajasthani craftsmanship with contemporary refinement. Adorned with subtle gold-thread embroidery along the collar and cuffs, this ensemble commands attention at every royal gathering.",
    material: "Premium Wool-Silk Blend with Gold Thread Embroidery",
    occasion: "Wedding, Reception, Formal Events",
    image: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=800&q=80",
    tag: "Bestseller"
  },
  {
    id: "2",
    name: "Maroon Wedding Sherwani",
    category: "Sherwani",
    price: 42000,
    originalPrice: 52000,
    description: "Draped in the richest maroon, this Wedding Sherwani is an ode to timeless Indian bridal fashion. Hand-embroidered with intricate zardozi work and adorned with delicate sequin detailing, this piece ensures the groom stands as the epitome of royal elegance on his most precious day.",
    material: "Pure Silk with Zardozi & Sequin Embroidery",
    occasion: "Wedding Ceremony, Sangeet, Engagement",
    image: "https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=800&q=80",
    tag: "New Arrival"
  },
  {
    id: "3",
    name: "Ivory Embroidered Sherwani",
    category: "Sherwani",
    price: 38500,
    description: "Purity meets grandeur in this exquisite Ivory Sherwani. Delicate ivory-on-ivory threadwork creates a subtle yet breathtaking pattern across the full length of the garment. The matching churidar and dupatta complete this ensemble fit for a maharaja.",
    material: "Chanderi Silk with Chikankari Embroidery",
    occasion: "Wedding, Festive Occasions, Mehndi",
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4b4e27?w=800&q=80",
    tag: "Exclusive"
  },
  {
    id: "4",
    name: "Black Velvet Tuxedo",
    category: "Tuxedo",
    price: 32000,
    originalPrice: 38000,
    description: "Where Western sophistication meets Eastern opulence. This Black Velvet Tuxedo is crafted from the finest European velvet, tailored to perfection with peak lapels and gold-toned buttons. A statement piece for the modern nawab who commands every room.",
    material: "Italian Velvet with Satin Lapels",
    occasion: "Gala Dinners, Formal Parties, Award Ceremonies",
    image: "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=800&q=80",
    tag: "Premium"
  },
  {
    id: "5",
    name: "Golden Festival Kurta Set",
    category: "Kurta Set",
    price: 14500,
    description: "Celebrate every festival in resplendent gold. This kurta set features a flowing silhouette with subtle geometric patterns in antique gold thread. Paired with matching straight-cut pants, it offers comfort without compromising on royal elegance.",
    material: "Pure Chanderi Cotton-Silk with Gold Thread Work",
    occasion: "Diwali, Eid, Navratri, Family Functions",
    image: "https://images.unsplash.com/photo-1606820854416-439b3305ff39?w=800&q=80",
    tag: "Festive Pick"
  },
  {
    id: "6",
    name: "Emerald Indo-Western Outfit",
    category: "Indo-Western",
    price: 24000,
    originalPrice: 29000,
    description: "A bold fusion of East and West, this Emerald Indo-Western outfit pushes the boundaries of traditional fashion. The structured jacket with mandarin collar pairs seamlessly with tailored trousers, while emerald and gold embroidery adds a touch of regal flair.",
    material: "Blended Crepe with Silk Lining",
    occasion: "Cocktail Parties, Sangeet, Engagement",
    image: "https://images.unsplash.com/photo-1549062572-544a64fb0c56?w=800&q=80",
    tag: "Trending"
  }
];

export const categories = [
  { name: "Sherwani", icon: "✦", description: "Timeless bridal grandeur" },
  { name: "Jodhpuri Suit", icon: "◆", description: "Royal Rajasthani heritage" },
  { name: "Kurta Set", icon: "❋", description: "Festive elegance refined" },
  { name: "Indo-Western", icon: "◈", description: "Modern meets tradition" },
  { name: "Tuxedo", icon: "◉", description: "Noir sophistication" },
  { name: "Wedding Collection", icon: "♛", description: "Complete bridal ensembles" },
];

export function formatPrice(price: number): string {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(price);
}
