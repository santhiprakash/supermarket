import type { Metadata } from "next";
import { offers } from "@/data/offers";
import { Tag, Copy } from "lucide-react";

export const metadata: Metadata = {
  title: "Offers & Coupons",
};

export default function OffersPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
      <h1 className="font-display text-3xl font-semibold text-forest">
        Offers & Coupons
      </h1>
      <p className="mt-1 text-forest/60">
        Save more on your weekly shop — apply codes at checkout
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {offers.map((offer) => (
          <article
            key={offer.id}
            className="relative overflow-hidden rounded-2xl border border-sage/50 bg-white p-6 shadow-sm"
          >
            <Tag className="absolute right-4 top-4 h-6 w-6 text-sage" aria-hidden />
            <h2 className="font-display text-xl font-semibold text-forest">
              {offer.title}
            </h2>
            <p className="mt-2 text-sm text-forest/70">{offer.description}</p>
            <div className="mt-4 flex items-center justify-between">
              <code className="flex items-center gap-2 rounded-lg bg-cream-dark px-3 py-1.5 text-sm font-mono font-semibold text-forest">
                <Copy className="h-3.5 w-3.5 text-forest/50" aria-hidden />
                {offer.code}
              </code>
              {offer.discountPercent > 0 && (
                <span className="rounded-full bg-terracotta/10 px-3 py-1 text-sm font-semibold text-terracotta">
                  {offer.discountPercent}% off
                </span>
              )}
            </div>
            <p className="mt-3 text-xs text-forest/50">
              Valid until {new Date(offer.validUntil).toLocaleDateString("en-IN")}
            </p>
          </article>
        ))}
      </div>
    </div>
  );
}
