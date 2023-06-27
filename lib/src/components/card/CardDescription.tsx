import * as React from 'react';

export function CardDescription({ children, className = '', ...rest }) {
  return (
    <div className={`card-description ${className}`} {...rest}>
      {children}
    </div>
  );
}
