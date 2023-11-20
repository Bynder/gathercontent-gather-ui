import React from "react";
import cx from "classnames";

export function CheckboxInput({ checked, className, hasError, ...rest }: any) {
  const classes = cx(`gui-gc-checkbox ${className}`, {
    "gui-gc-checkbox-error": hasError,
  });

  return (
    <input type="checkbox" className={classes} checked={checked} {...rest} />
  );
}
