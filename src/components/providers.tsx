import { CartProvider } from "@/lib/cart-context";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CartProvider>
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </CartProvider>
  );
}
