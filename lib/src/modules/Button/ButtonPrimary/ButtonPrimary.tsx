import React from "react";
import cx from "classnames";
import { ButtonBase } from "../ButtonBase";
import { ButtonTypes, defaultProps, sizes } from "../common";

function ButtonPrimary({
  children,
  className,
  disabled,
  connectedRight,
  ...rest
}: ButtonTypes) {
  const classes = cx("button-primary", className, {
    "button-primary-connected-right": connectedRight,
  });

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

ButtonPrimary.defaultProps = defaultProps;

ButtonPrimary.sizes = sizes;

export { ButtonPrimary };
