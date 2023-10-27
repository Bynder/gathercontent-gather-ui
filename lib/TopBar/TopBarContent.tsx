import React from "react";
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
  const classes = cx(`gui-top-bar__content ${className}`, {
    "gui-top-bar__content--left": left,
    "gui-top-bar__content--center": center,
    "gui-top-bar__content--right": right,
    "gui-top-bar__content--collapse": collapse,
  });
  return (
    <Col className={classes} {...props}>
      {props.children}
    </Col>
  );
}

TopBarContent.defaultProps = {
  left: false,
  center: false,
  right: false,
  collapse: false,
  children: [],
  className: "",
};

export default TopBarContent;
