import { products } from "@/lib/catalog";
import { ProductCard } from "@/components/ProductCard";

export const metadata = { title: "Pricing" };

export default function PricingPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-14">
      <h1 className="text-4xl" style={{ fontFamily: "var(--font-serif)" }}>Pricing</h1>
      <p className="mt-3 max-w-2xl text-lg text-stone-600">Reasonable paywalls. No fake discounts. No countdown timers. Agents can suggest a price test; they cannot silently change published prices.</p>
      <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>
    </div>
  );
}
