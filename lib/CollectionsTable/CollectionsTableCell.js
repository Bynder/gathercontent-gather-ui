import React from 'react';
import PropTypes from 'prop-types';
import CollectionsTableCellContent from './CollectionsTableCellContent';
import { defaultProps, propTypes } from './';

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
  ...propTypes,
  allowOverflow: PropTypes.bool
};

CollectionsTableCell.defaultProps = {
  ...defaultProps,
  allowOverflow: false
};

export default CollectionsTableCell;
