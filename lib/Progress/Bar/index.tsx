import React from "react";
import cx from "classnames";

function ProgressBar({ className, children }: any) {
  const classes = cx(["progress__bar", className]);

  return <div className={classes}>{children}</div>;
}

ProgressBar.defaultProps = {
  className: "",
};

export default ProgressBar;
