import React from 'react';
import PropTypes from 'prop-types';

const FeatureListItem = ({ children }) => (
  <li className="feature-list__item">{children}</li>
);

FeatureListItem.propTypes = {
  children: PropTypes.node.isRequired
};

export default FeatureListItem;
