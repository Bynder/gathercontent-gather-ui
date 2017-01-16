'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _lib = require('react-bootstrap/lib');

var _utils = require('../../helpers/utils');

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ProgressBar = function ProgressBar(_ref) {
  var className = _ref.className,
      children = _ref.children;

  var classes = (0, _classnames2.default)(['c-progress-bar', className]);

  return _react2.default.createElement(
    'div',
    { className: classes },
    children
  );
};

ProgressBar.propTypes = {
  children: _react2.default.PropTypes.node.isRequired,
  className: _react2.default.PropTypes.string
};

ProgressBar.defaultProps = {
  className: ''
};

var ProgressUnit = function (_React$Component) {
  _inherits(ProgressUnit, _React$Component);

  function ProgressUnit() {
    _classCallCheck(this, ProgressUnit);

    return _possibleConstructorReturn(this, (ProgressUnit.__proto__ || Object.getPrototypeOf(ProgressUnit)).apply(this, arguments));
  }

  _createClass(ProgressUnit, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          percent = _props.percent,
          color = _props.color,
          className = _props.className,
          name = _props.name,
          id = _props.id,
          projectID = _props.projectID;

      var classes = (0, _classnames2.default)(['c-progress-unit', className]);
      var style = { width: percent + '%' };
      var tooltip = ProgressUnit.buildTooltip(name, percent);
      var filterLink = ProgressUnit.createFilterLink(projectID, id);

      if (color !== '') {
        style.backgroundColor = color;
      }

      return _react2.default.createElement(
        _lib.OverlayTrigger,
        { placement: 'top', overlay: tooltip, delayShow: 100 },
        _react2.default.createElement(
          'a',
          { href: filterLink },
          _react2.default.createElement('div', { title: name, className: classes, style: style })
        )
      );
    }
  }], [{
    key: 'buildTooltip',
    value: function buildTooltip(text, percent) {
      return _react2.default.createElement(
        _lib.Tooltip,
        { id: Math.random() },
        text + ' (' + Math.round(percent) + '%)'
      );
    }
  }, {
    key: 'createFilterLink',
    value: function createFilterLink(projectID, statusID) {
      return _utils2.default.makeUrl('/projects/items/' + projectID + '/#filter-' + statusID);
    }
  }]);

  return ProgressUnit;
}(_react2.default.Component);

ProgressUnit.propTypes = {
  className: _react2.default.PropTypes.string,
  color: _react2.default.PropTypes.string.isRequired,
  percent: _react2.default.PropTypes.number.isRequired,
  name: _react2.default.PropTypes.string.isRequired,
  projectID: _react2.default.PropTypes.number,
  id: _react2.default.PropTypes.string
};

ProgressUnit.defaultProps = {
  className: '',
  percent: '0%',
  name: '',
  color: ''
};

var Progress = {
  Bar: ProgressBar,
  Unit: ProgressUnit
};

exports.default = Progress;