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

var SearchInputField = function (_React$Component) {
  _inherits(SearchInputField, _React$Component);

  function SearchInputField(props) {
    _classCallCheck(this, SearchInputField);

    var _this = _possibleConstructorReturn(this, (SearchInputField.__proto__ || Object.getPrototypeOf(SearchInputField)).call(this, props));

    _this.displayName = 'SearchInputField';
    _this.onChange = _this.onChange.bind(_this);
    _this.clearSearch = _this.clearSearch.bind(_this);

    _this.state = { query: '' };
    return _this;
  }

  _createClass(SearchInputField, [{
    key: 'onChange',
    value: function onChange(e) {
      this.props.onChangeHandler(e);
      this.setState({ query: e.target.value });
    }

    /**
     * Clears the search input (x) button
     * Runs the onChange callback with an empty value.
     */

  }, {
    key: 'clearSearch',
    value: function clearSearch() {
      this.setState({ query: '' });
      this.props.onChangeHandler({
        target: { value: '' }
      });
      this.searchInput.value = '';
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var placeholder = this.props.placeholder;

      var hasSearch = this.state.query ? 'is-visible' : '';

      var iconClass = function () {
        return 'fa fa-search c-input-search__icon ' + hasSearch;
      }();

      // Display the (x) button if there's a search in progress...
      var showClearStyle = function () {
        return 'input-search__clear ' + hasSearch;
      }();

      return _react2.default.createElement(
        'span',
        { className: 'c-input-search' },
        _react2.default.createElement('input', {
          ref: function ref(input) {
            return _this2.searchInput = input;
          },
          value: this.state.query,
          onChange: this.onChange,
          type: 'text',
          className: 'input-search',
          placeholder: placeholder
        }),
        _react2.default.createElement(
          'button',
          {
            onClick: this.clearSearch,
            className: showClearStyle
          },
          '\xD7'
        ),
        _react2.default.createElement('i', { className: iconClass })
      );
    }
  }]);

  return SearchInputField;
}(_react2.default.Component);

SearchInputField.defaultProps = {
  placeholder: 'Search...'
};

SearchInputField.propTypes = {
  placeholder: _react2.default.PropTypes.string,
  onChangeHandler: _react2.default.PropTypes.func
};

exports.default = SearchInputField;