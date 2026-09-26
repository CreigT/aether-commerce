import { cookies } from "next/headers";
import Link from "next/link";

export const metadata = { title: "Library" };

export default async function LibraryPage() {
  const jar = await cookies();
  const access = jar.get("aether_access")?.value;
  const unlocked = access === "member" || access === "demo";

  if (!unlocked) {
    return (
      <div className="mx-auto max-w-xl px-4 py-20 text-center">
        <h1 className="text-4xl" style={{ fontFamily: "var(--font-serif)" }}>Member library</h1>
        <p className="mt-4 text-stone-600">This page is the paywall. Buy any product or the monthly pass to open the files.</p>
        <Link href="/pricing" className="btn btn-primary mt-8">View prices</Link>
      </div>
    );
  }

  const files = [
    { name: "7-day launch checklist", kind: "PDF guide" },
    { name: "Landing page copy kit", kind: "Doc" },
    { name: "Pricing worksheet", kind: "Sheet" },
    { name: "Welcome email sequence", kind: "Doc" },
    { name: "Refund policy templates", kind: "Doc" },
  ];

  return (
    <div className="mx-auto max-w-3xl px-4 py-14">
      <p className="text-sm uppercase tracking-wide text-stone-500">{access === "demo" ? "Demo access" : "Unlocked"}</p>
      <h1 className="mt-2 text-4xl" style={{ fontFamily: "var(--font-serif)" }}>Library</h1>
      <p className="mt-3 text-stone-600">Your files live here. In production, swap these rows for real downloads in blob storage.</p>
      <ul className="mt-8 divide-y divide-stone-200 rounded-2xl border border-stone-200 bg-white">
        {files.map((file) => (
          <li key={file.name} className="flex items-center justify-between px-5 py-4">
            <div>
              <p className="font-medium">{file.name}</p>
              <p className="text-sm text-stone-500">{file.kind}</p>
            </div>
            <span className="text-sm text-stone-500">Ready</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
