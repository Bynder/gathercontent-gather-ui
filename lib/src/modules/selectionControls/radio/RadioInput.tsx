import React from "react";
import cx from "classnames";

export function RadioInput({ checked, className, hasError, ...rest }: any) {
  const classes = cx(`gui-gc-radio ${className}`, {
    "gui-gc-radio-error": hasError,
  });

  return <input type="radio" className={classes} checked={checked} {...rest} />;
}
