import * as React from 'react';

export function SidebarBody({ children, className = '', ...rest }) {
  return (
    <div className={`sidebar-body overflow-y-auto ${className}`} {...rest}>
      {children}
    </div>
  );
}
