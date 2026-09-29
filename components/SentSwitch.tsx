"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

/**
 * Shows `success` instead of the form when FormSubmit redirects back with `?sent=1`.
 */
export default function SentSwitch({ children, success }: { children: ReactNode; success: ReactNode }) {
  const [sent, setSent] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (new URLSearchParams(window.location.search).get("sent") === "1") {
      setSent(true);
    }
  }, []);

  useEffect(() => {
    if (sent) ref.current?.firstElementChild?.scrollIntoView({ behavior: "smooth", block: "center" });
  }, [sent]);

  return sent ? <div ref={ref} style={{ display: "contents" }}>{success}</div> : <>{children}</>;
}
