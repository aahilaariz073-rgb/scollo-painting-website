import React from "react";

export interface TrustItemProps {
  /** Defaults to an amber checkmark if omitted */
  icon?: React.ReactNode;
  title: string;
  children: React.ReactNode;
  /** Background context. @default "dark" (for light backgrounds) */
  tone?: "dark" | "light";
}

/** "Why choose us" differentiator — amber icon tile + title + short copy. */
export function TrustItem(props: TrustItemProps): JSX.Element;
