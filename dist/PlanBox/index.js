'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Button = require('./Button');

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getDisabledClass(disabled) {
  return disabled ? 'is-disabled' : '';
}

function getRecommendedClass(recommended) {
  return recommended ? 'plan-box--recommended' : '';
}

function getStateClasses(disabled, recommended) {
  return getDisabledClass(disabled) + ' ' + getRecommendedClass(recommended);
}

var PlanBox = function PlanBox(props) {
  return _react2.default.createElement(
    'div',
    { className: 'plan-box ' + getStateClasses(props.disabled, props.recommended) },
    _react2.default.createElement(
      'div',
      { className: 'plan-box__content' },
      _react2.default.createElement(
        'h1',
        { className: 'plan-box__title ' + props.headingClassName + ' ' },
        props.name
      ),
      _react2.default.createElement(
        'p',
        { className: 'plan-box__description' },
        props.description
      ),
      props.children,
      _react2.default.createElement(_Button2.default, {
        recommended: props.recommended,
        href: props.upgradeUrl,
        buttonText: props.buttonText,
        disabled: props.disabled,
        useInput: props.buttonUseInput,
        clickHandler: props.buttonClickHandler
      })
    )
  );
};

PlanBox.defaultProps = {
  disabled: false
};

PlanBox.propTypes = {
  name: _react.PropTypes.string,
  description: _react.PropTypes.string,
  children: _react.PropTypes.node,
  upgradeUrl: _react.PropTypes.string,
  buttonText: _react.PropTypes.string,
  disabled: _react.PropTypes.bool,
  recommended: _react.PropTypes.bool,
  buttonUseInput: _react.PropTypes.bool,
  buttonClickHandler: _react.PropTypes.func,
  headingClassName: _react.PropTypes.string
};

exports.default = PlanBox;