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
      <div className="flex flex-row align-center">
        <ButtonPrimary>Button text</ButtonPrimary>
        <ButtonPrimary loading>Button text</ButtonPrimary>
        <ButtonPrimary loading loaderRight>
          Button text
        </ButtonPrimary>
      </div>
    </StoryItem>
    <StoryItem
      title="ButtonPrimary Small"
      description="The primary button component"
    />
    <div className="flex flex-row align-center">
      <ButtonPrimary size={ButtonPrimary.sizes.sm}>Click Me</ButtonPrimary>
      <ButtonPrimary size={ButtonPrimary.sizes.sm} loading>
        Click Me
      </ButtonPrimary>
      <ButtonPrimary size={ButtonPrimary.sizes.sm} loading loaderRight>
        Click Me
      </ButtonPrimary>
    </div>
    <StoryItem
      title="ButtonPrimary Extra Small"
      description="The primary button component"
    >
      <div className="flex flex-row align-center">
        <ButtonPrimary size={ButtonPrimary.sizes.xs}>Click Me</ButtonPrimary>
        <ButtonPrimary size={ButtonPrimary.sizes.xs} loading>
          Click Me
        </ButtonPrimary>
        <ButtonPrimary size={ButtonPrimary.sizes.xs} loading loaderRight>
          Click Me
        </ButtonPrimary>
      </div>
    </StoryItem>
  </div>
));
