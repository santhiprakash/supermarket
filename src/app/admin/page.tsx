import type { Metadata } from "next";
import { products } from "@/data/products";
import { formatPrice, getEffectivePrice } from "@/lib/format";
import { Package, Boxes, BarChart3, Tag } from "lucide-react";

export const metadata: Metadata = {
  title: "Admin Dashboard",
};

const stats = [
  { label: "Today's Orders", value: "24", icon: Package },
  { label: "Products", value: String(products.length), icon: Boxes },
  { label: "Low Stock", value: "3", icon: BarChart3 },
  { label: "Active Offers", value: "4", icon: Tag },
];

export default function AdminPage() {
  const lowStock = products.filter((p) => !p.inStock);

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
      <h1 className="font-display text-3xl font-semibold text-forest">Admin Dashboard</h1>
      <p className="mt-1 text-forest/60">Store operations overview (MVP shell)</p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-2xl border border-sage/50 bg-white p-5 shadow-sm"
          >
            <div className="flex items-center justify-between">
              <p className="text-sm text-forest/60">{stat.label}</p>
              <stat.icon className="h-5 w-5 text-sage" aria-hidden />
            </div>
            <p className="mt-2 text-3xl font-semibold text-forest">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-2">
        <section className="rounded-2xl border border-sage/50 bg-white p-6">
          <h2 className="font-display text-lg font-semibold text-forest">
            Product Inventory
          </h2>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-sage/50 text-left text-forest/60">
                  <th className="pb-2 font-medium">Product</th>
                  <th className="pb-2 font-medium">Price</th>
                  <th className="pb-2 font-medium">Status</th>
                </tr>
              </thead>
              <tbody>
                {products.slice(0, 8).map((p) => (
                  <tr key={p.id} className="border-b border-sage/30">
                    <td className="py-2.5 text-forest">{p.name}</td>
                    <td className="py-2.5">{formatPrice(getEffectivePrice(p))}</td>
                    <td className="py-2.5">
                      <span
                        className={`rounded-full px-2 py-0.5 text-xs font-medium ${
                          p.inStock
                            ? "bg-forest/10 text-forest"
                            : "bg-terracotta/10 text-terracotta"
                        }`}
                      >
                        {p.inStock ? "In Stock" : "Out"}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-2xl border border-sage/50 bg-white p-6">
          <h2 className="font-display text-lg font-semibold text-forest">
            Alerts
          </h2>
          <ul className="mt-4 space-y-3">
            {lowStock.map((p) => (
              <li
                key={p.id}
                className="flex items-center justify-between rounded-lg bg-terracotta/5 px-3 py-2 text-sm"
              >
                <span className="text-forest">{p.name}</span>
                <span className="font-medium text-terracotta">Restock needed</span>
              </li>
            ))}
            <li className="rounded-lg bg-sage/20 px-3 py-2 text-sm text-forest">
              24 orders pending processing today
            </li>
            <li className="rounded-lg bg-sage/20 px-3 py-2 text-sm text-forest">
              Weekend Fresh Deal (FRESH15) active
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
