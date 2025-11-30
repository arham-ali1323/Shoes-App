import { Product } from "@/types";

export const products: Product[] = [
  {
    id: "1",
    name: "Nike Air Max 270",
    images: ["https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop&auto=format", "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop&auto=format"],
    price: 150,
    oldPrice: 180,
    category: "Running",
    tags: ["comfortable", "breathable", "trendy"],
    stock: 15,
    description:
      "Experience ultimate comfort with the Nike Air Max 270. Featuring a large Max Air unit for maximum cushioning and a breathable mesh upper.",
    sizes: {
      uk: [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12],
      us: [7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13]
    }
  },
  {
    id: "2",
    name: "Adidas Ultraboost 22",
    images: ["https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=400&fit=crop&auto=format", "https://images.unsplash.com/photo-1595950653106-6c919d0a793d?w=400&h=400&fit=crop&auto=format"],
    price: 190,
    oldPrice: 220,
    category: "Running",
    tags: ["responsive", "energy-return", "premium"],
    stock: 12,
    description:
      "The Adidas Ultraboost 22 delivers incredible energy return with every stride. Features Boost cushioning and a Primeknit upper.",
    sizes: {
      uk: [5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12],
      us: [6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13]
    }
  },
  {
    id: "3",
    name: "New Balance 574",
    images: ["https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=400&h=400&fit=crop&auto=format", "https://images.unsplash.com/photo-1545292917-4a7143a97db9?w=400&h=400&fit=crop&auto=format"],
    price: 80,
    category: "Lifestyle",
    tags: ["classic", "versatile", "comfortable"],
    stock: 25,
    description:
      "A timeless classic that combines comfort and style. The New Balance 574 is perfect for everyday wear.",
    sizes: {
      uk: [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12],
      us: [7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13]
    }
  },
  {
    id: "4",
    name: "Jordan 1 Retro High",
    images: ["https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=400&fit=crop&auto=format", "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=400&h=400&fit=crop&auto=format"],
    price: 170,
    oldPrice: 200,
    category: "Basketball",
    tags: ["iconic", "premium", "collectible"],
    stock: 8,
    description:
      "The legendary Jordan 1 Retro High. A true icon that revolutionized basketball footwear and street culture.",
  },
  {
    id: "5",
    name: "Converse Chuck Taylor All Star",
    images: ["https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop&auto=format", "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=400&h=400&fit=crop&auto=format"],
    price: 60,
    category: "Lifestyle",
    tags: ["classic", "casual", "durable"],
    stock: 30,
    description:
      "The original basketball shoe turned cultural icon. Timeless style that never goes out of fashion.",
  },
  {
    id: "6",
    name: "Vans Old Skool",
    images: ["https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=400&h=400&fit=crop&auto=format", "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=400&h=400&fit=crop&auto=format"],
    price: 70,
    category: "Skate",
    tags: ["durable", "classic", "skate-ready"],
    stock: 20,
    description:
      "The Vans Old Skool is a classic skate shoe with a durable suede and canvas upper.",
  },
  {
    id: "7",
    name: "Puma RS-X³",
    images: ["https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=400&fit=crop&auto=format", "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=400&fit=crop&auto=format"],
    price: 110,
    category: "Lifestyle",
    tags: ["bold", "retro", "statement"],
    stock: 18,
    description:
      "Make a statement with the Puma RS-X³. Features bold colors and retro-inspired design.",
  },
  {
    id: "8",
    name: "ASICS Gel-Kayano 29",
    images: ["https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop&auto=format", "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop&auto=format"],
    price: 160,
    category: "Running",
    tags: ["stability", "supportive", "long-distance"],
    stock: 14,
    description:
      "Engineered for stability and comfort on long runs. Features ASICS signature GEL cushioning technology.",
  },
  {
    id: "9",
    name: "Reebok Classic Leather",
    images: ["https://images.unsplash.com/photo-1600236836313-eb9635483421?w=400&h=400&fit=crop&auto=format", "https://images.unsplash.com/photo-1600236836313-eb9635483421?w=400&h=400&fit=crop&auto=format"],
    price: 75,
    category: "Lifestyle",
    tags: ["minimalist", "versatile", "classic"],
    stock: 22,
    description:
      "Clean, simple, and timeless. The Reebok Classic Leather is perfect for any casual occasion.",
  },
  {
    id: "10",
    name: "Nike Dunk Low",
    images: ["https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=400&fit=crop&auto=format", "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=400&fit=crop&auto=format"],
    price: 100,
    oldPrice: 120,
    category: "Basketball",
    tags: ["versatile", "classic", "skate-friendly"],
    stock: 16,
    description:
      "Originally a basketball shoe, now a streetwear staple. The Nike Dunk Low offers versatile style.",
  },
  {
    id: "11",
    name: "Adidas Stan Smith",
    images: ["https://images.unsplash.com/photo-1600236836313-eb9635483421?w=400&h=400&fit=crop&auto=format", "https://images.unsplash.com/photo-1600236836313-eb9635483421?w=400&h=400&fit=crop&auto=format"],
    price: 80,
    category: "Lifestyle",
    tags: ["minimalist", "classic", "versatile"],
    stock: 28,
    description:
      "The iconic Adidas Stan Smith. Clean, minimalist design that works with everything.",
  },
  {
    id: "12",
    name: "New Balance 990v5",
    images: ["https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=400&h=400&fit=crop&auto=format", "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=400&h=400&fit=crop&auto=format"],
    price: 185,
    category: "Running",
    tags: ["premium", "made-in-usa", "comfortable"],
    stock: 10,
    description:
      "Premium craftsmanship meets modern performance. Made in USA with superior materials.",
  },
  {
    id: "13",
    name: "Nike Zoom Pegasus 40",
    images: ["https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop&auto=format", "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop&auto=format"],
    price: 130,
    category: "Running",
    tags: ["responsive", "versatile", "daily-trainer"],
    stock: 19,
    description:
      "Your daily workhorse for any run. The Nike Zoom Pegasus 40 offers responsive cushioning.",
  },
  {
    id: "14",
    name: "Adidas Forum Low",
    images: ["https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=400&fit=crop&auto=format", "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=400&fit=crop&auto=format"],
    price: 90,
    category: "Lifestyle",
    tags: ["retro", "versatile", "comfortable"],
    stock: 21,
    description:
      "80s basketball heritage meets modern street style. The Adidas Forum Low is a retro classic.",
  },
  {
    id: "15",
    name: "Vans SK8-Hi",
    images: ["https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=400&h=400&fit=crop&auto=format", "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=400&h=400&fit=crop&auto=format"],
    price: 75,
    category: "Skate",
    tags: ["high-top", "durable", "classic"],
    stock: 17,
    description:
      "The classic high-top skate shoe. Extra ankle protection and timeless Vans style.",
  },
];

