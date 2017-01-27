'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 @todo: Add FontAwesomeIcon as an option
 */

var NavLink = function NavLink(props) {
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

NavLink.defaultProps = {
  url: '/',
  className: '',
  preventDefault: false,
  target: null
};

NavLink.propTypes = {
  target: _react.PropTypes.string,
  url: _react.PropTypes.string,
  className: _react.PropTypes.string,
  children: _react.PropTypes.node.isRequired
};

exports.default = NavLink;