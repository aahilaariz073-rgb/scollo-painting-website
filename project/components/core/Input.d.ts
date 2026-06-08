import React from "react";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  required?: boolean;
  error?: string;
}

/** Labelled text input with amber focus ring — used across all lead forms. */
export function Input(props: InputProps): JSX.Element;
