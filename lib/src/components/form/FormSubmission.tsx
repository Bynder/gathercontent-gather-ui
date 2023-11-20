import * as React from "react";

export function FormSubmission({
  children,
  className = "",
  submitText,
  ...rest
}: any) {
  return (
    <div className={`gui-form-submission ${className}`} {...rest}>
      {children}
    </div>
  );
}
