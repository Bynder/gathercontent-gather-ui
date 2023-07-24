import React, { HTMLAttributes } from "react";

export function RevisionListNote({
  className = "",
  children,
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={`${className} revision-list-note`}>
      <h4 className="revision-list-note-heading">Note</h4>
      {children}
    </div>
  );
}
