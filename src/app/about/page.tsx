import type { Metadata } from "next";
import { MapPin, Clock, Heart } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
      <h1 className="font-display text-3xl font-semibold text-forest">About FreshLane</h1>
      <p className="mt-2 max-w-2xl text-lg text-forest/70 leading-relaxed">
        FreshLane started in 1998 as a small corner store on Market Street. Today we
        serve thousands of families in Koramangala — online and in-store — with the
        same promise: fresh food, fair prices, and neighbors who know your name.
      </p>

      <div className="mt-12 grid gap-8 md:grid-cols-3">
        <ValueCard
          icon={<Heart className="h-6 w-6" />}
          title="Community First"
          description="We source from local farms and suppliers whenever possible, keeping money in our neighborhood."
        />
        <ValueCard
          icon={<MapPin className="h-6 w-6" />}
          title="One Store, Many Channels"
          description="Shop in person, order online for delivery, or click & collect — same quality every way."
        />
        <ValueCard
          icon={<Clock className="h-6 w-6" />}
          title="Open Every Day"
          description="7 AM to 10 PM, seven days a week. Because groceries don't wait for weekends."
        />
      </div>

      <section className="mt-12 rounded-2xl bg-forest p-8 text-cream">
        <h2 className="font-display text-2xl font-semibold">Our Story</h2>
        <p className="mt-4 max-w-3xl text-sage leading-relaxed">
          What began as a single aisle of produce and staples has grown into a
          full-service supermarket — but we never lost the market-stall warmth.
          Every tomato is checked by hand. Every delivery is packed by someone
          who lives on your street. That is the FreshLane difference.
        </p>
      </section>
    </div>
  );
}

function ValueCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-2xl border border-sage/50 bg-white p-6">
      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-sage/30 text-forest">
        {icon}
      </span>
      <h3 className="mt-4 font-display text-lg font-semibold text-forest">{title}</h3>
      <p className="mt-2 text-sm text-forest/70 leading-relaxed">{description}</p>
    </div>
  );
}
