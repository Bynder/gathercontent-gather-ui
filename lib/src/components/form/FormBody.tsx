import * as React from 'react';

export function FormBody({
  children,
  className = '',
  ...rest
}: any) {
  return (
    <div className={`form-body ${className}`} {...rest}>
      {children}
    </div>
  );
}
