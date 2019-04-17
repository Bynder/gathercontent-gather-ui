import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const PricingToggleItem = ({ children, onClick, savings, isActive }) => {
  const classNames = cx('pricing-toggle__item', {
    'is-active': isActive
  });

  return (
    <button className={classNames} onClick={onClick} type="button">
      {children}
      {savings && <span className="pricing-toggle__flag">{savings}</span>}
    </button>
  );
};

PricingToggleItem.propTypes = {
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  savings: PropTypes.string,
  isActive: PropTypes.bool
};

PricingToggleItem.defaultProps = {
  savings: null,
  isActive: false
};

export default PricingToggleItem;
