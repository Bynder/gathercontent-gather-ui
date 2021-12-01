import React from 'react';
import { Loader as LoaderComponent } from 'lib';
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
