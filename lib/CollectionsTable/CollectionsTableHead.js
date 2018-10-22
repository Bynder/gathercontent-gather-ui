import React from 'react';
import { propTypes, defaultProps } from './';

const CollectionsTableHead = ({ children, className, ...props }) => (
  <thead className={`collections-table__head ${className}`} {...props}>
    {children}
  </thead>
);

CollectionsTableHead.propTypes = propTypes;
CollectionsTableHead.defaultProps = defaultProps;

export default CollectionsTableHead;
