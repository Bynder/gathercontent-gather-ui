import React from 'react';
import PropTypes from 'prop-types';
import CollectionsTableHead from './CollectionsTableHead';
import CollectionsTableHeading from './CollectionsTableHeading';
import CollectionsTableRow from './CollectionsTableRow';
import CollectionsTableCell from './CollectionsTableCell';
import CollectionsTableCellContent from './CollectionsTableCellContent';

const CollectionsTable = ({ children, className, ...props }) => (
  <div className={`collections-table ${className}`} {...props}>
    {children}
  </div>
);

export const propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

export const defaultProps = {
  className: ''
};

CollectionsTable.propTypes = propTypes;
CollectionsTable.defaultProps = defaultProps;

CollectionsTable.Head = CollectionsTableHead;
CollectionsTable.Heading = CollectionsTableHeading;
CollectionsTable.Row = CollectionsTableRow;
CollectionsTable.Cell = CollectionsTableCell;
CollectionsTable.CellContent = CollectionsTableCellContent;

export default CollectionsTable;
