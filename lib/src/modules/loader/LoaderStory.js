import React from 'react';
import { storiesOf } from '@storybook/react';
import { Loader } from 'lib';
import StoryItem from 'stories/styleguide/StoryItem';

const stories = storiesOf('Modules', module);

stories.add('Loader', () => {
  return (
    <>
      <StoryItem title="Loader">
        <div className="grid tw grid-cols-4 col-gap-4">
          <Loader />
          <Loader size="md" />
          <Loader progress="25%" />
          <Loader heading="Processing" progress="100%" />
        </div>
      </StoryItem>
    </>
  );
});
