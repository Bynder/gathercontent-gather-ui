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
  const classNames = cx(`dropdown__header ${className}`, {
    "dropdown__header--collapse": collapse,
  });
  return (
    <header className={classNames} {...rest}>
      {children}
    </header>
  );
}

export default DropdownHeader;
