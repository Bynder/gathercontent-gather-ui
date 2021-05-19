import React from 'react';

export function DropdownContentFooter({ children, ...rest }) {
  return (
    <div className="dropdown-content-footer" {...rest}>
      {children}
    </div>
  );
}
