import React from 'react';

export function DropdownContentBody({ children, ...rest }) {
  return (
    <div className="dropdown-content-body" {...rest}>
      {children}
    </div>
  );
}
