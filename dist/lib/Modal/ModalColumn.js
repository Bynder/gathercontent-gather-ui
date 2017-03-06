'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ModalColumn = function ModalColumn(props) {
  return _react2.default.createElement(
    'div',
    { className: 'modal__column ' + props.className },
    props.children
  );
};

ModalColumn.propTypes = {
  children: _react.PropTypes.node,
  className: _react.PropTypes.string
};

exports.default = ModalColumn;