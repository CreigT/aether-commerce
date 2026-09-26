import Link from "next/link";
import { ClaimAccess } from "@/components/ClaimAccess";

export const metadata = { title: "You are in" };

export default async function SuccessPage({
  searchParams,
}: {
  searchParams: Promise<{ demo?: string; session_id?: string }>;
}) {
  const query = await searchParams;
  return (
    <div className="mx-auto max-w-xl px-4 py-20 text-center">
      <ClaimAccess sessionId={query.session_id} />
      <h1 className="text-4xl" style={{ fontFamily: "var(--font-serif)" }}>Payment received</h1>
      <p className="mt-4 text-stone-600">
        {query.demo
          ? "Demo mode unlocked the library so you can preview the member experience."
          : "Your receipt is on the way. The library is open."}
      </p>
      <Link href="/library" className="btn btn-primary mt-8">Open the library</Link>
    </div>
  );
}
