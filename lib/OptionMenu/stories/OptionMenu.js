import React from 'react';
import { storiesOf } from '@storybook/react';
import { OptionMenu } from '../OptionMenu';
import StoryItem from '../../../stories/styleguide/StoryItem';

storiesOf('Components', module).add('OptionMenu', () => (
  <StoryItem
    title="OptionMenu"
    description="OptionMenu component for displaying selectable options"
  >
    <OptionMenu />
  </StoryItem>
));
