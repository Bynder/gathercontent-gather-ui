import * as React from 'react';

export function SidebarDescription({ children, className = '', ...rest }) {
  return (
    <div className={`sidebar-description ${className}`} {...rest}>
      {children}
    </div>
  );
}
