import React from "react";

/**
 * Props for the Scollo primary call-to-action button.
 * @startingPoint section="Core" subtitle="Buttons — primary, secondary, ghost, inverse" viewport="700x150"
 */
export interface ButtonProps {
  children: React.ReactNode;
  /** Visual style. @default "primary" */
  variant?: "primary" | "secondary" | "ghost" | "inverse";
  /** @default "md" */
  size?: "sm" | "md" | "lg";
  /** Render as a link to this URL instead of a button */
  href?: string;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  fullWidth?: boolean;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  onClick?: (e: React.MouseEvent) => void;
}

/**
 * Primary call-to-action button for Scollo Painting. The amber `primary`
 * variant is the site-wide "Get a Free Quote" action.
 */
export function Button(props: ButtonProps): JSX.Element;
