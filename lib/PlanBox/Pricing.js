import React, { PropTypes } from 'react';

const PlanBoxPricing = (props) => {
  const billingInfo = props.priceType === 'priceMonthly' ? '' : 'Billed annually';

  return (
    <div className="plan-box__prices">
      { props.originalPrice &&
        <div className="plan-box__price plan-box__price--original">
          <span className="plan-box__currency">$ </span>
          <span className="plan-box__price-text">{props.originalPrice}</span>
          <span className="plan-box__recurring">{props.priceIn}</span>
        </div>
      }

      { props.price &&
        <div className="plan-box__price plan-box__price--large">
          <span className="plan-box__currency">$</span>
          <span className="plan-box__price-text">{props.price}</span>
          <span className="plan-box__recurring">{props.priceIn}</span>
        </div>
      }

      { props.savings &&
        <div className="plan-box__price plan-box__price--savings">
          Save
          <span className="plan-box__price-text plan-box__price-text--medium"> <strong>${props.savings}</strong></span>
        </div>
      }

      <span className="plan-box__billing-info">{ billingInfo }</span>
    </div>
  );
};

PlanBoxPricing.defaultProps = {
  priceIn: '',
  savings: 0,
  originalPrice: 0,
};

PlanBoxPricing.propTypes = {
  price: PropTypes.number.isRequired,
  priceIn: PropTypes.string,
  priceType: PropTypes.string.isRequired,
  savings: PropTypes.number,
  originalPrice: PropTypes.number,
};

export default PlanBoxPricing;
