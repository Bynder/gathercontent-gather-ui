import React from 'react';
import { propTypes, defaultProps } from './propTypes';
import CollectionsTableCellContent from './CollectionsTableCellContent';

const CollectionsTableHeading = ({ children, className, ...props }) => (
  <div className={`collections-table__heading ${className}`} {...props}>
    <CollectionsTableCellContent>{children}</CollectionsTableCellContent>
  </div>
);

CollectionsTableHeading.propTypes = propTypes;
CollectionsTableHeading.defaultProps = defaultProps;

export default CollectionsTableHeading;
