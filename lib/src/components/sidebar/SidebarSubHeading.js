import * as React from 'react';

export function SidebarSubHeading({ children, className = '', ...rest }) {
  return (
    <h4 className={`sidebar-subheading ${className}`} {...rest}>
      {children}
    </h4>
  );
}
