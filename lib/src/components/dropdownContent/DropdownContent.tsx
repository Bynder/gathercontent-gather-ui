import React from "react";
import { DropdownContentHeader } from "./DropdownContentHeader";
import { DropdownContentBody } from "./DropdownContentBody";
import { DropdownContentList } from "./DropdownContentList";
import { DropdownContentFooter } from "./DropdownContentFooter";

export function DropdownContent({ children, className, ...rest }: any) {
  return (
    <div className={`gui-dropdown-content ${className}`} {...rest}>
      {children}
    </div>
  );
}

DropdownContent.Header = DropdownContentHeader;
DropdownContent.Body = DropdownContentBody;
DropdownContent.List = DropdownContentList;
DropdownContent.Footer = DropdownContentFooter;
