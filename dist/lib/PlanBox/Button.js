'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ButtonWithTooltip = require('../Button/ButtonWithTooltip');

var _ButtonWithTooltip2 = _interopRequireDefault(_ButtonWithTooltip);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PlanBoxButton = function PlanBoxButton(props) {
  var buttonClass = 'button plan-box__button';

  if (props.clickHandler) {
    return _react2.default.createElement(
      'button',
      { className: buttonClass, onClick: props.clickHandler },
      props.buttonText
    );
  }

  if (!props.disabled) {
    if (props.useInput) {
      return _react2.default.createElement('input', { type: 'submit', className: buttonClass, value: props.buttonText });
    }

    return _react2.default.createElement(
      'a',
      { href: props.href, className: buttonClass },
      props.buttonText
    );
  }

  if (props.buttonText === 'Current Plan') {
    return _react2.default.createElement(
      'span',
      { className: buttonClass },
      props.buttonText
    );
  }

  return _react2.default.createElement(
    _ButtonWithTooltip2.default,
    {
      className: buttonClass,
      types: [''],
      tooltipText: props.tooltipText,
      tooltipSize: 'large',
      clickHandler: function clickHandler() {}
    },
    props.buttonText
  );
};

PlanBoxButton.defaultProps = {
  disabled: false,
  useInput: false,
  clickHandler: {},
  tooltipText: ''
};

PlanBoxButton.propTypes = {
  href: _react.PropTypes.string.isRequired,
  buttonText: _react.PropTypes.string.isRequired,
  disabled: _react.PropTypes.bool,
  useInput: _react.PropTypes.bool,
  clickHandler: _react.PropTypes.func,
  tooltipText: _react.PropTypes.string
};

exports.default = PlanBoxButton;