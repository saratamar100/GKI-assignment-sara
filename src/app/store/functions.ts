// getTotalItems: () => {
//   const { cartItems } = get();
//   return Object.values(cartItems).reduce(
//     (sum, item) => sum + item.quantity,
//     0
//   );
// },

import { useCartStore } from "./cartStore";

// : () => {
//   const { cartItems } = get();
//   return Object.values(cartItems).reduce(
//     (sum, item) => sum + item.product.price * item.quantity,
//     0
//   );
// },

export const getTotalItems = () => {
  const cartStore = useCartStore();
  return Object.values(cartStore.cartItems).length;
};
export const getTotalPrice = () => {
  const cartStore = useCartStore();
  return Object.values(cartStore.cartItems).reduce(
    (sum, item) => sum + item.product.price,
    0
  );
};
//add quantity parameter to total price calculation
