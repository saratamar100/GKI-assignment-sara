import { useCartStore } from "@/app/store/cartStore";
import { Product } from "@/types";

const ButtonAddToCart = ({ product }: { product: Product }) => {
  const addToCart = useCartStore((state) => state.addToCart);
  const handleAddToCart = () => addToCart(product);
  return <button onClick={handleAddToCart}>ADD TO CART</button>;
};
export default ButtonAddToCart;
