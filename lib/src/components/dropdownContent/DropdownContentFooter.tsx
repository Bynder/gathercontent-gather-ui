import React from "react";

export function DropdownContentFooter({ children, className, ...rest }: any) {
  return (
    <div className={`gui-dropdown-content-footer ${className}`} {...rest}>
      {children}
    </div>
  );
}
