import * as React from 'react';

export function Grid({ children, className = '', ...rest }) {
  return (
    <div className={`container-fluid ${className}`} {...rest}>
      {children}
    </div>
  );
}
