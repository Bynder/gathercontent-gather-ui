import React, { HTMLAttributes } from "react";

export function RevisionListItem({
  children,
  className = "",
  ...rest
}: HTMLAttributes<HTMLLIElement>) {
  return (
    <li className={`${className} revision-list-item`} {...rest}>
      {children}
    </li>
  );
}
