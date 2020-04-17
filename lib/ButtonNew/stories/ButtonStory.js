import React from 'react';
import { storiesOf } from '@storybook/react';
import { ButtonPrimary } from '../ButtonPrimary';
import StoryItem from '../../../stories/styleguide/StoryItem';

storiesOf('Components', module).add('NewButton', () => (
  <div>
    <StoryItem title="ButtonPrimary" description="The primary button component">
      <ButtonPrimary>Click Me</ButtonPrimary>
    </StoryItem>
  </div>
));
