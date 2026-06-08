import React from "react";

/**
 * Service offering card — icon, title, description, and a "Learn more" link.
 * Used in the services grid. Lifts on hover; arrow nudges right.
 */
export function ServiceCard({ icon, title, description, href = "#", linkLabel = "Learn more" }) {
  const [h, setH] = React.useState(false);
  return (
    <a
      href={href}
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
      style={{
        display: "block",
        textDecoration: "none",
        background: "var(--surface-card)",
        border: "1px solid var(--border-subtle)",
        borderRadius: "var(--radius-lg)",
        padding: "var(--space-6)",
        boxShadow: h ? "var(--shadow-md)" : "var(--shadow-sm)",
        borderColor: h ? "var(--border-default)" : "var(--border-subtle)",
        transform: h ? "translateY(-3px)" : "none",
        transition: "all var(--dur-base) var(--ease-out)",
      }}
    >
      <div
        style={{
          width: 52, height: 52, borderRadius: "var(--radius-md)",
          background: "var(--amber-50)", border: "1px solid var(--amber-100)",
          display: "flex", alignItems: "center", justifyContent: "center",
          color: "var(--amber-600)", marginBottom: "var(--space-5)",
        }}
      >
        {icon}
      </div>
      <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "var(--fs-h3)", fontWeight: 600, color: "var(--text-strong)", margin: "0 0 10px" }}>
        {title}
      </h3>
      <p style={{ fontFamily: "var(--font-body)", fontSize: "15px", lineHeight: 1.6, color: "var(--text-body)", margin: "0 0 18px" }}>
        {description}
      </p>
      <span style={{ display: "inline-flex", alignItems: "center", gap: 7, fontFamily: "var(--font-ui)", fontWeight: 600, fontSize: 14, color: "var(--amber-600)" }}>
        {linkLabel}
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ transform: h ? "translateX(4px)" : "none", transition: "transform var(--dur-base) var(--ease-out)" }} aria-hidden="true">
          <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
        </svg>
      </span>
    </a>
  );
}
