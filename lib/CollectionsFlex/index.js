import React from 'react';
import PropTypes from 'prop-types';
// import CollectionsTableBody from './CollectionsTableBody';
import CollectionsFlexHead from './CollectionsFlexHead';
import CollectionsFlexHeading from './CollectionsFlexHeading';
import CollectionsFlexRow from './CollectionsFlexRow';
import CollectionsFlexCell from './CollectionsFlexCell';
// import CollectionsTableAction from './CollectionsTableAction';
import CollectionsFlexCellContent from './CollectionsFlexCellContent';

const CollectionsFlex = ({ children, className, ...props }) => (
  <div className={`collections-flex ${className}`} {...props}>
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

CollectionsFlex.propTypes = propTypes;
CollectionsFlex.defaultProps = defaultProps;

// CollectionsTable.Body = CollectionsTableBody;
CollectionsFlex.Head = CollectionsFlexHead;
CollectionsFlex.Heading = CollectionsFlexHeading;
CollectionsFlex.Row = CollectionsFlexRow;
CollectionsFlex.Cell = CollectionsFlexCell;
CollectionsFlex.CellContent = CollectionsFlexCellContent;
// CollectionsTable.Action = CollectionsTableAction;

export default CollectionsFlex;
