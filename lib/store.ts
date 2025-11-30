import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Cart, CartItem, Product } from "@/types";
interface CartStore {
  cart: Cart;
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  getCartTotal: () => number;
  getCartItemCount: () => number;
}
export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      cart: { items: [], total: 0, itemCount: 0 },
      addToCart: (product: Product, quantity = 1) => {
        set((state) => {
          const existingItem = state.cart.items.find(
            (item) => item.id === product.id
          );
          let newItems: CartItem[];
          if (existingItem) {
            newItems = state.cart.items.map((item) =>
              item.id === product.id
                ? { ...item, quantity: item.quantity + quantity }
                : item
            );
          } else {
            newItems = [...state.cart.items, { ...product, quantity }];
          }
          const total = newItems.reduce(
            (sum, item) => sum + item.price * item.quantity,
            0
          );
          const itemCount = newItems.reduce(
            (sum, item) => sum + item.quantity,
            0
          );
          return { cart: { items: newItems, total, itemCount } };
        });
      },
      removeFromCart: (productId: string) => {
        set((state) => {
          const newItems = state.cart.items.filter(
            (item) => item.id !== productId
          );
          const total = newItems.reduce(
            (sum, item) => sum + item.price * item.quantity,
            0
          );
          const itemCount = newItems.reduce(
            (sum, item) => sum + item.quantity,
            0
          );
          return { cart: { items: newItems, total, itemCount } };
        });
      },
      updateQuantity: (productId: string, quantity: number) => {
        if (quantity <= 0) {
          get().removeFromCart(productId);
          return;
        }
        set((state) => {
          const newItems = state.cart.items.map((item) =>
            item.id === productId ? { ...item, quantity } : item
          );
          const total = newItems.reduce(
            (sum, item) => sum + item.price * item.quantity,
            0
          );
          const itemCount = newItems.reduce(
            (sum, item) => sum + item.quantity,
            0
          );
          return { cart: { items: newItems, total, itemCount } };
        });
      },
      clearCart: () => set({ cart: { items: [], total: 0, itemCount: 0 } }),
      getCartTotal: () => get().cart.total,
      getCartItemCount: () => get().cart.itemCount,
    }),
    { name: "cart-storage" }
  )
);
