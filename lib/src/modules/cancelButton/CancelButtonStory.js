import React from 'react';
import { storiesOf } from '@storybook/react';
import StoryItem from 'stories/styleguide/StoryItem';
import { CancelButton } from './CancelButton';

const stories = storiesOf('Modules', module);

stories.add('Cancel Button', () => {
  return (
    <>
      <StoryItem title="Cancel">
        <div className="h-12 w-32 border border-neutral-90 rounded border-solid relative">
          <CancelButton />
        </div>
      </StoryItem>
    </>
  );
});
