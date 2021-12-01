import React from 'react';
import StoryItem from 'stories/styleguide/StoryItem';
import { StatusIndicatorCircle as StatusIndicatorCircleComponent } from './statusIndicatorCircle';

export default {
  title: 'GUI/Status Indicator Circle',
  component: StatusIndicatorCircleComponent,
  args: {
    color: '#ff00ff',
    solid: false,
    thickBorder: false
  },
  argTypes: {
    color: {
      name: 'Colour',
      control: { type: 'color' }
    }
  }
};

export const StatusIndicatorCircle = args => (
  <StoryItem>
    <StatusIndicatorCircleComponent {...args} />
  </StoryItem>
);
