import React from 'react';
import PropTypes from 'prop-types';

const PricingToggle = ({ children, className, ...rest }) => (
  <div className={`pricing-toggle ${className}`} {...rest}>
    {children}
  </div>
);

PricingToggle.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

PricingToggle.defaultProps = {
  className: ''
};

export default PricingToggle;
