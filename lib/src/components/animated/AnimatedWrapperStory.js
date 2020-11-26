import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { AnimatedWrapper, ButtonPrimary } from 'lib';
import StoryItem from 'stories/styleguide/StoryItem';

function AnimatedStory() {
  const [grow, setGrow] = useState(false);
  const animatableProperties = {
    width: grow ? 'calc(100% - 0px)' : 'calc(100% - 5000px)',
    height: grow ? 'calc(100% - 0px)' : 'calc(100% - 5000px)'
  };

  return (
    <AnimatedWrapper
      animatableProperties={animatableProperties}
      className="min-w-30 absolute"
    >
      <ButtonPrimary
        className="w-full h-full text-center"
        onClick={() => setGrow(!grow)}
      >
        Click me!
      </ButtonPrimary>
    </AnimatedWrapper>
  );
}

storiesOf('Components', module).add('AnimatedWrapper', () => {
  return (
    <StoryItem
      title="AnimatedWrapper"
      description="Animate components by wrapping them in AnimatedWrapper"
    >
      <AnimatedStory />
    </StoryItem>
  );
});
