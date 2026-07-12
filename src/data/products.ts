import type { Product } from "@/lib/types";

export const products: Product[] = [
  {
    id: "p1",
    name: "Organic Tomatoes",
    slug: "organic-tomatoes",
    description: "Vine-ripened organic tomatoes, perfect for salads and curries.",
    price: 45,
    unit: "500g",
    categoryId: "cat-fresh",
    image: "https://images.unsplash.com/photo-1546094096-0df4bcaaa337?w=400&h=400&fit=crop",
    inStock: true,
    featured: true,
  },
  {
    id: "p2",
    name: "Fresh Spinach Bunch",
    slug: "fresh-spinach",
    description: "Tender green spinach, washed and ready to cook.",
    price: 30,
    unit: "bunch",
    categoryId: "cat-fresh",
    image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=400&h=400&fit=crop",
    inStock: true,
    featured: true,
    offerPrice: 25,
  },
  {
    id: "p3",
    name: "Bananas",
    slug: "bananas",
    description: "Sweet yellow bananas, ideal for smoothies and snacking.",
    price: 55,
    unit: "1 dozen",
    categoryId: "cat-fresh",
    image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=400&h=400&fit=crop",
    inStock: true,
    featured: true,
  },
  {
    id: "p4",
    name: "Full Cream Milk",
    slug: "full-cream-milk",
    description: "Farm-fresh pasteurized milk, 1 litre tetra pack.",
    price: 62,
    unit: "1L",
    categoryId: "cat-dairy",
    image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=400&h=400&fit=crop",
    inStock: true,
    featured: true,
  },
  {
    id: "p5",
    name: "Farm Eggs",
    slug: "farm-eggs",
    description: "Free-range brown eggs, pack of 6.",
    price: 72,
    unit: "6 pcs",
    categoryId: "cat-dairy",
    image: "https://images.unsplash.com/photo-1582722874075-5c3c0e0c0b0e?w=400&h=400&fit=crop",
    inStock: true,
  },
  {
    id: "p6",
    name: "Sourdough Loaf",
    slug: "sourdough-loaf",
    description: "Crusty artisan sourdough baked fresh every morning.",
    price: 89,
    unit: "400g",
    categoryId: "cat-bakery",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&h=400&fit=crop",
    inStock: true,
    featured: true,
    offerPrice: 75,
  },
  {
    id: "p7",
    name: "Whole Wheat Bread",
    slug: "whole-wheat-bread",
    description: "Soft whole wheat sandwich bread, no preservatives.",
    price: 48,
    unit: "400g",
    categoryId: "cat-bakery",
    image: "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=400&h=400&fit=crop",
    inStock: true,
  },
  {
    id: "p8",
    name: "Basmati Rice",
    slug: "basmati-rice",
    description: "Premium aged basmati rice, long grain and aromatic.",
    price: 185,
    unit: "1kg",
    categoryId: "cat-pantry",
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&h=400&fit=crop",
    inStock: true,
    featured: true,
  },
  {
    id: "p9",
    name: "Toor Dal",
    slug: "toor-dal",
    description: "Unpolished toor dal, rich in protein.",
    price: 120,
    unit: "1kg",
    categoryId: "cat-pantry",
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&h=400&fit=crop",
    inStock: true,
  },
  {
    id: "p10",
    name: "Sunflower Oil",
    slug: "sunflower-oil",
    description: "Refined sunflower cooking oil, 1 litre.",
    price: 165,
    unit: "1L",
    categoryId: "cat-pantry",
    image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=400&h=400&fit=crop",
    inStock: true,
  },
  {
    id: "p11",
    name: "Potato Chips",
    slug: "potato-chips",
    description: "Classic salted potato chips, family pack.",
    price: 40,
    unit: "150g",
    categoryId: "cat-snacks",
    image: "https://images.unsplash.com/photo-1566478989037-eec170784d0b?w=400&h=400&fit=crop",
    inStock: true,
    offerPrice: 32,
  },
  {
    id: "p12",
    name: "Orange Juice",
    slug: "orange-juice",
    description: "100% pure orange juice, no added sugar.",
    price: 95,
    unit: "1L",
    categoryId: "cat-snacks",
    image: "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=400&h=400&fit=crop",
    inStock: true,
  },
  {
    id: "p13",
    name: "Dish Wash Liquid",
    slug: "dish-wash-liquid",
    description: "Lemon-scented dish wash, tough on grease.",
    price: 110,
    unit: "750ml",
    categoryId: "cat-household",
    image: "https://images.unsplash.com/photo-1583947215251-38f27d4693f7?w=400&h=400&fit=crop",
    inStock: true,
  },
  {
    id: "p14",
    name: "Floor Cleaner",
    slug: "floor-cleaner",
    description: "Pine-scented floor cleaner for all surfaces.",
    price: 145,
    unit: "1L",
    categoryId: "cat-household",
    image: "https://images.unsplash.com/photo-1563453392212-326f5e8541b1?w=400&h=400&fit=crop",
    inStock: false,
  },
  {
    id: "p15",
    name: "Mixed Fruit Bowl",
    slug: "mixed-fruit-bowl",
    description: "Seasonal mixed fruits — mango, apple, grapes, and papaya.",
    price: 199,
    unit: "500g",
    categoryId: "cat-fresh",
    image: "https://images.unsplash.com/photo-1610348725531-843dff563e2c?w=400&h=400&fit=crop",
    inStock: true,
    featured: true,
  },
];

export function getProductBySlug(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function getProductById(id: string) {
  return products.find((p) => p.id === id);
}

export function getProductsByCategory(categoryId: string) {
  return products.filter((p) => p.categoryId === categoryId);
}

export function getFeaturedProducts() {
  return products.filter((p) => p.featured);
}

export function searchProducts(query: string) {
  const q = query.toLowerCase().trim();
  if (!q) return products;
  return products.filter(
    (p) =>
      p.name.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q)
  );
}
