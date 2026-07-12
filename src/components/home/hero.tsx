import Link from "next/link";
import { ArrowRight, Truck, Store, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-forest text-cream">
      {/* Organic curve decoration */}
      <div
        className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-sage/20 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-10 -left-10 h-60 w-60 rounded-full bg-terracotta/20 blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-8 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:py-24">
        <div>
          <p className="text-sm font-medium uppercase tracking-widest text-sage">
            Neighborhood Fresh Since 1998
          </p>
          <h1 className="mt-3 font-display text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
            Groceries from your lane, delivered fresh.
          </h1>
          <p className="mt-4 max-w-lg text-lg text-sage leading-relaxed">
            Shop local produce, pantry staples, and daily essentials. Home delivery
            or click & collect — your choice.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/products">
              <Button size="lg">
                Shop Now
                <ArrowRight className="h-5 w-5" aria-hidden />
              </Button>
            </Link>
            <Link href="/offers">
              <Button variant="outline" size="lg" className="border-cream text-cream hover:bg-cream hover:text-forest">
                View Offers
              </Button>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:grid-cols-1 lg:gap-3">
          <FeatureCard
            icon={<Truck className="h-5 w-5" />}
            title="Home Delivery"
            description="Same-day delivery within 5 km"
          />
          <FeatureCard
            icon={<Store className="h-5 w-5" />}
            title="Click & Collect"
            description="Order online, pick up in 30 min"
          />
          <FeatureCard
            icon={<ShieldCheck className="h-5 w-5" />}
            title="Quality Promise"
            description="Fresh or your money back"
          />
        </div>
      </div>

      {/* Bottom wave */}
      <div className="h-8 bg-cream" style={{ clipPath: "ellipse(55% 100% at 50% 100%)" }} aria-hidden />
    </section>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="flex items-start gap-3 rounded-2xl border border-sage/30 bg-forest-light/50 p-4 backdrop-blur-sm">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sage/30 text-cream">
        {icon}
      </span>
      <div>
        <h3 className="font-semibold">{title}</h3>
        <p className="text-sm text-sage">{description}</p>
      </div>
    </div>
  );
}
