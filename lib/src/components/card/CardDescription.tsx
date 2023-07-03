import * as React from 'react';

export function CardDescription({
  children,
  className = '',
  ...rest
}: any) {
  return (
    <div className={`card-description ${className}`} {...rest}>
      {children}
    </div>
  );
}
