import * as React from 'react';

export function InputHelper({ children, className = '', ...rest }) {
  return (
    <div className={`input-helper ${className}`} {...rest}>
      {children}
    </div>
  );
}
