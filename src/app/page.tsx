import { Product } from "@/types";
import { fetchProducts } from "./services/products";
import ProductsGrid from "./components/ProductsGrid/ProductsGrid";

export default async function Home() {
  const products: Product[] = await fetchProducts();

  return <ProductsGrid products={products} />;
}
