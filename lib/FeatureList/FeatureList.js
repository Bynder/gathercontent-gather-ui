import React from 'react';
import PropTypes from 'prop-types';

const FeatureList = ({ title, children, className, ...rest }) => (
  <div className={`feature-list ${className}`} {...rest}>
    <h3 className="feature-list__title">{title}</h3>
    <ul>{children}</ul>
  </div>
);

FeatureList.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

FeatureList.defaultProps = {
  className: ''
};

export default FeatureList;
