import * as React from "react";

export function SidebarSubHeading({ children, className = "", ...rest }: any) {
  return (
    <div className={`gui-sidebar-subheading ${className}`} {...rest}>
      {children}
    </div>
  );
}
