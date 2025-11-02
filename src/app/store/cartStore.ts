import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Product } from "@/types";

interface CartItem {
  product: Product;
  quantity: number;
}

interface CartState {
  cartItems: {
    [key: number]: CartItem;
  };
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  decreaseQuantity: (productId: number) => void;
  clearCart: () => void;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      cartItems: {},

      addToCart: (product: Product) =>
        set((state) => {
          const existingItem = state.cartItems[product.id];
          const updatedCart = {
            ...state.cartItems,
            [product.id]: existingItem
              ? { ...existingItem, quantity: existingItem.quantity + 1 }
              : { product, quantity: 1 },
          };
          return { cartItems: updatedCart };
        }),

      removeFromCart: (productId: number) =>
        set((state) => {
          const updatedCart = { ...state.cartItems };
          delete updatedCart[productId];
          return { cartItems: updatedCart };
        }),

      decreaseQuantity: (productId: number) =>
        set((state) => {
          const item = state.cartItems[productId];
          if (!item) return state;

          if (item.quantity > 1) {
            return {
              cartItems: {
                ...state.cartItems,
                [productId]: { ...item, quantity: item.quantity - 1 },
              },
            };
          } else {
            const updatedCart = { ...state.cartItems };
            delete updatedCart[productId];
            return { cartItems: updatedCart };
          }
        }),

      clearCart: () => set({ cartItems: {} }),
    }),
    {
      name: "cart-storage", 
    }
  )
);
