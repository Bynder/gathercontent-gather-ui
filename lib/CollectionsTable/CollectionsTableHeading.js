import React from 'react';
import PropTypes from 'prop-types';

const CollectionsTableHeading = props => (
  <th className="collections-table__heading">{props.children}</th>
);

CollectionsTableHeading.propTypes = {
  children: PropTypes.node.isRequired
};

export default CollectionsTableHeading;
