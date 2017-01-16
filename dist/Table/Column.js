'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Column = function Column(props) {
  return _react2.default.createElement(
    'span',
    { className: props.className },
    props.children
  );
};

Column.propTypes = {
  className: _react2.default.PropTypes.string,
  children: _react2.default.PropTypes.node.isRequired
};

exports.default = Column;