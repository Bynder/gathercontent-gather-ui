import React from 'react';
import { Prompt as PromptComponent } from 'lib';
import StoryItem from 'stories/styleguide/StoryItem';

export default {
  title: 'GUI/Prompt'
};

const PROMPT_TEXT = 'Write a blog post about content operations and AI';

export const Prompt = () => {
  const handleFeedback = () => {
    // eslint-disable-next-line no-console
    console.log('This should launch Intercom or trigger a mailto: link');
  };

  const handleSubmit = value => {
    // eslint-disable-next-line no-console
    console.log(value);
  };

  return (
    <>
      <StoryItem
        title="PromptComponent"
        description="Text-based prompt primarily used for adding AI prompts to the item editor"
      >
        <div style={{ width: '667px', margin: 'auto' }}>
          <PromptComponent
            onFeedback={handleFeedback}
            onSubmit={handleSubmit}
          />
        </div>
      </StoryItem>

      <StoryItem
        title="PromptComponent with content"
        description="This is the prompt when a user has entered some text or has auto-populated the prompt"
      >
        <div style={{ width: '667px', margin: 'auto' }}>
          <PromptComponent
            onFeedback={handleFeedback}
            onSubmit={handleSubmit}
            defaultValue={PROMPT_TEXT}
          />
        </div>
      </StoryItem>

      <StoryItem
        title="PromptComponent submitted"
        description="This is the prompt in it's loading/submitted state"
      >
        <div style={{ width: '667px', margin: 'auto' }}>
          <PromptComponent
            onFeedback={handleFeedback}
            onSubmit={handleSubmit}
            defaultValue={PROMPT_TEXT}
            isLoading
          />
        </div>
      </StoryItem>
    </>
  );
};

Prompt.parameters = {
  controls: { hideNoControlsWarning: true }
};
