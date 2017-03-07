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

ModalContent.defaultProps = {
  className: ''
};

ModalContent.propTypes = {
  children: _react.PropTypes.arrayOf(_react.PropTypes.node).isRequired,
  className: _react.PropTypes.string
};

exports.default = ModalContent;