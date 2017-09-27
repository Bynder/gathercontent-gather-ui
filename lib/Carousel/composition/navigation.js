import React, { Component } from 'react';

const slideNavigation = InnerComponent => {
  class Carousel extends Component {
    constructor(props) {
      super(props);

      this.state = { selected: 0 };
      this.goPrevious = this.goPrevious.bind(this);
      this.goNext = this.goNext.bind(this);
      this.goToSlide = this.goToSlide.bind(this);
    }

    goToSlide(slide) {
      this.setState({
        selected: slide
      });
    }

    goPrevious() {
      const { selected } = this.state;

      if (selected > 0) {
        this.setState({
          selected: selected - 1
        });
      }
    }

    goNext() {
      const { selected } = this.state;

      this.setState({
        selected: selected + 1
      });
    }

    render() {
      return (
        <InnerComponent
          {...this.props}
          {...this.state}
          goNext={this.goNext}
          goToSlide={this.goToSlide}
          goPrevious={this.goPrevious}
        />
      );
    }
  }

  return Carousel;
};

export default slideNavigation;
