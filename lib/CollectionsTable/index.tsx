import React from "react";
import CollectionsTableHead from "./CollectionsTableHead";
import CollectionsTableHeading from "./CollectionsTableHeading";
import CollectionsTableRow from "./CollectionsTableRow";
import CollectionsTableCell from "./CollectionsTableCell";
import CollectionsTableCellContent from "./CollectionsTableCellContent";
import { defaultProps } from "./propTypes";

export function CollectionsTable({ children, className, ...props }: any) {
  return (
    <div className={`collections-table ${className}`} {...props} role="table">
      {children}
    </div>
  );
}

CollectionsTable.defaultProps = defaultProps;

CollectionsTable.Head = CollectionsTableHead;
CollectionsTable.Heading = CollectionsTableHeading;
CollectionsTable.Row = CollectionsTableRow;
CollectionsTable.Cell = CollectionsTableCell;
CollectionsTable.CellContent = CollectionsTableCellContent;

export default CollectionsTable;
