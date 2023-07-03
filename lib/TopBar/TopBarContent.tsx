import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import { Col } from "lib";

export function TopBarContent({
  left,
  center,
  right,
  collapse,
  className,
  ...props
}: any) {
  const classes = cx(`top-bar__content ${className}`, {
    "top-bar__content--left": left,
    "top-bar__content--center": center,
    "top-bar__content--right": right,
    "top-bar__content--collapse": collapse,
  });
  return (
    <Col className={classes} {...props}>
      {props.children}
    </Col>
  );
}

TopBarContent.propTypes = {
  left: PropTypes.bool,
  center: PropTypes.bool,
  right: PropTypes.bool,
  collapse: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    // @ts-expect-error TS(2554): Expected 1 arguments, but got 0.
    PropTypes.arrayOf(PropTypes.shape()),
  ]),
  className: PropTypes.string,
};

TopBarContent.defaultProps = {
  left: false,
  center: false,
  right: false,
  collapse: false,
  children: [],
  className: "",
};

export default TopBarContent;
