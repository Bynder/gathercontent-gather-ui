import * as React from 'react';

export function SidebarSubSection({
  children,
  className = '',
  ...rest
}: any) {
  return (
    <div className={`sidebar-subsection ${className}`} {...rest}>
      {children}
    </div>
  );
}
