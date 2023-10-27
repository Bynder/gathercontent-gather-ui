import React from "react";
import cx from "classnames";

export function TopBarCell(props: any) {
  const classes = cx(`gui-top-bar__cell ${props.className}`, {
    "gui-top-bar__cell--bordered": props.bordered,
  });
  return <div className={classes}>{props.children}</div>;
}

TopBarCell.defaultProps = {
  bordered: false,
  children: [],
  className: "",
};

export default TopBarCell;
