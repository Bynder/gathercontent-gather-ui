import React from 'react';
import PropTypes from 'prop-types';
import CollectionsFlexCellContent from './CollectionsFlexCellContent';
import { defaultProps, propTypes } from './';

const CollectionsFlexCell = ({
  children,
  className,
  allowOverflow,
  ...props
}) => (
  <div className={`collections-flex__cell ${className}`} {...props}>
    <CollectionsFlexCellContent allowOverflow={allowOverflow}>
      {children}
    </CollectionsFlexCellContent>
  </div>
);

CollectionsFlexCell.propTypes = {
  ...propTypes,
  allowOverflow: PropTypes.bool
};

CollectionsFlexCell.defaultProps = {
  ...defaultProps,
  allowOverflow: false
};

export default CollectionsFlexCell;
