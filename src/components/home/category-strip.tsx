import Link from "next/link";
import { categories } from "@/data/categories";

export function CategoryStrip() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
      <div className="flex items-end justify-between">
        <div>
          <h2 className="font-display text-2xl font-semibold text-forest sm:text-3xl">
            Shop by Category
          </h2>
          <p className="mt-1 text-forest/60">Everything you need, neatly organized</p>
        </div>
        <Link
          href="/categories"
          className="hidden text-sm font-medium text-terracotta hover:underline sm:block"
        >
          View all →
        </Link>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
        {categories.map((cat) => (
          <Link
            key={cat.id}
            href={`/categories/${cat.slug}`}
            className="group flex flex-col items-center rounded-2xl border border-sage/50 bg-white p-4 text-center transition-all hover:border-forest hover:shadow-md"
          >
            <span className="text-3xl" role="img" aria-label={cat.name}>
              {cat.icon}
            </span>
            <span className="mt-2 text-sm font-medium text-forest group-hover:text-terracotta">
              {cat.name}
            </span>
            <span className="text-xs text-forest/50">{cat.productCount} items</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
