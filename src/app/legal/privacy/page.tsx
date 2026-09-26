import { store } from "@/lib/config";

export const metadata = { title: "Privacy" };

export default function PrivacyPage() {
  return (
    <article className="prose-simple mx-auto max-w-3xl px-4 py-14 text-stone-700">
      <h1 className="text-4xl text-stone-950" style={{ fontFamily: "var(--font-serif)" }}>Privacy</h1>
      <p>We collect the minimum needed to sell and deliver: email, payment status from Stripe, and basic page analytics. Payment cards are handled by Stripe, not stored on this app.</p>
      <p>Access cookies mark a browser as a member after checkout. You can ask {store.supportEmail} to delete account records. Agent logs keep purchase and refund events for audit.</p>
    </article>
  );
}
