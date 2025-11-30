import { ProductCard } from "@/components/ProductCard";
import { getServerProducts, categories, products } from "@/data/products";
import { Button } from "@/components/ui/button";
import { Filter, X } from "lucide-react";
import { FilterState } from "@/types";
import ShopClient from "./ShopClient";

async function getProducts() {
  try {
    const serverProducts = await getServerProducts();
    return serverProducts;
  } catch (error) {
    console.error('Failed to load products:', error);
    return products;
  }
}

export default async function ShopPage() {
  const initialProducts = await getProducts();

  return (
    <ShopClient initialProducts={initialProducts} />
  );
}
