import React, { HTMLAttributes } from "react";
import { RevisionListItem } from "./RevisionListItem";
import { RevisionListTimestamp } from "./RevisionListTimestamp";
import { RevisionListStatus } from "./RevisionListStatus";
import { RevisionListNote } from "./RevisionListNote";
import { RevisionListHeading } from "./RevisionListHeading";

export function RevisionList({
  children,
  className = "",
  ...rest
}: HTMLAttributes<HTMLUListElement>) {
  return (
    <ul className={`${className} revision-list`} {...rest}>
      {children}
    </ul>
  );
}

RevisionList.Item = RevisionListItem;
RevisionList.Timestamp = RevisionListTimestamp;
RevisionList.Status = RevisionListStatus;
RevisionList.Note = RevisionListNote;
RevisionList.Heading = RevisionListHeading;
