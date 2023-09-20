import React from "react";
import cx from "classnames";
import { ButtonBase } from "../ButtonBase";
import { ButtonTypes, defaultProps, sizes } from "../common";

function ButtonPrimaryDanger({
  children,
  className,
  disabled,
  connectedRight,
  ...rest
}: ButtonTypes) {
  const disabledClasses = cx(
    "text-neutral-primary bg-neutral-95 border-neutral-95",
    {
      "border-r-neutral-90": connectedRight,
    }
  );

  const nonDisabledClasses = cx(
    "text-white bg-red-primary border-red-primary",
    "hover:bg-red-60",
    "active:bg-red-40 active:border-red-30 active:shadow-none",
    "focus:border-white focus:shadow-button-primary-danger-focus relative focus:z-50",
    {
      "border-r-red-40": connectedRight,
    }
  );

  const classes = cx(
    disabled ? disabledClasses : nonDisabledClasses,
    className
  );

  return (
    <ButtonBase
      className={classes}
      loaderTypes={["white"]}
      disabled={disabled}
      connectedRight={connectedRight}
      {...rest}
    >
      {children}
    </ButtonBase>
  );
}

ButtonPrimaryDanger.defaultProps = defaultProps;

ButtonPrimaryDanger.sizes = sizes;

export { ButtonPrimaryDanger };
