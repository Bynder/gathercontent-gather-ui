import React from "react";
import { bool } from "prop-types";
import cx from "classnames";
import { ButtonBase } from "../ButtonBase";
import { defaultProps, sizes } from "../common";

function ButtonTertiary({
  children,
  className,
  disabled,
  active,
  contained,
  ...rest
}: any) {
  const classes = cx("button-tertiary", className, {
    "button-tertiary-active": active,
    "button-tertiary-contained": contained,
  });

  return (
    <ButtonBase
      className={classes}
      loaderTypes={["neutral-20"]}
      disabled={disabled}
      {...rest}
    >
      {children}
    </ButtonBase>
  );
}

ButtonTertiary.defaultProps = {
  ...defaultProps,
  active: false,
};

ButtonTertiary.sizes = sizes;

export { ButtonTertiary };
