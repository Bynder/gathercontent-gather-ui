import React from 'react';
import PropTypes from 'prop-types';
import CollectionsTableCellContent from './CollectionsTableCellContent';
import { defaultProps, propTypes } from '.';

const CollectionsTableCell = ({
  children,
  className,
  allowOverflow,
  ...props
}) => (
  <div className={`collections-table__cell ${className}`} {...props}>
    <CollectionsTableCellContent allowOverflow={allowOverflow}>
      {children}
    </CollectionsTableCellContent>
  </div>
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
