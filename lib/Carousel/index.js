import React from 'react';
import CarouselSlides from './Slides';
import composeNavigation from './composition/navigation';

const Carousel = (props) =>
  <CarouselSlides
    showIndicators
    selected={props.selected}
    goToSlide={props.goToSlide}
    className={`gc-carousel ${props.className}`}
  >
    { props.children }
  </CarouselSlides>;

export default composeNavigation(Carousel);
