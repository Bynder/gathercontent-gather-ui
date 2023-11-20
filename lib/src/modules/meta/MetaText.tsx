import React from "react";
import cx from "classnames";

function MetaText({ children, className, truncate }: any) {
  const classNames = cx(
    "gui-meta-text text-neutral-primary text-sm",
    className,
    {
      truncate,
    }
  );

  return <div className={classNames}>{children}</div>;
}

MetaText.defaultProps = {
  truncate: true,
};

export { MetaText };
