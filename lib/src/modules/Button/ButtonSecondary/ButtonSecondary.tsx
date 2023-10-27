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
  const classes = cx("gui-button-secondary gui-inherit-color-icon", className, {
    "gui-button-secondary-active": active,
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
