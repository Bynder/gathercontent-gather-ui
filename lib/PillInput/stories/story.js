import React from 'react';
import { storiesOf } from '@storybook/react';
import { PillInput } from '../PillInput';
import StoryItem from '../../../stories/styleguide/StoryItem';

const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const PillInputStory = storiesOf('Components', module).add('PillInput', () => (
  <div>
    <StoryItem title="PillInput" description="Text input that creates items">
      <PillInput
        placeholder="Enter an email"
        checker={{
          warning: 'This is not a valid email address!',
          regex: emailRegex
        }}
      />
    </StoryItem>
  </div>
));

export { PillInputStory };
