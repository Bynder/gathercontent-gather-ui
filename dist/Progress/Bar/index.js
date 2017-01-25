'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ProgressBar = function ProgressBar(_ref) {
  var className = _ref.className,
      children = _ref.children;

  var classes = (0, _classnames2.default)(['c-progress-bar', className]);

  return _react2.default.createElement(
    'div',
    { className: classes },
    children
  );
};

ProgressBar.propTypes = {
  children: _react.PropTypes.node.isRequired,
  className: _react.PropTypes.string
};

ProgressBar.defaultProps = {
  className: ''
};

exports.default = ProgressBar;