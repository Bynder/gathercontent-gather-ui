import React, { HTMLAttributes } from "react";
import cx from "classnames";

interface Props extends HTMLAttributes<HTMLDivElement> {
  collapse?: boolean;
  horizontal?: boolean;
  bordered?: boolean;
}

function DropdownActionGroup({
  children,
  horizontal,
  className,
  bordered,
  collapse,
  ...rest
}: Props) {
  const classNames = cx(`gui-dropdown__action-group ${className}`, {
    "gui-dropdown__action-group--horizontal": horizontal,
    "gui-dropdown__action-group--bordered": bordered,
    "gui-dropdown__action-group--collapse": collapse,
  });
  return (
    <div className={classNames} {...rest}>
      {children}
    </div>
  );
}

DropdownActionGroup.defaultProps = {
  horizontal: false,
  bordered: false,
  collapse: false,
  className: "",
};

export default DropdownActionGroup;
