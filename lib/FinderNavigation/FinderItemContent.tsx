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
  const classNames = cx(`finder-item-content ${className}`, {
    "finder-item-content-hidden": hidden,
    "finder-item-content-folder": isFolder,
  });

  return (
    <div className={classNames} {...rest}>
      <div className="finder-item-content-inner">{children}</div>
    </div>
  );
}

FinderItemContent.defaultProps = {
  className: "",
  isFolder: false,
  hidden: false,
};

export default FinderItemContent;
