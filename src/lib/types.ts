export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  icon: string;
  productCount: number;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  unit: string;
  categoryId: string;
  image: string;
  inStock: boolean;
  featured?: boolean;
  offerPrice?: number;
}

export interface Offer {
  id: string;
  title: string;
  description: string;
  code: string;
  discountPercent: number;
  validUntil: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Order {
  id: string;
  date: string;
  status: "pending" | "confirmed" | "ready" | "delivered";
  total: number;
  items: CartItem[];
  deliveryType: "delivery" | "collect";
}
