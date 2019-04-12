import React from 'react';
import PropTypes from 'prop-types';

const PricingPlan = ({
  children,
  title,
  price,
  priceDesc,
  savings,
  smallPrint,
  upgradeButton
}) => (
  <article className="pricing__plan">
    <h2 className="pricing__plan-title">{title}</h2>
    <div className="pricing__plan-inner">
      <header className="pricing__plan-header">
        <div className="pricing__plan-price">{price}</div>
        <div className="pricing__plan-description">{priceDesc}</div>
        <div className="pricing__plan-savings">{savings}</div>
        <div className="pricing__plan-small-print">{smallPrint}</div>
        {upgradeButton}
      </header>

      <section className="pricing__plan-body">{children}</section>

      <footer className="pricing__plan-footer">{upgradeButton}</footer>
    </div>
  </article>
);

PricingPlan.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  priceDesc: PropTypes.string.isRequired,
  smallPrint: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  upgradeButton: PropTypes.node.isRequired,
  savings: PropTypes.string
};

PricingPlan.defaultProps = {
  savings: null
};

export default PricingPlan;
