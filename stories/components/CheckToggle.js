import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
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

      <StoryItem
        title="Small Check Toggle with checked visuals"
        description="The toggle component has a smaller size and changes once checked.">
        <CheckToggle id="three" labelRight="Label right" displaySmall displayChecked checked />
      </StoryItem>
      </div>
    );
  })
