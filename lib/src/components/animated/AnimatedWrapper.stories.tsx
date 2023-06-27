import React, { useState } from 'react';
import {
  AnimatedWrapper as AnimatedWrapperComponent,
  ButtonPrimary
// @ts-expect-error TS(2307): Cannot find module 'lib' or its corresponding type... Remove this comment to see the full error message
} from 'lib';
// @ts-expect-error TS(2307): Cannot find module 'stories/styleguide/StoryItem' ... Remove this comment to see the full error message
import StoryItem from 'stories/styleguide/StoryItem';

export default {
  title: 'GUI/Animated Wrapper',
  component: AnimatedWrapperComponent
};

export const AnimatedWrapper = () => {
  const [grow, setGrow] = useState(false);
  const animatableProperties = {
    width: grow ? 'calc(100% - 0px)' : 'calc(100% - 5000px)',
    height: grow ? 'calc(100% - 0px)' : 'calc(100% - 5000px)'
  };

  return (
    <StoryItem
      title="AnimatedWrapper"
      description="Animate components by wrapping them in AnimatedWrapper"
    >
      <AnimatedWrapperComponent
        animatableProperties={animatableProperties}
        className="min-w-30 absolute"
      >
        <ButtonPrimary
          className="w-full h-full text-center"
          onClick={() => setGrow(!grow)}
        >
          Click me!
        </ButtonPrimary>
      </AnimatedWrapperComponent>
    </StoryItem>
  );
};

AnimatedWrapper.parameters = {
  controls: { hideNoControlsWarning: true }
};
