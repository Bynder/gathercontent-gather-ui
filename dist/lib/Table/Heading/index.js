'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Title = require('./Title');

var _Title2 = _interopRequireDefault(_Title);

var _Column = require('../Column');

var _Column2 = _interopRequireDefault(_Column);

var _FontAwesomeIcon = require('../../FontAwesomeIcon');

var _FontAwesomeIcon2 = _interopRequireDefault(_FontAwesomeIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TableHeading = function (_Component) {
  _inherits(TableHeading, _Component);

  function TableHeading() {
    _classCallCheck(this, TableHeading);

    var _this = _possibleConstructorReturn(this, (TableHeading.__proto__ || Object.getPrototypeOf(TableHeading)).call(this));

    _this.callToggleAllHandler = _this.callToggleAllHandler.bind(_this);
    _this.sortingOrderIsDescending = _this.sortingOrderIsDescending.bind(_this);
    _this.sortingColumnIsActive = _this.sortingColumnIsActive.bind(_this);
    return _this;
  }

  _createClass(TableHeading, [{
    key: 'callToggleAllHandler',
    value: function callToggleAllHandler() {
      this.props.toggleHandler(this.toggleAll.checked);
    }
  }, {
    key: 'makeSortingColumns',
    value: function makeSortingColumns() {
      var _this2 = this;

      return this.props.columns.map(function (column, idx) {
        var sanitisedColumnName = _this2.props.columnNameSanitiser(column);
        var isActive = _this2.sortingColumnIsActive(sanitisedColumnName);

        var childClassName = isActive ? 'is-active' : '';
        var columnClassName = 'table-heading--' + sanitisedColumnName;
        var icon = _react2.default.createElement(_FontAwesomeIcon2.default, { className: 'table-heading__icon', name: 'fa-sort-desc' });

        if (isActive && _this2.sortingOrderIsDescending()) {
          childClassName = childClassName + ' is-reversed';
          icon = _react2.default.createElement(_FontAwesomeIcon2.default, { className: 'table-heading__icon', name: 'fa-sort-asc' });
        }

        return _react2.default.createElement(
          _Column2.default,
          {
            key: idx,
            className: columnClassName
          },
          _react2.default.createElement(
            _Title2.default,
            {
              className: childClassName,
              column: column,
              sortHandler: _this2.props.sortHandler
            },
            column,
            icon
          )
        );
      });
    }
  }, {
    key: 'sortingOrderIsDescending',
    value: function sortingOrderIsDescending() {
      return this.props.sortingOrder === -1;
    }
  }, {
    key: 'sortingColumnIsActive',
    value: function sortingColumnIsActive(columnText) {
      return columnText === this.props.activeSortingProp;
    }
  }, {
    key: 'makeCheckToggleAllColumn',
    value: function makeCheckToggleAllColumn() {
      var _this3 = this;

      return _react2.default.createElement(
        _Column2.default,
        { className: 'table-heading__checkbox' },
        _react2.default.createElement('input', {
          type: 'checkbox',
          ref: function ref(input) {
            return _this3.toggleAll = input;
          },
          onClick: this.callToggleAllHandler
        })
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var checkToggleAllColumn = this.makeCheckToggleAllColumn();
      var sortingColumns = this.makeSortingColumns();

      return _react2.default.createElement(
        'div',
        { className: 'c-table' },
        _react2.default.createElement(
          'div',
          { className: 'table-heading' },
          checkToggleAllColumn,
          sortingColumns
        )
      );
    }
  }]);

  return TableHeading;
}(_react.Component);

TableHeading.propTypes = {
  columns: _react.PropTypes.arrayOf(_react.PropTypes.string),
  sortingOrder: _react.PropTypes.number,
  toggleHandler: _react.PropTypes.func,
  sortHandler: _react.PropTypes.func,
  activeSortingProp: _react.PropTypes.string,
  columnNameSanitiser: _react.PropTypes.func.isRequired
};

exports.default = TableHeading;