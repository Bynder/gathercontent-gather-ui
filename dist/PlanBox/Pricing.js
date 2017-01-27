'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PlanBoxPricing = function PlanBoxPricing(props) {
  var billingInfo = props.priceType === 'priceMonthly' ? '' : 'Billed annually';

  return _react2.default.createElement(
    'div',
    { className: 'plan-box__prices' },
    props.originalPrice && _react2.default.createElement(
      'div',
      { className: 'plan-box__price plan-box__price--original' },
      _react2.default.createElement(
        'span',
        { className: 'plan-box__currency' },
        '$ '
      ),
      _react2.default.createElement(
        'span',
        { className: 'plan-box__price-text' },
        props.originalPrice
      ),
      _react2.default.createElement(
        'span',
        { className: 'plan-box__recurring' },
        props.priceIn
      )
    ),
    props.price && _react2.default.createElement(
      'div',
      { className: 'plan-box__price plan-box__price--large' },
      _react2.default.createElement(
        'span',
        { className: 'plan-box__currency' },
        '$'
      ),
      _react2.default.createElement(
        'span',
        { className: 'plan-box__price-text' },
        props.price
      ),
      _react2.default.createElement(
        'span',
        { className: 'plan-box__recurring' },
        props.priceIn
      )
    ),
    props.savings && _react2.default.createElement(
      'div',
      { className: 'plan-box__price plan-box__price--savings' },
      'Save',
      _react2.default.createElement(
        'span',
        { className: 'plan-box__price-text plan-box__price-text--medium' },
        ' ',
        _react2.default.createElement(
          'strong',
          null,
          '$',
          props.savings
        )
      )
    ),
    _react2.default.createElement(
      'span',
      { className: 'plan-box__billing-info' },
      billingInfo
    )
  );
};

PlanBoxPricing.propTypes = {
  price: _react.PropTypes.number,
  priceIn: _react.PropTypes.string,
  priceType: _react.PropTypes.string,
  savings: _react.PropTypes.number,
  originalPrice: _react.PropTypes.number
};

exports.default = PlanBoxPricing;