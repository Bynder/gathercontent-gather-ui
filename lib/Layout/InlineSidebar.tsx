import React from "react";
import cx from "classnames";

export function InlineSidebar({ children, className, isFinder, ...rest }: any) {
  const classNames = cx(`gui-inline-sidebar ${className}`, {
    "gui-inline-sidebar-finder": isFinder,
  });

  return (
    <aside className={classNames} {...rest}>
      {children}
    </aside>
  );
}

InlineSidebar.defaultProps = {
  className: "",
  isFinder: false,
};
