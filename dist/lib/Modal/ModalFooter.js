'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = require('react-bootstrap');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ModalFooter = function ModalFooter(props) {
  return _react2.default.createElement(
    _reactBootstrap.Modal.Footer,
    null,
    props.children
  );
};

ModalFooter.propTypes = {
  children: _react.PropTypes.node.isRequired
};

exports.default = ModalFooter;