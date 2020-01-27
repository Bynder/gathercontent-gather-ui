import React from 'react';
import { storiesOf } from '@storybook/react';
import { ItemInput } from '../ItemInput';
import StoryItem from '../../../stories/styleguide/StoryItem';

const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const ItemInputStory = storiesOf('Components', module).add('ItemInput', () => (
  <div>
    <StoryItem title="ItemInput" description="Text input that creates items">
      <ItemInput
        placeholder="Enter an email"
        checker={{
          warning: 'This is not a valid email address!',
          regex: emailRegex
        }}
      />
    </StoryItem>
  </div>
));

export { ItemInputStory };
