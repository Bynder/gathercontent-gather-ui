import React from 'react';
import PropTypes from 'prop-types';

const FeatureListItem = ({ children, className, ...rest }) => (
  <li className={`feature-list__item ${className}`} {...rest}>
    {children}
  </li>
);

FeatureListItem.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

FeatureListItem.defaultProps = {
  className: ''
};

export default FeatureListItem;
