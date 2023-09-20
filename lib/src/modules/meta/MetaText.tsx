import React from "react";
import cx from "classnames";

function MetaText({ children, className, truncate }: any) {
  const classNames = cx("meta-text text-neutral-primary text-sm", className, {
    truncate,
  });

  return <div className={classNames}>{children}</div>;
}

MetaText.defaultProps = {
  truncate: true,
};

export { MetaText };
