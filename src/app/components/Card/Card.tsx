import { Product } from "@/types";
import styles from "./Card.module.css";

const Card: React.FC<Product> = ({ title, price, image, category }) => {
  return (
    <div className={styles.container}>
      <img src={image} alt={title} className={styles.img} />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.category}>{category}</p>
      <p className={styles.price}>${price}</p>
      <button className={styles.button}>Add to Cart</button>
    </div>
  );
};
export default Card;
