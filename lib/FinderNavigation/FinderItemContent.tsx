import React from "react";
import cx from "classnames";

function FinderItemContent({
  className,
  children,
  active,
  hidden,
  isFolder,
  ...rest
}: any) {
  const classNames = cx(`gui-finder-item-content ${className}`, {
    "gui-finder-item-content-hidden": hidden,
    "gui-finder-item-content-folder": isFolder,
  });

  return (
    <div className={classNames} {...rest}>
      <div className="gui-finder-item-content-inner">{children}</div>
    </div>
  );
}

FinderItemContent.defaultProps = {
  className: "",
  isFolder: false,
  hidden: false,
};

export default FinderItemContent;
