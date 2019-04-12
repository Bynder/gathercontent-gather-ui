import React from 'react';
import PropTypes from 'prop-types';

const FeatureList = ({ title, children }) => (
  <div className="feature-list">
    <h3 className="feature-list__title">{title}</h3>
    <ul>{children}</ul>
  </div>
);

FeatureList.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

export default FeatureList;
