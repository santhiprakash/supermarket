"use client";

import Image from "next/image";
import Link from "next/link";
import { Plus, Check } from "lucide-react";
import { useState } from "react";
import type { Product } from "@/lib/types";
import { useCart } from "@/lib/cart-context";
import { formatPrice, getEffectivePrice } from "@/lib/format";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addItem, items } = useCart();
  const [added, setAdded] = useState(false);
  const inCart = items.some((i) => i.product.id === product.id);
  const effectivePrice = getEffectivePrice(product);
  const hasOffer = product.offerPrice !== undefined;

  const handleAdd = () => {
    if (!product.inStock) return;
    addItem(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-sage/50 bg-white shadow-sm transition-shadow hover:shadow-md">
      <Link href={`/products/${product.slug}`} className="relative block aspect-square overflow-hidden bg-cream-dark">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
        />
        {hasOffer && (
          <div className="absolute left-2 top-2">
            <Badge variant="sale">Sale</Badge>
          </div>
        )}
        {!product.inStock && (
          <div className="absolute inset-0 flex items-center justify-center bg-forest/60">
            <span className="rounded-full bg-cream px-3 py-1 text-sm font-medium text-forest">
              Out of Stock
            </span>
          </div>
        )}
      </Link>

      <div className="flex flex-1 flex-col p-4">
        <Link href={`/products/${product.slug}`}>
          <h3 className="font-medium text-forest line-clamp-1 hover:underline">
            {product.name}
          </h3>
        </Link>
        <p className="mt-0.5 text-xs text-forest/60">{product.unit}</p>

        <div className="mt-2 flex items-baseline gap-2">
          <span className="text-lg font-semibold text-forest">
            {formatPrice(effectivePrice)}
          </span>
          {hasOffer && (
            <span className="text-sm text-forest/50 line-through">
              {formatPrice(product.price)}
            </span>
          )}
        </div>

        <div className="mt-auto pt-3">
          <Button
            variant={inCart || added ? "secondary" : "primary"}
            size="sm"
            className="w-full"
            onClick={handleAdd}
            disabled={!product.inStock}
          >
            {added || inCart ? (
              <>
                <Check className="h-4 w-4" aria-hidden />
                Added
              </>
            ) : (
              <>
                <Plus className="h-4 w-4" aria-hidden />
                Add to Cart
              </>
            )}
          </Button>
        </div>
      </div>
    </article>
  );
}
