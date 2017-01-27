'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Modal = require('react-bootstrap/lib/Modal');

var _Modal2 = _interopRequireDefault(_Modal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Modal = function (_Component) {
  _inherits(Modal, _Component);

  function Modal(props) {
    _classCallCheck(this, Modal);

    var _this = _possibleConstructorReturn(this, (Modal.__proto__ || Object.getPrototypeOf(Modal)).call(this, props));

    _this.state = {
      show: _this.shouldDisplayModal(),
      callback: null
    };

    _this.hideModal = _this.hideModal.bind(_this);
    _this.submitCallback = _this.submitCallback.bind(_this);
    return _this;
  }

  _createClass(Modal, [{
    key: 'shouldDisplayModal',
    value: function shouldDisplayModal() {
      return this.props.show;
    }
  }, {
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
    key: 'renderContentOnly',
    value: function renderContentOnly(size) {
      var classNames = void 0;

      switch (size) {
        case 'x-large':
          classNames = ['modal--no-padding', 'modal--x-large'].join(' ');
          break;
        case 'large':
          classNames = ['modal--no-padding', 'modal--large'].join(' ');
          break;
        default:
          classNames = [''];
          break;
      }

      return _react2.default.createElement(
        _Modal2.default,
        _extends({ className: classNames }, this.props),
        this.props.children
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          size = _props.size,
          contentOnly = _props.contentOnly;


      if (contentOnly) {
        return this.renderContentOnly(size);
      }

      return _react2.default.createElement(
        _Modal2.default,
        _extends({ className: 'modal--no-padding' }, this.props),
        _react2.default.createElement(
          'form',
          { onSubmit: this.submitCallback },
          _react2.default.createElement(
            _Modal2.default.Body,
            null,
            this.props.children
          )
        )
      );
    }
  }]);

  return Modal;
}(_react.Component);

Modal.defaultProps = {
  show: false,
  size: '',
  contentOnly: false
};

Modal.propTypes = {
  show: _react.PropTypes.bool,
  children: _react.PropTypes.node,
  size: _react.PropTypes.string,
  contentOnly: _react.PropTypes.bool
};

exports.default = Modal;