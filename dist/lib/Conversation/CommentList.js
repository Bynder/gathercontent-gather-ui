'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Comment = require('./Comment');

var _Comment2 = _interopRequireDefault(_Comment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var CommentList = function CommentList(_ref) {
  var comments = _ref.comments,
      rest = _objectWithoutProperties(_ref, ['comments']);

  var list = comments.map(function (comment) {
    return _react2.default.createElement(_Comment2.default, _extends({
      key: comment.id,
      comment: comment
    }, rest));
  });

  return _react2.default.createElement(
    'div',
    { className: 'comment-list' },
    list
  );
};

CommentList.propTypes = {
  comments: _react.PropTypes.arrayOf(_react.PropTypes.shape())
};

exports.default = CommentList;