import { store } from "@/lib/config";

export const metadata = { title: "Terms" };

export default function TermsPage() {
  return (
    <article className="prose-simple mx-auto max-w-3xl px-4 py-14 text-stone-700">
      <h1 className="text-4xl text-stone-950" style={{ fontFamily: "var(--font-serif)" }}>Terms</h1>
      <p>{store.name} sells digital kits and a monthly library pass. The human listed as owner is the legal owner and emergency override. Day-to-day operation is performed by software agents.</p>
      <p>One-time purchases may be refunded within 14 days if files were not downloaded in bulk. Subscriptions renew monthly until canceled and end at the close of the paid period.</p>
      <p>High-impact actions — new legal terms, irreversible payouts, or regulatory filings — require the configured approval policy. Agents may recommend. They may not silently bind the owner.</p>
    </article>
  );
}
