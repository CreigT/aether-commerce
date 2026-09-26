"use client";

import { useEffect } from "react";

export function ClaimAccess({ sessionId }: { sessionId?: string }) {
  useEffect(() => {
    if (!sessionId) return;
    fetch("/api/claim", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ sessionId }),
    }).catch(() => undefined);
  }, [sessionId]);
  return null;
}
