"use client";
import { Product } from "@/types";
import styles from "./Card.module.css";
import { useCartStore } from "@/app/store/cartStore";
import Link from "next/link";
import ButtonAddToCart from "../ButtonAddToCart/ButtonAddToCart";
import { useEffect } from "react";

const Card: React.FC<Product> = (product) => {
  const addToCart = useCartStore((state) => state.addToCart);
  const handleAddToCart = () => addToCart(product);
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }
  return (
    <div className={styles.container}>
      <Link href={`/product/${product.id}`} className={styles.link}>
        <img src={product.image} alt={product.title} className={styles.img} />
        <h3 className={styles.title}>{product.title}</h3>
        <p className={styles.category}>{product.category}</p>
        <p className={styles.price}>${product.price}</p>
      </Link>
      {/* <button className={styles.button} onClick={handleAddToCart}>
        <span className={styles["cart-icon"]}>🛒</span>
        ADD TO CART
      </button> */}
      <ButtonAddToCart product={product} />
    </div>
  );
};
export default Card;
