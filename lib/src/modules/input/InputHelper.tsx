import * as React from 'react';

export function InputHelper({
  children,
  className = '',
  ...rest
}: any) {
  return (
    <div className={`input-helper ${className}`} {...rest}>
      {children}
    </div>
  );
}
