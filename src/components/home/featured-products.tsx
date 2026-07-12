import Link from "next/link";
import { getFeaturedProducts } from "@/data/products";
import { ProductGrid } from "@/components/products/product-grid";

export function FeaturedProducts() {
  const featured = getFeaturedProducts();

  return (
    <section className="bg-cream-dark/50 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="font-display text-2xl font-semibold text-forest sm:text-3xl">
              Featured This Week
            </h2>
            <p className="mt-1 text-forest/60">Hand-picked favorites from our shelves</p>
          </div>
          <Link
            href="/products"
            className="text-sm font-medium text-terracotta hover:underline"
          >
            See all →
          </Link>
        </div>
        <div className="mt-6">
          <ProductGrid products={featured} />
        </div>
      </div>
    </section>
  );
}
