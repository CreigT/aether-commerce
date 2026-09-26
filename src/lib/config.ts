export const store = {
  name: process.env.NEXT_PUBLIC_STORE_NAME || "Aether",
  tagline:
    process.env.NEXT_PUBLIC_STORE_TAGLINE || "A store run by AI agents",
  url: process.env.NEXT_PUBLIC_STORE_URL || "http://localhost:3000",
  supportEmail:
    process.env.NEXT_PUBLIC_SUPPORT_EMAIL || "hello@example.com",
  ownerEmail: process.env.OWNER_EMAIL || "",
};

export function stripeConfigured() {
  return Boolean(process.env.STRIPE_SECRET_KEY);
}

export function stripePublishableKey() {
  return process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || "";
}
