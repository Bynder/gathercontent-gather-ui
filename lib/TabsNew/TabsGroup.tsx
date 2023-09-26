import React from "react";
import cx from "classnames";

function TabsGroup({ children, className, maxNumberOfVisibleRows }: any) {
  const numberOfRows = children.length;

  const tabsClassName = cx("tab-group", {
    "max-h-30": maxNumberOfVisibleRows === 3,
    "overflow-y-hidden": numberOfRows <= maxNumberOfVisibleRows,
    "overflow-y-scroll": numberOfRows > maxNumberOfVisibleRows,
  });

  return <nav className={`${tabsClassName} ${className}`}>{children}</nav>;
}

export { TabsGroup };

TabsGroup.defaultProps = {
  className: "",
  maxNumberOfVisibleRows: 3,
};
