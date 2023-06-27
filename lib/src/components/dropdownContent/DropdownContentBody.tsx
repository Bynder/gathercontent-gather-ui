import React from 'react';

export function DropdownContentBody({
  children,
  ...rest
}: any) {
  return (
    <div className="dropdown-content-body" {...rest}>
      {children}
    </div>
  );
}
