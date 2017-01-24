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
 * <NotificationAlert text="This is a warning" level="warning">
 *
 * level {danger, warning, info, success}
 */
var NotificationAlert = function NotificationAlert(_ref) {
  var text = _ref.text,
      dangerousText = _ref.dangerousText,
      level = _ref.level,
      onClickHandler = _ref.onClickHandler;

  var baseClass = 'alert--';
  var klass = baseClass.concat(level);
  var alertClasses = (0, _classnames2.default)({
    'has-click-handler': onClickHandler
  });

  return _react2.default.createElement(
    _lib.Alert,
    { onClick: onClickHandler, bsStyle: level, className: klass + ' ' + alertClasses },
    dangerousText && _react2.default.createElement('span', { className: 'alert__message', dangerouslySetInnerHTML: { __html: dangerousText } }),
    text && _react2.default.createElement(
      'span',
      { className: 'alert__message' },
      text
    )
  );
};

NotificationAlert.propTypes = {
  text: _react2.default.PropTypes.string,
  dangerousText: _react2.default.PropTypes.string,
  level: _react2.default.PropTypes.string,
  onClickHandler: _react2.default.PropTypes.func
};

exports.default = NotificationAlert;