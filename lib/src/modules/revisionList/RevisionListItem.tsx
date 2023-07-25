import cx from "classnames";
import React, { HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLLIElement> {
  leftContent?: React.ReactNode;
  active?: boolean;
}

export function RevisionListItem({
  children,
  className = "",
  leftContent,
  active,
  ...rest
}: Props) {
  const classes = cx(className, "revision-list-item", {
    "revision-list-item-active": active,
  });
  return (
    <li className={`${className} revision-list-item`} {...rest}>
      <div className="revision-list-item-left">{leftContent}</div>
      <div className="w-full">{children}</div>
    </li>
  );
}
