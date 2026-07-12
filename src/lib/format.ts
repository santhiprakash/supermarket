export function formatPrice(amount: number): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount);
}

export function getEffectivePrice(product: {
  price: number;
  offerPrice?: number;
}): number {
  return product.offerPrice ?? product.price;
}
