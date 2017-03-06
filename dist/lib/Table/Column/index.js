'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TableColumn = function TableColumn(props) {
  return _react2.default.createElement(
    'span',
    { className: props.className },
    props.children
  );
};

TableColumn.propTypes = {
  className: _react.PropTypes.string,
  children: _react.PropTypes.node.isRequired
};

exports.default = TableColumn;