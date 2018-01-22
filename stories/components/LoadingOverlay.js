import React from 'react';
import { storiesOf } from '@storybook/react';
import { LoadingOverlay } from '../../lib';
import StoryItem from '../styleguide/StoryItem';

storiesOf('Components', module).add('Loading Overlay', () => (
  <div>
    <StoryItem
      title="Loading Overlay Component"
      description=""
    >
      <LoadingOverlay fixed />
    </StoryItem>
  </div>
));
