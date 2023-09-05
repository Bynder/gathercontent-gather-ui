import * as React from 'react';
import type { LabelHTMLAttributes } from 'react';

export function Label({
  htmlFor,
  children,
  className = '',
  ...rest
}: LabelHTMLAttributes<HTMLLabelElement>) {
  return (
    <label className={`label ${className}`} htmlFor={htmlFor} {...rest}>
      {children}
    </label>
  );
}
