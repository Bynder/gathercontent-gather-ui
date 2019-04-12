import React from 'react';
import PropTypes from 'prop-types';

const PricingToggle = ({ children }) => (
  <div className="pricing-toggle">{children}</div>
);

PricingToggle.propTypes = {
  children: PropTypes.node.isRequired
};

export default PricingToggle;
