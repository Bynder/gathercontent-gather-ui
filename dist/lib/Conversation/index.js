'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _CommentList = require('./CommentList');

var _CommentList2 = _interopRequireDefault(_CommentList);

var _CommentForm = require('./CommentForm');

var _CommentForm2 = _interopRequireDefault(_CommentForm);

var _Button = require('../Button');

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Conversation = function (_Component) {
  _inherits(Conversation, _Component);

  function Conversation() {
    _classCallCheck(this, Conversation);

    var _this = _possibleConstructorReturn(this, (Conversation.__proto__ || Object.getPrototypeOf(Conversation)).call(this));

    _this.addComment = _this.addComment.bind(_this);
    return _this;
  }

  _createClass(Conversation, [{
    key: 'addComment',
    value: function addComment(commentBody) {
      this.props.actions.addComment(commentBody, this.props.id);
    }
  }, {
    key: 'render',
    value: function render() {
      var resolveButton = !this.props.isResolved ? _react2.default.createElement(
        _Button2.default,
        { types: ['link-default'], clickHandler: this.props.actions.resolveConversation },
        'Resolve Conversation'
      ) : _react2.default.createElement(
        _Button2.default,
        { types: ['link-default'], clickHandler: this.props.actions.unresolveConversation },
        'Unresolve Conversation'
      );

      return _react2.default.createElement(
        'div',
        { className: 'conversation' },
        _react2.default.createElement(
          'div',
          { className: 'conversation__resolve' },
          resolveButton
        ),
        _react2.default.createElement(_CommentList2.default, {
          comments: this.props.comments,
          conversationId: this.props.id,
          userId: this.props.userId,
          actions: this.props.actions,
          userCanEdit: this.props.userCanEdit
        }),
        this.props.userCanComment && _react2.default.createElement(_CommentForm2.default, { onSubmit: this.addComment })
      );
    }
  }]);

  return Conversation;
}(_react.Component);

Conversation.propTypes = {
  id: _react.PropTypes.string,
  actions: _react.PropTypes.shape({
    resolveConversation: _react.PropTypes.func,
    unresolveConversation: _react.PropTypes.func,
    addComment: _react.PropTypes.func
  }).isRequired,
  userCanComment: _react.PropTypes.bool.isRequired,
  userCanEdit: _react.PropTypes.bool.isRequired,
  isResolved: _react.PropTypes.bool.isRequired,
  userId: _react.PropTypes.number,
  comments: _react.PropTypes.arrayOf(_react.PropTypes.shape())
};
exports.default = Conversation;