import React from 'react';
import PropTypes from 'prop-types';

const PricingWrapper = ({ children, smallPrint }) => (
  <div className="pricing__wrapper">
    <div className="pricing__small-print">{smallPrint}</div>
    {children}
  </div>
);

PricingWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  smallPrint: PropTypes.string.isRequired
};

export default PricingWrapper;
