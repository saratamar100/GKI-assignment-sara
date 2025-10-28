import { Product } from "@/types";
import { fetchProductsByCategory } from "../services/products";
import styles from "./[id].module.css";
import Card from "../components/Card/Card";

export const dynamicParams = false;

export async function generateStaticParams() {
  const ids = ["men", "women", "jewelery", "electronics"];
  return ids.map((id) => ({ id }));
}

export default async function ProductPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params;
  const products: Product[] = await fetchProductsByCategory(id);

  return (
    <div>
      <div className={styles.grid}>
        {products.map((p) => (
          <Card key={p.id} {...p} />
        ))}
      </div>
    </div>
  );
}
