"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { products } from "@/data/products";
import { categories } from "@/data/categories";
import { searchProducts } from "@/data/products";
import { ProductGrid } from "@/components/products/product-grid";

export function ProductCatalog() {
  const [query, setQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");

  const filtered = useMemo(() => {
    let result = searchProducts(query);
    if (categoryFilter !== "all") {
      result = result.filter((p) => p.categoryId === categoryFilter);
    }
    return result;
  }, [query, categoryFilter]);

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
      <h1 className="font-display text-3xl font-semibold text-forest">Shop All Products</h1>
      <p className="mt-1 text-forest/60">{products.length} products available</p>

      <div className="mt-6 flex flex-col gap-4 sm:flex-row">
        <div className="relative flex-1">
          <Search
            className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-forest/40"
            aria-hidden
          />
          <input
            type="search"
            placeholder="Search products..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full rounded-full border border-sage/50 bg-white py-2.5 pl-10 pr-4 text-forest placeholder:text-forest/40 focus:border-forest focus:outline-none focus:ring-2 focus:ring-forest/20"
            aria-label="Search products"
          />
        </div>
        <select
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
          className="rounded-full border border-sage/50 bg-white px-4 py-2.5 text-forest focus:border-forest focus:outline-none focus:ring-2 focus:ring-forest/20"
          aria-label="Filter by category"
        >
          <option value="all">All Categories</option>
          {categories.map((cat) => (
            <option key={cat.id} value={cat.id}>
              {cat.name}
            </option>
          ))}
        </select>
      </div>

      <div className="mt-8">
        <ProductGrid
          products={filtered}
          emptyMessage="No products match your search. Try a different term."
        />
      </div>
    </div>
  );
}
