import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json().catch(() => ({}));
  const sessionId = String(body.sessionId || "");
  const secret = process.env.STRIPE_SECRET_KEY;

  if (!sessionId || !secret) {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  const stripeRes = await fetch(
    `https://api.stripe.com/v1/checkout/sessions/${sessionId}`,
    { headers: { Authorization: `Bearer ${secret}` } }
  );
  const session = await stripeRes.json();
  if (session.payment_status !== "paid" && session.status !== "complete") {
    return NextResponse.json({ ok: false }, { status: 402 });
  }

  const res = NextResponse.json({ ok: true });
  res.cookies.set("aether_access", "member", {
    httpOnly: true,
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 365,
  });
  return res;
}
