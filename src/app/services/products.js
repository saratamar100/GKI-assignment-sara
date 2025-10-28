export const fetchProducts = async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  if (!response.ok) {
    throw new Error("Failed to fetch products from SERVICE");
  }
  return response.json();
};
export const fetchWomanProducts = async () => {
  const response = await fetch(
    "https://fakestoreapi.com/products/category/women%27s%20clothing"
  );
  if (!response.ok) {
    throw new Error("Failed to fetch women products from SERVICE");
  }
  return response.json();
};
export const fetchManProducts = async () => {
  const response = await fetch(
    "https://fakestoreapi.com/products/category/men%27s%20clothing"
  );
  if (!response.ok) {
    throw new Error("Failed to fetch men products from SERVICE");
  }
  return response.json();
};
export const fetchJeweleryProducts = async () => {
  const response = await fetch(
    "https://fakestoreapi.com/products/category/jewelery"
  );
  if (!response.ok) {
    throw new Error("Failed to fetch jewelery products from SERVICE");
  }
  return response.json();
};
export const fetchElectronicsProducts = async () => {
  const response = await fetch(
    "https://fakestoreapi.com/products/category/electronics"
  );
  if (!response.ok) {
    throw new Error("Failed to fetch electronics products from SERVICE");
  }
  return response.json();
};
