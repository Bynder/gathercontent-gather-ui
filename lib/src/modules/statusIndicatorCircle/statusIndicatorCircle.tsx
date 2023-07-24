import React, { HTMLAttributes } from "react";
import cx from "classnames";
import Icon from "../../../Icon";

interface Props extends HTMLAttributes<HTMLSpanElement> {
  color: string;
  icon?: string;
  solid?: boolean;
  thickBorder?: boolean;
}

export function StatusIndicatorCircle({
  color,
  icon,
  solid,
  thickBorder,
  className = "",
}: Props) {
  const classes = cx("status-indicator-circle", className, {
    "duration-100": thickBorder,
    "duration-300": !thickBorder,
  });
  const boxShadow = `inset 0px 0px 0px ${thickBorder ? "4" : "2"}px ${color}`;

  const addedStyles = {
    backgroundColor: solid ? color : "transparent",
    boxShadow,
  };

  return (
    <span style={addedStyles} className={classes}>
      {icon && solid ? (
        <Icon name={icon} types={["white"]} defaultActiveColor={false} />
      ) : null}
    </span>
  );
}
