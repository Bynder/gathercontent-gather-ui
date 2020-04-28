import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import DismissiblePrompt from '..';
import StoryItem from '../../../stories/styleguide/StoryItem';

storiesOf('Components', module).add('DismissiblePrompt', () => (
  <div>
    <StoryItem
      title="DismissiblePrompt"
      description="A small prompt that can be dissmissed"
    >
      <DismissiblePrompt onDismiss={action('close prompt')}>
        hello there!
      </DismissiblePrompt>
    </StoryItem>
  </div>
));
