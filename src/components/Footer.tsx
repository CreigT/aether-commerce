import Link from "next/link";
import { store } from "@/lib/config";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-stone-200 bg-white">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 py-10 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="font-semibold">{store.name}</p>
          <p className="mt-1 max-w-sm text-sm text-stone-600">{store.tagline}</p>
          <p className="mt-3 text-sm text-stone-500">Questions? {store.supportEmail}</p>
        </div>
        <div className="flex gap-10 text-sm">
          <div className="flex flex-col gap-2">
            <Link href="/shop">Shop</Link>
            <Link href="/pricing">Pricing</Link>
            <Link href="/agents">Agents</Link>
          </div>
          <div className="flex flex-col gap-2">
            <Link href="/library">Library</Link>
            <Link href="/legal/terms">Terms</Link>
            <Link href="/legal/privacy">Privacy</Link>
          </div>
        </div>
      </div>
      <div className="border-t border-stone-200 py-4 text-center text-xs text-stone-500">
        Human owner is legal owner and emergency override only. Agents operate the store.
      </div>
    </footer>
  );
}
