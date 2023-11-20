import React from "react";

export function DropdownContentHeader({ children, title, ...rest }: any) {
  return (
    <div className="gui-dropdown-content-header" {...rest}>
      <h4 className="gui-dropdown-content-header-title">{title}</h4>
      {children}
    </div>
  );
}
