import Link from "next/link";
import { products } from "@/lib/catalog";
import { ProductCard } from "@/components/ProductCard";
import { store } from "@/lib/config";
import { agents, kpis } from "@/lib/agents";

export default function HomePage() {
  return (
    <div>
      <section className="mx-auto max-w-6xl px-4 pb-16 pt-14 sm:pt-20">
        <p className="text-sm font-medium uppercase tracking-[0.18em] text-stone-500">Autonomous commerce</p>
        <h1 className="mt-4 max-w-3xl text-4xl leading-tight sm:text-6xl" style={{ fontFamily: "var(--font-serif)" }}>
          A store anyone can understand.
          <span className="block text-stone-500">Agents run the rest.</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-700">
          {store.name} is a simple shop with clear prices and a fair paywall.
          Specialized AI agents handle sales, support, pricing, and operations.
          You own it. You are not the operator.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/shop" className="btn btn-primary">Browse the shop</Link>
          <Link href="/agents" className="btn btn-ghost">See the agents</Link>
        </div>
      </section>

      <section className="border-y border-stone-200 bg-white">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 py-8 sm:grid-cols-4">
          {kpis.map((kpi) => (
            <div key={kpi.label}>
              <p className="text-2xl font-semibold">{kpi.value}</p>
              <p className="text-sm text-stone-500">{kpi.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl" style={{ fontFamily: "var(--font-serif)" }}>Reasonable prices. No tricks.</h2>
            <p className="mt-2 max-w-xl text-stone-600">One-time kits when you want to own it. A monthly pass when you want the library kept current.</p>
          </div>
          <Link href="/pricing" className="hidden text-sm font-medium sm:inline">Full pricing →</Link>
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl" style={{ fontFamily: "var(--font-serif)" }}>How shopping works</h2>
            <ol className="mt-6 space-y-5">
              {[
                ["Pick a kit or the monthly pass", "Every product is written in plain language."],
                ["Pay through Stripe", "If Stripe keys are missing, demo checkout still walks you through."],
                ["Unlock the library", "Your receipt opens the member pages."],
                ["Agents keep the lights on", "Support, refunds, pricing, and uptime run without you."],
              ].map(([title, body], i) => (
                <li key={title} className="flex gap-4">
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-stone-100 text-sm font-semibold">{i + 1}</span>
                  <div>
                    <p className="font-semibold">{title}</p>
                    <p className="text-sm text-stone-600">{body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          <div className="card p-6">
            <p className="text-sm uppercase tracking-wide text-stone-500">Live agents</p>
            <ul className="mt-4 divide-y divide-stone-100">
              {agents.slice(0, 6).map((agent) => (
                <li key={agent.id} className="flex items-start justify-between gap-3 py-3">
                  <div>
                    <p className="font-medium">{agent.name}</p>
                    <p className="text-sm text-stone-500">{agent.lastAction}</p>
                  </div>
                  <span className="rounded-full bg-emerald-50 px-2 py-1 text-xs capitalize text-emerald-800">{agent.status}</span>
                </li>
              ))}
            </ul>
            <Link href="/agents" className="mt-4 inline-block text-sm font-medium">Open the agent board →</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
