import React from "react";

/**
 * Props for the before/after comparison slider.
 * @startingPoint section="Core" subtitle="Draggable before/after comparison slider" viewport="700x440"
 */
export interface BeforeAfterProps {
  /** Before image src; omit for a labeled placeholder block */
  before?: string;
  /** After image src; omit for a labeled placeholder block */
  after?: string;
  beforeLabel?: string;
  afterLabel?: string;
  alt?: string;
  /** Pixel height. @default 420 */
  height?: number;
}

/**
 * Signature draggable before/after image comparison slider for the gallery
 * and service pages. Falls back to labeled placeholder blocks when no images.
 */
export function BeforeAfter(props: BeforeAfterProps): JSX.Element;
