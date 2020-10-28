import React from 'react';
import { storiesOf } from '@storybook/react';
import { Loader } from 'lib';
import StoryItem from 'stories/styleguide/StoryItem';

const stories = storiesOf('Modules', module);

stories.add('Loader', () => {
  return (
    <>
      <StoryItem title="Loader">
        <div className="grid tw grid-cols-5 col-gap-4">
          <Loader size="sm" />
          <Loader size="md" />
          <Loader size="lrg" />
          <Loader progress="25%" />
          <Loader heading="Processing" progress="100%" />
        </div>
      </StoryItem>
    </>
  );
});
