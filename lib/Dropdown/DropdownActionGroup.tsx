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
  const classNames = cx(`dropdown__action-group ${className}`, {
    "dropdown__action-group--horizontal": horizontal,
    "dropdown__action-group--bordered": bordered,
    "dropdown__action-group--collapse": collapse,
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
