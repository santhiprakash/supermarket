import type { Metadata } from "next";
import Link from "next/link";
import { Package, Clock } from "lucide-react";
import { formatPrice } from "@/lib/format";

export const metadata: Metadata = {
  title: "My Orders",
};

const sampleOrders = [
  {
    id: "FL-2026-0042",
    date: "2026-07-10",
    status: "delivered" as const,
    total: 487,
    items: 5,
    deliveryType: "delivery" as const,
  },
  {
    id: "FL-2026-0038",
    date: "2026-07-05",
    status: "ready" as const,
    total: 312,
    items: 3,
    deliveryType: "collect" as const,
  },
];

const statusLabels = {
  pending: { label: "Pending", color: "bg-yellow-100 text-yellow-800" },
  confirmed: { label: "Confirmed", color: "bg-blue-100 text-blue-800" },
  ready: { label: "Ready for Pickup", color: "bg-sage/50 text-forest" },
  delivered: { label: "Delivered", color: "bg-forest/10 text-forest" },
};

export default function OrdersPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
      <h1 className="font-display text-3xl font-semibold text-forest">My Orders</h1>
      <p className="mt-1 text-forest/60">Track and review your order history</p>

      <div className="mt-8 space-y-4">
        {sampleOrders.map((order) => {
          const status = statusLabels[order.status];
          return (
            <article
              key={order.id}
              className="rounded-2xl border border-sage/50 bg-white p-6 shadow-sm"
            >
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div className="flex items-start gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-sage/30 text-forest">
                    <Package className="h-5 w-5" aria-hidden />
                  </span>
                  <div>
                    <h2 className="font-medium text-forest">{order.id}</h2>
                    <p className="flex items-center gap-1 text-sm text-forest/60">
                      <Clock className="h-3.5 w-3.5" aria-hidden />
                      {new Date(order.date).toLocaleDateString("en-IN", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </p>
                  </div>
                </div>
                <span
                  className={`rounded-full px-3 py-1 text-xs font-semibold ${status.color}`}
                >
                  {status.label}
                </span>
              </div>
              <div className="mt-4 flex flex-wrap items-center justify-between gap-2 border-t border-sage/50 pt-4 text-sm">
                <span className="text-forest/60">
                  {order.items} items ·{" "}
                  {order.deliveryType === "collect" ? "Click & Collect" : "Home Delivery"}
                </span>
                <span className="font-semibold text-forest">
                  {formatPrice(order.total)}
                </span>
              </div>
            </article>
          );
        })}
      </div>

      <p className="mt-6 text-center text-sm text-forest/50">
        Sample orders shown — real order history will sync after auth is connected.
      </p>
      <div className="mt-4 text-center">
        <Link href="/products" className="text-sm font-medium text-terracotta hover:underline">
          Continue shopping →
        </Link>
      </div>
    </div>
  );
}
