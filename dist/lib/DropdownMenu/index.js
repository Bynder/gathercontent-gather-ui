'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _FontAwesomeIcon = require('../FontAwesomeIcon');

var _FontAwesomeIcon2 = _interopRequireDefault(_FontAwesomeIcon);

var _Button = require('../Button');

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DropdownMenu = function (_Component) {
  _inherits(DropdownMenu, _Component);

  _createClass(DropdownMenu, null, [{
    key: 'handleBodyClick',
    value: function handleBodyClick(e) {
      e.stopPropagation();
    }
  }, {
    key: 'makeItems',
    value: function makeItems(items) {
      return items.map(function (item, index) {
        var type = item.type;

        if (typeof type === 'undefined') {
          type = 'button';
        }

        switch (type) {
          case 'separator':
            return _react2.default.createElement('li', { className: 'dropdown__separator', key: index });

          case 'link':
            return _react2.default.createElement(
              'li',
              { className: 'dropdown__item', key: index },
              _react2.default.createElement(
                'a',
                { className: 'dropdown__link', href: item.href },
                item.name
              )
            );

          default:
            return _react2.default.createElement(
              'li',
              { className: 'dropdown__item', key: index },
              _react2.default.createElement(
                'button',
                { className: 'dropdown__link', onClick: item.action },
                item.name
              )
            );
        }
      });
    }
  }]);

  function DropdownMenu(props) {
    _classCallCheck(this, DropdownMenu);

    var _this = _possibleConstructorReturn(this, (DropdownMenu.__proto__ || Object.getPrototypeOf(DropdownMenu)).call(this, props));

    _this.toggleItems = _this.toggleItems.bind(_this);
    _this.closeDropdown = _this.closeDropdown.bind(_this);

    _this.state = { selected: false };
    return _this;
  }

  _createClass(DropdownMenu, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      document.body.addEventListener('click', this.closeDropdown);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      document.body.removeEventListener('click', this.closeDropdown);
    }
  }, {
    key: 'closeDropdown',
    value: function closeDropdown() {
      if (this.state.selected) {
        this.setState({ selected: false });
      }
    }
  }, {
    key: 'toggleItems',
    value: function toggleItems() {
      this.setState({ selected: !this.state.selected });
    }
  }, {
    key: 'render',
    value: function render() {
      var items = this.props.items;
      var _props = this.props,
          value = _props.value,
          caret = _props.caret,
          type = _props.type,
          shouldDisplay = _props.shouldDisplay,
          alignRight = _props.alignRight;


      var menuClass = (0, _classnames2.default)({
        'dropdown': true,
        'is-visible': shouldDisplay,
        'is-hidden': !shouldDisplay,
        'open': this.state.selected,
        'dropup': this.props.direction === 'up'
      }).concat(' ' + this.props.className);

      var listClass = (0, _classnames2.default)({
        'dropdown-menu': true,
        'align-right': alignRight
      });

      items = DropdownMenu.makeItems(items);

      return _react2.default.createElement(
        'div',
        { className: menuClass },
        _react2.default.createElement(
          _Button2.default,
          { types: [type], className: 'btn--dropdown', clickHandler: this.toggleItems },
          value,
          ' ',
          _react2.default.createElement(
            'span',
            { className: 'dropdown-menu__button-text' },
            this.props.children
          ),
          caret && _react2.default.createElement(_FontAwesomeIcon2.default, { name: 'fa-caret-down' })
        ),
        _react2.default.createElement(
          'ul',
          { className: listClass },
          items
        )
      );
    }
  }]);

  return DropdownMenu;
}(_react.Component);

DropdownMenu.propTypes = {
  items: _react.PropTypes.arrayOf(_react.PropTypes.object).isRequired,
  className: _react.PropTypes.string,
  value: _react.PropTypes.string,
  type: _react.PropTypes.string,
  direction: _react.PropTypes.string,
  caret: _react.PropTypes.bool,
  children: _react.PropTypes.node,
  shouldDisplay: _react.PropTypes.oneOfType([_react2.default.PropTypes.bool, _react2.default.PropTypes.number]),
  alignRight: _react.PropTypes.bool
};

DropdownMenu.defaultProps = {
  type: 'secondary',
  selected: false,
  alignRight: false,
  className: '',
  caret: false,
  direction: 'down'
};

exports.default = DropdownMenu;