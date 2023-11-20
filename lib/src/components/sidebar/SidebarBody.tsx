import * as React from "react";

export function SidebarBody({ children, className = "", ...rest }: any) {
  return (
    <div className={`gui-sidebar-body overflow-y-auto ${className}`} {...rest}>
      {children}
    </div>
  );
}
