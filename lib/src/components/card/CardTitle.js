import * as React from 'react';

export function CardTitle({ children, className = '', ...rest }) {
  return (
    <div className={`card-title ${className}`} {...rest}>
      {children}
    </div>
  );
}
