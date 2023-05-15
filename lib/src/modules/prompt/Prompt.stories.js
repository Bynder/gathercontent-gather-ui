import React from 'react';
import { Prompt as PromptComponent } from 'lib';
import StoryItem from 'stories/styleguide/StoryItem';

export default {
  title: 'GUI/Prompt'
};

export const Prompt = () => {
  return (
    <StoryItem
      title="PromptComponent"
      description="Text-based prompt primarily used for adding AI prompts to the item editor"
    >
      <div style={{ width: '320px', margin:'auto' }}>
        <PromptComponent />
      </div>
    </StoryItem>
  );
};

Prompt.parameters = {
  controls: { hideNoControlsWarning: true }
};
