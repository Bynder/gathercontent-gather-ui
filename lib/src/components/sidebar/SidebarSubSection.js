import * as React from 'react';

export function SidebarSubSection({ children, className = '', ...rest }) {
  return (
    <div className={`sidebar-subsection ${className}`} {...rest}>
      {children}
    </div>
  );
}
