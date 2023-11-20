import React, { HTMLAttributes } from "react";

export function RevisionListNote({
  className = "",
  children,
  ...rest
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={`${className} gui-revision-list-note`} {...rest}>
      <h4 className="gui-revision-list-note-heading">Note</h4>
      {children}
    </div>
  );
}
