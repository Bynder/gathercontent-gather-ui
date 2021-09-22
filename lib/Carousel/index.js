import PropTypes from 'prop-types';
import React, { Component } from 'react';
import CarouselSlides from './Slides';
import mapNavigationToProps from './composition/navigation';

class Carousel extends Component {
  constructor() {
    super();
    this.renderChildren = this.renderChildren.bind(this);
    this.mapPropsToChild = this.mapPropsToChild.bind(this);
  }

  static propTypes = {
    children: PropTypes.arrayOf(PropTypes.node).isRequired,
    className: PropTypes.string,
    goNext: PropTypes.func.isRequired,
    goPrevious: PropTypes.func.isRequired,
    goToSlide: PropTypes.func.isRequired,
    selected: PropTypes.number.isRequired
  };

  static defaultProps = {
    className: ''
  };

  mapPropsToChild(child) {
    return React.cloneElement(child, {
      goNext: this.props.goNext,
      goPrevious: this.props.goPrevious
    });
  }

  renderChildren() {
    return React.Children.map(this.props.children, child =>
      this.mapPropsToChild(child)
    );
  }

  render() {
    return (
      <CarouselSlides
        selected={this.props.selected}
        goToSlide={this.props.goToSlide}
        className={`carousel ${this.props.className}`}
      >
        {this.renderChildren()}
      </CarouselSlides>
    );
  }
}

export default mapNavigationToProps(Carousel);
