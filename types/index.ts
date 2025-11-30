export interface Product {
  id: string;
  name: string;
  images: string[];
  price: number;
  oldPrice?: number;
  category: string;
  tags: string[];
  stock: number;
  description: string;
  featured?: boolean;
  sizes?: {
    uk: number[];
    us: number[];
  };
}

export interface CartItem extends Product {
  quantity: number;
}

export interface Cart {
  items: CartItem[];
  total: number;
  itemCount: number;
}

export interface FilterState {
  category: string;
  priceRange: [number, number];
  sortBy: "name" | "price-low" | "price-high" | "newest";
  tags: string[];
  search: string;
}
