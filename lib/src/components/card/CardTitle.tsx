import * as React from 'react';

export function CardTitle({
  children,
  className = '',
  ...rest
}: any) {
  return (
    <div className={`card-title ${className}`} {...rest}>
      {children}
    </div>
  );
}
