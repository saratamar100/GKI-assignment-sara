import { Product } from "@/types";
import { fetchProductsByCategory } from "../services/products";
import ProductsGrid from "../components/ProductsGrid/ProductsGrid";

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
    <ProductsGrid products={products} />
  );
}
