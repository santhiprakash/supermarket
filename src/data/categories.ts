import type { Category } from "@/lib/types";

export const categories: Category[] = [
  {
    id: "cat-fresh",
    name: "Fresh Produce",
    slug: "fresh-produce",
    description: "Farm-fresh fruits and vegetables picked daily.",
    icon: "🥬",
    productCount: 24,
  },
  {
    id: "cat-dairy",
    name: "Dairy & Eggs",
    slug: "dairy-eggs",
    description: "Milk, cheese, yogurt, and free-range eggs.",
    icon: "🥛",
    productCount: 18,
  },
  {
    id: "cat-bakery",
    name: "Bakery",
    slug: "bakery",
    description: "Artisan breads and baked goods from our in-store oven.",
    icon: "🍞",
    productCount: 12,
  },
  {
    id: "cat-pantry",
    name: "Pantry Staples",
    slug: "pantry-staples",
    description: "Rice, pulses, oils, and everyday essentials.",
    icon: "🫙",
    productCount: 36,
  },
  {
    id: "cat-snacks",
    name: "Snacks & Beverages",
    slug: "snacks-beverages",
    description: "Chips, biscuits, juices, and soft drinks.",
    icon: "🥤",
    productCount: 28,
  },
  {
    id: "cat-household",
    name: "Household",
    slug: "household",
    description: "Cleaning supplies and home essentials.",
    icon: "🧹",
    productCount: 15,
  },
];

export function getCategoryBySlug(slug: string) {
  return categories.find((c) => c.slug === slug);
}

export function getCategoryById(id: string) {
  return categories.find((c) => c.id === id);
}
