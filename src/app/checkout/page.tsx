"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Truck, Store, CheckCircle } from "lucide-react";
import { useCart } from "@/lib/cart-context";
import { formatPrice } from "@/lib/format";
import { Button } from "@/components/ui/button";

export default function CheckoutPage() {
  const { items, subtotal, clearCart } = useCart();
  const router = useRouter();
  const [deliveryType, setDeliveryType] = useState<"delivery" | "collect">("delivery");
  const [placed, setPlaced] = useState(false);

  const deliveryFee = deliveryType === "collect" ? 0 : subtotal > 500 ? 0 : 40;
  const total = subtotal + deliveryFee;

  if (items.length === 0 && !placed) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6">
        <p className="text-forest/60">Your cart is empty.</p>
        <Link href="/products" className="mt-4 inline-block">
          <Button>Shop Now</Button>
        </Link>
      </div>
    );
  }

  if (placed) {
    return (
      <div className="mx-auto max-w-lg px-4 py-16 text-center sm:px-6">
        <CheckCircle className="mx-auto h-16 w-16 text-forest-light" aria-hidden />
        <h1 className="mt-4 font-display text-2xl font-semibold text-forest">
          Order Placed!
        </h1>
        <p className="mt-2 text-forest/60">
          Thank you for shopping at FreshLane. Your order confirmation has been sent.
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Link href="/orders">
            <Button variant="secondary">Track Order</Button>
          </Link>
          <Link href="/products">
            <Button variant="outline">Continue Shopping</Button>
          </Link>
        </div>
      </div>
    );
  }

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    clearCart();
    setPlaced(true);
    setTimeout(() => router.push("/orders"), 3000);
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
      <h1 className="font-display text-3xl font-semibold text-forest">Checkout</h1>

      <form onSubmit={handlePlaceOrder} className="mt-8 grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-6">
          <section className="rounded-2xl border border-sage/50 bg-white p-6">
            <h2 className="font-display text-lg font-semibold text-forest">
              Delivery Method
            </h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <label
                className={`flex cursor-pointer items-start gap-3 rounded-xl border-2 p-4 transition-colors ${
                  deliveryType === "delivery"
                    ? "border-forest bg-sage/20"
                    : "border-sage/50 hover:border-sage"
                }`}
              >
                <input
                  type="radio"
                  name="delivery"
                  value="delivery"
                  checked={deliveryType === "delivery"}
                  onChange={() => setDeliveryType("delivery")}
                  className="mt-1"
                />
                <div>
                  <span className="flex items-center gap-2 font-medium text-forest">
                    <Truck className="h-4 w-4" aria-hidden />
                    Home Delivery
                  </span>
                  <p className="mt-1 text-sm text-forest/60">Delivered within 2 hours</p>
                </div>
              </label>
              <label
                className={`flex cursor-pointer items-start gap-3 rounded-xl border-2 p-4 transition-colors ${
                  deliveryType === "collect"
                    ? "border-forest bg-sage/20"
                    : "border-sage/50 hover:border-sage"
                }`}
              >
                <input
                  type="radio"
                  name="delivery"
                  value="collect"
                  checked={deliveryType === "collect"}
                  onChange={() => setDeliveryType("collect")}
                  className="mt-1"
                />
                <div>
                  <span className="flex items-center gap-2 font-medium text-forest">
                    <Store className="h-4 w-4" aria-hidden />
                    Click & Collect
                  </span>
                  <p className="mt-1 text-sm text-forest/60">Ready in 30 minutes</p>
                </div>
              </label>
            </div>
          </section>

          {deliveryType === "delivery" && (
            <section className="rounded-2xl border border-sage/50 bg-white p-6">
              <h2 className="font-display text-lg font-semibold text-forest">
                Delivery Address
              </h2>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <input
                  required
                  placeholder="Full name"
                  className="rounded-lg border border-sage/50 px-3 py-2 text-forest focus:border-forest focus:outline-none focus:ring-2 focus:ring-forest/20 sm:col-span-2"
                />
                <input
                  required
                  placeholder="Phone number"
                  type="tel"
                  className="rounded-lg border border-sage/50 px-3 py-2 text-forest focus:border-forest focus:outline-none focus:ring-2 focus:ring-forest/20"
                />
                <input
                  required
                  placeholder="Pincode"
                  className="rounded-lg border border-sage/50 px-3 py-2 text-forest focus:border-forest focus:outline-none focus:ring-2 focus:ring-forest/20"
                />
                <textarea
                  required
                  placeholder="Full address"
                  rows={3}
                  className="rounded-lg border border-sage/50 px-3 py-2 text-forest focus:border-forest focus:outline-none focus:ring-2 focus:ring-forest/20 sm:col-span-2"
                />
              </div>
            </section>
          )}

          <section className="rounded-2xl border border-sage/50 bg-white p-6">
            <h2 className="font-display text-lg font-semibold text-forest">
              Coupon Code
            </h2>
            <div className="mt-3 flex gap-2">
              <input
                placeholder="Enter code (e.g. FRESH15)"
                className="flex-1 rounded-lg border border-sage/50 px-3 py-2 text-forest focus:border-forest focus:outline-none focus:ring-2 focus:ring-forest/20"
              />
              <Button type="button" variant="outline">
                Apply
              </Button>
            </div>
          </section>
        </div>

        <div className="h-fit rounded-2xl border border-sage/50 bg-white p-6 shadow-sm">
          <h2 className="font-display text-lg font-semibold text-forest">Summary</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {items.map(({ product, quantity }) => (
              <li key={product.id} className="flex justify-between text-forest/80">
                <span className="truncate pr-2">
                  {product.name} × {quantity}
                </span>
                <span className="shrink-0 font-medium">
                  {formatPrice((product.offerPrice ?? product.price) * quantity)}
                </span>
              </li>
            ))}
          </ul>
          <dl className="mt-4 space-y-2 border-t border-sage/50 pt-4 text-sm">
            <div className="flex justify-between">
              <dt className="text-forest/60">Subtotal</dt>
              <dd>{formatPrice(subtotal)}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-forest/60">
                {deliveryType === "collect" ? "Pickup" : "Delivery"}
              </dt>
              <dd>{deliveryFee === 0 ? "Free" : formatPrice(deliveryFee)}</dd>
            </div>
            <div className="flex justify-between text-base font-semibold">
              <dt>Total</dt>
              <dd>{formatPrice(total)}</dd>
            </div>
          </dl>
          <Button type="submit" size="lg" className="mt-6 w-full">
            Place Order
          </Button>
          <p className="mt-3 text-center text-xs text-forest/50">
            By placing this order, you agree to our{" "}
            <Link href="/terms" className="text-terracotta hover:underline">
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link href="/privacy" className="text-terracotta hover:underline">
              Privacy Policy
            </Link>
            .
          </p>
          <p className="mt-1 text-center text-xs text-forest/50">
            Payment integration coming in Phase 2
          </p>
        </div>
      </form>
    </div>
  );
}
