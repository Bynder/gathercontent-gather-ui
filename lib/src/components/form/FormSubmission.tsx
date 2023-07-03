import * as React from 'react';

export function FormSubmission({
  children,
  className = '',
  submitText,
  ...rest
}: any) {
  return (
    <div className={`form-submission ${className}`} {...rest}>
      {children}
    </div>
  );
}
