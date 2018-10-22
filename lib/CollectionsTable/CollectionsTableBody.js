import React from 'react';
import { propTypes, defaultProps } from './';

const CollectionsTableBody = ({ children, className, ...props }) => (
  <tbody className={`collections-table__body , ${className}`} {...props}>
    {children}
  </tbody>
);

CollectionsTableBody.propTypes = propTypes;
CollectionsTableBody.defaultProps = defaultProps;

export default CollectionsTableBody;
