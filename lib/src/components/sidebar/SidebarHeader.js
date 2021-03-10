import * as React from 'react';

export function SidebarHeader({ children, className = '', ...rest }) {
  return (
    <div className={`sidebar-header ${className}`} {...rest}>
      <div className="text-overflow-ellipsis">{children}</div>
    </div>
  );
}
