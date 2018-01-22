import React from 'react';
import { storiesOf } from '@storybook/react';
import { Loading } from '../../lib';
import StoryItem from '../styleguide/StoryItem';

storiesOf('Components', module).add('Loading', () => (
  <div>
    <StoryItem
      title="Loading Logo"
      description=""
    >
      <Loading />
    </StoryItem>
  </div>
));
