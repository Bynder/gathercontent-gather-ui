import React from "react";
import cx from "classnames";
import { ButtonBase } from "../ButtonBase";
import { defaultProps, sizes } from "../common";

function ButtonTertiaryDanger({ children, className, disabled, ...rest }: any) {
  const nonDisabledClasses = cx(
    "bg-white border-white",
    "text-red-primary",
    "hover:bg-red-95 hover:border-red-95",
    "active:border-red-90 active:bg-red-90 active:shadow-none",
    "focus:border-red-primary focus:shadow-button-tertiary-danger-focus"
  );

  const classes = cx(className, {
    "text-neutral-primary bg-neutral-95 border-neutral-95": disabled,
    [nonDisabledClasses]: !disabled,
  });

  return (
    <ButtonBase
      className={classes}
      loaderTypes={["danger"]}
      disabled={disabled}
      {...rest}
    >
      {children}
    </ButtonBase>
  );
}

ButtonTertiaryDanger.defaultProps = defaultProps;

ButtonTertiaryDanger.sizes = sizes;

export { ButtonTertiaryDanger };
