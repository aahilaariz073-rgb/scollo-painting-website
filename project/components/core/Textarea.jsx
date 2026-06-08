import React from "react";

/** Labelled multi-line textarea. */
export function Textarea({ label, required, id, rows = 4, error, ...rest }) {
  const [f, setF] = React.useState(false);
  return (
    <div>
      {label && (
        <label htmlFor={id} style={{ display: "block", fontFamily: "var(--font-ui)", fontWeight: 600, fontSize: 13.5, color: "var(--text-strong)", marginBottom: 7 }}>
          {label}{required && <span style={{ color: "var(--amber-600)" }}> *</span>}
        </label>
      )}
      <textarea
        id={id}
        rows={rows}
        onFocus={() => setF(true)}
        onBlur={() => setF(false)}
        style={{
          width: "100%", fontFamily: "var(--font-ui)", fontSize: 15, lineHeight: 1.5,
          color: "var(--text-strong)", background: "var(--surface-card)",
          border: `1.5px solid ${error ? "var(--danger)" : f ? "var(--amber-500)" : "var(--border-default)"}`,
          borderRadius: "var(--radius-sm)", padding: "12px 14px", outline: "none", resize: "vertical",
          boxShadow: f ? "0 0 0 3px var(--ring)" : "none",
          transition: "border-color var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out)",
        }}
        {...rest}
      />
    </div>
  );
}
