import React from "react";
import cx from "classnames";

export function TopBarGroup(props: any) {
  const classes = cx("gui-top-bar__group", {
    "gui-top-bar__group--collapse": props.collapse,
  });
  return <div className={classes}>{props.children}</div>;
}

TopBarGroup.defaultProps = {
  collapse: false,
  children: [],
};

export default TopBarGroup;
