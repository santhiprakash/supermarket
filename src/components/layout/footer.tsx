import Link from "next/link";
import { MapPin, Phone, Clock } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-sage/40 bg-forest text-cream">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-4">
        <div>
          <h2 className="font-display text-lg font-semibold">FreshLane</h2>
          <p className="mt-2 text-sm text-sage leading-relaxed">
            Your neighborhood supermarket — fresh produce, daily essentials, and
            warm service since 1998.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-sage">
            Quick Links
          </h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link href="/products" className="hover:text-sage transition-colors">
                Shop All
              </Link>
            </li>
            <li>
              <Link href="/offers" className="hover:text-sage transition-colors">
                Current Offers
              </Link>
            </li>
            <li>
              <Link href="/orders" className="hover:text-sage transition-colors">
                Track Order
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-sage transition-colors">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-sage transition-colors">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-sage">
            Legal
          </h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link href="/privacy" className="hover:text-sage transition-colors">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-sage transition-colors">
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-sage">
            Visit Us
          </h3>
          <ul className="mt-3 space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-sage" aria-hidden />
              <span>42 Market Street, Koramangala, Bengaluru 560034</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 shrink-0 text-sage" aria-hidden />
              <a href="tel:+918012345678" className="hover:text-sage transition-colors">
                +91 80 1234 5678
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Clock className="h-4 w-4 shrink-0 text-sage" aria-hidden />
              <span>Mon–Sun: 7:00 AM – 10:00 PM</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-forest-light px-4 py-4 sm:px-6">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 text-xs text-sage sm:flex-row">
          <p>© {new Date().getFullYear()} FreshLane Supermarket. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-cream transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-cream transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
