import React from 'react';
import { Prompt as PromptComponent } from 'lib';
import StoryItem from 'stories/styleguide/StoryItem';

export default {
  title: 'GUI/Prompt'
};

export const Prompt = () => {
  const handleFeedback = () => {
    console.log('This should launch Intercom or trigger a mailto: link');
  };

  const handleSubmit = value => {
    // eslint-disable-next-line no-console
    console.log(value);
  };

  return (
    <StoryItem
      title="PromptComponent"
      description="Text-based prompt primarily used for adding AI prompts to the item editor"
    >
      <div style={{ width: '667px', margin: 'auto' }}>
        <PromptComponent onFeedback={handleFeedback} onSubmit={handleSubmit} />
      </div>
    </StoryItem>
  );
};

Prompt.parameters = {
  controls: { hideNoControlsWarning: true }
};
