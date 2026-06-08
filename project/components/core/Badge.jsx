import React from "react";

/** Small label / pill. Tones: accent (amber), navy, neutral, success. */
export function Badge({ children, tone = "accent", icon }) {
  const tones = {
    accent: { background: "var(--amber-50)", color: "var(--amber-700)", border: "1px solid var(--amber-100)" },
    navy: { background: "var(--navy-900)", color: "var(--text-on-dark)", border: "1px solid var(--navy-900)" },
    neutral: { background: "var(--cloud)", color: "var(--stone-600)", border: "1px solid var(--border-subtle)" },
    success: { background: "#e7f1eb", color: "var(--success)", border: "1px solid #cfe5d8" },
  };
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        fontFamily: "var(--font-ui)",
        fontSize: "12px",
        fontWeight: 600,
        letterSpacing: "0.04em",
        whiteSpace: "nowrap",
        padding: "5px 12px",
        borderRadius: "var(--radius-pill)",
        ...tones[tone],
      }}
    >
      {icon}
      {children}
    </span>
  );
}
