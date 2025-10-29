import { fetchProductById } from "@/app/services/products";
import { Product } from "@/types";
import styles from "./[id].module.css";

interface ProductPageProps {
  params: { id: string };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;
  const product: Product = await fetchProductById(id);
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
         <button className={styles["add-to-cart-button"]}>ADD TO CART</button>
         </div>
    </div>
  );
}
