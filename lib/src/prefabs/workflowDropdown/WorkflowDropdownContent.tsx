import React from "react";
import Dropdown from "../../../Dropdown";

export function WorkflowDropdownContent({ children, className, ...rest }: any) {
  const dropdownClassName = `gui-workflow-dropdown__content ${className}`;

  return (
    <Dropdown.Content
      noTransform
      noBorder
      className={dropdownClassName}
      {...rest}
    >
      {children}
    </Dropdown.Content>
  );
}
