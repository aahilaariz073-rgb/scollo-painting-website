import React from "react";

/**
 * Surface card. variant: default (white, hairline border, soft shadow that
 * lifts on hover), flat (no shadow), navy (inverse band card).
 */
export function Card({ children, variant = "default", padding = "var(--space-6)", hover = false, style, ...rest }) {
  const variants = {
    default: { background: "var(--surface-card)", border: "1px solid var(--border-subtle)", boxShadow: "var(--shadow-sm)" },
    flat: { background: "var(--surface-card)", border: "1px solid var(--border-subtle)", boxShadow: "none" },
    panel: { background: "var(--surface-panel)", border: "1px solid var(--border-subtle)", boxShadow: "none" },
    navy: { background: "var(--surface-inverse-2)", border: "1px solid var(--border-on-dark)", boxShadow: "none", color: "var(--text-on-dark)" },
  };
  const [h, setH] = React.useState(false);
  const lift = hover && h ? { boxShadow: "var(--shadow-md)", borderColor: "var(--border-default)", transform: "translateY(-3px)" } : null;
  return (
    <div
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
      style={{
        borderRadius: "var(--radius-lg)",
        padding,
        transition: "transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out), border-color var(--dur-base) var(--ease-out)",
        ...variants[variant],
        ...lift,
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  );
}
