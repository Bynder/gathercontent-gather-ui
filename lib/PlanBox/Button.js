import React, { PropTypes } from 'react';
import ButtonWithTooltip from '../Button/ButtonWithTooltip';

const PlanBoxButton = (props) => {
  const buttonClass = 'button plan-box__button';

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
      tooltipText={props.tooltipText}
      tooltipSize="large"
      clickHandler={() => {}}
    >
      { props.buttonText }
    </ButtonWithTooltip>
  );
};

PlanBoxButton.defaultProps = {
  disabled: false,
  useInput: false,
  clickHandler: {},
  tooltipText: '',
};

PlanBoxButton.propTypes = {
  href: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  useInput: PropTypes.bool,
  clickHandler: PropTypes.func,
  tooltipText: PropTypes.string,
};

export default PlanBoxButton;
