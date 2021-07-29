import * as React from 'react';

export function Row({ children, className = '', ...rest }) {
  return (
    <div className={`row ${className}`} {...rest}>
      {children}
    </div>
  );
}
