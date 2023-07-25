import React, { HTMLAttributes } from "react";

export function RevisionListHeading({
  className = "",
  children,
  ...rest
}: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3 className={`${className} revision-list-heading`} {...rest}>
      {children}
    </h3>
  );
}
