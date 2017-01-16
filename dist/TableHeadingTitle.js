'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TableHeadingTitle = function (_Component) {
  _inherits(TableHeadingTitle, _Component);

  function TableHeadingTitle(props) {
    _classCallCheck(this, TableHeadingTitle);

    var _this = _possibleConstructorReturn(this, (TableHeadingTitle.__proto__ || Object.getPrototypeOf(TableHeadingTitle)).call(this, props));

    _this.onClick = _this.onClick.bind(_this);
    return _this;
  }

  _createClass(TableHeadingTitle, [{
    key: 'onClick',
    value: function onClick() {
      this.props.sortHandler(this.props.column);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'button',
        {
          className: 'table-heading__title ' + this.props.className,
          onClick: this.onClick
        },
        this.props.children
      );
    }
  }]);

  return TableHeadingTitle;
}(_react.Component);

TableHeadingTitle.propTypes = {
  column: _react2.default.PropTypes.string.isRequired,
  className: _react2.default.PropTypes.string.isRequired,
  sortHandler: _react2.default.PropTypes.func.isRequired,
  children: _react2.default.PropTypes.node.isRequired
};

exports.default = TableHeadingTitle;