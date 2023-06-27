import React from 'react';

export function DropdownContentFooter({
  children,
  className,
  ...rest
}: any) {
  return (
    <div className={`dropdown-content-footer ${className}`} {...rest}>
      {children}
    </div>
  );
}
