import React from "react";

export function DropdownContentList({ children, heading, ...rest }: any) {
  return (
    <div className="gui-dropdown-content-list" {...rest}>
      {heading && (
        <div className="gui-dropdown-content-list-heading">{heading}</div>
      )}
      {children}
    </div>
  );
}
