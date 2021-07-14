import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { ShortcutTrigger } from '../../lib';
import StoryItem from '../styleguide/StoryItem';

storiesOf('Components', module).add('Shortcut Trigger', () => (
  <div>
    <StoryItem
      title="ShortcutTrigger"
      description="A component that triggers a function when a combination of keys are pressed. Try it with ctrl+alt+enter. Nothing will visually appear for this component."
    >
      <ShortcutTrigger
        shortcutKey="Enter"
        onShortcutTrigger={() => alert('You did the shortcut!')}
        withAltKey
        withCtrlKey
      />
    </StoryItem>
  </div>
));
