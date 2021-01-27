import React from 'react';
import { storiesOf } from '@storybook/react';
import StoryItem from 'stories/styleguide/StoryItem';
import { CloseButton } from './CloseButton';

const stories = storiesOf('Modules', module);

stories.add('Close Button', () => {
  return (
    <>
      <StoryItem title="Close Button">
        <div className="h-12 w-32 border border-neutral-90 rounded border-solid relative">
          <CloseButton />
        </div>
      </StoryItem>
    </>
  );
});
