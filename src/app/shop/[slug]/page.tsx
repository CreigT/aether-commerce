import { notFound } from "next/navigation";
import { formatPrice, getProduct, products } from "@/lib/catalog";
import { BuyButton } from "@/components/BuyButton";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProduct(slug);
  return { title: product?.name || "Product" };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  return (
    <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 lg:grid-cols-2">
      <div>
        <p className="text-sm uppercase tracking-wide text-stone-500">Product</p>
        <h1 className="mt-2 text-4xl" style={{ fontFamily: "var(--font-serif)" }}>{product.name}</h1>
        <p className="mt-4 text-lg leading-8 text-stone-700">{product.description}</p>
        <ul className="mt-8 space-y-3">
          {product.includes.map((item) => (
            <li key={item} className="flex gap-2 text-stone-800">
              <span aria-hidden="true">✓</span>
              {item}
            </li>
          ))}
        </ul>
      </div>
      <aside className="card h-fit p-6">
        <p className="text-4xl font-semibold">{formatPrice(product)}</p>
        <p className="mt-2 text-sm text-stone-600">
          {product.billing === "subscription" ? "Billed monthly. Cancel any time." : "One payment. Yours to keep."}
        </p>
        <div className="mt-6">
          <BuyButton slug={product.slug} label={`Buy ${product.name}`} />
        </div>
        <p className="mt-4 text-xs text-stone-500">14-day refund on one-time kits if the files are unused. Subscriptions stop at period end.</p>
      </aside>
    </div>
  );
}
