import { products } from "@/lib/catalog";
import { ProductCard } from "@/components/ProductCard";

export const metadata = { title: "Shop" };

export default function ShopPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-14">
      <h1 className="text-4xl" style={{ fontFamily: "var(--font-serif)" }}>Shop</h1>
      <p className="mt-3 max-w-2xl text-stone-600">Four offers. That is the whole catalog. Buy once, or subscribe if you want new templates each month.</p>
      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {products.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>
    </div>
  );
}
