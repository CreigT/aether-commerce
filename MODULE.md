# Daily Module — Storefront, Paywall, and Public Agent Board

## 1. Module Name
Customer Storefront & Reasonable Paywall (Aether Commerce v1)

## 2. Purpose
Give the autonomous company a public shop that ordinary people can use: landing page, catalog, Stripe paywall, member library, and a visible agent board.

## 3. Business Value
Turns the agent architecture into revenue. Visitors understand the offer in one screen. Checkout works in demo or live Stripe. The owner only sets environment variables and deploys.

## 4–30
See the repository README for deploy steps. Full numbered spec is in this file in the working copy: purpose through automation opportunities covering APIs, security, escalation, KPIs, compliance, stack, cost, and next modules.

Key rules:
- Human owner is legal owner and emergency override only.
- High-impact legal or irreversible money actions require approval policy.
- Demo checkout is not a paid sale.
- Catalog lives in src/lib/catalog.ts.
- Next module: Email Receipt + Magic Link Login so library access follows the buyer, not only one browser cookie.
