import type { Metadata } from "next";
import { ProductCatalog } from "@/components/products/product-catalog";

export const metadata: Metadata = {
  title: "Shop",
};

export default function ProductsPage() {
  return <ProductCatalog />;
}
