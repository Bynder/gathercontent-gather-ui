import React from 'react';
import { storiesOf } from '@storybook/react';
import { ItemInput } from '../ItemInput';
import StoryItem from '../../../stories/styleguide/StoryItem';

const ItemInputStory = storiesOf('Components', module).add('ItemInput', () => (
  <div>
    <StoryItem
      title="ItemInput"
      description="Text input that creates items on space"
    >
      <ItemInput />
    </StoryItem>
  </div>
));

export { ItemInputStory };
