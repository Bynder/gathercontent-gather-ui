'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _i18n = require('../../../../assets/i18n');

var _i18n2 = _interopRequireDefault(_i18n);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PlanBoxButton = function PlanBoxButton(props) {
  var buttonClass = 'plan-box__button btn--has-tooltip';

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
    'span',
    { className: buttonClass },
    _react2.default.createElement(
      'span',
      { className: 'btn__helper' },
      '(?)'
    ),
    props.buttonText,
    _react2.default.createElement(
      'span',
      { className: 'btn__tooltip' },
      _i18n2.default.pricing.exceedsUsage
    )
  );
};

PlanBoxButton.propTypes = {
  href: _react.PropTypes.string,
  buttonText: _react.PropTypes.string,
  disabled: _react.PropTypes.bool,
  useInput: _react.PropTypes.bool,
  clickHandler: _react.PropTypes.func
};

exports.default = PlanBoxButton;