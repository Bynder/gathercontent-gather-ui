import React, { PropTypes } from 'react';
import ButtonWithTooltip from '../Button/ButtonWithTooltip';

const PlanBoxButton = (props) => {
  const buttonClass = 'plan-box__button button--has-tooltip';

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
    <ButtonWithTooltip
      className={buttonClass}
      types={['']}
      tooltipText={props.exceedsUsageMessage}
      clickHandler={() => {}}
    >
      { props.buttonText }
    </ButtonWithTooltip>
  );
};

PlanBoxButton.propTypes = {
  href: PropTypes.string,
  buttonText: PropTypes.string,
  disabled: PropTypes.bool,
  useInput: PropTypes.bool,
  clickHandler: PropTypes.func,
  exceedsUsageMessage: PropTypes.string,
};

export default PlanBoxButton;
