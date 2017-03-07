'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PlanBoxWrapper = function PlanBoxWrapper(props) {
  return _react2.default.createElement(
    'div',
    { className: 'plan-box__wrapper plan-box__wrapper--highlight-all ' + props.className },
    _react2.default.createElement(
      'div',
      { className: 'grid ' + props.gridClassName },
      _react2.default.Children.map(props.children, function (child) {
        return _react2.default.createElement(
          'div',
          { className: 'grid__cell grid__cell--1-3 ' + props.gridCellClassName },
          child
        );
      })
    )
  );
};

PlanBoxWrapper.defaultProps = {
  className: '',
  gridClassName: '',
  gridCellClassName: ''
};

PlanBoxWrapper.propTypes = {
  children: _react.PropTypes.arrayOf(_react.PropTypes.node).isRequired,
  className: _react.PropTypes.string,
  gridClassName: _react.PropTypes.string,
  gridCellClassName: _react.PropTypes.string
};

exports.default = PlanBoxWrapper;