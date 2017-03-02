import React, { Component, PropTypes } from 'react';
import CarouselSlides from './Slides';
import mapNavigationToProps from './composition/navigation';

class Carousel extends Component {
  static propTypes = {
    children: PropTypes.arrayOf(PropTypes.node),
    className: PropTypes.string,
  };

  constructor() {
    super();
    this.renderChildren = this.renderChildren.bind(this);
  }

  renderChildren() {
    return React.Children.map(this.props.children,
      (child) => React.cloneElement(child, {
        goNext: this.props.goNext,
        goPrevious: this.props.goPrevious,
      })
    );
  }

  render() {
    return (
      <CarouselSlides
        showIndicators
        selected={this.props.selected}
        goToSlide={this.props.goToSlide}
        className={`carousel ${this.props.className}`}
      >
        { this.renderChildren() }
      </CarouselSlides>
    )
  }
}

export default mapNavigationToProps(Carousel);
