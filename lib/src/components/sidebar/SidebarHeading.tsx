import * as React from "react";

export function SidebarHeading({
  children,
  className = "",
  showMoreToggle,
  ...rest
}: any) {
  return (
    <div className={`gui-sidebar-heading ${className}`} {...rest}>
      {children}
    </div>
  );
}

SidebarHeading.defaultProps = {
  showMoreToggle: false,
};
