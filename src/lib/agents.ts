export type AgentStatus = "idle" | "running" | "watching" | "blocked";

export type Agent = {
  id: string;
  layer: string;
  name: string;
  job: string;
  status: AgentStatus;
  lastAction: string;
};

export const agents: Agent[] = [
  { id: "ceo", layer: "Executive", name: "CEO Agent", job: "Sets weekly priorities from revenue and risk.", status: "watching", lastAction: "Approved this week's product mix" },
  { id: "ops", layer: "Executive", name: "Chief Operations Agent", job: "Keeps fulfillment and support queues moving.", status: "running", lastAction: "Cleared 12 support tickets" },
  { id: "sales", layer: "Revenue", name: "Sales Agent", job: "Turns visits into checkouts without pressure.", status: "running", lastAction: "Updated checkout copy on Growth Pack" },
  { id: "marketing", layer: "Revenue", name: "Marketing Agent", job: "Writes plain-language pages people actually read.", status: "idle", lastAction: "Queued Monday email" },
  { id: "support", layer: "Customer", name: "Customer Support Agent", job: "Answers buyers in clear English.", status: "watching", lastAction: "No open tickets" },
  { id: "refund", layer: "Customer", name: "Refund Agent", job: "Handles refunds inside published policy.", status: "idle", lastAction: "Policy check passed" },
  { id: "pricing", layer: "Commerce", name: "Pricing Agent", job: "Watches conversion and suggests price tests.", status: "watching", lastAction: "Starter Kit held at $27" },
  { id: "treasury", layer: "Finance", name: "Treasury Agent", job: "Tracks cash and flags unusual charges.", status: "watching", lastAction: "Stripe webhook healthy" },
  { id: "compliance", layer: "Legal", name: "Regulatory Compliance Agent", job: "Checks tax, refund, and advertising rules.", status: "watching", lastAction: "Terms page current" },
  { id: "soc", layer: "Cybersecurity", name: "SOC Monitoring Agent", job: "Watches login and payment events.", status: "watching", lastAction: "No incidents" },
  { id: "kpi", layer: "Data", name: "KPI Monitoring Agent", job: "Publishes a simple daily scoreboard.", status: "running", lastAction: "Published daily snapshot" },
  { id: "devops", layer: "Infrastructure", name: "DevOps Agent", job: "Keeps the Vercel deploy green.", status: "watching", lastAction: "Production healthy" },
];

export const kpis = [
  { label: "Store uptime", value: "99.9%" },
  { label: "Avg. checkout time", value: "42s" },
  { label: "Refund rate", value: "1.8%" },
  { label: "Support wait", value: "< 5 min" },
];
