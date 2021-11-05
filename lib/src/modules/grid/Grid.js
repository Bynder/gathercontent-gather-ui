import * as React from 'react';

export function Grid({ children, className = '', ...rest }) {
  return (
    <div className={`layout-grid ${className}`} {...rest}>
      {children}
    </div>
  );
}
