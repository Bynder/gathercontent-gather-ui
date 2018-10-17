import React from 'react';
import PropTypes from 'prop-types';

const CollectionsTableBody = props => (
  <tbody className="collections-table__body">{props.children}</tbody>
);

CollectionsTableBody.propTypes = {
  children: PropTypes.node.isRequired
};

export default CollectionsTableBody;
