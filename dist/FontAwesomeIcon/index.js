'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FontAwesomeIcon = function FontAwesomeIcon(props) {
  var klass = 'fa ' + props.name + ' ' + props.className;
  var style = props.style;

  return _react2.default.createElement(
    'i',
    { className: klass, style: style },
    props.children
  );
};

FontAwesomeIcon.defaultProps = {
  className: ''
};

FontAwesomeIcon.propTypes = {
  name: _react2.default.PropTypes.string.isRequired,
  className: _react2.default.PropTypes.string,
  children: _react2.default.PropTypes.node,
  style: _react2.default.PropTypes.node
};

exports.default = FontAwesomeIcon;