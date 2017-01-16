'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Nav = function Nav(props) {
  return _react2.default.createElement(
    'a',
    {
      onClick: function onClick(e) {
        return e.stopPropagation();
      },
      target: props.target,
      className: props.className,
      href: props.url
    },
    props.children
  );
};

Nav.defaultProps = {
  url: '/',
  className: '',
  preventDefault: false,
  target: null
};

Nav.propTypes = {
  target: _react2.default.PropTypes.string,
  url: _react2.default.PropTypes.string,
  className: _react2.default.PropTypes.string,
  children: _react2.default.PropTypes.node.isRequired
};

exports.default = Nav;