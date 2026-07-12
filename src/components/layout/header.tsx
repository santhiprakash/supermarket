"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  Menu,
  X,
  ShoppingCart,
  Search,
  User,
  Leaf,
} from "lucide-react";
import { useCart } from "@/lib/cart-context";

const navLinks = [
  { href: "/products", label: "Shop" },
  { href: "/categories", label: "Categories" },
  { href: "/offers", label: "Offers" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();
  const { itemCount } = useCart();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-sage/40 bg-cream/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link
          href="/"
          className="flex items-center gap-2 text-forest transition-opacity hover:opacity-80"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-forest text-cream">
            <Leaf className="h-5 w-5" aria-hidden />
          </span>
          <span className="font-display text-xl font-semibold tracking-tight">
            FreshLane
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Main">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                pathname === link.href || pathname.startsWith(link.href + "/")
                  ? "bg-forest text-cream"
                  : "text-forest hover:bg-sage/40"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/products"
            className="hidden rounded-full p-2 text-forest transition-colors hover:bg-sage/40 sm:inline-flex"
            aria-label="Search products"
          >
            <Search className="h-5 w-5" />
          </Link>
          <Link
            href="/account"
            className="rounded-full p-2 text-forest transition-colors hover:bg-sage/40"
            aria-label="Account"
          >
            <User className="h-5 w-5" />
          </Link>
          <Link
            href="/cart"
            className="relative rounded-full p-2 text-forest transition-colors hover:bg-sage/40"
            aria-label={`Cart${itemCount > 0 ? `, ${itemCount} items` : ""}`}
          >
            <ShoppingCart className="h-5 w-5" />
            {itemCount > 0 && (
              <span className="absolute -right-0.5 -top-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-terracotta text-[10px] font-bold text-cream">
                {itemCount > 9 ? "9+" : itemCount}
              </span>
            )}
          </Link>
          <button
            type="button"
            className="rounded-full p-2 text-forest md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <nav
          className="border-t border-sage/40 bg-cream px-4 py-3 md:hidden"
          aria-label="Mobile"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block rounded-lg px-3 py-2.5 text-forest hover:bg-sage/40"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
