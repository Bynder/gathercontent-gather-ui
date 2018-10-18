import React from 'react';
import PropTypes from 'prop-types';
import CollectionsTableBody from './CollectionsTableBody';
import CollectionsTableHead from './CollectionsTableHead';
import CollectionsTableHeading from './CollectionsTableHeading';
import CollectionsTableRow from './CollectionsTableRow';
import CollectionsTableCell from './CollectionsTableCell';
import CollectionsTableAction from './CollectionsTableAction';
import CollectionsTableCellContent from './CollectionsTableCellContent';

const CollectionsTable = props => (
  <table className="collections-table">{props.children}</table>
);

CollectionsTable.propTypes = {
  children: PropTypes.node.isRequired
};

CollectionsTable.Body = CollectionsTableBody;
CollectionsTable.Head = CollectionsTableHead;
CollectionsTable.Heading = CollectionsTableHeading;
CollectionsTable.Row = CollectionsTableRow;
CollectionsTable.Cell = CollectionsTableCell;
CollectionsTable.CellContent = CollectionsTableCellContent;
CollectionsTable.Action = CollectionsTableAction;

export default CollectionsTable;
