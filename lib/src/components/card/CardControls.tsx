import React from "react";
import cx from "classnames";

function CardControls({ children, className }: any) {
  const classNames = cx("gui-card-controls", className);

  return <div className={classNames}>{children}</div>;
}

export { CardControls };
