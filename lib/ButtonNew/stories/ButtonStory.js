import React from 'react';
import { storiesOf } from '@storybook/react';
import { ButtonPrimary } from '../ButtonPrimary';
import StoryItem from '../../../stories/styleguide/StoryItem';

storiesOf('Components', module).add('NewButton', () => (
  <div>
    <StoryItem
      title="ButtonPrimary Medium"
      description="The primary button component"
    >
      <ButtonPrimary>Button text</ButtonPrimary>
    </StoryItem>
    <StoryItem
      title="ButtonPrimary Small"
      description="The primary button component"
    >
      <ButtonPrimary size={ButtonPrimary.sizes.sm}>Click Me</ButtonPrimary>
    </StoryItem>
    <StoryItem
      title="ButtonPrimary Extra Small"
      description="The primary button component"
    >
      <ButtonPrimary size={ButtonPrimary.sizes.xs}>Click Me</ButtonPrimary>
    </StoryItem>
  </div>
));
