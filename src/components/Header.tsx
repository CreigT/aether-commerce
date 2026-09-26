import Link from "next/link";
import { store } from "@/lib/config";

const links = [
  { href: "/shop", label: "Shop" },
  { href: "/pricing", label: "Pricing" },
  { href: "/agents", label: "Agents" },
  { href: "/library", label: "Library" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-stone-200/80 bg-[color:var(--paper)]/90 backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2 font-semibold tracking-tight">
          <span className="grid h-8 w-8 place-items-center rounded-full bg-[color:var(--ink)] text-[color:var(--paper)] text-sm">Ae</span>
          <span>{store.name}</span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm text-stone-600 md:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-stone-950">{link.label}</Link>
          ))}
        </nav>
        <Link href="/pricing" className="btn btn-primary text-sm">See prices</Link>
      </div>
      <nav className="flex gap-4 overflow-x-auto border-t border-stone-200/70 px-4 py-2 text-sm text-stone-600 md:hidden">
        {links.map((link) => (
          <Link key={link.href} href={link.href}>{link.label}</Link>
        ))}
      </nav>
    </header>
  );
}
