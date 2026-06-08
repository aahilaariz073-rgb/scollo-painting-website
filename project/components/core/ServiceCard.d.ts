import React from "react";

export interface ServiceCardProps {
  /** Lucide (or similar) line icon node */
  icon?: React.ReactNode;
  title: string;
  description: string;
  href?: string;
  /** @default "Learn more" */
  linkLabel?: string;
}

/**
 * Service offering card with amber icon tile, title, copy, and a nudging
 * "Learn more" arrow. The building block of the services grid.
 */
export function ServiceCard(props: ServiceCardProps): JSX.Element;
