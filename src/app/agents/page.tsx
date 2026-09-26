import { agents, kpis } from "@/lib/agents";

export const metadata = { title: "Agents" };

export default function AgentsPage() {
  const layers = Array.from(new Set(agents.map((agent) => agent.layer)));
  return (
    <div className="mx-auto max-w-6xl px-4 py-14">
      <h1 className="text-4xl" style={{ fontFamily: "var(--font-serif)" }}>Agent board</h1>
      <p className="mt-3 max-w-2xl text-stone-600">Every business function has an owner. This page is the public status board. High-impact money, legal, and refund decisions still follow an approval policy.</p>
      <div className="mt-8 grid gap-4 sm:grid-cols-4">
        {kpis.map((kpi) => (
          <div key={kpi.label} className="card p-4">
            <p className="text-2xl font-semibold">{kpi.value}</p>
            <p className="text-sm text-stone-500">{kpi.label}</p>
          </div>
        ))}
      </div>
      <div className="mt-10 space-y-8">
        {layers.map((layer) => (
          <section key={layer}>
            <h2 className="text-sm font-semibold uppercase tracking-wide text-stone-500">{layer}</h2>
            <div className="mt-3 grid gap-3 md:grid-cols-2">
              {agents.filter((agent) => agent.layer === layer).map((agent) => (
                <article key={agent.id} className="card p-5">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="font-semibold">{agent.name}</h3>
                      <p className="mt-1 text-sm text-stone-600">{agent.job}</p>
                    </div>
                    <span className="rounded-full bg-stone-100 px-2 py-1 text-xs capitalize">{agent.status}</span>
                  </div>
                  <p className="mt-3 text-sm text-stone-500">Last: {agent.lastAction}</p>
                </article>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
