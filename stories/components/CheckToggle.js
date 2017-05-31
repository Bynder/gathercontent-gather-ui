import React from 'react';
import { storiesOf, action } from '@storybook/react';
import CheckToggle from '../../lib/CheckToggle/';
import StoryItem from '../styleguide/StoryItem';

storiesOf('Components', module)
  .add('Toggle', () => {
    return (
      <div>
      <StoryItem
        title="Check Toggle"
        description="A toggle component that can be used to toggle options on and off.">
        <CheckToggle id="one" />
      </StoryItem>

      <StoryItem
        title="Check Toggle with labels"
        description="The toggle component should provide descriptive labels to indicate its current state.">
        <CheckToggle labelLeft="Label left" id="two" labelRight="Label right" />
      </StoryItem>
      </div>
    );
  })
