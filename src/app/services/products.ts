export const fetchProducts = async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  if (!response.ok) {
    throw new Error("Failed to fetch products from SERVICE");
  }
  return response.json();
};
export const fetchProductsByCategory = async (category: string) => {
  let categoryUrl = "";
  switch (category) {
    case "electronics":
    case "jewelery":
      categoryUrl = category;
      break;
    case "men":
      categoryUrl = encodeURIComponent("men's clothing");
      break;
    case "women":
      categoryUrl = encodeURIComponent("women's clothing");
      break;
    default:
      throw new Error(`Unknown category: ${category}`);
  }

  const response = await fetch(
    `https://fakestoreapi.com/products/category/${categoryUrl}`
  );

  if (!response.ok) {
    throw new Error(`Failed to fetch products: ${response.status}`);
  }

  try {
    return await response.json();
  } catch (error) {
    console.error("Failed parsing JSON:", error);
    return [];
  }
};
export const fetchProductById = async (id: string) => {
  const response = await fetch(`https://fakestoreapi.com/products/${id}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch product with id ${id}`);
  }
  return response.json();
};
