import { useCartStore } from "@/app/store/cartStore";
import { Product } from "@/types";
import styles from "./ButtonAddToCart.module.css";

const ButtonAddToCart = ({ product }: { product: Product }) => {
  const addToCart = useCartStore((state) => state.addToCart);
  const handleAddToCart = () => addToCart(product);
  return (
    <button className={styles.button} onClick={handleAddToCart}>
      ADD TO CART
    </button>
  );
};
export default ButtonAddToCart;
