import React, { HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {
  timestamp: string;
}

export function RevisionListTimestamp({
  timestamp,
  className = "",
  children,
  ...rest
}: Props) {
  return (
    <div className={`${className} gui-revision-list-timestamp`} {...rest}>
      <span className="gui-revision-list-time">{timestamp}</span>
      {children}
    </div>
  );
}
