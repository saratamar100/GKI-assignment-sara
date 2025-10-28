"use client";
import { Product } from "@/types";
import { useEffect, useState } from "react";
import { fetchProducts } from "./services/products";

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    fetchProducts().then((data) => setProducts(data));
  }, []);
  return <div>{JSON.stringify(products)}</div>;
}
