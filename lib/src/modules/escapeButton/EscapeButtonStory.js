import React from 'react';
import { storiesOf } from '@storybook/react';
import StoryItem from 'stories/styleguide/StoryItem';
import { EscapeButton } from './EscapeButton';

const stories = storiesOf('Modules', module);

stories.add('Escape Button', () => {
  return (
    <>
      <StoryItem title="Escape">
        <div className="h-12 w-32 border border-neutral-90 rounded border-solid relative">
          <EscapeButton />
        </div>
      </StoryItem>
    </>
  );
});
