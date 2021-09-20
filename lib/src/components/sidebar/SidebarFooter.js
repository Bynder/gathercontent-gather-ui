import * as React from 'react';

export function SidebarFooter({ children, className = '', ...rest }) {
  return (
    <div className={`sidebar-footer ${className}`} {...rest}>
      {children}
    </div>
  );
}
