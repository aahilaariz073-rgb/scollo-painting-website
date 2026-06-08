import React from "react";

export interface CardProps {
  children: React.ReactNode;
  /** @default "default" */
  variant?: "default" | "flat" | "panel" | "navy";
  /** CSS padding value. @default var(--space-6) */
  padding?: string;
  /** Lift + shadow on hover. @default false */
  hover?: boolean;
  style?: React.CSSProperties;
}

/** Generic surface container — white, hairline border, soft warm shadow. */
export function Card(props: CardProps): JSX.Element;
