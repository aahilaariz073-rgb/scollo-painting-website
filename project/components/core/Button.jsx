import React from "react";

/**
 * Scollo primary action button. Renders an <a> when `href` is set, else a <button>.
 * Variants: primary (amber), secondary (navy outline), ghost (text), inverse (on navy).
 */
export function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  iconLeft,
  iconRight,
  fullWidth = false,
  disabled = false,
  type = "button",
  onClick,
  ...rest
}) {
  const sizes = {
    sm: { padding: "9px 16px", fontSize: "14px", gap: "7px" },
    md: { padding: "13px 24px", fontSize: "15px", gap: "9px" },
    lg: { padding: "17px 34px", fontSize: "17px", gap: "10px" },
  };

  const palettes = {
    primary: {
      background: "var(--amber-500)",
      color: "var(--navy-950)",
      border: "1px solid var(--amber-500)",
    },
    secondary: {
      background: "transparent",
      color: "var(--navy-900)",
      border: "1.5px solid var(--navy-900)",
    },
    ghost: {
      background: "transparent",
      color: "var(--navy-900)",
      border: "1.5px solid transparent",
    },
    inverse: {
      background: "var(--white)",
      color: "var(--navy-900)",
      border: "1px solid var(--white)",
    },
  };

  const base = {
    display: fullWidth ? "flex" : "inline-flex",
    width: fullWidth ? "100%" : "auto",
    alignItems: "center",
    justifyContent: "center",
    gap: sizes[size].gap,
    fontFamily: "var(--font-ui)",
    fontWeight: 600,
    fontSize: sizes[size].fontSize,
    lineHeight: 1,
    whiteSpace: "nowrap",
    letterSpacing: "0.01em",
    padding: sizes[size].padding,
    borderRadius: "var(--radius-sm)",
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.5 : 1,
    textDecoration: "none",
    transition:
      "transform var(--dur-fast) var(--ease-out), box-shadow var(--dur-base) var(--ease-out), background var(--dur-fast) var(--ease-out), border-color var(--dur-fast) var(--ease-out)",
    ...palettes[variant],
  };

  const [hover, setHover] = React.useState(false);
  const hoverStyle =
    hover && !disabled
      ? variant === "primary"
        ? { background: "var(--amber-600)", borderColor: "var(--amber-600)", transform: "translateY(-1px)", boxShadow: "var(--shadow-accent)" }
        : variant === "secondary"
        ? { background: "var(--navy-900)", color: "var(--white)" }
        : variant === "ghost"
        ? { background: "var(--amber-50)", borderColor: "var(--amber-100)" }
        : { background: "var(--paper)" }
      : null;

  const Tag = href ? "a" : "button";
  const tagProps = href ? { href } : { type, disabled };

  return (
    <Tag
      {...tagProps}
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onMouseDown={(e) => (e.currentTarget.style.transform = "translateY(0)")}
      style={{ ...base, ...hoverStyle }}
      {...rest}
    >
      {iconLeft}
      {children}
      {iconRight}
    </Tag>
  );
}
