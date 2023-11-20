import * as React from "react";

export function SidebarDescription({ children, className = "", ...rest }: any) {
  return (
    <div className={`gui-sidebar-description ${className}`} {...rest}>
      {children}
    </div>
  );
}
