import React from 'react';
import CollectionsTableHead from './CollectionsTableHead';
import CollectionsTableHeading from './CollectionsTableHeading';
import CollectionsTableRow from './CollectionsTableRow';
import CollectionsTableCell from './CollectionsTableCell';
import CollectionsTableCellContent from './CollectionsTableCellContent';
import { propTypes, defaultProps } from './propTypes';

const CollectionsTable = ({
  children,
  className,
  ...props
}: any) => (
  <div className={`collections-table ${className}`} {...props}>
    {children}
  </div>
);

CollectionsTable.propTypes = propTypes;
CollectionsTable.defaultProps = defaultProps;

CollectionsTable.Head = CollectionsTableHead;
CollectionsTable.Heading = CollectionsTableHeading;
CollectionsTable.Row = CollectionsTableRow;
CollectionsTable.Cell = CollectionsTableCell;
CollectionsTable.CellContent = CollectionsTableCellContent;

export default CollectionsTable;
