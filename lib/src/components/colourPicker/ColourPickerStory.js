import React from 'react';
import { storiesOf } from '@storybook/react';
import { ColourPicker } from 'lib';
import StoryItem from 'stories/styleguide/StoryItem';

storiesOf('Components', module).add('ColourPicker', () => {
  return (
    <StoryItem
      title="ColourPicker"
      description="A handy way of picking a colour"
    >
      <ColourPicker />
    </StoryItem>
  );
});
