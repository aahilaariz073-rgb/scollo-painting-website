import React from "react";

export interface PhoneLinkProps {
  /** Background context. @default "dark" (i.e. for light backgrounds) */
  tone?: "dark" | "light";
  showIcon?: boolean;
  weight?: number;
  /** Override the displayed text (href stays the canonical number) */
  children?: React.ReactNode;
}

/**
 * Canonical click-to-call link for Scollo Painting (561-306-1813).
 * Always emits a tel: href with the correct NAP number.
 */
export function PhoneLink(props: PhoneLinkProps): JSX.Element;
