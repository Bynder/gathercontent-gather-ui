import * as React from 'react';

export function Row({
  children,
  className = '',
  ...rest
}: any) {
  return (
    <div className={`layout-row flex ${className}`} {...rest}>
      {children}
    </div>
  );
}