import React from "react";

export interface SelectOption { value: string; label: string; }

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  required?: boolean;
  error?: string;
  placeholder?: string;
  options: (string | SelectOption)[];
}

/** Labelled select with custom chevron — service type & city pickers. */
export function Select(props: SelectProps): JSX.Element;
