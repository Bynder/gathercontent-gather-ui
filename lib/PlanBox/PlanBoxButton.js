import React, { PropTypes } from 'react';
import i18n from '../../../../assets/i18n';

const PlanBoxButton = (props) => {
  const buttonClass = 'plan-box__button btn--has-tooltip';

  if (props.clickHandler) {
    return (
      <button className={buttonClass} onClick={props.clickHandler}>
        { props.buttonText }
      </button>
    );
  }

  if (!props.disabled) {
    if (props.useInput) {
      return (
        <input type="submit" className={buttonClass} value={props.buttonText} />
      );
    }

    return (
      <a href={props.href} className={buttonClass}>
        { props.buttonText }
      </a>
    );
  }

  if (props.buttonText === 'Current Plan') {
    return <span className={buttonClass}>{ props.buttonText }</span>;
  }

  return (
    <span className={buttonClass}>
      <span className="btn__helper">(?)</span>
      { props.buttonText }
      <span className="btn__tooltip">
        { i18n.pricing.exceedsUsage }
      </span>
    </span>
  );
};

PlanBoxButton.propTypes = {
  href: PropTypes.string,
  buttonText: PropTypes.string,
  disabled: PropTypes.bool,
  useInput: PropTypes.bool,
  clickHandler: PropTypes.func,
};

export default PlanBoxButton;
