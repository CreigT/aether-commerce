import { NextResponse } from "next/server";
import { stripeConfigured } from "@/lib/config";

export function GET() {
  return NextResponse.json({
    ok: true,
    stripe: stripeConfigured(),
    time: new Date().toISOString(),
  });
}
