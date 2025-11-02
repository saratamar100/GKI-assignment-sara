"use client";
import { Product } from "@/types";
import styles from "./Card.module.css";
import Link from "next/link";
import ButtonAddToCart from "../ButtonAddToCart/ButtonAddToCart";

const Card: React.FC<Product> = (product) => {
  return (
    <div className={styles.container}>
      <Link href={`/product/${product.id}`} className={styles.link}>
        <img src={product.image} alt={product.title} className={styles.img} />
        <h3 className={styles.title}>{product.title}</h3>
        <p className={styles.category}>{product.category}</p>
        <p className={styles.price}>${product.price}</p>
      </Link>
      <ButtonAddToCart product={product} />
    </div>
  );
};
export default Card;
