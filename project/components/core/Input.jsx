import React from "react";

const fieldShell = {
  width: "100%",
  fontFamily: "var(--font-ui)",
  fontSize: "15px",
  color: "var(--text-strong)",
  background: "var(--surface-card)",
  border: "1.5px solid var(--border-default)",
  borderRadius: "var(--radius-sm)",
  padding: "12px 14px",
  outline: "none",
  transition: "border-color var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out)",
};

function Label({ label, required, htmlFor }) {
  if (!label) return null;
  return (
    <label htmlFor={htmlFor} style={{ display: "block", fontFamily: "var(--font-ui)", fontWeight: 600, fontSize: 13.5, color: "var(--text-strong)", marginBottom: 7 }}>
      {label}
      {required && <span style={{ color: "var(--amber-600)" }}> *</span>}
    </label>
  );
}

/** Labelled text input. */
export function Input({ label, required, id, error, ...rest }) {
  const [f, setF] = React.useState(false);
  return (
    <div>
      <Label label={label} required={required} htmlFor={id} />
      <input
        id={id}
        onFocus={() => setF(true)}
        onBlur={() => setF(false)}
        style={{
          ...fieldShell,
          borderColor: error ? "var(--danger)" : f ? "var(--amber-500)" : "var(--border-default)",
          boxShadow: f ? "0 0 0 3px var(--ring)" : "none",
        }}
        {...rest}
      />
      {error && <div style={{ fontFamily: "var(--font-ui)", fontSize: 12.5, color: "var(--danger)", marginTop: 6 }}>{error}</div>}
    </div>
  );
}
