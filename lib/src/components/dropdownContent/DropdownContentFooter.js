import React from 'react';

export function DropdownContentFooter({ children, className, ...rest }) {
  return (
    <div className={`dropdown-content-footer ${className}`} {...rest}>
      {children}
    </div>
  );
}
