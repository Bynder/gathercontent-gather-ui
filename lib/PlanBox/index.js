import React from 'react';
import PropTypes from 'prop-types';
import PlanBoxButton from './Button';

function getDisabledClass(disabled) {
  return disabled ? 'is-disabled' : '';
}

function getRecommendedClass(recommended) {
  return recommended ? 'plan-box--recommended' : '';
}

function getStateClasses(disabled, recommended) {
  return `${getDisabledClass(disabled)} ${getRecommendedClass(recommended)}`;
}

const PlanBox = props => (
  <div
    className={`plan-box ${getStateClasses(props.disabled, props.recommended)}`}
  >
    <div className="plan-box__content">
      <h1 className={`plan-box__title ${props.headingClassName} `}>
        {props.name}
      </h1>
      <p className="plan-box__description">{props.description}</p>

      {props.children}

      <PlanBoxButton
        recommended={props.recommended}
        href={props.upgradeUrl}
        buttonText={props.buttonText}
        disabled={props.disabled}
        useInput={props.buttonUseInput}
        clickHandler={props.buttonClickHandler}
        tooltipText={props.tooltipText}
      />
    </div>
  </div>
);

PlanBox.defaultProps = {
  disabled: false,
  recommended: false,
  buttonUseInput: false,
  headingClassName: '',
  buttonClickHandler: null
};

PlanBox.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  upgradeUrl: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  recommended: PropTypes.bool,
  buttonUseInput: PropTypes.bool,
  buttonClickHandler: PropTypes.func,
  headingClassName: PropTypes.string,
  tooltipText: PropTypes.string.isRequired
};

export default PlanBox;
