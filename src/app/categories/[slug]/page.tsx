import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getCategoryBySlug } from "@/data/categories";
import { getProductsByCategory } from "@/data/products";
import { ProductGrid } from "@/components/products/product-grid";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  return { title: category?.name ?? "Category" };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) notFound();

  const categoryProducts = getProductsByCategory(category.id);

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
      <Link
        href="/categories"
        className="text-sm text-forest/60 hover:text-forest"
      >
        ← All categories
      </Link>
      <div className="mt-4 flex items-center gap-3">
        <span className="text-4xl" role="img" aria-label={category.name}>
          {category.icon}
        </span>
        <div>
          <h1 className="font-display text-3xl font-semibold text-forest">
            {category.name}
          </h1>
          <p className="text-forest/60">{category.description}</p>
        </div>
      </div>
      <div className="mt-8">
        <ProductGrid
          products={categoryProducts}
          emptyMessage="No products in this category yet."
        />
      </div>
    </div>
  );
}
