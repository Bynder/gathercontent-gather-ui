'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CarouselSlides = function CarouselSlides(props) {
  var length = props.length || props.children.length;

  var styles = {
    root: {
      overflow: 'hidden'
    },
    inner: {
      whiteSpace: 'nowrap',
      height: '100%',
      transition: 'left .2s ease-in-out',
      position: 'relative',
      left: props.selected % length * -100 + '%'
    },
    child: {
      display: 'inline-block',
      verticalAlign: 'top',
      whiteSpace: 'normal',
      width: '100%'
    }
  };

  var indicators = _react2.default.Children.map(props.children, function (child, index) {
    var isActive = props.selected === index ? 'is-active' : '';
    var classes = ['carousel__indicator-item', isActive].join(' ');

    return _react2.default.createElement('button', {
      onClick: function onClick() {
        return props.goToSlide(index);
      },
      className: classes
    });
  });

  var slides = _react2.default.Children.map(props.children, function (child) {
    return _react2.default.createElement(
      'div',
      { style: styles.child, className: 'carousel__slide-wrapper' },
      child
    );
  });

  return _react2.default.createElement(
    'div',
    { style: styles.root, className: props.className },
    _react2.default.createElement(
      'div',
      { className: 'carousel__indicators' },
      props.showIndicators && indicators
    ),
    _react2.default.createElement(
      'div',
      { style: styles.inner },
      slides
    )
  );
};

CarouselSlides.defaultProps = {
  length: 0,
  className: '',
  showIndicators: true
};

CarouselSlides.propTypes = {
  length: _react.PropTypes.number,
  selected: _react.PropTypes.number.isRequired,
  children: _react.PropTypes.arrayOf(_react.PropTypes.object).isRequired,
  className: _react.PropTypes.string,
  showIndicators: _react.PropTypes.bool
};

exports.default = CarouselSlides;