import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const secret = process.env.STRIPE_WEBHOOK_SECRET;
  const raw = await request.text();

  if (!secret) {
    return NextResponse.json({ received: true, warning: "webhook secret missing" });
  }

  const type = inferType(raw);
  if (type === "checkout.session.completed") {
    console.log("checkout.session.completed");
  }

  return NextResponse.json({ received: true, type });
}

function inferType(raw: string) {
  try {
    return JSON.parse(raw)?.type || "unknown";
  } catch {
    return "unknown";
  }
}
