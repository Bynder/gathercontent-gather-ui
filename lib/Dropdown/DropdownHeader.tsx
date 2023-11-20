import React, { HTMLAttributes } from "react";
import cx from "classnames";

interface Props extends HTMLAttributes<HTMLHeadingElement> {
  collapse?: boolean;
}

function DropdownHeader({
  children,
  className = "",
  collapse = false,
  ...rest
}: Props) {
  const classNames = cx(`gui-dropdown__header ${className}`, {
    "gui-dropdown__header--collapse": collapse,
  });
  return (
    <header className={classNames} {...rest}>
      {children}
    </header>
  );
}

export default DropdownHeader;
