import Card from "../Card/Card";
import {Product} from "@/types";
import styles from "./ProductsGrid.module.css";

interface ProductsGridProps {
  products: Product[];
}
const ProductsGrid: React.FC<ProductsGridProps> = ({products}) => {
  return (
    <div className={styles.grid}>
        {products.map((p) => (
          <Card key={p.id} {...p} />
        ))}
      </div>
  );
}
export default ProductsGrid;