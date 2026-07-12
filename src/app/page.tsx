import { Hero } from "@/components/home/hero";
import { CategoryStrip } from "@/components/home/category-strip";
import { FeaturedProducts } from "@/components/home/featured-products";
import { OffersBanner } from "@/components/home/offers-banner";

export default function HomePage() {
  return (
    <>
      <Hero />
      <CategoryStrip />
      <FeaturedProducts />
      <OffersBanner />
    </>
  );
}
