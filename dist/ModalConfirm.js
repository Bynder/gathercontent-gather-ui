'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Modal = require('react-bootstrap/lib/Modal');

var _Modal2 = _interopRequireDefault(_Modal);

var _AjaxButton = require('./../UI/AjaxButton');

var _AjaxButton2 = _interopRequireDefault(_AjaxButton);

var _Button = require('./../UI/Button');

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ModalConfirm = function (_Component) {
  _inherits(ModalConfirm, _Component);

  function ModalConfirm(props) {
    _classCallCheck(this, ModalConfirm);

    var _this = _possibleConstructorReturn(this, (ModalConfirm.__proto__ || Object.getPrototypeOf(ModalConfirm)).call(this, props));

    _this.state = { show: false, callback: null };

    _this.hideModal = _this.hideModal.bind(_this);
    _this.submitCallback = _this.submitCallback.bind(_this);
    return _this;
  }

  _createClass(ModalConfirm, [{
    key: 'hideModal',
    value: function hideModal(e) {
      if (e) e.preventDefault();

      this.resetModal();
    }
  }, {
    key: 'showModal',
    value: function showModal(callback) {
      this.setState({ show: true, callback: callback });
    }
  }, {
    key: 'submitCallback',
    value: function submitCallback(e) {
      e.preventDefault();
      this.state.callback();
    }
  }, {
    key: 'resetModal',
    value: function resetModal() {
      this.setState({ show: false, callback: null });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          title = _props.title,
          message = _props.message,
          submitText = _props.submitText,
          type = _props.type,
          cancelText = _props.cancelText;


      var style = {
        paddingRight: 0
      };

      return _react2.default.createElement(
        _Modal2.default,
        {
          style: { style: style },
          className: 'modal--no-padding',
          show: this.state.show,
          onHide: this.hideModal
        },
        _react2.default.createElement(
          'form',
          { onSubmit: this.submitCallback },
          _react2.default.createElement(
            _Modal2.default.Header,
            null,
            _react2.default.createElement(
              'button',
              { type: 'button', className: 'close', onClick: this.hideModal },
              _react2.default.createElement(
                'span',
                null,
                '\xD7'
              )
            ),
            _react2.default.createElement(
              _Modal2.default.Title,
              null,
              title
            )
          ),
          _react2.default.createElement(
            _Modal2.default.Body,
            null,
            message
          ),
          _react2.default.createElement(
            _Modal2.default.Footer,
            null,
            _react2.default.createElement(_Button2.default, {
              className: 'btn btn-default--light',
              clickHandler: this.hideModal,
              value: cancelText
            }),
            _react2.default.createElement(_AjaxButton2.default, { clickHandler: this.submitCallback, type: type, value: submitText })
          )
        )
      );
    }
  }]);

  return ModalConfirm;
}(_react.Component);

ModalConfirm.propTypes = {
  title: _react2.default.PropTypes.string.isRequired,
  message: _react2.default.PropTypes.node.isRequired,
  submitText: _react2.default.PropTypes.string.isRequired,
  cancelText: _react2.default.PropTypes.string.isRequired,
  type: _react2.default.PropTypes.string
};

ModalConfirm.defaultProps = {
  title: 'Delete',
  message: 'Are you sure?',
  submitText: 'Delete',
  cancelText: 'Cancel',
  type: 'primary'
};

exports.default = ModalConfirm;