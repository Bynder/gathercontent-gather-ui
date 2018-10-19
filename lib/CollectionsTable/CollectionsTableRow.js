import React from 'react';
import { defaultProps, propTypes } from './';

const CollectionsTableRow = ({ children, className, ...props }) => (
  <tr className={`collections-table__row ${className}`} {...props}>
    {children}
  </tr>
);

CollectionsTableRow.propTypes = propTypes;
CollectionsTableRow.defaultProps = defaultProps;

export default CollectionsTableRow;
