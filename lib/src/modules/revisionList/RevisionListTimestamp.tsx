import React, { HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {
  timestamp: string;
}

export function RevisionListTimestamp({
  timestamp,
  className = "",
  children,
}: Props) {
  return (
    <div className={`${className} revision-list-timestamp`}>
      <span className="revision-list-time">{timestamp}</span>
      {children}
    </div>
  );
}
