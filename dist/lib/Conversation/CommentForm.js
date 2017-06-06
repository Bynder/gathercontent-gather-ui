'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Button = require('../Button');

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CommentForm = function (_Component) {
  _inherits(CommentForm, _Component);

  function CommentForm() {
    _classCallCheck(this, CommentForm);

    var _this = _possibleConstructorReturn(this, (CommentForm.__proto__ || Object.getPrototypeOf(CommentForm)).call(this));

    _this.state = { inputValue: '' };
    _this.updateInputValue = _this.updateInputValue.bind(_this);
    _this.cancelComment = _this.cancelComment.bind(_this);
    _this.onSubmit = _this.onSubmit.bind(_this);
    return _this;
  }

  _createClass(CommentForm, [{
    key: 'updateInputValue',
    value: function updateInputValue(e) {
      this.setState({
        inputValue: e.target.value
      });
    }
  }, {
    key: 'onSubmit',
    value: function onSubmit() {
      this.props.onSubmit(this.state.inputValue);
    }
  }, {
    key: 'cancelComment',
    value: function cancelComment() {
      var inputValue = this.props.comment ? this.props.comment.body : '';
      this.props.onCancel();
      this.setState({ inputValue: inputValue });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'form',
        { onSubmit: this.onSubmit },
        _react2.default.createElement('input', {
          type: 'text',
          ref: function ref(input) {
            return _this2.input = input;
          },
          value: this.state.inputValue,
          onChange: this.updateInputValue
        }),
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'button',
            null,
            'Mentions'
          ),
          _react2.default.createElement(
            'button',
            null,
            'Emoji'
          ),
          this.state.inputValue && _react2.default.createElement(
            'span',
            null,
            _react2.default.createElement(
              _Button2.default,
              { types: ['secondary'], clickHandler: this.onSubmit },
              'Send'
            ),
            _react2.default.createElement(
              _Button2.default,
              { types: ['danger'], clickHandler: this.cancelComment },
              'Cancel'
            )
          )
        )
      );
    }
  }]);

  return CommentForm;
}(_react.Component);

CommentForm.propTypes = {
  onSubmit: _react.PropTypes.func.isRequired,
  onCancel: _react.PropTypes.func,
  comment: _react.PropTypes.shape()
};
CommentForm.defaultProps = {
  onCancel: function onCancel() {}
};
exports.default = CommentForm;