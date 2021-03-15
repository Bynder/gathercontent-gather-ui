import * as React from 'react';

export function SidebarSubHeading({ children, className = '', ...rest }) {
  return (
    <div className={`sidebar-subheading ${className}`} {...rest}>
      {children}
    </div>
  );
}
