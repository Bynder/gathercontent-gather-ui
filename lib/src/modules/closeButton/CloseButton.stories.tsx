import React from 'react';
// @ts-expect-error TS(2307): Cannot find module 'stories/styleguide/StoryItem' ... Remove this comment to see the full error message
import StoryItem from 'stories/styleguide/StoryItem';
import { CloseButton as CloseButtonComponent } from './CloseButton';

export default {
  title: 'GUI/Buttons/Close Button',
  component: CloseButtonComponent
};

export const CloseButton = () => {
  return (
    <>
      <StoryItem title="Close Button">
        <div className="h-12 w-32 border border-neutral-90 rounded border-solid relative">
          <CloseButtonComponent />
        </div>
      </StoryItem>
    </>
  );
};

CloseButton.parameters = {
  controls: { hideNoControlsWarning: true }
};
