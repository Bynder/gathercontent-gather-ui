import React from "react";
import cx from "classnames";
import { defaultProps, sizes } from "./common";

function PillBase({ className, children, size, ...rest }: any) {
  const classes = cx(`gui-pill inline-flex items-center rounded ${className}`, {
    "py-1 px-3 text-base": size === sizes.md,
    "p-1 px-05 text-xs font-semi-bold leading-4": size === sizes.xs,
    "text-[0.625rem] h-4 px-1": size === sizes.xxs,
  });

  return (
    <span className={classes} {...rest}>
      {children}
    </span>
  );
}

PillBase.defaultProps = defaultProps;

export default PillBase;
