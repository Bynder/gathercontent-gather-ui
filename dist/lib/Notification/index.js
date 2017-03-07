'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lib = require('react-bootstrap/lib');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @usage
 *
 * <Notification level="warning">This is a warning</Notification>
 */
var Notification = function Notification(_ref) {
  var children = _ref.children,
      level = _ref.level,
      clickHandler = _ref.clickHandler;

  var alertClasses = (0, _classnames2.default)({
    'has-click-handler': clickHandler
  });

  return _react2.default.createElement(
    _lib.Alert,
    {
      onClick: clickHandler,
      bsStyle: level,
      className: 'notification notification--' + level + ' ' + alertClasses
    },
    children
  );
};

Notification.defaultProps = {
  clickHandler: function clickHandler() {}
};

Notification.propTypes = {
  level: _react.PropTypes.string.isRequired,
  clickHandler: _react.PropTypes.func,
  children: _react.PropTypes.node.isRequired
};

exports.default = Notification;