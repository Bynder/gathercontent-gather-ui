'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ModalContent = function ModalContent(props) {
  return _react2.default.createElement(
    'div',
    { className: 'modal__content ' + props.className },
    props.children
  );
};

ModalContent.propTypes = {
  children: _react.PropTypes.arrayOf(_react.PropTypes.node),
  className: _react.PropTypes.string
};

exports.default = ModalContent;