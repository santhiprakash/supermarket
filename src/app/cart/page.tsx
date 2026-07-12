"use client";

import Image from "next/image";
import Link from "next/link";
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import { useCart } from "@/lib/cart-context";
import { formatPrice, getEffectivePrice } from "@/lib/format";
import { Button } from "@/components/ui/button";

export default function CartPage() {
  const { items, subtotal, updateQuantity, removeItem } = useCart();
  const deliveryFee = subtotal > 500 ? 0 : 40;
  const total = subtotal + deliveryFee;

  if (items.length === 0) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6">
        <ShoppingBag className="mx-auto h-16 w-16 text-sage" aria-hidden />
        <h1 className="mt-4 font-display text-2xl font-semibold text-forest">
          Your cart is empty
        </h1>
        <p className="mt-2 text-forest/60">Add some groceries to get started</p>
        <Link href="/products" className="mt-6 inline-block">
          <Button size="lg">Browse Products</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
      <h1 className="font-display text-3xl font-semibold text-forest">Your Cart</h1>
      <p className="mt-1 text-forest/60">{items.length} item(s)</p>

      <div className="mt-8 grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-4">
          {items.map(({ product, quantity }) => (
            <div
              key={product.id}
              className="flex gap-4 rounded-2xl border border-sage/50 bg-white p-4"
            >
              <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-xl bg-cream-dark">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                  sizes="80px"
                />
              </div>
              <div className="flex flex-1 flex-col sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <Link
                    href={`/products/${product.slug}`}
                    className="font-medium text-forest hover:underline"
                  >
                    {product.name}
                  </Link>
                  <p className="text-sm text-forest/60">{product.unit}</p>
                  <p className="mt-1 font-semibold text-forest">
                    {formatPrice(getEffectivePrice(product))}
                  </p>
                </div>
                <div className="mt-3 flex items-center gap-3 sm:mt-0">
                  <div className="flex items-center gap-1 rounded-full border border-sage/50 px-1">
                    <button
                      type="button"
                      onClick={() => updateQuantity(product.id, quantity - 1)}
                      className="rounded-full p-1.5 hover:bg-sage/30"
                      aria-label="Decrease quantity"
                    >
                      <Minus className="h-4 w-4" />
                    </button>
                    <span className="w-8 text-center text-sm font-medium">{quantity}</span>
                    <button
                      type="button"
                      onClick={() => updateQuantity(product.id, quantity + 1)}
                      className="rounded-full p-1.5 hover:bg-sage/30"
                      aria-label="Increase quantity"
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>
                  <button
                    type="button"
                    onClick={() => removeItem(product.id)}
                    className="rounded-full p-2 text-terracotta hover:bg-terracotta/10"
                    aria-label={`Remove ${product.name}`}
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="h-fit rounded-2xl border border-sage/50 bg-white p-6 shadow-sm">
          <h2 className="font-display text-lg font-semibold text-forest">Order Summary</h2>
          <dl className="mt-4 space-y-2 text-sm">
            <div className="flex justify-between">
              <dt className="text-forest/60">Subtotal</dt>
              <dd className="font-medium">{formatPrice(subtotal)}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-forest/60">Delivery</dt>
              <dd className="font-medium">
                {deliveryFee === 0 ? (
                  <span className="text-forest-light">Free</span>
                ) : (
                  formatPrice(deliveryFee)
                )}
              </dd>
            </div>
            {subtotal < 500 && (
              <p className="text-xs text-forest/50">
                Free delivery on orders above ₹500
              </p>
            )}
            <div className="flex justify-between border-t border-sage/50 pt-2 text-base">
              <dt className="font-semibold">Total</dt>
              <dd className="font-semibold text-forest">{formatPrice(total)}</dd>
            </div>
          </dl>
          <Link href="/checkout" className="mt-6 block">
            <Button size="lg" className="w-full">
              Proceed to Checkout
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
