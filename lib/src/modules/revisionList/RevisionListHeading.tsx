import React, { HTMLAttributes } from "react";

export function RevisionListHeading({
  className = "",
  children,
}: HTMLAttributes<HTMLHeadingElement>) {
  return <h3 className={`${className} revision-list-heading`}>{children}</h3>;
}
