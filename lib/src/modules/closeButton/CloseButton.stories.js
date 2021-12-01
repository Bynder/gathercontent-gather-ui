import React from 'react';
import StoryItem from 'stories/styleguide/StoryItem';
import { CloseButton as CloseButtonComponent } from './CloseButton';

export default {
  title: 'src/Buttons/Close Button',
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
