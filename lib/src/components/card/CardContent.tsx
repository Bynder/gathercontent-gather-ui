import React from "react";
import cx from "classnames";

function CardContent({ children, className }: any) {
  const classNames = cx("gui-card-content", className);

  return <div className={classNames}>{children}</div>;
}

export { CardContent };
