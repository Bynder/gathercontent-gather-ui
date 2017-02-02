'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lib = require('react-bootstrap/lib');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DropdownSwitcher = function DropdownSwitcher(_ref) {
  var title = _ref.title,
      id = _ref.id,
      menu = _ref.menu;
  return _react2.default.createElement(
    _lib.Dropdown,
    { className: 'dropdown-switcher', id: id },
    _react2.default.createElement(
      'div',
      { bsRole: 'toggle' },
      _react2.default.createElement(
        'h3',
        { className: 'dropdown-switcher__title' },
        title
      ),
      _react2.default.createElement('i', { className: 'fa fa-caret-down dropdown-switcher__arrow' })
    ),
    menu
  );
};

DropdownSwitcher.propTypes = {
  title: _react2.default.PropTypes.string.isRequired,
  id: _react2.default.PropTypes.string.isRequired,
  menu: _react2.default.PropTypes.node.isRequired
};

DropdownSwitcher.defaultProps = {
  title: '',
  id: ''
};

exports.default = DropdownSwitcher;