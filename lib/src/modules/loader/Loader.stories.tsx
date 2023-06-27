import React from 'react';
// @ts-expect-error TS(2307): Cannot find module 'lib' or its corresponding type... Remove this comment to see the full error message
import { Loader as LoaderComponent } from 'lib';
// @ts-expect-error TS(2307): Cannot find module 'stories/styleguide/StoryItem' ... Remove this comment to see the full error message
import StoryItem from 'stories/styleguide/StoryItem';

export default {
  title: 'GUI/Loader',
  component: LoaderComponent
};

export const Loader = () => {
  return (
    <>
      <StoryItem title="LoaderComponent">
        <div className="grid tw grid-cols-5 col-gap-4">
          <LoaderComponent size="sm" />
          <LoaderComponent size="md" />
          <LoaderComponent size="lrg" />
          <LoaderComponent progress="25%" />
          <LoaderComponent heading="Processing" progress="100%" />
        </div>
      </StoryItem>
    </>
  );
};

Loader.parameters = {
  controls: { hideNoControlsWarning: true }
};
