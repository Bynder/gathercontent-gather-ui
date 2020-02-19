import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';
import { LoadingOverlay } from '../../lib';
import StoryItem from '../styleguide/StoryItem';

storiesOf('Components', module).add('Loading Overlay', () => {
  const percentageText = text('Percentage text', '50%');
  
  return (
    <div>
      <StoryItem
        title="Loading Overlay Component"
        description=""
      >
        <LoadingOverlay
          percentageText={percentageText}
          fixed
        />
      </StoryItem>
    </div>
  );
});
