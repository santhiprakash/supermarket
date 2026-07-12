import type { Metadata } from "next";
import Link from "next/link";
import { User, Package, MapPin, LogIn } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "My Account",
};

export default function AccountPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
      <h1 className="font-display text-3xl font-semibold text-forest">My Account</h1>
      <p className="mt-1 text-forest/60">Manage your profile, orders, and addresses</p>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <section className="rounded-2xl border border-sage/50 bg-white p-6">
          <div className="flex items-center gap-3">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-sage/30 text-forest">
              <LogIn className="h-6 w-6" aria-hidden />
            </span>
            <div>
              <h2 className="font-display text-lg font-semibold text-forest">
                Sign In / Register
              </h2>
              <p className="text-sm text-forest/60">
                Auth will be connected in Phase 2 (Supabase)
              </p>
            </div>
          </div>
          <form className="mt-6 space-y-4">
            <input
              type="email"
              placeholder="Email address"
              className="w-full rounded-lg border border-sage/50 px-3 py-2 text-forest focus:border-forest focus:outline-none focus:ring-2 focus:ring-forest/20"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full rounded-lg border border-sage/50 px-3 py-2 text-forest focus:border-forest focus:outline-none focus:ring-2 focus:ring-forest/20"
            />
            <Button type="button" className="w-full">
              Sign In
            </Button>
            <p className="text-center text-sm text-forest/60">
              New here?{" "}
              <button type="button" className="font-medium text-terracotta hover:underline">
                Create account
              </button>
            </p>
          </form>
        </section>

        <div className="space-y-4">
          <AccountLink
            href="/orders"
            icon={<Package className="h-5 w-5" />}
            title="Order History"
            description="View and track your past orders"
          />
          <AccountLink
            href="/checkout"
            icon={<MapPin className="h-5 w-5" />}
            title="Saved Addresses"
            description="Manage delivery addresses"
          />
          <AccountLink
            href="/account"
            icon={<User className="h-5 w-5" />}
            title="Profile Settings"
            description="Update your name and preferences"
          />
        </div>
      </div>
    </div>
  );
}

function AccountLink({
  href,
  icon,
  title,
  description,
}: {
  href: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <Link
      href={href}
      className="flex items-center gap-4 rounded-2xl border border-sage/50 bg-white p-5 transition-all hover:border-forest hover:shadow-sm"
    >
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sage/30 text-forest">
        {icon}
      </span>
      <div>
        <h3 className="font-medium text-forest">{title}</h3>
        <p className="text-sm text-forest/60">{description}</p>
      </div>
    </Link>
  );
}
