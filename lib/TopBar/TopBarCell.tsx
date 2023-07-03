import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";

export function TopBarCell(props: any) {
  const classes = cx(`top-bar__cell ${props.className}`, {
    "top-bar__cell--bordered": props.bordered,
  });
  return <div className={classes}>{props.children}</div>;
}

TopBarCell.propTypes = {
  bordered: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    // @ts-expect-error TS(2554): Expected 1 arguments, but got 0.
    PropTypes.arrayOf(PropTypes.shape()),
  ]),
  className: PropTypes.string,
};

TopBarCell.defaultProps = {
  bordered: false,
  children: [],
  className: "",
};

export default TopBarCell;
