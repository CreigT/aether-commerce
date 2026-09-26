export type Billing = "one_time" | "subscription";

export type Product = {
  slug: string;
  name: string;
  price: number;
  interval?: "month";
  billing: Billing;
  blurb: string;
  description: string;
  includes: string[];
  popular?: boolean;
  stripePriceEnv?: string;
};

export const products: Product[] = [
  {
    slug: "starter",
    name: "Starter Kit",
    price: 27,
    billing: "one_time",
    blurb: "Templates and a simple playbook to launch this week.",
    description:
      "A clean starter pack for anyone who wants a working storefront without hiring a team. Includes landing copy, product sheets, and a 7-day launch checklist.",
    includes: [
      "Launch checklist",
      "Landing page copy kit",
      "3 product templates",
      "Email welcome sequence",
    ],
    stripePriceEnv: "STRIPE_PRICE_STARTER",
  },
  {
    slug: "growth",
    name: "Growth Pack",
    price: 79,
    billing: "one_time",
    blurb: "The full toolkit operators use after the first sale.",
    description:
      "Everything in Starter, plus pricing worksheets, offer tests, and a customer follow-up system that agents can run on a schedule.",
    includes: [
      "Everything in Starter",
      "Pricing worksheet",
      "Offer test board",
      "Customer follow-up scripts",
      "Refund policy templates",
    ],
    popular: true,
    stripePriceEnv: "STRIPE_PRICE_GROWTH",
  },
  {
    slug: "autopilot",
    name: "Autopilot",
    price: 29,
    interval: "month",
    billing: "subscription",
    blurb: "Monthly access. Agents keep the store moving.",
    description:
      "A reasonable monthly pass. Unlock the member library, weekly agent reports, and new templates as the catalog grows.",
    includes: [
      "Member library access",
      "Weekly agent digest",
      "New templates each month",
      "Cancel anytime",
    ],
    stripePriceEnv: "STRIPE_PRICE_AUTOPILOT",
  },
  {
    slug: "studio",
    name: "Studio License",
    price: 199,
    billing: "one_time",
    blurb: "Commercial license for studios and small teams.",
    description:
      "Use the kits with clients. Includes a commercial license, white-label checklist, and a handover doc your team can reuse.",
    includes: [
      "Commercial license",
      "White-label checklist",
      "Client handover doc",
      "Priority support lane",
    ],
    stripePriceEnv: "STRIPE_PRICE_STUDIO",
  },
];

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function formatPrice(product: Product) {
  const dollars = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(product.price);
  return product.billing === "subscription" ? `${dollars}/mo` : dollars;
}

export function stripePriceId(product: Product) {
  if (!product.stripePriceEnv) return "";
  return process.env[product.stripePriceEnv] || "";
}