// Featured products - different from regular products
export const featuredProducts: Product[] = [
  {
    id: "f1",
    name: "Nike Air Jordan 1 Retro High OG",
    images: ["https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=400&h=400&fit=crop&auto=format", "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=400&fit=crop&auto=format"],
    price: 250,
    oldPrice: 300,
    category: "Basketball",
    tags: ["iconic", "limited-edition", "premium"],
    stock: 5,
    description: "The legendary Air Jordan 1 Retro High OG. Premium leather construction with original colorway. A true collector's item.",
    featured: true,
    sizes: {
      uk: [7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12],
      us: [8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13]
    }
  },
  {
    id: "f2",
    name: "Adidas Yeezy Boost 350 V2",
    images: ["https://images.unsplash.com/photo-1600236836313-eb9635483421?w=400&h=400&fit=crop&auto=format", "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop&auto=format"],
    price: 320,
    oldPrice: 380,
    category: "Lifestyle",
    tags: ["exclusive", "trendy", "comfortable"],
    stock: 8,
    description: "The iconic Yeezy Boost 350 V2 features Primeknit upper and full-length Boost cushioning for ultimate comfort.",
    featured: true,
    sizes: {
      uk: [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12],
      us: [7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13]
    }
  },
  {
    id: "f3",
    name: "New Balance 2002R Protection Pack",
    images: ["https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=400&h=400&fit=crop&auto=format", "https://images.unsplash.com/photo-1545292917-4a7143a97db9?w=400&h=400&fit=crop&auto=format"],
    price: 200,
    oldPrice: 240,
    category: "Lifestyle",
    tags: ["premium", "limited", "retro-tech"],
    stock: 6,
    description: "The New Balance 2002R Protection Pack combines retro running aesthetics with modern materials and GEL cushioning.",
    featured: true,
    sizes: {
      uk: [7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12],
      us: [8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13]
    }
  },
  {
    id: "f4",
    name: "Nike Dunk Low 'Panda'",
    images: ["https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=400&fit=crop&auto=format", "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=400&h=400&fit=crop&auto=format"],
    price: 150,
    oldPrice: 180,
    category: "Basketball",
    tags: ["trendy", "versatile", "classic"],
    stock: 10,
    description: "The iconic Panda colorway. Clean black and white design that's perfect for any outfit. A streetwear essential.",
    featured: true,
    sizes: {
      uk: [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12],
      us: [7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13]
    }
  }
];

// API function to fetch products from the API
export async function fetchProductsFromAPI(): Promise<Product[]> {
  try {
    const response = await fetch('/api/shoes');
    if (!response.ok) {
      throw new Error('Failed to fetch products');
    }
    const apiProducts = await response.json();
    return apiProducts;
  } catch (error) {
    console.error('Error fetching products from API:', error);
    // Fallback to local products if API fails
    return products;
  }
}

export const categories = [
  "All",
  "Running",
  "Basketball",
  "Lifestyle",
  "Skate",
];
export const allTags = [
  "comfortable",
  "breathable",
  "trendy",
  "responsive",
  "energy-return",
  "premium",
  "classic",
  "versatile",
  "iconic",
  "collectible",
  "casual",
  "durable",
  "bold",
  "retro",
  "statement",
  "stability",
  "supportive",
  "long-distance",
  "minimalist",
  "skate-friendly",
  "made-in-usa",
  "daily-trainer",
  "high-top",
];
