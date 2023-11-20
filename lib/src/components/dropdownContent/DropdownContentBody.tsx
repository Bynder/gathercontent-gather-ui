import React from "react";

export function DropdownContentBody({ children, ...rest }: any) {
  return (
    <div className="gui-dropdown-content-body" {...rest}>
      {children}
    </div>
  );
}
