'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = require('react-bootstrap');

var _index = require('../index');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ConfirmationModal = function (_Component) {
  _inherits(ConfirmationModal, _Component);

  function ConfirmationModal(props) {
    _classCallCheck(this, ConfirmationModal);

    var _this = _possibleConstructorReturn(this, (ConfirmationModal.__proto__ || Object.getPrototypeOf(ConfirmationModal)).call(this, props));

    _this.state = {
      show: props.show || false,
      callback: null
    };

    _this.hideModal = _this.hideModal.bind(_this);
    _this.submitCallback = _this.submitCallback.bind(_this);
    return _this;
  }

  _createClass(ConfirmationModal, [{
    key: 'hideModal',
    value: function hideModal(e) {
      if (e) e.preventDefault();

      this.resetModal();
    }
  }, {
    key: 'showModal',
    value: function showModal(callback) {
      this.setState({
        show: true,
        callback: callback
      });
    }
  }, {
    key: 'submitCallback',
    value: function submitCallback(e) {
      if (e) e.preventDefault();

      if (this.state.callback !== null) {
        this.state.callback();
      }
    }
  }, {
    key: 'resetModal',
    value: function resetModal() {
      this.setState({
        show: false,
        callback: null
      });
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


      return _react2.default.createElement(
        _reactBootstrap.Modal,
        {
          className: 'modal--no-padding',
          show: this.state.show,
          onHide: this.hideModal
        },
        _react2.default.createElement(
          'form',
          { onSubmit: this.submitCallback },
          _react2.default.createElement(
            _reactBootstrap.Modal.Header,
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
              _reactBootstrap.Modal.Title,
              null,
              title
            )
          ),
          _react2.default.createElement(
            _reactBootstrap.Modal.Body,
            null,
            message
          ),
          _react2.default.createElement(
            _reactBootstrap.Modal.Footer,
            null,
            _react2.default.createElement(
              _index.Button,
              {
                types: ['link'],
                clickHandler: this.hideModal
              },
              cancelText
            ),
            _react2.default.createElement(_index.ProgressButton, { clickHandler: this.submitCallback, type: type, value: submitText })
          )
        )
      );
    }
  }]);

  return ConfirmationModal;
}(_react.Component);

ConfirmationModal.propTypes = {
  title: _react.PropTypes.string.isRequired,
  message: _react.PropTypes.node.isRequired,
  submitText: _react.PropTypes.string.isRequired,
  cancelText: _react.PropTypes.string.isRequired,
  type: _react.PropTypes.string,
  show: _react.PropTypes.bool
};
ConfirmationModal.defaultProps = {
  title: 'Delete',
  message: 'Are you sure?',
  submitText: 'Delete',
  cancelText: 'Cancel',
  type: 'primary',
  show: false
};
exports.default = ConfirmationModal;