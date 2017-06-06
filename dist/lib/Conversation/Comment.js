'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Button = require('../Button');

var _Button2 = _interopRequireDefault(_Button);

var _CommentForm = require('./CommentForm');

var _CommentForm2 = _interopRequireDefault(_CommentForm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Comment = function (_Component) {
  _inherits(Comment, _Component);

  function Comment() {
    _classCallCheck(this, Comment);

    var _this = _possibleConstructorReturn(this, (Comment.__proto__ || Object.getPrototypeOf(Comment)).call(this));

    _this.state = { showEditControls: false };
    _this.showEditControls = _this.showEditControls.bind(_this);
    _this.editComment = _this.editComment.bind(_this);
    _this.removeComment = _this.removeComment.bind(_this);
    return _this;
  }

  _createClass(Comment, [{
    key: 'showEditControls',
    value: function showEditControls() {
      this.setState({
        showEditControls: !this.state.showEditControls
      });
    }
  }, {
    key: 'editComment',
    value: function editComment(commentBody) {
      this.props.actions.editComment(commentBody, this.props.comment.id);
    }
  }, {
    key: 'removeComment',
    value: function removeComment() {
      this.props.actions.removeComment(this.props.comment.id, this.props.conversationId);
    }
  }, {
    key: 'render',
    value: function render() {
      var comment = this.props.comment;

      var editTrigger = !this.state.showEditControls ? _react2.default.createElement(
        'span',
        { className: 'comment__actions' },
        _react2.default.createElement(
          _Button2.default,
          { types: ['link'], clickHandler: this.showEditControls },
          'Edit Comment'
        ),
        _react2.default.createElement(
          _Button2.default,
          { types: ['link'], clickHandler: this.removeComment },
          'Delete Comment'
        )
      ) : '';

      return _react2.default.createElement(
        'div',
        { className: 'comment', key: comment.id },
        _react2.default.createElement(
          'div',
          { className: 'comment__body' },
          _react2.default.createElement(
            'div',
            { className: 'person' },
            _react2.default.createElement('img', { src: comment.person.avatar, alt: comment.person.name }),
            _react2.default.createElement(
              'span',
              { className: 'person__name' },
              comment.person.name
            )
          ),
          !this.state.showEditControls && _react2.default.createElement(
            'p',
            null,
            comment.body
          ),
          this.props.userCanEdit && _react2.default.createElement(
            'div',
            null,
            this.state.showEditControls && _react2.default.createElement(_CommentForm2.default, {
              onSubmit: this.editComment,
              onCancel: this.showEditControls
            })
          ),
          _react2.default.createElement(
            'span',
            null,
            comment.createdAt,
            ' ',
            editTrigger
          )
        )
      );
    }
  }]);

  return Comment;
}(_react.Component);

Comment.propTypes = {
  comment: _react.PropTypes.shape(),
  userCanEdit: _react.PropTypes.bool,
  actions: _react.PropTypes.shape(),
  conversationId: _react.PropTypes.string
};
exports.default = Comment;