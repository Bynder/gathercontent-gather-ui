import * as React from 'react';

export function Grid({
  children,
  className = '',
  ...rest
}: any) {
  return (
    <div className={`layout-grid ${className}`} {...rest}>
      {children}
    </div>
  );
}
