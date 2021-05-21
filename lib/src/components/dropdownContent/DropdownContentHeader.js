import React from 'react';

export function DropdownContentHeader({ children, title, ...rest }) {
  return (
    <div className="dropdown-content-header" {...rest}>
      <h4 className="dropdown-content-header-title">{title}</h4>
      {children}
    </div>
  );
}
