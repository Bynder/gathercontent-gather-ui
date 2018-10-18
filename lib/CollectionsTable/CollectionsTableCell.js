import React from 'react';
import PropTypes from 'prop-types';
import CollectionsTableCellContent from './CollectionsTableCellContent';

const CollectionsTableCell = ({
  children,
  className,
  allowOverflow,
  ...props
}) => (
  <td className={`collections-table__cell ${className}`} {...props}>
    <CollectionsTableCellContent allowOverflow={allowOverflow}>
      {children}
    </CollectionsTableCellContent>
  </td>
);

CollectionsTableCell.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  allowOverflow: PropTypes.bool
};

CollectionsTableCell.defaultProps = {
  className: '',
  allowOverflow: false
};

export default CollectionsTableCell;
