'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = require('react-bootstrap');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ModalHeader = function ModalHeader(props) {
  return _react2.default.createElement(
    _reactBootstrap.Modal.Header,
    null,
    _react2.default.createElement(
      _reactBootstrap.Modal.Title,
      null,
      props.children
    )
  );
};

exports.default = ModalHeader;