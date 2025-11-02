"use client";
import { fetchProductById } from "@/app/services/products";
import { Product } from "@/types";
import styles from "./[id].module.css";
import { useCartStore } from "@/app/store/cartStore";
import { use, useEffect, useState } from "react";
import ButtonAddToCart from "@/app/components/ButtonAddToCart/ButtonAddToCart";

export default function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const [product, setProduct] = useState<Product | null>(null);
  const addToCart = useCartStore((state) => state.addToCart);

  useEffect(() => {
    fetchProductById(id).then((data) => setProduct(data));
  }, [id]);
  if (!product) return <div>Loading...</div>;
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }


  const handleAddToCart = () => addToCart(product);

  return (
    <div className={styles.container}>
      <img
        className={styles.image}
        src={product.image}
        alt={product.title}
        width={300}
        height={300}
      />
      <div className={styles["container-text"]}>
        <h1 className={styles.title}>{product.title}</h1>
        <p className={styles.category}>{product.category}</p>
        <p className={styles.description}>{product.description}</p>
        <p className={styles.price}>PRICE: {product.price}$</p>
        {/* <button
          onClick={handleAddToCart}
          className={styles["add-to-cart-button"]}
        >
          ADD TO CART
        </button> */}
        <ButtonAddToCart product={product} />
      </div>
    </div>
  );
}
