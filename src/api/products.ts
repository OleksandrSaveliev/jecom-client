import type { Product, ProductDTO } from "../types/product";

export async function fetchProducts(): Promise<Product[]> {
  const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/products`);
  if (!res.ok) throw new Error("Failed to fetch products");
  return res.json();
}

export async function createProduct(product: ProductDTO): Promise<Product> {
  const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/products`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(product),
  });
  if (!res.ok) throw new Error("Failed to create product");
  return res.json();
}

export async function uploadProductImage(productId: string, file: File) {
  const formData = new FormData();
  formData.append("image", file);
  formData.append("productId", productId);

  const res = await fetch(
    `${import.meta.env.VITE_API_BASE_URL}/images/upload`,
    {
      method: "POST",
      body: formData,
    }
  );
  if (!res.ok) throw new Error("Image upload failed");
  return res.text();
}
