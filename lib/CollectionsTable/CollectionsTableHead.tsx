import React from 'react';
import { propTypes, defaultProps } from './propTypes';

const CollectionsTableHead = ({ children, className, ...props }) => (
  <div className={`collections-table__head ${className}`} {...props}>
    {children}
  </div>
);

CollectionsTableHead.propTypes = propTypes;
CollectionsTableHead.defaultProps = defaultProps;

export default CollectionsTableHead;
