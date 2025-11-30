import { create } from "zustand";
import { FilterState, Product } from "@/types";
interface ProductStore {
  products: Product[];
  filteredProducts: Product[];
  filters: FilterState;
  isLoading: boolean;
  setProducts: (products: Product[]) => void;
  setFilters: (filters: Partial<FilterState>) => void;
  applyFilters: () => void;
  resetFilters: () => void;
  setLoading: (loading: boolean) => void;
}
export const useProductStore = create<ProductStore>((set, get) => ({
  products: [],
  filteredProducts: [],
  filters: {
    category: "All",
    priceRange: [0, 500],
    sortBy: "name",
    tags: [],
    search: "",
  },
  isLoading: false,
  setProducts: (products: Product[]) =>
    set({ products, filteredProducts: products }),
  setFilters: (newFilters: Partial<FilterState>) => {
    set((state) => ({ filters: { ...state.filters, ...newFilters } }));
    get().applyFilters();
  },
  applyFilters: () => {
    const { products, filters } = get();
    let filtered = [...products];
    if (filters.category !== "All") {
      filtered = filtered.filter(
        (product) => product.category === filters.category
      );
    }
    if (filters.search) {
      filtered = filtered.filter((product) =>
        product.name.toLowerCase().includes(filters.search.toLowerCase())
      );
    }
    if (filters.tags.length > 0) {
      filtered = filtered.filter((product) =>
        filters.tags.some((tag) => product.tags.includes(tag))
      );
    }
    filtered = filtered.filter(
      (product) =>
        product.price >= filters.priceRange[0] &&
        product.price <= filters.priceRange[1]
    );
    switch (filters.sortBy) {
      case "name":
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "price-low":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        filtered.sort((a, b) => b.price - a.price);
        break;
      case "newest":
        filtered.sort((a, b) => parseInt(b.id) - parseInt(a.id));
        break;
    }
    set({ filteredProducts: filtered });
  },
  resetFilters: () =>
    set({
      filters: {
        category: "All",
        priceRange: [0, 500],
        sortBy: "name",
        tags: [],
        search: "",
      },
    }),
  setLoading: (loading: boolean) => set({ isLoading: loading }),
}));
