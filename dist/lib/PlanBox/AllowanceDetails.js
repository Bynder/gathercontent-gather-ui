'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PlanBoxAllowanceDetails = function PlanBoxAllowanceDetails(props) {
  return _react2.default.createElement(
    'ul',
    { className: 'plan-box__allowance-info' },
    _react2.default.createElement(
      'li',
      null,
      props.iconElement,
      props.plan.items,
      ' Item limit'
    ),
    _react2.default.createElement(
      'li',
      null,
      props.iconElement,
      props.plan.projects,
      ' Active Projects'
    ),
    _react2.default.createElement(
      'li',
      null,
      props.iconElement,
      'Unlimited users'
    ),
    _react2.default.createElement(
      'li',
      null,
      props.iconElement,
      '100GB storage'
    )
  );
};

PlanBoxAllowanceDetails.defaultProps = {
  iconElement: ''
};

PlanBoxAllowanceDetails.propTypes = {
  iconElement: _react.PropTypes.node,
  plan: _react.PropTypes.shape({
    items: _react.PropTypes.number,
    projects: _react.PropTypes.number
  }).isRequired
};

exports.default = PlanBoxAllowanceDetails;