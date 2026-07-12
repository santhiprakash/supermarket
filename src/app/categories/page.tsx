import type { Metadata } from "next";
import Link from "next/link";
import { categories } from "@/data/categories";

export const metadata: Metadata = {
  title: "Categories",
};

export default function CategoriesPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
      <h1 className="font-display text-3xl font-semibold text-forest">Categories</h1>
      <p className="mt-1 text-forest/60">Browse our full range by department</p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((cat) => (
          <Link
            key={cat.id}
            href={`/categories/${cat.slug}`}
            className="group flex items-start gap-4 rounded-2xl border border-sage/50 bg-white p-6 transition-all hover:border-forest hover:shadow-md"
          >
            <span className="text-4xl" role="img" aria-label={cat.name}>
              {cat.icon}
            </span>
            <div>
              <h2 className="font-display text-xl font-semibold text-forest group-hover:text-terracotta">
                {cat.name}
              </h2>
              <p className="mt-1 text-sm text-forest/60">{cat.description}</p>
              <p className="mt-2 text-xs font-medium text-terracotta">
                {cat.productCount} products →
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
