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
    name: "Beige Embroidered Raw Silk Sherwani ",
    category: "Sherwani",
    price: 28500,
    originalPrice: 34000,
    description: "Beige Sherwani ensemble for indian groom, crafted from luxurious Raw silk fabric with intricate french knot work and subtle golden zari work. Perfect for wedding day, this elegant set exudes sophistication and Royalty for the groom to be",
    material: "Fabric: Raw Silk, Mandarin collar with side slits",
    occasion: "Wedding, Reception, Formal Events",
    image: "https://www.bonsoir.co.in/cdn/shop/files/Beige_Embroidered_Raw_Silk_Sherwani.jpg?v=1748426186",
    tag: "Bestseller"
  },
  {
    id: "2",
    name: " Beige Pure Raw Silk Sherwani with stole",
    category: "Sherwani",
    price: 55999,
    originalPrice: 79999,
    description: "Beige pure raw silk sherwani with fine bead embellishments for a sophisticated traditional styleSherwani",
    material: "Fabric: Pure Raw Silk, •	Mandarin collar with side slits Kurta",
    occasion: "Wedding Ceremony, Sangeet, Engagement",
    image: "https://www.bonsoir.co.in/cdn/shop/files/DSC08926.jpg?v=1765004536&width=848",
    tag: "New Arrival"
  },
  {
    id: "3",
    name: "Beige Silk Sherwani with Stole",
    category: "Sherwani",
    price: 38500,
    description: "This elegant Beige silk sherwani set features allover intricate embroidery paired with kurta. Crafted from luxurious silk, Perfect for wedding. ",
    material: "Fabric: Silk, Mandarin collar with side slits stole",
    occasion: "Wedding, Festive Occasions, Mehndi",
    image: "https://www.bonsoir.co.in/cdn/shop/files/BeigeSilkSherwaniSet_2.jpg?v=1774003779&width=848",
    tag: "Exclusive"
  },
  {
    id: "4",
    name: "Teal Embroidered tuxedo Suit",
    category: "Tuxedo",
    price: 32000,
    originalPrice: 38000,
    description: "Elevate your style with our Textured Teal Embroidered Wedding Suit, suitable for cocktails, weddings and special gatherings. Designed with meticulous craftsmanship and a distinctive texture, this tuxedo suit ensures you stand out with elegance and charm, whether it's a wedding ceremony or a cocktail party.",
    material: "Fabric: Jacquard",
    occasion: "Gala Dinners, Formal Parties, Award Ceremonies",
    image: "https://www.bonsoir.co.in/cdn/shop/files/Teal_Embroidered_tuxedo_Suit.jpg?v=1748426208&width=848",
    tag: "Premium"
  },
    {
    id: "5",
    name: "Embroidered white tuxedo suit",
    category: "Tuxedo",
    price: 32000,
    originalPrice: 38000,
    description: "Blazer",
    material: "Fabric: Poly Silk Blend, Two back side slit, Two button closure with 3 pockets in front",
    occasion: "Gala Dinners, Formal Parties, Award Ceremonies",
    image: "https://www.bonsoir.co.in/cdn/shop/files/Embroideredwhitetuxedosuit_5_bd8da95d-c43e-4939-8aec-a62137fc82a0.jpg?v=1758602641&width=848",
    tag: "Premium"
  },
  {
    id: "6",
    name: "Classic off-white cotton silk kurta set for men",
    category: "Kurta Set",
    price: 7499,
    description: "Celebrate every festival in resplendent gold. This kurta set features a flowing silhouette with subtle geometric patterns in antique gold thread. Paired with matching straight-cut pants, it offers comfort without compromising on royal elegance.",
    material: "Fabric: Cotton Silk, Wash Care: Dry Clean Only",
    occasion: "Diwali, Eid, Navratri, Family Functions",
    image: "https://pictures.kartmax.in/cover/live/1200x1600/quality=8/sites/9s145MyZrWdIAwpU0JYS/product-images/classic_off_white_cotton_silk_kurta_set_for_men_1730002136ks_6642_2.jpg",
    tag: "Festive Pick"
  },
  {
    id: "7",
    name: "Grey Embroidered Men Kurta Set With Dupatta",
    category: "Kurta Set",
    price: 15000,
    originalPrice: 24000,
    description: "A bold fusion of East and West, this Emerald Indo-Western outfit pushes the boundaries of traditional fashion. The structured jacket with mandarin collar pairs seamlessly with tailored trousers, while emerald and gold embroidery adds a touch of regal flair.",
    material: "Blended Crepe with Silk Lining",
    occasion: "Cocktail Parties, Sangeet, Engagement",
    image: "https://ik.imagekit.io/4sjmoqtje/tr:w-1000,c-at_max/cdn/shop/files/grey_embroidered_men_kurta_set_with_dupatta-sg229062_4_39bb33bf-0fb5-4090-aa53-2dc22353f2bb.jpg?v=1743755654",
    tag: "Trending"
  },
  {
    id: "9",
    name: "KISAH Mens Kurta Jacket Trouser Set",
    category: "Kurta Set",
    price: 4399,
    originalPrice: 6599,
    description: "COMPLETE ETHNIC SET Includes a full-sleeve kurta, matching trouser, and sleeveless Modi jacket a refined traditional outfit for any festive or formal occasion.HIGH-UALITY FABRIC This kurta trouser set for men is crafted from breathable cotton blend fabric, perfect for weddings, parties, and celebrations.",
    material: "Material type: Cotton Blend, Fit:typeWestern, Style: Casual",
    occasion: "Cocktail Parties, Sangeet, Engagement",
    image: "https://m.media-amazon.com/images/I/61eMWz4RuqL._SY741_.jpg",
    tag: "Trending"
  },
    {
    id: "10",
    name: "Green Embroidered Kurta Set For Men",
    category: "Kurta Set",
    price: 4399,
    originalPrice: 5599,
    description: "Rooted Libaas brings you this comfortable Kurta Set for your wardrobe.We take pride in our commitment to maintain quality standards in each piece manufactured by us.This festive season we bring to you this Stylish Comfortable Kurta Set.",
    material: "Fabric	:	Silk, Bottom Fabric	:	Viscose",
    occasion: "Cocktail Parties, Sangeet, Engagement",
    image: "https://assets0.mirraw.com/images/12365448/3426-1_zoom.jpg?1711981284",
    tag: "Trending"
  },
  {
    id: "11",
    name: "Off-white Silk Sherwani with Stole",
    category: "Sherwani",
    price: 25500,
    description: "This elegant off-white silk sherwani set features allover intricate embroidery paired with kurta. Crafted from luxurious silk, Perfect for wedding",
    material: "Fabric: cotton Silk, Mandarin collar",
    occasion: "Wedding, Festive Occasions, Mehndi",
    image: "https://www.bonsoir.co.in/cdn/shop/files/Off-whiteSilkSherwaniwithStole_2.jpg?v=1774005299&width=848",
    tag: "Exclusive"
  },
  {
    id: "12",
    name: "Off White Silk Jodhpuri Kurta Set with Multi Colored Thread Embroidery Work Jacket",
    category: "Jodhpuri Suit",
    price: 52000,
    description: "Redefine ceremonial elegance with our Off-White Silk Jodhpuri Kurta Set. Titled Floral Ivory Symphony this ensemble is a sublime blend of pristine tailoring and vivid artisanal detail. Crafted from premium blended silk, the set offers a soft, radiant luster and a structured fit that commands respect. The Jodhpuri jacket is the centerpiece, featuring intricate multi-colored thread embroidery that weaves a story of tradition through modern floral motifs.",
    material: "Fabric:	Premium Silk Blend, Work:	Multi-Colored Thread Work",
    occasion: "Wedding, Festive Occasions, Mehndi",
    image: "https://asopalav.in/cdn/shop/files/pmnel2186a-off-white-silk-jodhpuri-kurta-set-with-multi-colored-thread-embroidery-work-jacket-set_89300fac-37d5-4b13-af2d-cc5f402a2c65.webp?v=1753867411",
    tag: "Exclusive"
  },
  {
    id: "13",
    name: "Sea Green Jodhpuri Kurta Set with Embroidery",
    category: "Jodhpuri Suit",
    price: 43750,
    description: "A jodhpuri ensemble featuring a fusion of geometric and floral motifs, intricately crafted with exquisite thread and cut dana embroidery, showcasing exceptional artisanal skill and attention to detail, perfectly designed to create a sophisticated, statement-making outfit ideal for weddings, festive celebrations, cultural events, and prestigious gatherings.",
    material: "Fabric: Suede",
    occasion: "Wedding, Festive Occasions, Mehndi",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_GZ8e3_aS7of30lNInvy4hoNr2N7Zvp2Gwg&s",
    tag: "Exclusive"
  },
  {
    id: "14",
    name: "Classic Emerald Green Jodhpuri Ensemble",
    category: "Jodhpuri Suit",
    price: 29950,
    description: "This elegant jodhpuri ensemble features vibrant reshamkari embroidery, complemented by intricate cut dana work",
    material: "Fabric: Double Matka",
    occasion: "Wedding, Festive Occasions, Mehndi",
    image: "https://adanicreations.com/cdn/shop/files/emerald_green_jodhpuri_set-6.jpg?v=1754301538&width=720",
    tag: "Exclusive"
  },
  
   {
    id: "15",
    name: "Wedding Wear Heavy Designer Readymade Men's Indo Western",
    category: "Indo-Western",
    price: 10180,
    description: "Premium Wedding style Indo-western",
    material: "Fabric: Silk",
    occasion: "Wedding, Mehndi",
    image: "https://assets0.mirraw.com/images/11598741/172438_zoom.jpg?1686817022",
    tag: "Trending"
  },
  {
    id: "16",
    name: "Wedding Wear Heavy Designer Readymade Men's Indo Western",
    category: "Indo-Western",
    price: 30499,
    description: "Indo-Western style for men is where Indian heritage meets modern tailoring. It blends traditional silhouettes, such as kurtas, bandhgalas, and sherwanis, with Western fits, trousers, and clean styling. Today, Indo-Western outfits are worn everywhere from weddings and festive celebrations to cocktail parties and formal evenings",
    material: "Fabric: Cotton silk",
    occasion: "Weddings & Festive Functions, Cocktail & Formal Evenings",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyxRHnTPQ22uCLZPZpA-1au5Fgkh9fojhZNQ&s",
    tag: "Trending"
  },
  {
    id: "17",
    name: "Outluk Wedding Collection Vol 14 Mens Traditional Wear Sherwani",
    category: "Wedding Collection",
    price: 69699,
    description: "Premium & Royal looking sherwani for men, get the attention by green duppata",
    material: "Kurta: Silk, Jacket: Silk, Pajama: Art Silk, Dupatta: Dola Silk ",
    occasion: "Weddings",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_RBOYe19kfBu1zOZSEXiWyuaRTGT-edf-Ag&s",
    tag: "Trending"
  },
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
