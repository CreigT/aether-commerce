import { NextResponse } from "next/server";
import { getProduct, stripePriceId } from "@/lib/catalog";
import { store, stripeConfigured } from "@/lib/config";

export async function POST(request: Request) {
  const body = await request.json().catch(() => ({}));
  const slug = String(body.slug || "");
  const product = getProduct(slug);
  if (!product) {
    return NextResponse.json({ error: "Unknown product" }, { status: 404 });
  }

  const origin = request.headers.get("origin") || store.url.replace(/\/$/, "");

  if (!stripeConfigured()) {
    const url = new URL("/success", origin);
    url.searchParams.set("demo", "1");
    const res = NextResponse.json({ url: url.toString(), mode: "demo" });
    res.cookies.set("aether_access", "demo", {
      httpOnly: true,
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 30,
    });
    return res;
  }

  const secret = process.env.STRIPE_SECRET_KEY as string;
  const priceId = stripePriceId(product);
  const success = `${origin}/success?session_id={CHECKOUT_SESSION_ID}`;
  const cancel = `${origin}/shop/${product.slug}`;

  const params = new URLSearchParams();
  params.set("mode", product.billing === "subscription" ? "subscription" : "payment");
  params.set("success_url", success);
  params.set("cancel_url", cancel);
  params.set("allow_promotion_codes", "true");
  params.set("metadata[product]", product.slug);

  if (priceId) {
    params.set("line_items[0][price]", priceId);
    params.set("line_items[0][quantity]", "1");
  } else {
    params.set("line_items[0][quantity]", "1");
    params.set("line_items[0][price_data][currency]", "usd");
    params.set("line_items[0][price_data][unit_amount]", String(product.price * 100));
    params.set("line_items[0][price_data][product_data][name]", product.name);
    if (product.billing === "subscription") {
      params.set("line_items[0][price_data][recurring][interval]", "month");
    }
  }

  const stripeRes = await fetch("https://api.stripe.com/v1/checkout/sessions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${secret}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: params,
  });

  const session = await stripeRes.json();
  if (!stripeRes.ok || !session.url) {
    return NextResponse.json(
      { error: session.error?.message || "Stripe checkout failed" },
      { status: 500 }
    );
  }

  return NextResponse.json({ url: session.url, mode: "stripe" });
}
