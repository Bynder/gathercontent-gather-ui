import React from 'react';
// @ts-expect-error TS(2307): Cannot find module 'stories/styleguide/StoryItem' ... Remove this comment to see the full error message
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

export const StatusIndicatorCircle = (args: any) => <StoryItem>
  <StatusIndicatorCircleComponent {...args} />
</StoryItem>;
