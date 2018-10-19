import React from 'react';
import { propTypes, defaultProps } from './';

const CollectionsTableHeading = ({ children, className, ...props }) => (
  <th className={`collections-table__heading ${className}`} {...props}>
    {children}
  </th>
);

CollectionsTableHeading.propTypes = propTypes;
CollectionsTableHeading.defaultProps = defaultProps;

export default CollectionsTableHeading;
