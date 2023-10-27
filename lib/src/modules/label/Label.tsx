import * as React from "react";

export function Label({
  htmlFor,
  children,
  className = "",
  ...rest
}: React.LabelHTMLAttributes<HTMLLabelElement>) {
  return (
    <label className={`gui-label ${className}`} htmlFor={htmlFor} {...rest}>
      {children}
    </label>
  );
}
