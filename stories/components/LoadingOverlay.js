import React from 'react';
import { storiesOf } from '@storybook/react';
import { number } from '@storybook/addon-knobs';
import { LoadingOverlay } from '../../lib';
import StoryItem from '../styleguide/StoryItem';

storiesOf('Components', module).add('Loading Overlay', () => {
  const percentageLoaded = number('Loaded percentage', 50);

  return (
    <StoryItem
      title="Loading Overlay Component"
      description=""
    >
      <LoadingOverlay
        percentageLoaded={percentageLoaded}
        fixed
      />
    </StoryItem>
  );
});
