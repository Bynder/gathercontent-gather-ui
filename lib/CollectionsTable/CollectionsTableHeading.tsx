import React from "react";
import { defaultProps } from "./propTypes";
import CollectionsTableCellContent from "./CollectionsTableCellContent";

function CollectionsTableHeading({ children, className, ...props }: any) {
  return (
    <div
      className={`collections-table__heading ${className}`}
      {...props}
      role="columnheader"
    >
      <CollectionsTableCellContent>{children}</CollectionsTableCellContent>
    </div>
  );
}

CollectionsTableHeading.defaultProps = defaultProps;

export default CollectionsTableHeading;
