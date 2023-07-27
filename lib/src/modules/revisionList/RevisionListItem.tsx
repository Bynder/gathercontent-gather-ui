import cx from "classnames";
import React, { HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLLIElement> {
  leftContent?: React.ReactNode;
  active?: boolean;
}

export function RevisionListItem({
  children,
  className = "",
  leftContent = null,
  active = false,
  ...rest
}: Props) {
  const classes = cx(className, "revision-list-item", {
    "revision-list-item-active": active,
  });
  return (
    <li className={classes} {...rest}>
      <div className="revision-list-item-left">{leftContent}</div>
      <div className="revision-list-item-right">{children}</div>
    </li>
  );
}
