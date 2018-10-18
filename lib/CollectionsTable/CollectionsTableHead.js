import React from 'react';
import PropTypes from 'prop-types';

const CollectionsTableHead = ({ children, ...props }) => (
  <thead className="collections-table__head" {...props}>
    {children}
  </thead>
);

CollectionsTableHead.propTypes = {
  children: PropTypes.node.isRequired
};

export default CollectionsTableHead;
