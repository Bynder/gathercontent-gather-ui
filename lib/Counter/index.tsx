import React from "react";
import cx from "classnames";

export function Counter({ children, className }: any) {
  const classes = cx(
    className,
    "counter rounded-small font-semi-bold bg-blue-primary text-white p-px"
  );

  return <span className={classes}>{children}</span>;
}

Counter.defaultProps = {
  className: "",
};
