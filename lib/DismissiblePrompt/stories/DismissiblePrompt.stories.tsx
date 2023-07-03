import React from 'react';
import DismissiblePromptComponent from '..';
import StoryItem from '../../../stories/styleguide/StoryItem';

export default {
  title: 'Legacy/Dismissible Prompt',
  component: DismissiblePromptComponent,
  argTypes: {
    onDismiss: { action: 'prompt dismissed!' }
  }
};

export function DismissiblePrompt(args: any) {
  return <div>
  <StoryItem
    title="DismissiblePromptComponent"
    description="A small prompt that can be dissmissed"
  >
    <DismissiblePromptComponent {...args}>
      hello there!
    </DismissiblePromptComponent>
  </StoryItem>
</div>
}

DismissiblePrompt.parameters = {
  controls: { hideNoControlsWarning: true }
};
