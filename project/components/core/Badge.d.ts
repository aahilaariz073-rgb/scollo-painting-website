import React from "react";

export interface BadgeProps {
  children: React.ReactNode;
  /** @default "accent" */
  tone?: "accent" | "navy" | "neutral" | "success";
  icon?: React.ReactNode;
}

/** Small pill label — trust signals, categories, "Licensed & insured". */
export function Badge(props: BadgeProps): JSX.Element;
