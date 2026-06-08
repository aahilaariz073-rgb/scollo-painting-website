import React from "react";

/**
 * Props for the editorial section header.
 * @startingPoint section="Core" subtitle="Section header with eyebrow + serif title" viewport="700x220"
 */
export interface SectionHeadingProps {
  /** Uppercase overline above the title */
  eyebrow?: string;
  title: React.ReactNode;
  /** Italic amber accent appended to the title */
  accent?: string;
  /** Supporting lead paragraph */
  lead?: React.ReactNode;
  /** @default "left" */
  align?: "left" | "center";
  /** Background context. @default "dark" (for light backgrounds) */
  tone?: "dark" | "light";
  /** Show the 48×3 gold rule. @default true */
  rule?: boolean;
  /** Heading tag. @default "h2" */
  as?: "h1" | "h2" | "h3";
  maxWidth?: string;
}

/**
 * Editorial section header — gold rule + eyebrow + serif title (+italic accent) + lead.
 * The recurring way every section opens across the site.
 */
export function SectionHeading(props: SectionHeadingProps): JSX.Element;
