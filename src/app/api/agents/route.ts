import { NextResponse } from "next/server";
import { agents, kpis } from "@/lib/agents";

export function GET() {
  return NextResponse.json({ agents, kpis });
}
