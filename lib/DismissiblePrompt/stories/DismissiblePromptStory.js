import React from 'react';
import { action } from '@storybook/addon-actions';
import DismissiblePrompt from '..';
import StoryItem from '../../../stories/styleguide/StoryItem';

export default {
  title: 'Components',
};

export const _DismissiblePrompt = () => (
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
);

_DismissiblePrompt.story = {
  name: 'DismissiblePrompt',
};
