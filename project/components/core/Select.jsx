import React from "react";

/** Labelled select dropdown. Pass options as [{value,label}] or strings. */
export function Select({ label, required, id, options = [], placeholder, error, ...rest }) {
  const [f, setF] = React.useState(false);
  const opts = options.map((o) => (typeof o === "string" ? { value: o, label: o } : o));
  return (
    <div>
      {label && (
        <label htmlFor={id} style={{ display: "block", fontFamily: "var(--font-ui)", fontWeight: 600, fontSize: 13.5, color: "var(--text-strong)", marginBottom: 7 }}>
          {label}{required && <span style={{ color: "var(--amber-600)" }}> *</span>}
        </label>
      )}
      <div style={{ position: "relative" }}>
        <select
          id={id}
          defaultValue=""
          onFocus={() => setF(true)}
          onBlur={() => setF(false)}
          style={{
            width: "100%", fontFamily: "var(--font-ui)", fontSize: 15, color: "var(--text-strong)",
            background: "var(--surface-card)", appearance: "none",
            border: `1.5px solid ${error ? "var(--danger)" : f ? "var(--amber-500)" : "var(--border-default)"}`,
            borderRadius: "var(--radius-sm)", padding: "12px 40px 12px 14px", outline: "none",
            boxShadow: f ? "0 0 0 3px var(--ring)" : "none", cursor: "pointer",
            transition: "border-color var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out)",
          }}
          {...rest}
        >
          {placeholder && <option value="" disabled>{placeholder}</option>}
          {opts.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
        </select>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--stone-500)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ position: "absolute", right: 13, top: "50%", transform: "translateY(-50%)", pointerEvents: "none" }} aria-hidden="true">
          <polyline points="6 9 12 15 18 9"/>
        </svg>
      </div>
    </div>
  );
}
