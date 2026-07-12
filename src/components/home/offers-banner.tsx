import Link from "next/link";
import { offers } from "@/data/offers";
import { Tag } from "lucide-react";

export function OffersBanner() {
  const topOffers = offers.slice(0, 2);

  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
      <h2 className="font-display text-2xl font-semibold text-forest sm:text-3xl">
        Current Offers
      </h2>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {topOffers.map((offer) => (
          <div
            key={offer.id}
            className="relative overflow-hidden rounded-2xl border border-terracotta/30 bg-gradient-to-br from-terracotta/10 to-cream p-6"
          >
            <Tag className="absolute right-4 top-4 h-8 w-8 text-terracotta/30" aria-hidden />
            <p className="text-xs font-semibold uppercase tracking-wider text-terracotta">
              Code: {offer.code}
            </p>
            <h3 className="mt-1 font-display text-xl font-semibold text-forest">
              {offer.title}
            </h3>
            <p className="mt-2 text-sm text-forest/70">{offer.description}</p>
          </div>
        ))}
      </div>
      <Link
        href="/offers"
        className="mt-4 inline-block text-sm font-medium text-terracotta hover:underline"
      >
        View all offers →
      </Link>
    </section>
  );
}
