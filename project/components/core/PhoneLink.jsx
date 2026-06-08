import React from "react";

const DIGITS = "5613061813";
const DISPLAY = "561-306-1813";

/**
 * Click-to-call phone link. Always renders the canonical NAP phone number
 * and a tel: href. `tone` adapts color for light vs navy backgrounds.
 */
export function PhoneLink({ tone = "dark", showIcon = true, weight = 600, children, ...rest }) {
  const color = tone === "light" ? "var(--text-on-dark)" : "var(--navy-900)";
  return (
    <a
      href={`tel:+1${DIGITS}`}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "8px",
        fontFamily: "var(--font-ui)",
        fontWeight: weight,
        fontSize: "inherit",
        color,
        textDecoration: "none",
        letterSpacing: "0.01em",
      }}
      {...rest}
    >
      {showIcon && (
        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="var(--amber-500)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z"/>
        </svg>
      )}
      {children || DISPLAY}
    </a>
  );
}
