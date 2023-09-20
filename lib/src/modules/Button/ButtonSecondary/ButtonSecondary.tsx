import React from "react";
import cx from "classnames";
import { ButtonBase } from "../ButtonBase";
import { defaultProps, sizes } from "../common";

function ButtonSecondary({
  children,
  className,
  disabled,
  active,
  ...rest
}: any) {
  const classes = cx("button-secondary inherit-color-icon", className, {
    "button-secondary-active": active,
  });

  return (
    <ButtonBase
      className={classes}
      disabled={disabled}
      active={active}
      {...rest}
    >
      {children}
    </ButtonBase>
  );
}

ButtonSecondary.defaultProps = defaultProps;

ButtonSecondary.sizes = sizes;

export { ButtonSecondary };
