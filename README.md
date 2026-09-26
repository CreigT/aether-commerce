# Aether Commerce

A simple storefront you can push to GitHub and deploy on Vercel.

Agents run the shop. You add environment variables. That is the operator work.

## What you get

- Warm, readable landing page
- Four clear products and a fair paywall
- Stripe Checkout when keys are present
- Demo checkout when keys are missing
- Member library after purchase
- Public agent status board
- Health, checkout, claim, and webhook APIs

## Deploy in 10 minutes

1. Import this repo in [Vercel](https://vercel.com/new/git/external?repository-url=https://github.com/CreigT/aether-commerce).
2. Add variables from `.env.example`.
3. Deploy.

No Stripe keys? The shop still works in demo mode so you can click through the paywall.

## Variables that matter

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_STORE_NAME` | Store name on every page |
| `NEXT_PUBLIC_STORE_TAGLINE` | Short line under the name |
| `NEXT_PUBLIC_STORE_URL` | Canonical URL |
| `NEXT_PUBLIC_SUPPORT_EMAIL` | Shown in the footer |
| `STRIPE_SECRET_KEY` | Turns on live checkout |
| `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` | Stripe.js if you add it later |
| `STRIPE_WEBHOOK_SECRET` | Payment events |
| `STRIPE_PRICE_*` | Optional live Stripe Price IDs |

Change product names and prices in `src/lib/catalog.ts`.

## Local

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open http://localhost:3000

## After first deploy

1. In Stripe, add a webhook to `https://YOUR_DOMAIN/api/webhook`.
2. Events: `checkout.session.completed`.
3. Paste the webhook secret into Vercel and redeploy.

## Owner rule

The human is legal owner and emergency override.
Agents operate the store.
High-impact legal or irreversible money actions stay behind an approval policy.
