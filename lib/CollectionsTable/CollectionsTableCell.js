import React from 'react';
import PropTypes from 'prop-types';

const CollectionsTableCell = ({ children, ...props }) => (
  <td className="collections-table__cell" {...props}>{children}</td>
);

CollectionsTableCell.propTypes = {
  children: PropTypes.node.isRequired
};

export default CollectionsTableCell;
