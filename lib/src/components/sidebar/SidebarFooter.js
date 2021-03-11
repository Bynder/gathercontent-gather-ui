import * as React from 'react';

export function SidebarFooter({ children, className = '', ...rest }) {
  return (
    <div className={`sidebar-footer ${className}`} {...rest}>
      <div className="ml-auto">{children}</div>
    </div>
  );
}
