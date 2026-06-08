import React from "react";

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  required?: boolean;
  error?: string;
  rows?: number;
}

/** Labelled multi-line textarea — project details in the quote form. */
export function Textarea(props: TextareaProps): JSX.Element;
