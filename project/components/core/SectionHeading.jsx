import React from "react";

/**
 * Editorial section heading block: optional gold rule, uppercase eyebrow,
 * serif headline (with optional italic accent), and a lead paragraph.
 */
export function SectionHeading({
  eyebrow,
  title,
  accent,
  lead,
  align = "left",
  tone = "dark",
  rule = true,
  as = "h2",
  maxWidth = "640px",
}) {
  const Title = as;
  const isLight = tone === "light";
  const titleColor = isLight ? "var(--text-on-dark)" : "var(--text-strong)";
  const leadColor = isLight ? "var(--text-on-dark-muted)" : "var(--text-body)";

  return (
    <div style={{ textAlign: align, maxWidth: align === "center" ? maxWidth : "none", marginInline: align === "center" ? "auto" : 0 }}>
      {rule && (
        <hr style={{ width: 48, height: 3, background: "var(--brand-accent)", border: 0, borderRadius: 999, margin: align === "center" ? "0 auto 18px" : "0 0 18px" }} />
      )}
      {eyebrow && (
        <div style={{ fontFamily: "var(--font-ui)", fontSize: "var(--fs-eyebrow)", fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--text-accent)", marginBottom: 14 }}>
          {eyebrow}
        </div>
      )}
      <Title style={{ fontFamily: "var(--font-heading)", fontWeight: 600, fontSize: "clamp(2rem, 4vw, 2.75rem)", lineHeight: 1.1, letterSpacing: "-0.02em", color: titleColor, margin: 0 }}>
        {title}
        {accent && <span style={{ fontStyle: "italic", fontWeight: 400, color: "var(--text-accent)" }}> {accent}</span>}
      </Title>
      {lead && (
        <p style={{ fontFamily: "var(--font-body)", fontSize: "var(--fs-body-lg)", lineHeight: 1.6, color: leadColor, margin: "18px 0 0", maxWidth }}>
          {lead}
        </p>
      )}
    </div>
  );
}
