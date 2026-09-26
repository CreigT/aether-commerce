import Link from "next/link";
import { formatPrice, type Product } from "@/lib/catalog";
import { BuyButton } from "./BuyButton";

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="card flex flex-col gap-4 p-6">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-lg font-semibold">{product.name}</h3>
          <p className="mt-1 text-sm text-stone-600">{product.blurb}</p>
        </div>
        {product.popular ? (
          <span className="rounded-full bg-orange-100 px-2 py-1 text-xs font-medium text-orange-800">Most chosen</span>
        ) : null}
      </div>
      <p className="text-3xl font-semibold tracking-tight">{formatPrice(product)}</p>
      <ul className="space-y-2 text-sm text-stone-700">
        {product.includes.slice(0, 4).map((item) => (
          <li key={item} className="flex gap-2">
            <span aria-hidden="true">✓</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <div className="mt-auto space-y-2 pt-2">
        <BuyButton slug={product.slug} label={`Get ${product.name}`} />
        <Link href={`/shop/${product.slug}`} className="block text-center text-sm text-stone-600 hover:text-stone-950">See details</Link>
      </div>
    </article>
  );
}
