import React from "react";

/**
 * Trust / "why choose us" item — amber check (or custom icon), title, copy.
 * Horizontal layout by default; works on light or navy backgrounds.
 */
export function TrustItem({ icon, title, children, tone = "dark" }) {
  const isLight = tone === "light";
  return (
    <div style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
      <div
        style={{
          flex: "0 0 auto", width: 38, height: 38, borderRadius: "var(--radius-sm)",
          background: isLight ? "rgba(193,138,61,0.18)" : "var(--amber-50)",
          border: `1px solid ${isLight ? "rgba(193,138,61,0.3)" : "var(--amber-100)"}`,
          display: "flex", alignItems: "center", justifyContent: "center", color: "var(--amber-500)",
        }}
      >
        {icon || (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polyline points="20 6 9 17 4 12"/>
          </svg>
        )}
      </div>
      <div>
        <div style={{ fontFamily: "var(--font-ui)", fontWeight: 700, fontSize: 16, color: isLight ? "var(--text-on-dark)" : "var(--text-strong)", marginBottom: 4 }}>
          {title}
        </div>
        <div style={{ fontFamily: "var(--font-body)", fontSize: 14.5, lineHeight: 1.55, color: isLight ? "var(--text-on-dark-muted)" : "var(--text-body)" }}>
          {children}
        </div>
      </div>
    </div>
  );
}
