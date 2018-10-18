import React from 'react';
import PropTypes from 'prop-types';

const CollectionsTableRow = ({ children, ...props }) => (
  <tr className="collections-table__row" {...props}>
    {children}
  </tr>
);

CollectionsTableRow.propTypes = {
  children: PropTypes.node.isRequired
};

export default CollectionsTableRow;
