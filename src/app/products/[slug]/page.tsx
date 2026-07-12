"use client";

import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Minus, Plus, ShoppingCart } from "lucide-react";
import { use, useState } from "react";
import { getProductBySlug } from "@/data/products";
import { getCategoryById } from "@/data/categories";
import { useCart } from "@/lib/cart-context";
import { formatPrice, getEffectivePrice } from "@/lib/format";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const product = getProductBySlug(slug);
  const { addItem, updateQuantity, items } = useCart();
  const [added, setAdded] = useState(false);

  if (!product) notFound();

  const category = getCategoryById(product.categoryId);
  const effectivePrice = getEffectivePrice(product);
  const cartItem = items.find((i) => i.product.id === product.id);
  const hasOffer = product.offerPrice !== undefined;

  const handleAdd = () => {
    addItem(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
      <Link
        href="/products"
        className="inline-flex items-center gap-1 text-sm text-forest/60 hover:text-forest"
      >
        <ArrowLeft className="h-4 w-4" aria-hidden />
        Back to shop
      </Link>

      <div className="mt-6 grid gap-8 lg:grid-cols-2">
        <div className="relative aspect-square overflow-hidden rounded-2xl bg-cream-dark">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
          />
          {hasOffer && (
            <div className="absolute left-4 top-4">
              <Badge variant="sale">On Sale</Badge>
            </div>
          )}
        </div>

        <div>
          {category && (
            <Link
              href={`/categories/${category.slug}`}
              className="text-sm font-medium text-terracotta hover:underline"
            >
              {category.name}
            </Link>
          )}
          <h1 className="mt-1 font-display text-3xl font-semibold text-forest sm:text-4xl">
            {product.name}
          </h1>
          <p className="mt-1 text-forest/60">{product.unit}</p>

          <div className="mt-4 flex items-baseline gap-3">
            <span className="text-3xl font-semibold text-forest">
              {formatPrice(effectivePrice)}
            </span>
            {hasOffer && (
              <span className="text-lg text-forest/50 line-through">
                {formatPrice(product.price)}
              </span>
            )}
          </div>

          <p className="mt-6 text-forest/80 leading-relaxed">{product.description}</p>

          <p className="mt-4 text-sm">
            {product.inStock ? (
              <span className="text-forest-light font-medium">✓ In stock</span>
            ) : (
              <span className="text-terracotta font-medium">Out of stock</span>
            )}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            {cartItem ? (
              <div className="flex items-center gap-3 rounded-full border border-sage/50 bg-white px-2">
                <button
                  type="button"
                  onClick={() => updateQuantity(product.id, cartItem.quantity - 1)}
                  className="rounded-full p-2 hover:bg-sage/30"
                  aria-label="Decrease quantity"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="w-8 text-center font-medium">{cartItem.quantity}</span>
                <button
                  type="button"
                  onClick={() => updateQuantity(product.id, cartItem.quantity + 1)}
                  className="rounded-full p-2 hover:bg-sage/30"
                  aria-label="Increase quantity"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            ) : (
              <Button size="lg" onClick={handleAdd} disabled={!product.inStock}>
                <ShoppingCart className="h-5 w-5" aria-hidden />
                {added ? "Added!" : "Add to Cart"}
              </Button>
            )}
            <Link href="/cart">
              <Button variant="outline" size="lg">
                View Cart
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
