import { Product } from "@/types";
import { fetchProductsByCategory } from "../services/products";

export const dynamicParams = false;

export async function generateStaticParams() {
  const ids = ["men", "women", "jewelery", "electronics"];
  return ids.map((id) => ({ id }));
}

export default async function ProductPage({ params }: { params: { id: string } }) {
  const { id } = await params;
  const products: Product[] = await fetchProductsByCategory(id);

  return (
    <div>
      <h1>Products in category: {id}</h1>
      <ul>
        {products.map((p) => (
          <li key={p.id}>{p.title}</li>
        ))}
      </ul>
    </div>
  );
}
