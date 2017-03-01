import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Carousel from '../../lib/Carousel/';
import StoryItem from '../styleguide/StoryItem';
import ExampleCarouselChild from '../styleguide/ExampleCarouselChild';

storiesOf('Components', module)
  .add('Carousel', () => {
    return (
      <div>
        <StoryItem
          title="Carousel with slides"
          description="A customisable Carousel component that renders the content of different slide containers that are passed down onto it. ">
          <Carousel
            showIndicators
            selected={1}
            className="gc-carousel"
          >
            <ExampleCarouselChild title="Slide 1" />
            <ExampleCarouselChild title="Slide 2" />
            <ExampleCarouselChild title="Slide 3" />
          </Carousel>
        </StoryItem>
      </div>
    );
  });
