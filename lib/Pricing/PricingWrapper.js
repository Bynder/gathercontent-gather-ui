import React from 'react';
import PropTypes from 'prop-types';

const PricingWrapper = ({ children }) => (
  <div className="pricing__wrapper">{children}</div>
);

PricingWrapper.propTypes = {
  children: PropTypes.node.isRequired
};

export default PricingWrapper;
