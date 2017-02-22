import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Carousel from '../../lib/Carousel/';
import StoryItem from '../styleguide/StoryItem';

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
            <div>Slide 1</div>
            <div>Slide 2</div>
            <div>Slide 3</div>
          </Carousel>
        </StoryItem>
      </div>
    );
  });
