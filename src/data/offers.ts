import type { Offer } from "@/lib/types";

export const offers: Offer[] = [
  {
    id: "o1",
    title: "Weekend Fresh Deal",
    description: "15% off all fresh produce every Saturday & Sunday.",
    code: "FRESH15",
    discountPercent: 15,
    validUntil: "2026-12-31",
  },
  {
    id: "o2",
    title: "First Order Welcome",
    description: "Get ₹100 off on your first online order above ₹500.",
    code: "WELCOME100",
    discountPercent: 0,
    validUntil: "2026-12-31",
  },
  {
    id: "o3",
    title: "Bakery Morning Special",
    description: "20% off all bakery items before 10 AM.",
    code: "BAKE20",
    discountPercent: 20,
    validUntil: "2026-09-30",
  },
  {
    id: "o4",
    title: "Click & Collect Bonus",
    description: "Free bag of chips when you pick up in-store.",
    code: "COLLECT",
    discountPercent: 0,
    validUntil: "2026-08-31",
  },
];
