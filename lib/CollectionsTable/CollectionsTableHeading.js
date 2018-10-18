import React from 'react';
import PropTypes from 'prop-types';

const CollectionsTableHeading = ({ children, className, ...props }) => (
  <th className={`collections-table__heading ${className}`} {...props}>
    {children}
  </th>
);

CollectionsTableHeading.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

CollectionsTableHeading.defaultProps = {
  className: ''
};

export default CollectionsTableHeading;
